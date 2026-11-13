"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["3906"],{2390(e,d,i){i.r(d),i.d(d,{metadata:()=>s,default:()=>u,frontMatter:()=>r,contentTitle:()=>c,toc:()=>h,assets:()=>o,base:()=>t});var s=JSON.parse('{"id":"css/grid","title":"Grid","description":".item {","source":"@site/docs/lenguajes-de-marcas/css/10-grid.mdx","sourceDirName":"css","slug":"/css/grid","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/grid","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Grid"},"sidebar":"marcasSidebar","previous":{"title":"Flexbox","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/flexbox"},"next":{"title":"Fondos y efectos","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/fondos-efectos"}}'),a=i(4848),n=i(8453);i(3432);var l=i(6841);let r={sidebar_position:10,title:"Grid"},c="Grid",o={},t=`:root {
    --red-color: rgb(253, 145, 145);
    --blue-color: rgb(149, 149, 238);
    --dark-color: rgb(68, 68, 68);
    --grey-color: rgb(119, 119, 119);
    --light-color: rgb(221, 221, 221);
}

.item {
    background-color: var(--light-color);
    border: 2px solid var(--grey-color);
    min-height: 50px;
    font-size: 1.2em;
    align-content: center;
    text-align: center;
    font-weight: bold;
    color: var(--dark-color);
}
`,h=[{value:"Qu\xe9 es grid y vocabulario b\xe1sico",id:"qu\xe9-es-grid-y-vocabulario-b\xe1sico",level:2},{value:"Crear un contenedor: <code>grid</code> e <code>inline-grid</code>",id:"crear-un-contenedor-grid-e-inline-grid",level:2},{value:"Definir columnas y filas",id:"definir-columnas-y-filas",level:2},{value:"Separaci\xf3n entre pistas: <code>gap</code>",id:"separaci\xf3n-entre-pistas-gap",level:2},{value:"Colocar elementos por l\xedneas",id:"colocar-elementos-por-l\xedneas",level:2},{value:"\xc1reas con nombre: <code>grid-template-areas</code>",id:"\xe1reas-con-nombre-grid-template-areas",level:2},{value:"Pistas impl\xedcitas: <code>grid-auto-rows</code> y <code>grid-auto-flow</code>",id:"pistas-impl\xedcitas-grid-auto-rows-y-grid-auto-flow",level:2},{value:"Alineaci\xf3n de los elementos dentro de su celda",id:"alineaci\xf3n-de-los-elementos-dentro-de-su-celda",level:2},{value:"Alineaci\xf3n de la cuadr\xedcula en el contenedor",id:"alineaci\xf3n-de-la-cuadr\xedcula-en-el-contenedor",level:2},{value:"Grid adaptable sin media queries",id:"grid-adaptable-sin-media-queries",level:2},{value:"Ejemplos pr\xe1cticos",id:"ejemplos-pr\xe1cticos",level:2},{value:"Centrado perfecto",id:"centrado-perfecto",level:3},{value:"Formulario en dos columnas",id:"formulario-en-dos-columnas",level:3},{value:"Galer\xeda con una imagen destacada",id:"galer\xeda-con-una-imagen-destacada",level:3},{value:"\xbfFlexbox o grid?",id:"flexbox-o-grid",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Propiedades del contenedor",id:"propiedades-del-contenedor",level:3},{value:"Propiedades de los elementos",id:"propiedades-de-los-elementos",level:3}];function x(e){let d={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.header,{children:(0,a.jsx)(d.h1,{id:"grid",children:"Grid"})}),"\n",(0,a.jsxs)(d.p,{children:["CSS Grid es un sistema de maquetaci\xf3n pensado para colocar elementos en una ",(0,a.jsx)(d.strong,{children:"cuadr\xedcula bidimensional"}),": filas y columnas a la vez. Mientras que flexbox reparte los elementos en una sola dimensi\xf3n (una fila o una columna), grid permite definir la estructura completa de una p\xe1gina o de un componente y situar cada elemento en la celda que se desee."]}),"\n",(0,a.jsx)(d.admonition,{type:"tip",children:(0,a.jsx)(d.p,{children:"Los ejemplos de esta p\xe1gina son editables. Cambia los valores del CSS y observa c\xf3mo se modifica el resultado."})}),"\n",(0,a.jsx)(d.h2,{id:"qu\xe9-es-grid-y-vocabulario-b\xe1sico",children:"Qu\xe9 es grid y vocabulario b\xe1sico"}),"\n",(0,a.jsxs)(d.p,{children:["Igual que en flexbox, hay dos piezas: el ",(0,a.jsx)(d.strong,{children:"contenedor grid"})," (el elemento con ",(0,a.jsx)(d.code,{children:"display: grid"}),") y los ",(0,a.jsx)(d.strong,{children:"elementos grid"})," (sus hijos directos). Adem\xe1s, conviene conocer estos t\xe9rminos:"]}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"T\xe9rmino"}),(0,a.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Pista (track)"}),(0,a.jsx)(d.td,{children:"Una fila o una columna de la cuadr\xedcula"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Celda"}),(0,a.jsx)(d.td,{children:"La intersecci\xf3n de una fila y una columna"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"L\xednea"}),(0,a.jsx)(d.td,{children:"Cada una de las l\xedneas que separan las pistas; se numeran desde 1"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"\xc1rea"}),(0,a.jsx)(d.td,{children:"Regi\xf3n rectangular formada por una o m\xe1s celdas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Gap"}),(0,a.jsx)(d.td,{children:"Espacio entre pistas"})]})]})]}),"\n",(0,a.jsxs)(d.p,{children:["Un grid de 3 columnas tiene ",(0,a.jsx)(d.strong,{children:"4 l\xedneas verticales"})," (numeradas del 1 al 4), y uno de 2 filas tiene ",(0,a.jsx)(d.strong,{children:"3 l\xedneas horizontales"}),"."]}),"\n",(0,a.jsxs)(d.h2,{id:"crear-un-contenedor-grid-e-inline-grid",children:["Crear un contenedor: ",(0,a.jsx)(d.code,{children:"grid"})," e ",(0,a.jsx)(d.code,{children:"inline-grid"})]}),"\n",(0,a.jsxs)(d.p,{children:["Al aplicar ",(0,a.jsx)(d.code,{children:"display: grid"})," el elemento se convierte en un contenedor de tipo bloque. Con ",(0,a.jsx)(d.code,{children:"display: inline-grid"})," el contenedor se comporta como un elemento en l\xednea. Por s\xed solo, ",(0,a.jsx)(d.code,{children:"display: grid"})," apila los elementos en una \xfanica columna; hay que definir las columnas para obtener la cuadr\xedcula."]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}),"\n",(0,a.jsx)(d.h2,{id:"definir-columnas-y-filas",children:"Definir columnas y filas"}),"\n",(0,a.jsxs)(d.p,{children:["Las propiedades ",(0,a.jsx)(d.code,{children:"grid-template-columns"})," y ",(0,a.jsx)(d.code,{children:"grid-template-rows"})," definen el tama\xf1o de cada pista, separando los valores por espacios. Se pueden usar distintas unidades:"]}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Valor"}),(0,a.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"100px"}),", ",(0,a.jsx)(d.code,{children:"10rem"})]}),(0,a.jsx)(d.td,{children:"Tama\xf1o fijo"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"25%"})}),(0,a.jsx)(d.td,{children:"Porcentaje del ancho (o alto) del contenedor"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"1fr"})}),(0,a.jsxs)(d.td,{children:["Fracci\xf3n del espacio sobrante: ",(0,a.jsx)(d.code,{children:"2fr"})," recibe el doble que ",(0,a.jsx)(d.code,{children:"1fr"})]})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"auto"})}),(0,a.jsx)(d.td,{children:"Se ajusta al contenido y ocupa el espacio disponible"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"minmax(100px, 1fr)"})}),(0,a.jsx)(d.td,{children:"Tama\xf1o m\xednimo y m\xe1ximo de la pista"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"repeat(3, 1fr)"})}),(0,a.jsxs)(d.td,{children:["Repite un patr\xf3n: equivale a ",(0,a.jsx)(d.code,{children:"1fr 1fr 1fr"})]})]})]})]}),"\n",(0,a.jsxs)(d.p,{children:["La unidad ",(0,a.jsx)(d.code,{children:"fr"})," es la m\xe1s caracter\xedstica de grid: reparte el espacio libre del contenedor de forma proporcional. En este ejemplo la primera columna mide 100px, y las otras dos se reparten el resto en proporci\xf3n 1 a 2:"]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: 80px 50px;
  gap: 10px;
}`}),"\n",(0,a.jsx)(d.p,{children:"Los elementos se colocan autom\xe1ticamente, de izquierda a derecha y de arriba a abajo, seg\xfan se van encontrando en el HTML. Como hay dos filas definidas y seis elementos con tres columnas, todo encaja exactamente."}),"\n",(0,a.jsxs)(d.h2,{id:"separaci\xf3n-entre-pistas-gap",children:["Separaci\xf3n entre pistas: ",(0,a.jsx)(d.code,{children:"gap"})]}),"\n",(0,a.jsxs)(d.p,{children:["Igual que en flexbox, ",(0,a.jsx)(d.code,{children:"column-gap"})," y ",(0,a.jsx)(d.code,{children:"row-gap"})," controlan el espacio entre columnas y entre filas, y ",(0,a.jsx)(d.code,{children:"gap"})," es el atajo de ambas: ",(0,a.jsx)(d.code,{children:"gap: 10px 20px;"})," equivale a ",(0,a.jsx)(d.code,{children:"row-gap: 10px"})," y ",(0,a.jsx)(d.code,{children:"column-gap: 20px"}),"."]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 10px;
}`}),"\n",(0,a.jsx)(d.h2,{id:"colocar-elementos-por-l\xedneas",children:"Colocar elementos por l\xedneas"}),"\n",(0,a.jsxs)(d.p,{children:["Por defecto, cada elemento ocupa una celda. Con ",(0,a.jsx)(d.code,{children:"grid-column"})," y ",(0,a.jsx)(d.code,{children:"grid-row"})," se indica entre qu\xe9 l\xedneas se extiende un elemento, con la sintaxis ",(0,a.jsx)(d.code,{children:"l\xednea-inicial / l\xednea-final"}),". Tambi\xe9n se puede usar ",(0,a.jsx)(d.code,{children:"span"})," para indicar cu\xe1ntas pistas ocupa."]}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Declaraci\xf3n"}),(0,a.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-column: 1 / 3"})}),(0,a.jsx)(d.td,{children:"Desde la l\xednea 1 hasta la 3 (ocupa 2 columnas)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-column: 2 / span 2"})}),(0,a.jsx)(d.td,{children:"Empieza en la l\xednea 2 y ocupa 2 columnas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-column: 1 / -1"})}),(0,a.jsx)(d.td,{children:"De la primera a la \xfaltima l\xednea (toda la fila)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-row: 1 / 3"})}),(0,a.jsx)(d.td,{children:"Ocupa 2 filas"})]})]})]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item a">A</div>
  <div class="item b">B</div>
  <div class="item c">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 60px);
  gap: 8px;
}

.a {
  grid-column: 1 / 3;
  background-color: var(--red-color);
}

.b {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
  background-color: var(--blue-color);
}

.c {
  grid-column: 1 / span 2;
}`}),"\n",(0,a.jsx)(d.admonition,{title:"Pru\xe9balo",type:"note",children:(0,a.jsx)(d.p,{children:"Cambia los n\xfameros de l\xednea de los elementos A, B y C y observa c\xf3mo se recolocan los dem\xe1s."})}),"\n",(0,a.jsxs)(d.h2,{id:"\xe1reas-con-nombre-grid-template-areas",children:["\xc1reas con nombre: ",(0,a.jsx)(d.code,{children:"grid-template-areas"})]}),"\n",(0,a.jsxs)(d.p,{children:["Una forma m\xe1s visual de definir la estructura es dar nombre a las \xe1reas. Con ",(0,a.jsx)(d.code,{children:"grid-template-areas"})," se \xabdibuja\xbb la cuadr\xedcula con texto, una cadena por fila, y despu\xe9s cada elemento indica en qu\xe9 \xe1rea va con ",(0,a.jsx)(d.code,{children:"grid-area"}),". Repetir un nombre hace que el \xe1rea ocupe varias celdas, y un punto (",(0,a.jsx)(d.code,{children:"."}),") deja una celda vac\xeda."]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item cabecera">Cabecera</div>
  <div class="item menu">Men\xfa</div>
  <div class="item principal">Principal</div>
  <div class="item lateral">Lateral</div>
  <div class="item pie">Pie</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 60px 120px 50px;
  grid-template-areas:
      "cabecera cabecera cabecera"
      "menu principal lateral"
      "pie pie pie";
  gap: 10px;
}

.cabecera { grid-area: cabecera; }
.menu { grid-area: menu; }
.principal { grid-area: principal; }
.lateral { grid-area: lateral; }
.pie { grid-area: pie; }`}),"\n",(0,a.jsxs)(d.h2,{id:"pistas-impl\xedcitas-grid-auto-rows-y-grid-auto-flow",children:["Pistas impl\xedcitas: ",(0,a.jsx)(d.code,{children:"grid-auto-rows"})," y ",(0,a.jsx)(d.code,{children:"grid-auto-flow"})]}),"\n",(0,a.jsxs)(d.p,{children:["Si hay m\xe1s elementos de los que caben en la cuadr\xedcula definida, grid crea autom\xe1ticamente filas (o columnas) adicionales, llamadas ",(0,a.jsx)(d.strong,{children:"pistas impl\xedcitas"}),". Su tama\xf1o se controla con ",(0,a.jsx)(d.code,{children:"grid-auto-rows"})," y ",(0,a.jsx)(d.code,{children:"grid-auto-columns"}),". Es muy \xfatil cuando no se sabe cu\xe1ntos elementos habr\xe1."]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 60px;
  gap: 10px;
}`}),"\n",(0,a.jsxs)(d.p,{children:["La propiedad ",(0,a.jsx)(d.code,{children:"grid-auto-flow"})," controla el algoritmo de colocaci\xf3n autom\xe1tica:"]}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Valor"}),(0,a.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"row"})}),(0,a.jsx)(d.td,{children:"Rellena fila por fila (valor por defecto)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"column"})}),(0,a.jsx)(d.td,{children:"Rellena columna por columna"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"dense"})}),(0,a.jsx)(d.td,{children:"Rellena los huecos libres con elementos posteriores, aunque cambie el orden visual"})]})]})]}),"\n",(0,a.jsxs)(d.p,{children:["En este ejemplo, el elemento 4 ocupa 3 columnas y no cabe en el hueco que dej\xf3 el 3, as\xed que queda un espacio vac\xedo. Con ",(0,a.jsx)(d.code,{children:"dense"}),", el elemento 5 sube a rellenar ese hueco:"]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item ancho3">2</div>
  <div class="item ancho2">3</div>
  <div class="item ancho3">4</div>
  <div class="item">5</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 50px;
  grid-auto-flow: dense;
  gap: 8px;
}

.ancho2 { grid-column: span 2; }
.ancho3 { grid-column: span 3; }`}),"\n",(0,a.jsx)(d.admonition,{title:"Pru\xe9balo",type:"note",children:(0,a.jsxs)(d.p,{children:["Elimina la l\xednea ",(0,a.jsx)(d.code,{children:"grid-auto-flow: dense;"})," y f\xedjate en el hueco que aparece."]})}),"\n",(0,a.jsx)(d.h2,{id:"alineaci\xf3n-de-los-elementos-dentro-de-su-celda",children:"Alineaci\xf3n de los elementos dentro de su celda"}),"\n",(0,a.jsxs)(d.p,{children:["Estas propiedades alinean cada elemento dentro de ",(0,a.jsx)(d.strong,{children:"su propia celda"}),":"]}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Propiedad"}),(0,a.jsx)(d.th,{children:"Se aplica en"}),(0,a.jsx)(d.th,{children:"Eje"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"justify-items"})}),(0,a.jsx)(d.td,{children:"Contenedor"}),(0,a.jsx)(d.td,{children:"Horizontal (en l\xednea)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"align-items"})}),(0,a.jsx)(d.td,{children:"Contenedor"}),(0,a.jsx)(d.td,{children:"Vertical (de bloque)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"place-items"})}),(0,a.jsx)(d.td,{children:"Contenedor"}),(0,a.jsxs)(d.td,{children:["Atajo de ",(0,a.jsx)(d.code,{children:"align-items"})," y ",(0,a.jsx)(d.code,{children:"justify-items"})]})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"justify-self"})}),(0,a.jsx)(d.td,{children:"Elemento"}),(0,a.jsx)(d.td,{children:"Horizontal"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"align-self"})}),(0,a.jsx)(d.td,{children:"Elemento"}),(0,a.jsx)(d.td,{children:"Vertical"})]})]})]}),"\n",(0,a.jsxs)(d.p,{children:["Los valores habituales son ",(0,a.jsx)(d.code,{children:"start"}),", ",(0,a.jsx)(d.code,{children:"end"}),", ",(0,a.jsx)(d.code,{children:"center"})," y ",(0,a.jsx)(d.code,{children:"stretch"})," (por defecto, el elemento ocupa toda la celda). Para que la alineaci\xf3n sea visible, los elementos de este ejemplo tienen un tama\xf1o fijo menor que la celda:"]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item self">SELF</div>
</div>`,initialCss:t+`
.item {
  width: 60px;
  min-height: 0;
  height: 40px;
}

.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  justify-items: center;
  align-items: center;
}

.self {
  justify-self: end;
  align-self: start;
}`}),"\n",(0,a.jsx)(d.h2,{id:"alineaci\xf3n-de-la-cuadr\xedcula-en-el-contenedor",children:"Alineaci\xf3n de la cuadr\xedcula en el contenedor"}),"\n",(0,a.jsxs)(d.p,{children:["Cuando la cuadr\xedcula es m\xe1s peque\xf1a que el contenedor (por ejemplo, con columnas de tama\xf1o fijo), se puede controlar d\xf3nde se coloca el conjunto de pistas con ",(0,a.jsx)(d.code,{children:"justify-content"})," (horizontal) y ",(0,a.jsx)(d.code,{children:"align-content"})," (vertical). Admiten los valores ",(0,a.jsx)(d.code,{children:"start"}),", ",(0,a.jsx)(d.code,{children:"end"}),", ",(0,a.jsx)(d.code,{children:"center"}),", ",(0,a.jsx)(d.code,{children:"space-between"}),", ",(0,a.jsx)(d.code,{children:"space-around"})," y ",(0,a.jsx)(d.code,{children:"space-evenly"}),"."]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-template-rows: repeat(2, 60px);
  height: 250px;
  gap: 10px;
  justify-content: space-around;
  align-content: center;
}`}),"\n",(0,a.jsx)(d.h2,{id:"grid-adaptable-sin-media-queries",children:"Grid adaptable sin media queries"}),"\n",(0,a.jsxs)(d.p,{children:["La combinaci\xf3n de ",(0,a.jsx)(d.code,{children:"repeat()"})," con ",(0,a.jsx)(d.code,{children:"auto-fit"})," y ",(0,a.jsx)(d.code,{children:"minmax()"})," crea cuadr\xedculas que se adaptan al ancho disponible sin escribir media queries:"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-css",children:"grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n"})}),"\n",(0,a.jsx)(d.p,{children:"Esto se lee as\xed: \xabcrea tantas columnas como quepan, cada una de al menos 120px, y reparte el espacio sobrante entre ellas a partes iguales\xbb."}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}`}),"\n",(0,a.jsx)(d.admonition,{title:"Pru\xe9balo",type:"note",children:(0,a.jsxs)(d.p,{children:["Redimensiona la ventana del navegador y observa c\xf3mo cambia el n\xfamero de columnas. Tambi\xe9n puedes cambiar ",(0,a.jsx)(d.code,{children:"auto-fit"})," por ",(0,a.jsx)(d.code,{children:"auto-fill"}),": la diferencia se nota cuando hay pocos elementos, ya que ",(0,a.jsx)(d.code,{children:"auto-fill"})," conserva las columnas vac\xedas y ",(0,a.jsx)(d.code,{children:"auto-fit"})," las colapsa para que los elementos ocupen todo el ancho."]})}),"\n",(0,a.jsx)(d.h2,{id:"ejemplos-pr\xe1cticos",children:"Ejemplos pr\xe1cticos"}),"\n",(0,a.jsx)(d.h3,{id:"centrado-perfecto",children:"Centrado perfecto"}),"\n",(0,a.jsx)(d.p,{children:"Con grid, centrar un elemento en ambos ejes requiere solo dos declaraciones:"}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="caja">Centrado</div>
</div>`,initialCss:`.contenedor {
  display: grid;
  place-items: center;
  height: 200px;
  background-color: rgb(149, 149, 238);
}

.caja {
  padding: 20px 40px;
  background-color: white;
  font-weight: bold;
}`}),"\n",(0,a.jsx)(d.h3,{id:"formulario-en-dos-columnas",children:"Formulario en dos columnas"}),"\n",(0,a.jsxs)(d.p,{children:["Una columna ",(0,a.jsx)(d.code,{children:"auto"})," para las etiquetas y otra ",(0,a.jsx)(d.code,{children:"1fr"})," para los campos alinea todos los controles sin necesidad de tablas:"]}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<form class="formulario">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre">

  <label for="email">Correo electr\xf3nico</label>
  <input type="email" id="email">

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" rows="3"></textarea>

  <button type="submit">Enviar</button>
</form>`,initialCss:`.formulario {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 15px;
  align-items: center;
  max-width: 500px;
}

button {
  grid-column: 2;
  justify-self: start;
}`}),"\n",(0,a.jsx)(d.h3,{id:"galer\xeda-con-una-imagen-destacada",children:"Galer\xeda con una imagen destacada"}),"\n",(0,a.jsx)(d.p,{children:"Un elemento puede ocupar varias filas y columnas a la vez. Aqu\xed la primera caja es el doble de grande que las dem\xe1s:"}),"\n",(0,a.jsx)(l.A,{layout:"stacked",initialHtml:`<div class="galeria">
  <div class="foto destacada">1</div>
  <div class="foto">2</div>
  <div class="foto">3</div>
  <div class="foto">4</div>
  <div class="foto">5</div>
  <div class="foto">6</div>
  <div class="foto">7</div>
</div>`,initialCss:`.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 80px;
  gap: 8px;
}

.foto {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: rgb(253, 145, 145);
  border: 2px solid rgb(68, 68, 68);
}

.destacada {
  grid-column: span 2;
  grid-row: span 2;
  background-color: rgb(149, 149, 238);
}`}),"\n",(0,a.jsx)(d.h2,{id:"flexbox-o-grid",children:"\xbfFlexbox o grid?"}),"\n",(0,a.jsx)(d.p,{children:"No son excluyentes: se usan juntos con frecuencia (grid para la estructura general de la p\xe1gina y flexbox para alinear el contenido de cada componente)."}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Criterio"}),(0,a.jsx)(d.th,{children:"Flexbox"}),(0,a.jsx)(d.th,{children:"Grid"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Dimensiones"}),(0,a.jsx)(d.td,{children:"Una (fila o columna)"}),(0,a.jsx)(d.td,{children:"Dos (filas y columnas)"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Enfoque"}),(0,a.jsx)(d.td,{children:"Parte del contenido"}),(0,a.jsx)(d.td,{children:"Parte de la estructura"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Ideal para"}),(0,a.jsx)(d.td,{children:"Barras de navegaci\xf3n, filas de botones, alineaci\xf3n de componentes"}),(0,a.jsx)(d.td,{children:"Layouts de p\xe1gina, galer\xedas, formularios, paneles"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Control del tama\xf1o"}),(0,a.jsx)(d.td,{children:"Los elementos determinan el reparto"}),(0,a.jsx)(d.td,{children:"La cuadr\xedcula determina el tama\xf1o"})]})]})]}),"\n",(0,a.jsx)(d.h2,{id:"resumen",children:"Resumen"}),"\n",(0,a.jsx)(d.h3,{id:"propiedades-del-contenedor",children:"Propiedades del contenedor"}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Propiedad"}),(0,a.jsx)(d.th,{children:"Funci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"display: grid"})," / ",(0,a.jsx)(d.code,{children:"inline-grid"})]}),(0,a.jsx)(d.td,{children:"Crea el contenedor grid"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-template-columns"})}),(0,a.jsx)(d.td,{children:"Define las columnas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-template-rows"})}),(0,a.jsx)(d.td,{children:"Define las filas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-template-areas"})}),(0,a.jsx)(d.td,{children:"Define la estructura mediante \xe1reas con nombre"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"gap"}),", ",(0,a.jsx)(d.code,{children:"column-gap"}),", ",(0,a.jsx)(d.code,{children:"row-gap"})]}),(0,a.jsx)(d.td,{children:"Espacio entre pistas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"grid-auto-rows"}),", ",(0,a.jsx)(d.code,{children:"grid-auto-columns"})]}),(0,a.jsx)(d.td,{children:"Tama\xf1o de las pistas impl\xedcitas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-auto-flow"})}),(0,a.jsx)(d.td,{children:"Algoritmo de colocaci\xf3n autom\xe1tica"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"justify-items"}),", ",(0,a.jsx)(d.code,{children:"align-items"}),", ",(0,a.jsx)(d.code,{children:"place-items"})]}),(0,a.jsx)(d.td,{children:"Alineaci\xf3n de los elementos en su celda"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"justify-content"}),", ",(0,a.jsx)(d.code,{children:"align-content"})]}),(0,a.jsx)(d.td,{children:"Alineaci\xf3n de la cuadr\xedcula dentro del contenedor"})]})]})]}),"\n",(0,a.jsx)(d.h3,{id:"propiedades-de-los-elementos",children:"Propiedades de los elementos"}),"\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Propiedad"}),(0,a.jsx)(d.th,{children:"Funci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-column"})}),(0,a.jsx)(d.td,{children:"L\xedneas de columna entre las que se extiende"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-row"})}),(0,a.jsx)(d.td,{children:"L\xedneas de fila entre las que se extiende"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"grid-area"})}),(0,a.jsx)(d.td,{children:"\xc1rea con nombre, o atajo de las cuatro l\xedneas"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsxs)(d.td,{children:[(0,a.jsx)(d.code,{children:"justify-self"}),", ",(0,a.jsx)(d.code,{children:"align-self"}),", ",(0,a.jsx)(d.code,{children:"place-self"})]}),(0,a.jsx)(d.td,{children:"Alineaci\xf3n propia dentro de su celda"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"order"})}),(0,a.jsx)(d.td,{children:"Orden visual del elemento"})]})]})]})]})}function u(e={}){let{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},944(e,d,i){i.d(d,{N:()=>o});var s=i(4848),a=i(6540),n=i(6069),l=i.n(n),r=i(8848);i(4312),i(1113),i(5723);let c={markup:"HTML",css:"CSS",javascript:"JavaScript"};function o({code:e,onChange:d,language:i}){let[n,x]=(0,a.useState)(!1),u=async()=>{await navigator.clipboard.writeText(e),x(!0),setTimeout(()=>x(!1),1500)};return(0,s.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,s.jsxs)("button",{type:"button",onClick:u,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:n?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[n?(0,s.jsx)(h,{}):(0,s.jsx)(t,{}),n?"Copiado":""]}),(0,s.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:c[i]})]}),(0,s.jsx)(l(),{value:e,onValueChange:d,highlight:e=>(0,r.highlight)(e,r.languages[i],i),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,s.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,s.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function h(){return(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,d,i){i.d(d,{A:()=>c});var s=i(4848),a=i(6540),n=i(944),l=i(2793),r=i(1756);function c({initialHtml:e,initialCss:d="",layout:i="side-by-side",height:o=460}){let[t,h]=(0,a.useState)(e),[x,u]=(0,a.useState)(d),m=(0,a.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${x}</style></head><body>${t}</body></html>`,[t,x]);return(0,s.jsx)(l.u,{layout:i,codePanel:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,s.jsx)(n.N,{code:t,onChange:h,language:"markup"}),(0,s.jsx)(n.N,{code:x,onChange:u,language:"css"})]}),resultPanel:(0,s.jsx)(r.R,{doc:m,title:"Resultado HTML+CSS",height:o})})}},3432(e,d,i){i.d(d,{A:()=>c});var s=i(4848),a=i(6540),n=i(944),l=i(2793),r=i(1756);function c({initialHtml:e,layout:d="side-by-side",height:i=300}){let[o,t]=(0,a.useState)(e),h=(0,a.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body>${o}</body></html>`,[o]);return(0,s.jsx)(l.u,{layout:d,codePanel:(0,s.jsx)(n.N,{code:o,onChange:t,language:"markup"}),resultPanel:(0,s.jsx)(r.R,{doc:h,title:"Resultado HTML",height:i})})}},2793(e,d,i){i.d(d,{u:()=>a});var s=i(4848);function a({layout:e,codePanel:d,resultPanel:i}){return(0,s.jsx)("div",{style:{margin:"2rem 0"},children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,s.jsx)("div",{children:d}),(0,s.jsx)("div",{children:i})]})})}i(6540)},1756(e,d,i){i.d(d,{R:()=>l});var s=i(4848),a=i(6540),n=i(6497);function l({doc:e,title:d,height:i}){let r=(0,a.useRef)(null),[c,o]=(0,a.useState)(!1),t=(0,n.Ay)("/playground-frame.html");return(0,a.useEffect)(()=>{c&&r.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,c]),(0,s.jsx)("iframe",{ref:r,title:d,src:t,onLoad:()=>o(!0),sandbox:"allow-scripts",style:{width:"100%",height:i,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);