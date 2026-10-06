import React, {useEffect, useMemo, useRef, useState} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import {buildModel, isPtr, valueText} from './engine';
import styles from './styles.module.css';

const BASE_DELAY = 2200; // ms por paso a velocidad 1×
const SPEEDS = [0.5, 1, 2];

const ICONS = {
  play: 'M8 5v14l11-7z',
  pause: 'M7 5h4v14H7zM13 5h4v14h-4z',
  prev: 'M6 5h2v14H6zM19 5v14L9 12z',
  next: 'M16 5h2v14h-2zM5 5v14l10-7z',
  reset: 'M12 5V2L7 6.5 12 11V8a4 4 0 1 1-4 4H6a6 6 0 1 0 6-7z',
};

function Icon({name}) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d={ICONS[name]} fill="currentColor" />
    </svg>
  );
}

function Value({v}) {
  return <span className={isPtr(v) ? styles.ptr : undefined}>{valueText(v)}</span>;
}

/** Los textos entre `comillas invertidas` se muestran como código. */
function renderNote(text) {
  return String(text)
    .split(/(`[^`]+`)/g)
    .map((part, k) =>
      part.length > 2 && part.startsWith('`') && part.endsWith('`') ? (
        <code key={k}>{part.slice(1, -1)}</code>
      ) : (
        part
      ),
    );
}

export default function CodeTrace({trace}) {
  const model = useMemo(() => buildModel(trace), [trace]);
  const {lines, states, warnings, hasOutput} = model;
  const last = states.length - 1;

  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const codeRef = useRef(null);
  const consoleRef = useRef(null);

  const lang = trace.language || 'java';
  const html = useMemo(() => {
    const grammar = Prism.languages[lang] || Prism.languages.clike;
    return lines.map((l) => Prism.highlight(l, grammar, lang));
  }, [lines, lang]);

  // Reproducción automática
  useEffect(() => {
    if (!playing) return undefined;
    if (i >= last) {
      setPlaying(false);
      return undefined;
    }
    const t = setTimeout(() => setI((n) => n + 1), BASE_DELAY / speed);
    return () => clearTimeout(t);
  }, [playing, i, speed, last]);

  // Mantiene visible la línea activa dentro del cuadro de código (sin mover la página)
  useEffect(() => {
    const box = codeRef.current;
    const el = box && box.querySelector('[data-active="true"]');
    if (!el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (top < box.scrollTop) box.scrollTop = Math.max(top - 8, 0);
    else if (bottom > box.scrollTop + box.clientHeight) box.scrollTop = bottom - box.clientHeight + 8;
  }, [i]);

  // La consola limita su altura y se desplaza sola a la última línea escrita
  useEffect(() => {
    const c = consoleRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  }, [i]);

  if (last < 0) return <p>CodeTrace: el JSON no tiene pasos.</p>;

  const st = states[i];
  const goTo = (n) => {
    setPlaying(false);
    setI(Math.min(Math.max(n, 0), last));
  };
  const togglePlay = () => {
    if (playing) return setPlaying(false);
    if (i >= last) setI(0);
    return setPlaying(true);
  };
  const onKeyDown = (e) => {
    if (['INPUT', 'SELECT', 'BUTTON'].includes(e.target.tagName)) return;
    const actions = {
      ArrowRight: () => goTo(i + 1),
      ArrowLeft: () => goTo(i - 1),
      Home: () => goTo(0),
      End: () => goTo(last),
      ' ': togglePlay,
    };
    if (actions[e.key]) {
      e.preventDefault();
      actions[e.key]();
    }
  };

  const depthTop = st.stack.length - 1;
  const frames = st.stack.map((f, depth) => ({...f, depth})).reverse();
  const arrays = Object.entries(st.heap);

  return (
    <div className={styles.root} onKeyDown={onKeyDown}>
      {trace.title && <div className={styles.title}>{trace.title}</div>}

      <div className={styles.body}>
        <div className={styles.left}>
          <div
            className={styles.code}
            ref={codeRef}
            tabIndex={0}
            role="group"
            aria-label="Código del programa. Flechas izquierda y derecha para cambiar de paso."
          >
            {html.map((h, n) => {
              const active = st.range && n + 1 >= st.range[0] && n + 1 <= st.range[1];
              return (
                <div
                  key={n}
                  className={styles.line}
                  data-active={active ? 'true' : undefined}
                  aria-current={active ? 'step' : undefined}
                >
                  <span className={styles.gutter} aria-hidden="true">
                    {n + 1}
                  </span>
                  <span className={styles.src} dangerouslySetInnerHTML={{__html: h}} />
                </div>
              );
            })}
          </div>

          <div className={styles.note} role="status" aria-live="polite">
            {st.returned && (
              <span className={styles.badge}>
                {st.returned.value === null ? 'fin del método (void)' : `devuelve ${valueText(st.returned.value)}`}
              </span>
            )}
            {renderNote(st.note)}
          </div>
        </div>

        <div className={styles.right}>
          <section>
            <p className={styles.panelTitle}>Pila</p>
            <div className={styles.frames}>
              {frames.map((f) => {
                const isNew = st.touched.has(`f:${f.depth}`);
                const entries = Object.entries(f.vars);
                return (
                  <div
                    key={`${f.depth}-${f.name}-${isNew ? i : 'x'}`}
                    className={`${styles.frame} ${isNew ? styles.changed : ''}`}
                    data-top={f.depth === depthTop ? 'true' : undefined}
                  >
                    <p className={styles.frameName}>{f.name}</p>
                    {entries.length === 0 ? (
                      <p className={styles.empty}>sin variables</p>
                    ) : (
                      <dl className={styles.vars}>
                        {entries.map(([name, v]) => {
                          const ch = st.touched.has(`v:${f.depth}:${name}`);
                          return (
                            <div
                              key={`${name}-${ch ? i : 'x'}`}
                              className={`${styles.row} ${ch ? styles.changed : ''}`}
                            >
                              <dt>{name}</dt>
                              <dd>
                                <Value v={v} />
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {arrays.length > 0 && (
            <section>
              <p className={styles.panelTitle}>Arrays</p>
              <div className={styles.arrays}>
                {arrays.map(([id, items]) => (
                  <div key={id} className={styles.array}>
                    <span className={styles.arrayId}>#{id}</span>
                    <div className={styles.cells}>
                      {items.map((v, k) => {
                        const ch = st.touched.has(`a:${id}`) || st.touched.has(`c:${id}:${k}`);
                        return (
                          <div key={`${k}-${ch ? i : 'x'}`} className={styles.cell}>
                            <span className={styles.index}>{k}</span>
                            <span className={`${styles.value} ${ch ? styles.changed : ''}`}>
                              <Value v={v} />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hasOutput && (
            <section>
              <p className={styles.panelTitle}>Consola</p>
              <pre className={styles.console} ref={consoleRef}>{st.out || ' '}</pre>
            </section>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.btn} onClick={() => goTo(0)} aria-label="Reiniciar" title="Reiniciar">
          <Icon name="reset" />
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => goTo(i - 1)}
          disabled={i === 0}
          aria-label="Paso anterior"
          title="Paso anterior"
        >
          <Icon name="prev" />
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.primary}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pausar' : 'Reproducir'}
          title={playing ? 'Pausar' : 'Reproducir'}
        >
          <Icon name={playing ? 'pause' : 'play'} />
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => goTo(i + 1)}
          disabled={i === last}
          aria-label="Paso siguiente"
          title="Paso siguiente"
        >
          <Icon name="next" />
        </button>
        <input
          className={styles.slider}
          type="range"
          min={0}
          max={last}
          value={i}
          onChange={(e) => goTo(Number(e.target.value))}
          aria-label="Paso"
          aria-valuetext={`Paso ${i + 1} de ${states.length}`}
        />
        <span className={styles.counter}>
          {i + 1} / {states.length}
        </span>
        <select
          className={styles.speed}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          aria-label="Velocidad"
        >
          {SPEEDS.map((s) => (
            <option key={s} value={s}>
              {String(s).replace('.', ',')}×
            </option>
          ))}
        </select>
      </div>

      {process.env.NODE_ENV !== 'production' && warnings.length > 0 && (
        <div className={styles.warn}>
          <strong>CodeTrace (solo visible en desarrollo):</strong>
          <ul>
            {warnings.map((w, k) => (
              <li key={k}>{w}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
