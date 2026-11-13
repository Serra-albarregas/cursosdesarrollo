import React, { useState } from 'react';

/* ---------- Datos: atributos de la entidad Alumno ---------- */

const ATRIBUTOS = [
  { nombre: 'nombre', tipo: 'texto', java: 'String' },
  { nombre: 'curso', tipo: 'texto', java: 'String' },
  { nombre: 'edad', tipo: 'numero', java: 'Integer' },
  { nombre: 'email', tipo: 'texto', java: 'String' },
  { nombre: 'fechaNacimiento', tipo: 'fecha', java: 'LocalDate' },
  { nombre: 'turno', tipo: 'enum', java: 'Turno' },
];

/* ---------- Datos: acciones (prefijos del nombre del método) ---------- */

const PREFIJOS = [
  { id: 'find', etiqueta: 'find', desc: 'buscar', nombre: 'findBy', retorno: 'List<Alumno>', select: 'select a from Alumno a' },
  { id: 'findFirst', etiqueta: 'findFirst', desc: 'el primero', nombre: 'findFirstBy', retorno: 'Optional<Alumno>', select: 'select a from Alumno a', limite: 1 },
  { id: 'findTop3', etiqueta: 'findTop3', desc: 'los tres primeros', nombre: 'findTop3By', retorno: 'List<Alumno>', select: 'select a from Alumno a', limite: 3 },
  { id: 'findDistinct', etiqueta: 'findDistinct', desc: 'sin repetidos', nombre: 'findDistinctBy', retorno: 'List<Alumno>', select: 'select distinct a from Alumno a' },
  { id: 'count', etiqueta: 'count', desc: 'contar', nombre: 'countBy', retorno: 'long', select: 'select count(a) from Alumno a' },
  { id: 'exists', etiqueta: 'exists', desc: '¿existe alguno?', nombre: 'existsBy', retorno: 'boolean', select: 'select a.id from Alumno a', limite: 1 },
  { id: 'delete', etiqueta: 'delete', desc: 'borrar', nombre: 'deleteBy', retorno: 'long', select: 'select a from Alumno a', transaccional: true },
];

/* ---------- Datos: operadores (palabras clave) ---------- */

const OPERADORES = {
  igual: { sufijo: '', desc: 'igual a', n: 1, jpql: (a, i) => `${a} = ?${i}` },
  not: { sufijo: 'Not', desc: 'distinto de', n: 1, jpql: (a, i) => `${a} <> ?${i}` },
  ignorecase: { sufijo: 'IgnoreCase', desc: 'igual, sin mayúsculas', n: 1, jpql: (a, i) => `upper(${a}) = upper(?${i})` },
  containing: { sufijo: 'Containing', desc: 'contiene', n: 1, jpql: (a, i) => `${a} like %?${i}%` },
  containingic: { sufijo: 'ContainingIgnoreCase', desc: 'contiene, sin mayúsculas', n: 1, jpql: (a, i) => `upper(${a}) like upper(%?${i}%)` },
  startingwith: { sufijo: 'StartingWith', desc: 'empieza por', n: 1, jpql: (a, i) => `${a} like ?${i}%` },
  endingwith: { sufijo: 'EndingWith', desc: 'termina en', n: 1, jpql: (a, i) => `${a} like %?${i}` },
  like: { sufijo: 'Like', desc: 'como (con %)', n: 1, jpql: (a, i) => `${a} like ?${i}` },
  gt: { sufijo: 'GreaterThan', desc: 'mayor que', n: 1, jpql: (a, i) => `${a} > ?${i}` },
  gte: { sufijo: 'GreaterThanEqual', desc: 'mayor o igual que', n: 1, jpql: (a, i) => `${a} >= ?${i}` },
  lt: { sufijo: 'LessThan', desc: 'menor que', n: 1, jpql: (a, i) => `${a} < ?${i}` },
  lte: { sufijo: 'LessThanEqual', desc: 'menor o igual que', n: 1, jpql: (a, i) => `${a} <= ?${i}` },
  before: { sufijo: 'Before', desc: 'anterior a', n: 1, jpql: (a, i) => `${a} < ?${i}` },
  after: { sufijo: 'After', desc: 'posterior a', n: 1, jpql: (a, i) => `${a} > ?${i}` },
  between: { sufijo: 'Between', desc: 'entre (incluidos)', n: 2, jpql: (a, i) => `${a} between ?${i} and ?${i + 1}` },
  in: { sufijo: 'In', desc: 'está en la lista', n: 1, jpql: (a, i) => `${a} in ?${i}` },
  isnull: { sufijo: 'IsNull', desc: 'es nulo', n: 0, jpql: (a) => `${a} is null` },
  isnotnull: { sufijo: 'IsNotNull', desc: 'no es nulo', n: 0, jpql: (a) => `${a} is not null` },
};

const OPS_POR_TIPO = {
  texto: ['igual', 'not', 'ignorecase', 'containing', 'containingic', 'startingwith', 'endingwith', 'like', 'in', 'isnull', 'isnotnull'],
  numero: ['igual', 'not', 'gt', 'gte', 'lt', 'lte', 'between', 'in', 'isnull', 'isnotnull'],
  fecha: ['igual', 'not', 'before', 'after', 'between', 'isnull', 'isnotnull'],
  enum: ['igual', 'not', 'in', 'isnull', 'isnotnull'],
};

/* ---------- Lógica ---------- */

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function parametrosDe(attr, opId) {
  const op = OPERADORES[opId];
  if (op.n === 0) return [];
  if (opId === 'between') {
    const [desde, hasta] = attr.tipo === 'fecha' ? ['Desde', 'Hasta'] : ['Min', 'Max'];
    return [
      { tipo: attr.java, nombre: attr.nombre + desde },
      { tipo: attr.java, nombre: attr.nombre + hasta },
    ];
  }
  if (opId === 'in') return [{ tipo: `List<${attr.java}>`, nombre: attr.nombre + 'Lista' }];
  return [{ tipo: attr.java, nombre: attr.nombre }];
}

export function construir({ prefijo, c1, conector, c2, orden }) {
  const pref = PREFIJOS.find((p) => p.id === prefijo);
  const attr1 = ATRIBUTOS.find((a) => a.nombre === c1.attr);
  if (!pref || !attr1) return null;

  const condiciones = [{ attr: attr1, op: c1.op }];
  const avisos = [];

  if (conector) {
    const attr2 = ATRIBUTOS.find((a) => a.nombre === c2.attr);
    if (attr2) condiciones.push({ attr: attr2, op: c2.op, conector });
    else avisos.push('Has elegido un conector: falta elegir el segundo atributo.');
  }

  // Nombre del método
  let nombre = pref.nombre;
  condiciones.forEach((c) => {
    nombre += (c.conector || '') + cap(c.attr.nombre) + OPERADORES[c.op].sufijo;
  });
  const ordenAttr = ATRIBUTOS.find((a) => a.nombre === orden.attr);
  if (ordenAttr) nombre += 'OrderBy' + cap(ordenAttr.nombre) + (orden.dir || 'Asc');

  // Parámetros (sin nombres repetidos)
  const usados = {};
  const params = [];
  condiciones.forEach((c) => {
    parametrosDe(c.attr, c.op).forEach((p) => {
      usados[p.nombre] = (usados[p.nombre] || 0) + 1;
      const nom = usados[p.nombre] > 1 ? p.nombre + usados[p.nombre] : p.nombre;
      params.push(`${p.tipo} ${nom}`);
    });
  });

  let firma = `${pref.retorno} ${nombre}(${params.join(', ')});`;
  if (pref.transaccional) firma = `@Transactional\n${firma}`;

  // Consulta equivalente (aproximada)
  let indice = 1;
  const trozos = condiciones.map((c, i) => {
    const op = OPERADORES[c.op];
    const texto = op.jpql(`a.${c.attr.nombre}`, indice);
    indice += op.n;
    return (i > 0 ? c.conector.toLowerCase() + ' ' : '') + texto;
  });
  let jpql = `${pref.select}\nwhere ${trozos.join(' ')}`;
  if (ordenAttr) jpql += `\norder by a.${ordenAttr.nombre} ${(orden.dir || 'Asc').toLowerCase()}`;
  if (pref.limite) jpql += `\n-- como máximo ${pref.limite} resultado${pref.limite > 1 ? 's' : ''}`;
  if (pref.id === 'exists') jpql += '\n-- devuelve true si hay alguna fila';
  if (pref.transaccional) jpql += '\n-- cada alumno encontrado se borra a continuación';

  // Notas
  const ops = condiciones.map((c) => c.op);
  if (pref.transaccional) avisos.push('Los métodos deleteBy necesitan una transacción activa: de ahí el @Transactional.');
  if (pref.id === 'findFirst') avisos.push('Devuelve Optional porque puede que no haya ningún resultado.');
  if (pref.id === 'findTop3') avisos.push('Top3 limita el resultado a tres elementos; suele combinarse con OrderBy.');
  if (ops.includes('like')) avisos.push('Con Like debes escribir tú los comodines % en el valor que pasas como parámetro.');
  if (ops.includes('between')) avisos.push('Between incluye los dos extremos.');
  if (ops.includes('in')) avisos.push('In recibe una lista de valores.');
  if (ops.includes('isnull') || ops.includes('isnotnull')) avisos.push('IsNull e IsNotNull no reciben parámetro.');

  return { nombre, firma, jpql, avisos, nCondiciones: condiciones.length };
}

/* ---------- Estilos (usan las variables de Docusaurus) ---------- */

const ESTILOS = `
.cdq { margin: 1.5rem 0; }
.cdq-ayuda { margin: 0 0 .5rem; font-size: .9rem; }
.cdq-wrap { overflow-x: auto; }
.cdq-tabla { display: table; width: 100%; border-collapse: collapse; font-size: .78rem; margin: 0; }
.cdq-tabla th { background: var(--ifm-color-emphasis-200); padding: .35rem .4rem; text-align: left; white-space: nowrap; border: 1px solid var(--ifm-color-emphasis-300); }
.cdq-tabla th small { display: block; font-weight: normal; opacity: .75; }
.cdq-tabla td { padding: 2px; border: 1px solid var(--ifm-color-emphasis-200); vertical-align: top; min-width: 7.5rem; }
.cdq-tabla tbody tr { background: transparent !important; }
.cdq-celda { display: block; width: 100%; text-align: left; border: 1px solid transparent; background: transparent; color: var(--ifm-font-color-base); cursor: pointer; padding: .2rem .35rem; border-radius: 4px; font: inherit; line-height: 1.25; }
.cdq-celda:hover:not(:disabled) { background: var(--ifm-color-emphasis-200); }
.cdq-celda[aria-pressed="true"] { background: var(--ifm-color-primary); color: #fff; }
.cdq-celda:disabled { opacity: .35; cursor: not-allowed; }
.cdq-celda code { background: transparent; border: none; padding: 0; color: inherit; font-size: inherit; font-weight: 600; }
.cdq-celda small { display: block; opacity: .8; font-size: .85em; }
.cdq-salida { margin-top: 1rem; padding: .75rem 1rem; border: 1px solid var(--ifm-color-emphasis-300); border-radius: 8px; background: var(--ifm-background-surface-color); }
.cdq-etiqueta { font-size: .75rem; text-transform: uppercase; letter-spacing: .04em; opacity: .7; margin: .5rem 0 .2rem; }
.cdq-salida pre { margin: 0; }
.cdq-nombre { font-size: 1.05rem; font-weight: 700; word-break: break-all; }
.cdq-botones { margin-top: .6rem; display: flex; gap: .5rem; flex-wrap: wrap; }
.cdq-notas { margin: .6rem 0 0; padding-left: 1.2rem; font-size: .85rem; }
`;

/* ---------- Componente ---------- */

const VACIO = { attr: null, op: null };

export default function ConstructorConsultaDerivada() {
  const [prefijo, setPrefijo] = useState(null);
  const [c1, setC1] = useState(VACIO);
  const [conector, setConector] = useState(null);
  const [c2, setC2] = useState(VACIO);
  const [orden, setOrden] = useState({ attr: null, dir: null });
  const [copiado, setCopiado] = useState(false);

  const reiniciar = () => {
    setPrefijo(null);
    setC1(VACIO);
    setConector(null);
    setC2(VACIO);
    setOrden({ attr: null, dir: null });
  };

  const elegirAtributo = (c, setC, nombre) => {
    if (c.attr === nombre) {
      setC(VACIO);
      return;
    }
    const tipo = ATRIBUTOS.find((a) => a.nombre === nombre).tipo;
    const valido = c.op && OPS_POR_TIPO[tipo].includes(c.op);
    setC({ attr: nombre, op: valido ? c.op : 'igual' });
  };

  const celdasAtributos = (c, setC, deshabilitada) =>
    ATRIBUTOS.map((a) => ({
      clave: a.nombre,
      texto: a.nombre,
      desc: a.java,
      activa: c.attr === a.nombre,
      deshabilitada,
      onClick: () => elegirAtributo(c, setC, a.nombre),
    }));

  const celdasOperadores = (c, setC, deshabilitada) => {
    if (!c.attr) {
      return [{ clave: 'vacio', texto: '← elige un atributo', desc: '', deshabilitada: true }];
    }
    const tipo = ATRIBUTOS.find((a) => a.nombre === c.attr).tipo;
    return OPS_POR_TIPO[tipo].map((id) => ({
      clave: id,
      texto: OPERADORES[id].sufijo || '(igual)',
      desc: OPERADORES[id].desc,
      activa: c.op === id,
      deshabilitada,
      onClick: () => setC({ ...c, op: id }),
    }));
  };

  const sinConector = !conector;

  const columnas = [
    {
      titulo: '1. Acción',
      celdas: PREFIJOS.map((p) => ({
        clave: p.id,
        texto: p.etiqueta,
        desc: p.desc,
        activa: prefijo === p.id,
        onClick: () => setPrefijo(prefijo === p.id ? null : p.id),
      })),
    },
    { titulo: '2. Atributo', celdas: celdasAtributos(c1, setC1, false) },
    { titulo: '3. Condición', celdas: celdasOperadores(c1, setC1, false) },
    {
      titulo: '4. Conector',
      opcional: true,
      celdas: [
        { clave: 'And', texto: 'And', desc: 'y además', activa: conector === 'And', onClick: () => setConector(conector === 'And' ? null : 'And') },
        { clave: 'Or', texto: 'Or', desc: 'o bien', activa: conector === 'Or', onClick: () => setConector(conector === 'Or' ? null : 'Or') },
      ],
    },
    { titulo: '5. Atributo', opcional: true, celdas: celdasAtributos(c2, setC2, sinConector) },
    { titulo: '6. Condición', opcional: true, celdas: celdasOperadores(c2, setC2, sinConector) },
    {
      titulo: '7. Ordenar por',
      opcional: true,
      celdas: ATRIBUTOS.map((a) => ({
        clave: a.nombre,
        texto: a.nombre,
        desc: a.java,
        activa: orden.attr === a.nombre,
        onClick: () =>
          setOrden(orden.attr === a.nombre ? { attr: null, dir: null } : { attr: a.nombre, dir: orden.dir || 'Asc' }),
      })),
    },
    {
      titulo: '8. Sentido',
      opcional: true,
      celdas: [
        { clave: 'Asc', texto: 'Asc', desc: 'ascendente', activa: orden.dir === 'Asc', deshabilitada: !orden.attr, onClick: () => setOrden({ ...orden, dir: 'Asc' }) },
        { clave: 'Desc', texto: 'Desc', desc: 'descendente', activa: orden.dir === 'Desc', deshabilitada: !orden.attr, onClick: () => setOrden({ ...orden, dir: 'Desc' }) },
      ],
    },
  ];

  // Altura fija (la lista de operadores más larga tiene 11) para que la tabla no cambie de tamaño al elegir
  const filas = Math.max(11, ...columnas.map((col) => col.celdas.length));
  const resultado = construir({ prefijo, c1, conector, c2, orden });

  const copiar = () => {
    if (!resultado || typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard
      .writeText(resultado.firma)
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 1500);
      })
      .catch(() => {});
  };

  const falta = [];
  if (!prefijo) falta.push('una acción (columna 1)');
  if (!c1.attr) falta.push('un atributo (columna 2)');

  return (
    <div className="cdq">
      <style>{ESTILOS}</style>
      <p className="cdq-ayuda">
        Haz clic en las celdas para construir el nombre del método. Las columnas 1 y 2 son obligatorias; el
        resto, opcionales. Vuelve a pulsar una celda para quitarla.
      </p>

      <div className="cdq-wrap">
        <table className="cdq-tabla">
          <thead>
            <tr>
              {columnas.map((col) => (
                <th key={col.titulo}>
                  {col.titulo}
                  {col.opcional && <small>opcional</small>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: filas }).map((_, i) => (
              <tr key={i}>
                {columnas.map((col) => {
                  const celda = col.celdas[i];
                  return (
                    <td key={col.titulo}>
                      {celda && (
                        <button
                          type="button"
                          className="cdq-celda"
                          aria-pressed={!!celda.activa}
                          disabled={!!celda.deshabilitada}
                          onClick={celda.onClick}
                        >
                          <code>{celda.texto}</code>
                          {celda.desc && <small>{celda.desc}</small>}
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cdq-salida">
        {resultado ? (
          <>
            <div className="cdq-etiqueta">Nombre del método</div>
            <pre className="cdq-nombre">
              <code>{resultado.nombre}</code>
            </pre>

            <div className="cdq-etiqueta">En la interfaz del repositorio</div>
            <pre>
              <code>{resultado.firma}</code>
            </pre>

            <div className="cdq-etiqueta">Consulta equivalente (aproximada)</div>
            <pre>
              <code>{resultado.jpql}</code>
            </pre>

            {resultado.avisos.length > 0 && (
              <ul className="cdq-notas">
                {resultado.avisos.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p style={{ margin: 0 }}>Elige {falta.join(' y ')} para ver el método.</p>
        )}

        <div className="cdq-botones">
          <button type="button" className="button button--primary button--sm" onClick={copiar} disabled={!resultado}>
            {copiado ? 'Copiado' : 'Copiar método'}
          </button>
          <button type="button" className="button button--secondary button--sm" onClick={reiniciar}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
