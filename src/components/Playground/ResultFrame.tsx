import React, {useEffect, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Script que se reinyecta en CADA render del ejemplo.
 *
 * document.write() reemplaza el documento entero, y con él el listener de
 * "message" que venía en playground-frame.html. Si no lo volviésemos a
 * inyectar, el iframe solo aceptaría el primer render y dejaría de responder
 * a las ediciones del alumno.
 *
 * Se parte la cadena "</script>" para que el navegador no cierre antes de
 * tiempo el <script> del propio documento generado.
 */
const BOOTSTRAP =
  '<scr' +
  'ipt>window.addEventListener("message",function(e){' +
  'if(e.data&&e.data.type==="playground:render"){' +
  'document.open();document.write(e.data.doc);document.close();}});</scr' +
  'ipt>';

type ResultFrameProps = {
  /** Documento HTML completo que se va a renderizar dentro del iframe. */
  doc: string;
  title: string;
  height: number | string;
};

export function ResultFrame({doc, title, height}: ResultFrameProps) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const frameUrl = useBaseUrl('/playground-frame.html');

  useEffect(() => {
    if (!ready) return;
    ref.current?.contentWindow?.postMessage(
      {type: 'playground:render', doc: doc + BOOTSTRAP},
      '*',
    );
  }, [doc, ready]);

  return (
    <iframe
      ref={ref}
      title={title}
      src={frameUrl}
      onLoad={() => setReady(true)}
      sandbox="allow-scripts"
      style={{
        width: '100%',
        height,
        border: '1px solid #ccc',
        backgroundColor: 'white',
        borderRadius: '8px',
        display: 'block',
      }}
    />
  );
}
