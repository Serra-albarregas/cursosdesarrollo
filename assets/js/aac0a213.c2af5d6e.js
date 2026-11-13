"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["914"],{8451(e,n,i){i.r(n),i.d(n,{metadata:()=>s,default:()=>j,frontMatter:()=>a,contentTitle:()=>o,toc:()=>x,assets:()=>c,base:()=>t});var s=JSON.parse('{"id":"css/flexbox","title":"Flexbox","description":".item {","source":"@site/docs/lenguajes-de-marcas/css/09-flexbox.mdx","sourceDirName":"css","slug":"/css/flexbox","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/flexbox","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Flexbox"},"sidebar":"marcasSidebar","previous":{"title":"Posicionamiento","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/posicionamiento"},"next":{"title":"Grid","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/grid"}}'),l=i(4848),d=i(8453);i(3432);var r=i(6841);let a={sidebar_position:9,title:"Flexbox"},o="Flexbox",c={},t=`:root {
    --red-color: rgb(253, 145, 145);
    --blue-color: rgb(149, 149, 238);
    --dark-color: rgb(68, 68, 68);
    --grey-color: rgb(119, 119, 119);
    --light-color: rgb(221, 221, 221);
}

.item {
    background-color: var(--light-color);
    border: 2px solid var(--grey-color);
    height: 50px;
    width: 50px;
    font-size: 1.2em;
    align-content: center;
    text-align: center;
    font-weight: bold;
    color: var(--dark-color);
}
`,x=[{value:"Qu\xe9 es flexbox y vocabulario b\xe1sico",id:"qu\xe9-es-flexbox-y-vocabulario-b\xe1sico",level:2},{value:"Crear un contenedor: <code>flex</code> e <code>inline-flex</code>",id:"crear-un-contenedor-flex-e-inline-flex",level:2},{value:"Direcci\xf3n de los ejes: <code>flex-direction</code>",id:"direcci\xf3n-de-los-ejes-flex-direction",level:2},{value:"Flex multil\xednea: <code>flex-wrap</code>",id:"flex-multil\xednea-flex-wrap",level:2},{value:"Separaci\xf3n entre elementos: <code>gap</code>",id:"separaci\xf3n-entre-elementos-gap",level:2},{value:"Alineaci\xf3n en el eje principal: <code>justify-content</code>",id:"alineaci\xf3n-en-el-eje-principal-justify-content",level:2},{value:"Alineaci\xf3n en el eje transversal: <code>align-items</code> y <code>align-self</code>",id:"alineaci\xf3n-en-el-eje-transversal-align-items-y-align-self",level:2},{value:"Alineaci\xf3n de varias l\xedneas: <code>align-content</code>",id:"alineaci\xf3n-de-varias-l\xedneas-align-content",level:2},{value:"Orden de los elementos: <code>order</code>",id:"orden-de-los-elementos-order",level:2},{value:"Tama\xf1o de los elementos: <code>flex-grow</code>, <code>flex-shrink</code> y <code>flex-basis</code>",id:"tama\xf1o-de-los-elementos-flex-grow-flex-shrink-y-flex-basis",level:2},{value:"<code>flex-grow</code>",id:"flex-grow",level:3},{value:"<code>flex-shrink</code> y <code>flex-basis</code>",id:"flex-shrink-y-flex-basis",level:3},{value:"El atajo <code>flex</code>",id:"el-atajo-flex",level:3},{value:"Ejemplos pr\xe1cticos",id:"ejemplos-pr\xe1cticos",level:2},{value:"Barra de navegaci\xf3n",id:"barra-de-navegaci\xf3n",level:3},{value:"Centrado perfecto",id:"centrado-perfecto",level:3},{value:"Tarjetas que se reorganizan",id:"tarjetas-que-se-reorganizan",level:3},{value:"Resumen",id:"resumen",level:2},{value:"Propiedades del contenedor",id:"propiedades-del-contenedor",level:3},{value:"Propiedades de los elementos",id:"propiedades-de-los-elementos",level:3}];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"flexbox",children:"Flexbox"})}),"\n",(0,l.jsxs)(n.p,{children:["Las cajas flexibles, o ",(0,l.jsx)(n.strong,{children:"flexbox"}),", son un modelo de maquetaci\xf3n de CSS pensado para distribuir y alinear elementos dentro de un contenedor de forma eficiente, incluso cuando el tama\xf1o de los elementos no se conoce de antemano o cambia din\xe1micamente. Es la herramienta habitual para barras de navegaci\xf3n, filas de tarjetas, centrado de contenido y, en general, cualquier dise\xf1o en una sola dimensi\xf3n."]}),"\n",(0,l.jsx)(n.h2,{id:"qu\xe9-es-flexbox-y-vocabulario-b\xe1sico",children:"Qu\xe9 es flexbox y vocabulario b\xe1sico"}),"\n",(0,l.jsxs)(n.p,{children:["Flexbox es un layout ",(0,l.jsx)(n.strong,{children:"unidimensional"}),": coloca los elementos en una fila o en una columna. Antes de su aparici\xf3n, estos dise\xf1os se resolv\xedan con ",(0,l.jsx)(n.code,{children:"float"})," o ",(0,l.jsx)(n.code,{children:"inline-block"}),", t\xe9cnicas pensadas para otros fines y dif\xedciles de controlar."]}),"\n",(0,l.jsx)(n.p,{children:"Para usar flexbox se necesitan dos piezas:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Contenedor flex"}),": el elemento al que se aplica ",(0,l.jsx)(n.code,{children:"display: flex"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Elementos flex"}),": los hijos directos del contenedor. Los nietos no se ven afectados."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Adem\xe1s, todo contenedor flex tiene dos ejes:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Eje"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"}),(0,l.jsx)(n.th,{children:"Por defecto"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Eje principal"}),(0,l.jsx)(n.td,{children:"Direcci\xf3n en la que se colocan los elementos"}),(0,l.jsx)(n.td,{children:"Horizontal (de izquierda a derecha)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Eje transversal"}),(0,l.jsx)(n.td,{children:"Perpendicular al eje principal"}),(0,l.jsx)(n.td,{children:"Vertical (de arriba a abajo)"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Los ",(0,l.jsx)(n.code,{children:"div"})," son elementos de bloque, as\xed que normalmente se apilan uno debajo de otro. Al aplicar ",(0,l.jsx)(n.code,{children:"display: flex"})," al contenedor, sus hijos pasan a colocarse en fila:"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<p>Sin flexbox</p>
<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>Con flexbox</p>
<div class="contenedor flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  padding: 5px;
}

.flex {
  display: flex;
}`}),"\n",(0,l.jsxs)(n.h2,{id:"crear-un-contenedor-flex-e-inline-flex",children:["Crear un contenedor: ",(0,l.jsx)(n.code,{children:"flex"})," e ",(0,l.jsx)(n.code,{children:"inline-flex"})]}),"\n",(0,l.jsxs)(n.p,{children:["El valor ",(0,l.jsx)(n.code,{children:"display: flex"})," convierte el elemento en un contenedor flexible de tipo bloque: ocupa todo el ancho disponible y empieza en una nueva l\xednea. El valor ",(0,l.jsx)(n.code,{children:"display: inline-flex"})," hace lo mismo, pero el contenedor se comporta como un elemento en l\xednea y solo ocupa lo que necesita su contenido."]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="contenedor inline-flex">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="contenedor inline-flex">
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  padding: 5px;
  margin-bottom: 10px;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}`}),"\n",(0,l.jsxs)(n.p,{children:["Observa que los dos contenedores ",(0,l.jsx)(n.code,{children:"inline-flex"})," se colocan uno junto al otro, mientras que el contenedor ",(0,l.jsx)(n.code,{children:"flex"})," ocupa toda la l\xednea."]}),"\n",(0,l.jsxs)(n.h2,{id:"direcci\xf3n-de-los-ejes-flex-direction",children:["Direcci\xf3n de los ejes: ",(0,l.jsx)(n.code,{children:"flex-direction"})]}),"\n",(0,l.jsxs)(n.p,{children:["La propiedad ",(0,l.jsx)(n.code,{children:"flex-direction"})," determina la direcci\xf3n del eje principal y, por tanto, c\xf3mo se colocan los elementos."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"row"})}),(0,l.jsx)(n.td,{children:"Fila, de izquierda a derecha (valor por defecto)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"row-reverse"})}),(0,l.jsx)(n.td,{children:"Fila, de derecha a izquierda"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"column"})}),(0,l.jsx)(n.td,{children:"Columna, de arriba a abajo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"column-reverse"})}),(0,l.jsx)(n.td,{children:"Columna, de abajo a arriba"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Al cambiar la direcci\xf3n tambi\xe9n cambian los ejes: con ",(0,l.jsx)(n.code,{children:"column"}),", el eje principal pasa a ser el vertical y el transversal el horizontal."]}),"\n",(0,l.jsx)(r.A,{initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  flex-direction: row-reverse;
}`}),"\n",(0,l.jsx)(n.admonition,{title:"Pru\xe9balo",type:"note",children:(0,l.jsxs)(n.p,{children:["Cambia ",(0,l.jsx)(n.code,{children:"row-reverse"})," por ",(0,l.jsx)(n.code,{children:"column"})," o ",(0,l.jsx)(n.code,{children:"column-reverse"})," y observa el resultado."]})}),"\n",(0,l.jsxs)(n.h2,{id:"flex-multil\xednea-flex-wrap",children:["Flex multil\xednea: ",(0,l.jsx)(n.code,{children:"flex-wrap"})]}),"\n",(0,l.jsxs)(n.p,{children:["Por defecto, todos los elementos se mantienen en una \xfanica l\xednea y, si no caben, se encogen. La propiedad ",(0,l.jsx)(n.code,{children:"flex-wrap"})," permite que pasen a una nueva l\xednea cuando falta espacio."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"nowrap"})}),(0,l.jsx)(n.td,{children:"Los elementos permanecen en una sola l\xednea (valor por defecto)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"wrap"})}),(0,l.jsx)(n.td,{children:"Los elementos pasan a una nueva l\xednea cuando no caben"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"wrap-reverse"})}),(0,l.jsxs)(n.td,{children:["Igual que ",(0,l.jsx)(n.code,{children:"wrap"}),", pero las l\xedneas se apilan en sentido inverso"]})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"En este ejemplo el contenedor mide 250px, lo que no basta para seis elementos en una fila:"}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  width: 250px;
  flex-wrap: wrap;
}`}),"\n",(0,l.jsx)(n.admonition,{title:"Pru\xe9balo",type:"note",children:(0,l.jsxs)(n.p,{children:["Cambia ",(0,l.jsx)(n.code,{children:"wrap"})," por ",(0,l.jsx)(n.code,{children:"nowrap"})," y ver\xe1s c\xf3mo los elementos se comprimen para caber en una sola l\xednea."]})}),"\n",(0,l.jsxs)(n.p,{children:["Existe un atajo, ",(0,l.jsx)(n.code,{children:"flex-flow"}),", que combina ",(0,l.jsx)(n.code,{children:"flex-direction"})," y ",(0,l.jsx)(n.code,{children:"flex-wrap"})," en una sola declaraci\xf3n. Por ejemplo, ",(0,l.jsx)(n.code,{children:"flex-flow: column wrap;"}),"."]}),"\n",(0,l.jsxs)(n.h2,{id:"separaci\xf3n-entre-elementos-gap",children:["Separaci\xf3n entre elementos: ",(0,l.jsx)(n.code,{children:"gap"})]}),"\n",(0,l.jsxs)(n.p,{children:["Las propiedades ",(0,l.jsx)(n.code,{children:"column-gap"})," y ",(0,l.jsx)(n.code,{children:"row-gap"})," controlan el espacio entre columnas y entre filas, respectivamente. Se aplican en el contenedor y son m\xe1s c\xf3modas y consistentes que a\xf1adir m\xe1rgenes a cada elemento, porque el espacio solo aparece ",(0,l.jsx)(n.strong,{children:"entre"})," elementos y no en los extremos."]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  width: 250px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 10px;
}`}),"\n",(0,l.jsxs)(n.p,{children:["La propiedad ",(0,l.jsx)(n.code,{children:"gap"})," es el atajo de las dos anteriores: ",(0,l.jsx)(n.code,{children:"gap: 10px 20px;"})," equivale a ",(0,l.jsx)(n.code,{children:"row-gap: 10px"})," y ",(0,l.jsx)(n.code,{children:"column-gap: 20px"}),", y con un solo valor se aplica el mismo a ambas."]}),"\n",(0,l.jsxs)(n.h2,{id:"alineaci\xf3n-en-el-eje-principal-justify-content",children:["Alineaci\xf3n en el eje principal: ",(0,l.jsx)(n.code,{children:"justify-content"})]}),"\n",(0,l.jsxs)(n.p,{children:["La propiedad ",(0,l.jsx)(n.code,{children:"justify-content"})," distribuye los elementos a lo largo del ",(0,l.jsx)(n.strong,{children:"eje principal"})," (horizontal por defecto) cuando sobra espacio en el contenedor."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"start"})}),(0,l.jsx)(n.td,{children:"Los elementos se agrupan al principio del contenedor"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"end"})}),(0,l.jsx)(n.td,{children:"Los elementos se agrupan al final del contenedor"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"center"})}),(0,l.jsx)(n.td,{children:"Los elementos se agrupan en el centro"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"space-between"})}),(0,l.jsx)(n.td,{children:"Espacio igual entre elementos; el primero y el \xfaltimo tocan los bordes"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"space-around"})}),(0,l.jsx)(n.td,{children:"Espacio igual a ambos lados de cada elemento"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"space-evenly"})}),(0,l.jsx)(n.td,{children:"Espacio id\xe9ntico entre elementos y en los extremos"})]})]})]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<p>start</p>
<div class="contenedor start">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>end</p>
<div class="contenedor end">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>center</p>
<div class="contenedor center">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>space-between</p>
<div class="contenedor space-between">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>space-around</p>
<div class="contenedor space-around">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<p>space-evenly</p>
<div class="contenedor space-evenly">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
}

p {
  margin: 10px 0 4px;
}

.start { justify-content: start; }
.end { justify-content: end; }
.center { justify-content: center; }
.space-between { justify-content: space-between; }
.space-around { justify-content: space-around; }
.space-evenly { justify-content: space-evenly; }`}),"\n",(0,l.jsxs)(n.h2,{id:"alineaci\xf3n-en-el-eje-transversal-align-items-y-align-self",children:["Alineaci\xf3n en el eje transversal: ",(0,l.jsx)(n.code,{children:"align-items"})," y ",(0,l.jsx)(n.code,{children:"align-self"})]}),"\n",(0,l.jsxs)(n.p,{children:["La propiedad ",(0,l.jsx)(n.code,{children:"align-items"})," alinea los elementos a lo largo del ",(0,l.jsx)(n.strong,{children:"eje transversal"})," (vertical por defecto). Se aplica en el contenedor y afecta a todos los elementos."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"start"})}),(0,l.jsx)(n.td,{children:"Alinea los elementos al inicio del eje transversal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"end"})}),(0,l.jsx)(n.td,{children:"Alinea los elementos al final del eje transversal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"center"})}),(0,l.jsx)(n.td,{children:"Centra los elementos en el eje transversal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"stretch"})}),(0,l.jsx)(n.td,{children:"Estira los elementos para ocupar todo el espacio disponible (valor por defecto)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"baseline"})}),(0,l.jsx)(n.td,{children:"Alinea los elementos seg\xfan la l\xednea base de su texto"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Con ",(0,l.jsx)(n.code,{children:"align-self"})," se puede sobrescribir la alineaci\xf3n de un \xfanico elemento, aplicando la propiedad directamente sobre \xe9l. Admite los mismos valores que ",(0,l.jsx)(n.code,{children:"align-items"}),", adem\xe1s de ",(0,l.jsx)(n.code,{children:"auto"}),", que significa \xabusar lo que diga el contenedor\xbb."]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item self">SELF</div>
</div>`,initialCss:t+`
/* Altura m\xednima en lugar de fija, para que stretch tenga efecto */
.item {
  height: auto;
  min-height: 50px;
}

.contenedor {
  background-color: var(--dark-color);
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: space-around;
}

.self {
  align-self: end;
}`}),"\n",(0,l.jsx)(n.admonition,{title:"Pru\xe9balo",type:"note",children:(0,l.jsxs)(n.p,{children:["Prueba con ",(0,l.jsx)(n.code,{children:"align-items: stretch"})," y f\xedjate en c\xf3mo los elementos ocupan toda la altura del contenedor. Cambia tambi\xe9n el valor de ",(0,l.jsx)(n.code,{children:"align-self"}),"."]})}),"\n",(0,l.jsxs)(n.h2,{id:"alineaci\xf3n-de-varias-l\xedneas-align-content",children:["Alineaci\xf3n de varias l\xedneas: ",(0,l.jsx)(n.code,{children:"align-content"})]}),"\n",(0,l.jsxs)(n.p,{children:["Cuando hay ",(0,l.jsx)(n.code,{children:"flex-wrap: wrap"})," y los elementos ocupan varias l\xedneas, la propiedad ",(0,l.jsx)(n.code,{children:"align-content"})," controla c\xf3mo se reparten ",(0,l.jsx)(n.strong,{children:"las l\xedneas"})," dentro del contenedor a lo largo del eje transversal. Admite los mismos valores que ",(0,l.jsx)(n.code,{children:"justify-content"}),", adem\xe1s de ",(0,l.jsx)(n.code,{children:"stretch"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Es importante distinguirla de ",(0,l.jsx)(n.code,{children:"align-items"}),": esta \xfaltima alinea los elementos dentro de su l\xednea, mientras que ",(0,l.jsx)(n.code,{children:"align-content"})," distribuye las l\xedneas completas. Solo tiene efecto si el contenedor tiene m\xe1s espacio que el ocupado por las l\xedneas y hay m\xe1s de una l\xednea."]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  height: 220px;
  align-content: space-between;
}`}),"\n",(0,l.jsxs)(n.h2,{id:"orden-de-los-elementos-order",children:["Orden de los elementos: ",(0,l.jsx)(n.code,{children:"order"})]}),"\n",(0,l.jsxs)(n.p,{children:["La propiedad ",(0,l.jsx)(n.code,{children:"order"})," se aplica a los ",(0,l.jsx)(n.strong,{children:"elementos"})," y permite cambiar su orden visual sin modificar el HTML. Todos los elementos tienen ",(0,l.jsx)(n.code,{children:"order: 0"})," por defecto. Se colocan de menor a mayor valor y, si dos elementos tienen el mismo valor, se respeta el orden en el que aparecen en el c\xf3digo."]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  column-gap: 20px;
}

.item1 {
  order: 2;
}

.item2 {
  order: 2;
}

.item3 {
  order: 0;
}

.item4 {
  order: 1;
}`}),"\n",(0,l.jsxs)(n.p,{children:["El resultado visual es 3, 4, 1, 2. Los elementos 1 y 2 comparten el mismo ",(0,l.jsx)(n.code,{children:"order"}),", as\xed que mantienen su orden relativo del HTML."]}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"order"})," solo cambia lo que se ve, no el orden del documento. Los lectores de pantalla y la navegaci\xf3n con el teclado siguen el orden del HTML, as\xed que conviene no abusar de esta propiedad en contenido que deba leerse en secuencia."]})}),"\n",(0,l.jsxs)(n.h2,{id:"tama\xf1o-de-los-elementos-flex-grow-flex-shrink-y-flex-basis",children:["Tama\xf1o de los elementos: ",(0,l.jsx)(n.code,{children:"flex-grow"}),", ",(0,l.jsx)(n.code,{children:"flex-shrink"})," y ",(0,l.jsx)(n.code,{children:"flex-basis"})]}),"\n",(0,l.jsx)(n.p,{children:"Estas tres propiedades se aplican a los elementos y controlan c\xf3mo se reparte el espacio:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propiedad"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"}),(0,l.jsx)(n.th,{children:"Valor por defecto"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-grow"})}),(0,l.jsxs)(n.td,{children:["Cu\xe1nto crece el elemento para repartirse el espacio ",(0,l.jsx)(n.strong,{children:"sobrante"})]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"0"})," (no crece)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-shrink"})}),(0,l.jsxs)(n.td,{children:["Cu\xe1nto se encoge el elemento cuando ",(0,l.jsx)(n.strong,{children:"falta"})," espacio"]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"1"})," (se encoge)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-basis"})}),(0,l.jsx)(n.td,{children:"Tama\xf1o inicial del elemento en el eje principal, antes de repartir el espacio"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"auto"})})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"flex-grow",children:(0,l.jsx)(n.code,{children:"flex-grow"})}),"\n",(0,l.jsxs)(n.p,{children:["El espacio sobrante se reparte proporcionalmente al valor de ",(0,l.jsx)(n.code,{children:"flex-grow"})," de cada elemento. En el ejemplo, el segundo elemento recibe una parte del espacio y el tercero recibe dos:"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item item1">grow 0</div>
  <div class="item item2">grow 1</div>
  <div class="item item3">grow 2</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
}

.item1 {
  flex-grow: 0;
}

.item2 {
  flex-grow: 1;
}

.item3 {
  flex-grow: 2;
}`}),"\n",(0,l.jsxs)(n.h3,{id:"flex-shrink-y-flex-basis",children:[(0,l.jsx)(n.code,{children:"flex-shrink"})," y ",(0,l.jsx)(n.code,{children:"flex-basis"})]}),"\n",(0,l.jsxs)(n.p,{children:["Aqu\xed el contenedor mide 300px y cada elemento tiene una base de 150px, as\xed que no caben. Los elementos se encogen, salvo el que tiene ",(0,l.jsx)(n.code,{children:"flex-shrink: 0"}),":"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item no-encoge">3</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  width: 300px;
}

.item {
  flex-basis: 150px;
}

.no-encoge {
  flex-shrink: 0;
}`}),"\n",(0,l.jsxs)(n.h3,{id:"el-atajo-flex",children:["El atajo ",(0,l.jsx)(n.code,{children:"flex"})]}),"\n",(0,l.jsxs)(n.p,{children:["Lo habitual es escribir las tres propiedades en una sola, en este orden: ",(0,l.jsx)(n.code,{children:"flex: grow shrink basis"}),". Algunos valores muy usados:"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Equivale a"}),(0,l.jsx)(n.th,{children:"Efecto"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex: 1"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"1 1 0"})}),(0,l.jsx)(n.td,{children:"El elemento crece y se encoge, repartiendo el espacio a partes iguales"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex: 2"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"2 1 0"})}),(0,l.jsxs)(n.td,{children:["Recibe el doble de espacio que un elemento con ",(0,l.jsx)(n.code,{children:"flex: 1"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex: none"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"0 0 auto"})}),(0,l.jsx)(n.td,{children:"Mantiene su tama\xf1o y no crece ni se encoge"})]})]})]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item doble">3 (doble)</div>
</div>`,initialCss:t+`
.contenedor {
  background-color: var(--dark-color);
  display: flex;
  column-gap: 10px;
}

.item {
  flex: 1;
}

.doble {
  flex: 2;
}`}),"\n",(0,l.jsx)(n.h2,{id:"ejemplos-pr\xe1cticos",children:"Ejemplos pr\xe1cticos"}),"\n",(0,l.jsx)(n.h3,{id:"barra-de-navegaci\xf3n",children:"Barra de navegaci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["Un margen autom\xe1tico en un elemento flex absorbe todo el espacio libre. Con ",(0,l.jsx)(n.code,{children:"margin-right: auto"})," en el logo, el resto de enlaces se empujan hacia la derecha:"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<nav class="barra">
  <span class="logo">Mi web</span>
  <a href="#">Inicio</a>
  <a href="#">Cursos</a>
  <a href="#">Contacto</a>
</nav>`,initialCss:`.barra {
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
}

.barra a {
  color: white;
  text-decoration: none;
}

.logo {
  margin-right: auto;
  font-weight: bold;
  font-size: 1.3em;
  color: white;
}`}),"\n",(0,l.jsx)(n.h3,{id:"centrado-perfecto",children:"Centrado perfecto"}),"\n",(0,l.jsxs)(n.p,{children:["Combinando ",(0,l.jsx)(n.code,{children:"justify-content"})," y ",(0,l.jsx)(n.code,{children:"align-items"})," con el valor ",(0,l.jsx)(n.code,{children:"center"})," se centra un elemento tanto horizontal como verticalmente, algo que hist\xf3ricamente era muy complicado en CSS:"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="contenedor">
  <div class="caja">Centrado</div>
</div>`,initialCss:`.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgb(149, 149, 238);
}

.caja {
  padding: 20px 40px;
  background-color: white;
  font-weight: bold;
}`}),"\n",(0,l.jsx)(n.h3,{id:"tarjetas-que-se-reorganizan",children:"Tarjetas que se reorganizan"}),"\n",(0,l.jsxs)(n.p,{children:["Con ",(0,l.jsx)(n.code,{children:"flex-wrap"}),", ",(0,l.jsx)(n.code,{children:"gap"})," y una base m\xednima en ",(0,l.jsx)(n.code,{children:"flex"}),", las tarjetas se adaptan al ancho disponible sin necesidad de reglas adicionales. Cada tarjeta intenta medir al menos 150px, crece para repartir el espacio sobrante y pasa a la l\xednea siguiente cuando ya no cabe:"]}),"\n",(0,l.jsx)(r.A,{layout:"stacked",initialHtml:`<div class="tarjetas">
  <div class="tarjeta">Tarjeta 1</div>
  <div class="tarjeta">Tarjeta 2</div>
  <div class="tarjeta">Tarjeta 3</div>
  <div class="tarjeta">Tarjeta 4</div>
  <div class="tarjeta">Tarjeta 5</div>
</div>`,initialCss:`.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tarjeta {
  flex: 1 1 150px;
  padding: 20px;
  text-align: center;
  background-color: rgb(253, 145, 145);
  border: 2px solid rgb(68, 68, 68);
}`}),"\n",(0,l.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,l.jsx)(n.h3,{id:"propiedades-del-contenedor",children:"Propiedades del contenedor"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propiedad"}),(0,l.jsx)(n.th,{children:"Funci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"display: flex"})," / ",(0,l.jsx)(n.code,{children:"inline-flex"})]}),(0,l.jsx)(n.td,{children:"Crea el contenedor flex"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-direction"})}),(0,l.jsx)(n.td,{children:"Direcci\xf3n del eje principal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-wrap"})}),(0,l.jsx)(n.td,{children:"Permite o impide que los elementos pasen a otra l\xednea"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-flow"})}),(0,l.jsxs)(n.td,{children:["Atajo de ",(0,l.jsx)(n.code,{children:"flex-direction"})," y ",(0,l.jsx)(n.code,{children:"flex-wrap"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"gap"}),", ",(0,l.jsx)(n.code,{children:"column-gap"}),", ",(0,l.jsx)(n.code,{children:"row-gap"})]}),(0,l.jsx)(n.td,{children:"Espacio entre elementos"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"justify-content"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n en el eje principal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"align-items"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n en el eje transversal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"align-content"})}),(0,l.jsx)(n.td,{children:"Distribuci\xf3n de varias l\xedneas en el eje transversal"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"propiedades-de-los-elementos",children:"Propiedades de los elementos"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propiedad"}),(0,l.jsx)(n.th,{children:"Funci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"order"})}),(0,l.jsx)(n.td,{children:"Orden visual del elemento"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-grow"})}),(0,l.jsx)(n.td,{children:"Capacidad de crecer para ocupar espacio sobrante"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-shrink"})}),(0,l.jsx)(n.td,{children:"Capacidad de encogerse cuando falta espacio"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex-basis"})}),(0,l.jsx)(n.td,{children:"Tama\xf1o inicial en el eje principal"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flex"})}),(0,l.jsxs)(n.td,{children:["Atajo de ",(0,l.jsx)(n.code,{children:"flex-grow"}),", ",(0,l.jsx)(n.code,{children:"flex-shrink"})," y ",(0,l.jsx)(n.code,{children:"flex-basis"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"align-self"})}),(0,l.jsx)(n.td,{children:"Alineaci\xf3n propia en el eje transversal"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},944(e,n,i){i.d(n,{N:()=>c});var s=i(4848),l=i(6540),d=i(6069),r=i.n(d),a=i(8848);i(4312),i(1113),i(5723);let o={markup:"HTML",css:"CSS",javascript:"JavaScript"};function c({code:e,onChange:n,language:i}){let[d,h]=(0,l.useState)(!1),j=async()=>{await navigator.clipboard.writeText(e),h(!0),setTimeout(()=>h(!1),1500)};return(0,s.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,s.jsxs)("button",{type:"button",onClick:j,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:d?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[d?(0,s.jsx)(x,{}):(0,s.jsx)(t,{}),d?"Copiado":""]}),(0,s.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:o[i]})]}),(0,s.jsx)(r(),{value:e,onValueChange:n,highlight:e=>(0,a.highlight)(e,a.languages[i],i),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,s.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,s.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function x(){return(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,n,i){i.d(n,{A:()=>o});var s=i(4848),l=i(6540),d=i(944),r=i(2793),a=i(1756);function o({initialHtml:e,initialCss:n="",layout:i="side-by-side",height:c=460}){let[t,x]=(0,l.useState)(e),[h,j]=(0,l.useState)(n),p=(0,l.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${h}</style></head><body>${t}</body></html>`,[t,h]);return(0,s.jsx)(r.u,{layout:i,codePanel:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,s.jsx)(d.N,{code:t,onChange:x,language:"markup"}),(0,s.jsx)(d.N,{code:h,onChange:j,language:"css"})]}),resultPanel:(0,s.jsx)(a.R,{doc:p,title:"Resultado HTML+CSS",height:c})})}},3432(e,n,i){i.d(n,{A:()=>o});var s=i(4848),l=i(6540),d=i(944),r=i(2793),a=i(1756);function o({initialHtml:e,layout:n="side-by-side",height:i=300}){let[c,t]=(0,l.useState)(e),x=(0,l.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body>${c}</body></html>`,[c]);return(0,s.jsx)(r.u,{layout:n,codePanel:(0,s.jsx)(d.N,{code:c,onChange:t,language:"markup"}),resultPanel:(0,s.jsx)(a.R,{doc:x,title:"Resultado HTML",height:i})})}},2793(e,n,i){i.d(n,{u:()=>l});var s=i(4848);function l({layout:e,codePanel:n,resultPanel:i}){return(0,s.jsx)("div",{style:{margin:"2rem 0"},children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,s.jsx)("div",{children:n}),(0,s.jsx)("div",{children:i})]})})}i(6540)},1756(e,n,i){i.d(n,{R:()=>r});var s=i(4848),l=i(6540),d=i(6497);function r({doc:e,title:n,height:i}){let a=(0,l.useRef)(null),[o,c]=(0,l.useState)(!1),t=(0,d.Ay)("/playground-frame.html");return(0,l.useEffect)(()=>{o&&a.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,o]),(0,s.jsx)("iframe",{ref:a,title:n,src:t,onLoad:()=>c(!0),sandbox:"allow-scripts",style:{width:"100%",height:i,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);