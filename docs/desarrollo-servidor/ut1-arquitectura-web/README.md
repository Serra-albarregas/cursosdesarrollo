# UT1 · Arquitectura web y fundamentos — instrucciones de integración

Contenido listo para Docusaurus. Copia la carpeta completa dentro de `docs/`:

```
docs/
└── ut1-arquitectura-web/
    ├── _category_.json
    ├── index.mdx
    ├── 01-arquitectura-aplicaciones-web.mdx
    ├── 02-cliente-vs-servidor.mdx
    ├── 03-protocolo-http.mdx
    ├── 04-metodos-http.mdx
    ├── 05-cabeceras-http.mdx
    ├── 06-codigos-de-estado.mdx
    ├── 07-estado-cookies-sesiones.mdx
    ├── 08-servidores-y-contenedores.mdx
    ├── 09-programacion-orientada-a-aspectos.mdx
    └── 10-practicas-y-evaluacion.mdx
```

## 1. Diagramas Mermaid

Varios archivos usan bloques de código `mermaid`. Hay que habilitar el tema:

```bash
npm install --save @docusaurus/theme-mermaid
```

```js
// docusaurus.config.js
export default {
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  // ...
};
```

## 2. Tabs

Los capítulos 2, 4, 7 y 9 importan `@theme/Tabs` y `@theme/TabItem`. Vienen incluidos en
`@docusaurus/preset-classic`, no hace falta instalar nada.

## 3. Sidebar

Con `sidebars.js` en modo autogenerado no hay que tocar nada: `_category_.json` define la etiqueta y
la posición. Si tu `sidebars.js` es manual, añade:

```js
{
  type: 'category',
  label: 'UT1 - Arquitectura web y fundamentos',
  link: { type: 'doc', id: 'ut1-arquitectura-web/index' },
  items: [
    'ut1-arquitectura-web/arquitectura-aplicaciones-web',
    'ut1-arquitectura-web/cliente-vs-servidor',
    'ut1-arquitectura-web/protocolo-http',
    'ut1-arquitectura-web/metodos-http',
    'ut1-arquitectura-web/cabeceras-http',
    'ut1-arquitectura-web/codigos-de-estado',
    'ut1-arquitectura-web/estado-cookies-sesiones',
    'ut1-arquitectura-web/servidores-y-contenedores',
    'ut1-arquitectura-web/programacion-orientada-a-aspectos',
    'ut1-arquitectura-web/practicas-y-evaluacion',
  ],
}
```

## 4. Notas de sintaxis MDX

- MDX v3 interpreta `<` y `{` como JSX. Todo el contenido con esos caracteres está dentro de
  bloques de código o comillas invertidas; si editas texto, respétalo.
- El capítulo 10 usa `<details>` / `<summary>` nativos para ocultar las respuestas.

## 5. Ideas de personalización

- Sustituye `es.centro` y los ejemplos de alumnado por el dominio de tu proyecto de aula.
- Ajusta la temporalización del `index.mdx` a tus horas semanales.
- Los códigos de actividad (A1.1, A9.5…) están pensados para referenciarlos desde la rúbrica.
