/**
 * Motor de CodeTrace: convierte la lista de pasos de un JSON en una secuencia
 * de estados (pila, arrays, consola). No depende de React.
 *
 * FORMATO DEL JSON
 * {
 *   "title":    "Texto opcional que aparece arriba",
 *   "language": "java",                       // opcional, por defecto java
 *   "entry":    "main",                       // opcional, nombre del primer marco
 *   "code":     ["línea 1", "línea 2"],       // array de líneas (o un string con \n)
 *   "steps":    [ ...pasos... ]
 * }
 *
 * CADA PASO (todos los campos son opcionales salvo "line")
 *   line     número de línea (1 = primera) o [desde, hasta] para un rango
 *   note     explicación breve; `así` se muestra como código
 *   set      { "x": 5 }              declara o asigna una variable del marco actual
 *            { "v[2]": 7 }           asigna una posición de un array (también "m[1][0]")
 *            { "v": [1, 2, 3] }      un array crea un array nuevo en memoria (#1, #2…)
 *            { "w": {"ref": "v"} }   w apunta al MISMO array que v (referencia)
 *   unset    ["i"]                   la variable deja de existir (fin de un bloque)
 *   call     { "name": "suma(2,3)", "args": { "a": 2, "b": 3 } }   apila un marco nuevo
 *            en args también vale {"ref": "v"} para pasar un array por referencia
 *   return   6                       desapila el marco actual y muestra el valor devuelto
 *            null                    método void
 *            después, en "set", {"ref": "$return"} permite recoger un array devuelto
 *   print    "texto"                 escribe en consola sin salto de línea
 *   println  "texto"                 escribe en consola con salto de línea
 *
 * VALORES
 *   números, true/false, "cadenas" (se muestran con comillas), null
 *   {"raw": "'a'"} o {"raw": "2.0"} se muestra tal cual (para char, doubles enteros…)
 *
 * Orden de aplicación dentro de un paso: return, call, unset, set, print, println.
 * Los arrays que dejan de ser accesibles desde la pila desaparecen solos.
 */

const clone = (x) => JSON.parse(JSON.stringify(x));
const isObj = (v) => v !== null && typeof v === 'object';
export const isPtr = (v) => isObj(v) && 'ptr' in v;
const isAlias = (v) => isObj(v) && !Array.isArray(v) && 'ref' in v;

export function normalizeCode(code) {
  const lines = Array.isArray(code) ? code.slice() : String(code ?? '').split('\n');
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  return lines;
}

/** Texto con el que se muestra un valor guardado. */
export function valueText(v) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string') return JSON.stringify(v);
  if (isObj(v)) {
    if ('ptr' in v) return `→ #${v.ptr}`;
    if ('raw' in v) return String(v.raw);
    return JSON.stringify(v);
  }
  return String(v);
}

function parseKey(key) {
  const m = /^([A-Za-z_$][\w$]*)((?:\[\d+\])*)$/.exec(key);
  if (!m) return null;
  return { name: m[1], idx: [...m[2].matchAll(/\[(\d+)\]/g)].map((x) => Number(x[1])) };
}

/** Convierte un valor del JSON en valor guardado (los arrays pasan a la memoria). */
function store(ctx, value, frame) {
  if (Array.isArray(value)) {
    const id = ctx.s.nextId++;
    ctx.s.heap[id] = value.map((v) => store(ctx, v, frame));
    ctx.touched.add(`a:${id}`);
    return { ptr: id };
  }
  if (isAlias(value)) {
    const target = value.ref === '$return' ? ctx.lastReturn : frame && frame.vars[value.ref];
    if (!isPtr(target)) throw new Error(`"${value.ref}" no apunta a ningún array`);
    return { ptr: target.ptr };
  }
  return value;
}

function applyStep(prev, step, index, nLines) {
  const s = clone({ stack: prev.stack, heap: prev.heap, nextId: prev.nextId, out: prev.out });
  const ctx = { s, touched: new Set(), lastReturn: undefined };
  const warnings = [];
  const warn = (msg) => warnings.push(`Paso ${index + 1}: ${msg}`);
  const top = () => s.stack[s.stack.length - 1];
  const run = (fn) => {
    try {
      fn();
    } catch (e) {
      warn(e.message);
    }
  };
  let returned;

  if ('return' in step) {
    run(() => {
      if (s.stack.length < 2) throw new Error('"return" sin función a la que volver');
      ctx.lastReturn = store(ctx, step.return, top());
      returned = { value: ctx.lastReturn };
      s.stack.pop();
    });
  }

  if (step.call) {
    run(() => {
      const call = typeof step.call === 'string' ? { name: step.call } : step.call;
      const caller = top();
      const vars = {};
      for (const [k, v] of Object.entries(call.args || {})) vars[k] = store(ctx, v, caller);
      s.stack.push({ name: call.name, vars });
      ctx.touched.add(`f:${s.stack.length - 1}`);
    });
  }

  for (const name of [].concat(step.unset || [])) delete top().vars[name];

  for (const [key, value] of Object.entries(step.set || {})) {
    run(() => {
      const p = parseKey(key);
      if (!p) throw new Error(`clave no válida "${key}"`);
      const frame = top();
      const depth = s.stack.length - 1;
      if (p.idx.length === 0) {
        frame.vars[p.name] = store(ctx, value, frame);
        ctx.touched.add(`v:${depth}:${p.name}`);
        return;
      }
      let ptr = frame.vars[p.name];
      if (!isPtr(ptr)) throw new Error(`"${p.name}" no es un array`);
      for (let k = 0; k < p.idx.length - 1; k++) {
        ptr = s.heap[ptr.ptr]?.[p.idx[k]];
        if (!isPtr(ptr)) throw new Error(`"${key}": la posición [${p.idx[k]}] no es un array`);
      }
      const arr = s.heap[ptr.ptr];
      const at = p.idx[p.idx.length - 1];
      if (!arr || at >= arr.length) throw new Error(`índice ${at} fuera de rango en "${key}"`);
      arr[at] = store(ctx, value, frame);
      ctx.touched.add(`c:${ptr.ptr}:${at}`);
    });
  }

  if (step.print != null) s.out += String(step.print);
  if (step.println != null) s.out += `${step.println}\n`;

  // Recolector: se eliminan los arrays que ya no son alcanzables desde la pila.
  const live = new Set();
  const mark = (v) => {
    if (isPtr(v) && !live.has(v.ptr)) {
      live.add(v.ptr);
      (s.heap[v.ptr] || []).forEach(mark);
    }
  };
  s.stack.forEach((f) => Object.values(f.vars).forEach(mark));
  mark(ctx.lastReturn);
  for (const id of Object.keys(s.heap)) if (!live.has(Number(id))) delete s.heap[id];

  let range = null;
  if (step.line != null) {
    range = Array.isArray(step.line) ? step.line : [step.line, step.line];
    if (range[0] < 1 || range[1] > nLines) warn(`la línea ${step.line} no existe en el código`);
  } else {
    warn('falta el campo "line"');
  }

  return {
    stack: s.stack,
    heap: s.heap,
    nextId: s.nextId,
    out: s.out,
    touched: ctx.touched,
    returned,
    range,
    note: step.note || '',
    warnings,
  };
}

/** Construye todos los estados del recorrido a partir del JSON. */
export function buildModel(trace) {
  const lines = normalizeCode(trace.code);
  let state = { stack: [{ name: trace.entry || 'main', vars: {} }], heap: {}, nextId: 1, out: '' };
  const states = [];
  const warnings = [];
  (trace.steps || []).forEach((step, i) => {
    state = applyStep(state, step, i, lines.length);
    states.push(state);
    warnings.push(...state.warnings);
  });
  return { lines, states, warnings, hasOutput: states.some((st) => st.out !== '') };
}
