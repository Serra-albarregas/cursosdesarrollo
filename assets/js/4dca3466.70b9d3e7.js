"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["2755"],{7754(e,o,d){d.r(o),d.d(o,{metadata:()=>n,default:()=>p,frontMatter:()=>s,contentTitle:()=>l,toc:()=>t,assets:()=>c});var n=JSON.parse('{"id":"css/modelo-caja","title":"El modelo de caja","description":"En CSS, todo elemento es una caja rectangular, aunque visualmente no lo parezca. Entender c\xf3mo se compone esa caja es la base para controlar tama\xf1os y espaciados sin sorpresas.","source":"@site/docs/lenguajes-de-marcas/css/07-modelo-caja.mdx","sourceDirName":"css","slug":"/css/modelo-caja","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/modelo-caja","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"El modelo de caja"},"sidebar":"marcasSidebar","previous":{"title":"Filtros","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/filtros"}}'),a=d(4848),i=d(8453),r=d(6841);let s={sidebar_position:7,title:"El modelo de caja"},l,c={},t=[{value:"Las cuatro capas de una caja",id:"las-cuatro-capas-de-una-caja",level:2},{value:"<code>box-sizing</code>",id:"box-sizing",level:2},{value:"<code>margin</code>",id:"margin",level:2},{value:"Shorthand",id:"shorthand",level:3},{value:"Centrar con <code>margin: auto</code>",id:"centrar-con-margin-auto",level:3},{value:"Colapso de m\xe1rgenes",id:"colapso-de-m\xe1rgenes",level:3},{value:"<code>padding</code>",id:"padding",level:2},{value:"<code>border</code>",id:"border",level:2},{value:"<code>display: block</code>, <code>inline</code> e <code>inline-block</code>",id:"display-block-inline-e-inline-block",level:2},{value:"<code>outline</code> frente a <code>border</code>",id:"outline-frente-a-border",level:2}];function h(e){let o={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"En CSS, todo elemento es una caja rectangular, aunque visualmente no lo parezca. Entender c\xf3mo se compone esa caja es la base para controlar tama\xf1os y espaciados sin sorpresas."}),"\n",(0,a.jsx)(o.h2,{id:"las-cuatro-capas-de-una-caja",children:"Las cuatro capas de una caja"}),"\n",(0,a.jsx)(o.p,{children:"De dentro hacia fuera, una caja se compone de:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.code,{children:"content"})}),": el propio contenido (texto, una imagen...). Su tama\xf1o lo controlan ",(0,a.jsx)(o.code,{children:"width"})," y ",(0,a.jsx)(o.code,{children:"height"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.code,{children:"padding"})}),': el espacio entre el contenido y el borde. Forma parte del "interior" de la caja; si la caja tiene color de fondo, el ',(0,a.jsx)(o.code,{children:"padding"})," tambi\xe9n se pinta con ese color."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.code,{children:"border"})}),": la l\xednea que rodea el ",(0,a.jsx)(o.code,{children:"padding"})," y el ",(0,a.jsx)(o.code,{children:"content"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.code,{children:"margin"})}),": el espacio entre esta caja y las cajas vecinas. Es transparente: nunca se pinta con el fondo del elemento."]}),"\n"]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="caja-margin">
  margin
  <div class="caja-border">
      border
      <div class="caja-padding">
          padding
          <div class="caja-content">content</div>
      </div>
  </div>
</div>`,initialCss:`div {
  text-align: center;
  font-size: 0.75rem;
  font-family: sans-serif;
}

.caja-margin {
  background-color: #fdf0d5;
  padding: 30px;
}

.caja-border {
  background-color: #f4a261;
  padding: 20px;
}

.caja-padding {
  background-color: #e9c46a;
  padding: 20px;
}

.caja-content {
  background-color: #2a9d8f;
  color: white;
  padding: 20px;
}`}),"\n",(0,a.jsx)(o.p,{children:'Esto es justo lo que muestran las herramientas de desarrollador del navegador cuando se inspecciona un elemento y se mira su "Box Model": cuatro capas de colores, una dentro de otra.'}),"\n",(0,a.jsx)(o.h2,{id:"box-sizing",children:(0,a.jsx)(o.code,{children:"box-sizing"})}),"\n",(0,a.jsxs)(o.p,{children:["Por defecto, ",(0,a.jsx)(o.code,{children:"width"})," y ",(0,a.jsx)(o.code,{children:"height"})," miden solo el ",(0,a.jsx)(o.code,{children:"content"}),": el ",(0,a.jsx)(o.code,{children:"padding"})," y el ",(0,a.jsx)(o.code,{children:"border"})," se suman por fuera, as\xed que la caja ocupa m\xe1s espacio del que indica ",(0,a.jsx)(o.code,{children:"width"}),". Este comportamiento se llama ",(0,a.jsx)(o.code,{children:"content-box"}),", y es el valor por defecto."]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="referencia">Esta l\xednea mide 200px de ancho</div>
<div class="caja content-box">width: 200px (content-box)</div>`,initialCss:`.referencia {
  width: 200px;
  border-top: 2px dashed red;
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.caja {
  background-color: teal;
  color: white;
  font-size: 0.8rem;
  padding: 20px;
  border: 5px solid black;
}

.content-box {
  width: 200px;
  box-sizing: content-box;
}`}),"\n",(0,a.jsxs)(o.p,{children:["La caja se sale claramente de la l\xednea de referencia de 200px, porque ",(0,a.jsx)(o.code,{children:"width: 200px"})," solo mide el contenido: los ",(0,a.jsx)(o.code,{children:"20px"})," de ",(0,a.jsx)(o.code,{children:"padding"})," a cada lado y los ",(0,a.jsx)(o.code,{children:"5px"})," de ",(0,a.jsx)(o.code,{children:"border"})," a cada lado se han sumado por fuera."]}),"\n",(0,a.jsxs)(o.p,{children:["Con ",(0,a.jsx)(o.code,{children:"box-sizing: border-box"}),", en cambio, ",(0,a.jsx)(o.code,{children:"width"}),"/",(0,a.jsx)(o.code,{children:"height"})," pasan a incluir el ",(0,a.jsx)(o.code,{children:"padding"})," y el ",(0,a.jsx)(o.code,{children:"border"}),", as\xed que la caja mide exactamente lo que se le indica, y es el propio ",(0,a.jsx)(o.code,{children:"content"})," el que se encoge para dejarle sitio:"]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="referencia">Esta l\xednea mide 200px de ancho</div>
<div class="caja border-box">width: 200px (border-box)</div>`,initialCss:`.referencia {
  width: 200px;
  border-top: 2px dashed red;
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.caja {
  background-color: teal;
  color: white;
  font-size: 0.8rem;
  padding: 20px;
  border: 5px solid black;
}

.border-box {
  width: 200px;
  box-sizing: border-box;
}`}),"\n",(0,a.jsx)(o.admonition,{type:"tip",children:(0,a.jsxs)(o.p,{children:["Por eso es tan habitual ver, al principio de casi cualquier hoja de estilos, una regla como ",(0,a.jsx)(o.code,{children:"* { box-sizing: border-box; }"}),": con ",(0,a.jsx)(o.code,{children:"content-box"}),", combinar ",(0,a.jsx)(o.code,{children:"width: 100%"})," con cualquier ",(0,a.jsx)(o.code,{children:"padding"})," hace que el elemento se desborde de su contenedor, algo que sorprende constantemente a quien empieza con CSS. ",(0,a.jsx)(o.code,{children:"border-box"})," evita ese problema por completo."]})}),"\n",(0,a.jsx)(o.h2,{id:"margin",children:(0,a.jsx)(o.code,{children:"margin"})}),"\n",(0,a.jsx)(o.h3,{id:"shorthand",children:"Shorthand"}),"\n",(0,a.jsxs)(o.p,{children:["Como ",(0,a.jsx)(o.code,{children:"padding"}),", ",(0,a.jsx)(o.code,{children:"margin"})," admite una forma abreviada con 1, 2, 3 o 4 valores:"]}),"\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Valores"}),(0,a.jsx)(o.th,{children:"Significado"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"margin: 10px;"})}),(0,a.jsx)(o.td,{children:"Los cuatro lados"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"margin: 10px 20px;"})}),(0,a.jsx)(o.td,{children:"Arriba/abajo, izquierda/derecha"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"margin: 10px 20px 30px;"})}),(0,a.jsx)(o.td,{children:"Arriba, izquierda/derecha, abajo"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"margin: 10px 20px 30px 40px;"})}),(0,a.jsx)(o.td,{children:"Arriba, derecha, abajo, izquierda (sentido horario)"})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["Tambi\xe9n se pueden usar las propiedades individuales: ",(0,a.jsx)(o.code,{children:"margin-top"}),", ",(0,a.jsx)(o.code,{children:"margin-right"}),", ",(0,a.jsx)(o.code,{children:"margin-bottom"}),", ",(0,a.jsx)(o.code,{children:"margin-left"}),"."]}),"\n",(0,a.jsxs)(o.h3,{id:"centrar-con-margin-auto",children:["Centrar con ",(0,a.jsx)(o.code,{children:"margin: auto"})]}),"\n",(0,a.jsxs)(o.p,{children:["Cuando un elemento de bloque tiene un ancho fijo (",(0,a.jsx)(o.code,{children:"width"}),") menor que su contenedor, ",(0,a.jsx)(o.code,{children:"margin: 0 auto;"})," lo centra horizontalmente: el espacio sobrante se reparte a partes iguales entre el margen izquierdo y el derecho."]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="contenedor">
  <div class="centrada">Caja centrada</div>
</div>`,initialCss:`.contenedor {
  background-color: #eee;
  padding: 10px;
}

.centrada {
  width: 150px;
  background-color: teal;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
}`}),"\n",(0,a.jsx)(o.h3,{id:"colapso-de-m\xe1rgenes",children:"Colapso de m\xe1rgenes"}),"\n",(0,a.jsxs)(o.p,{children:["Cuando dos m\xe1rgenes verticales se encuentran (el margen inferior de un elemento y el superior del siguiente, por ejemplo), ",(0,a.jsx)(o.strong,{children:"no se suman"}),": se queda solo el m\xe1s grande de los dos. Esto se llama colapso de m\xe1rgenes, y solo afecta a los m\xe1rgenes verticales (nunca a los horizontales)."]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="caja1">margin-bottom: 40px</div>
<div class="caja2">margin-top: 20px</div>`,initialCss:`div {
  background-color: teal;
  color: white;
  padding: 8px;
}

.caja1 {
  margin-bottom: 40px;
}

.caja2 {
  margin-top: 20px;
}`}),"\n",(0,a.jsxs)(o.p,{children:["El espacio entre ambas cajas es de ",(0,a.jsx)(o.code,{children:"40px"}),", no de ",(0,a.jsx)(o.code,{children:"60px"}),": gana el margen m\xe1s grande, y el m\xe1s peque\xf1o se ignora. Es uno de los comportamientos de CSS que m\xe1s sorprende al principio, porque no es intuitivo a partir del propio c\xf3digo: hay que verlo para creerlo."]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["El colapso de m\xe1rgenes solo ocurre con ",(0,a.jsx)(o.code,{children:"margin"})," normal entre elementos en flujo normal de bloque. No ocurre, por ejemplo, con ",(0,a.jsx)(o.code,{children:"padding"}),", ni con elementos que usan Flexbox o Grid (que veremos m\xe1s adelante) para organizarse."]})}),"\n",(0,a.jsx)(o.h2,{id:"padding",children:(0,a.jsx)(o.code,{children:"padding"})}),"\n",(0,a.jsxs)(o.p,{children:["El shorthand de ",(0,a.jsx)(o.code,{children:"padding"})," funciona exactamente igual que el de ",(0,a.jsx)(o.code,{children:"margin"})," (1 a 4 valores, mismo orden). La diferencia principal con ",(0,a.jsx)(o.code,{children:"margin"})," es que ",(0,a.jsxs)(o.strong,{children:[(0,a.jsx)(o.code,{children:"padding"})," no puede ser negativo"]}),": un valor negativo de ",(0,a.jsx)(o.code,{children:"padding"})," simplemente no se aplica, mientras que un ",(0,a.jsx)(o.code,{children:"margin"})," negativo s\xed es v\xe1lido y se usa (por ejemplo, para superponer ligeramente dos elementos)."]}),"\n",(0,a.jsx)(o.h2,{id:"border",children:(0,a.jsx)(o.code,{children:"border"})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"border"})," tambi\xe9n tiene una forma abreviada, que combina tres valores en cualquier orden: grosor, estilo y color."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-css",children:".caja {\n    border: 2px solid black;\n}\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Se puede escribir por separado con ",(0,a.jsx)(o.code,{children:"border-width"}),", ",(0,a.jsx)(o.code,{children:"border-style"})," y ",(0,a.jsx)(o.code,{children:"border-color"}),", y tambi\xe9n por lado: ",(0,a.jsx)(o.code,{children:"border-top"}),", ",(0,a.jsx)(o.code,{children:"border-right"}),", ",(0,a.jsx)(o.code,{children:"border-bottom"}),", ",(0,a.jsx)(o.code,{children:"border-left"})," (cada uno admite a su vez su propio shorthand de grosor/estilo/color)."]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<div class="b-solid">solid</div>
<div class="b-dashed">dashed</div>
<div class="b-dotted">dotted</div>
<div class="b-double">double</div>
<div class="b-lado">Solo border-bottom</div>`,initialCss:`div {
  padding: 8px;
  margin-bottom: 8px;
}

.b-solid {
  border: 3px solid teal;
}

.b-dashed {
  border: 3px dashed teal;
}

.b-dotted {
  border: 3px dotted teal;
}

.b-double {
  border: 6px double teal;
}

.b-lado {
  border-bottom: 3px solid teal;
}`}),"\n",(0,a.jsx)(o.p,{children:"Esto es justo lo que usamos en la p\xe1gina de Tablas para los bordes de celdas, y en Im\xe1genes para los marcos."}),"\n",(0,a.jsxs)(o.h2,{id:"display-block-inline-e-inline-block",children:[(0,a.jsx)(o.code,{children:"display: block"}),", ",(0,a.jsx)(o.code,{children:"inline"})," e ",(0,a.jsx)(o.code,{children:"inline-block"})]}),"\n",(0,a.jsxs)(o.p,{children:["El valor de ",(0,a.jsx)(o.code,{children:"display"})," decide, entre otras cosas, si un elemento respeta ",(0,a.jsx)(o.code,{children:"width"}),"/",(0,a.jsx)(o.code,{children:"height"})," y los m\xe1rgenes verticales:"]}),"\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.code,{children:"display"})}),(0,a.jsx)(o.th,{children:"Ocupa toda la l\xednea"}),(0,a.jsxs)(o.th,{children:["Respeta ",(0,a.jsx)(o.code,{children:"width"}),"/",(0,a.jsx)(o.code,{children:"height"})]}),(0,a.jsxs)(o.th,{children:["Respeta ",(0,a.jsx)(o.code,{children:"margin"}),"/",(0,a.jsx)(o.code,{children:"padding"})," vertical"]})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"block"})}),(0,a.jsx)(o.td,{children:"S\xed"}),(0,a.jsx)(o.td,{children:"S\xed"}),(0,a.jsx)(o.td,{children:"S\xed"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"inline"})}),(0,a.jsx)(o.td,{children:"No (se coloca en la misma l\xednea que lo de alrededor)"}),(0,a.jsx)(o.td,{children:"No (los ignora)"}),(0,a.jsx)(o.td,{children:"Solo el horizontal; el vertical no empuja a otros elementos"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"inline-block"})}),(0,a.jsx)(o.td,{children:"No"}),(0,a.jsx)(o.td,{children:"S\xed"}),(0,a.jsx)(o.td,{children:"S\xed"})]})]})]}),"\n",(0,a.jsx)(r.A,{initialHtml:`<span class="caja-inline">inline</span>
<span class="caja-inline">inline</span>
<div class="caja-block">block</div>
<span class="caja-inline-block">inline-block</span>
<span class="caja-inline-block">inline-block</span>`,initialCss:`.caja-inline {
  display: inline;
  width: 100px;
  height: 60px;
  background-color: teal;
  color: white;
  margin: 20px;
  padding: 10px;
}

.caja-block {
  display: block;
  width: 100px;
  height: 60px;
  background-color: darkorange;
  color: white;
  margin: 20px;
  padding: 10px;
}

.caja-inline-block {
  display: inline-block;
  width: 100px;
  height: 60px;
  background-color: darkslateblue;
  color: white;
  margin: 20px;
  padding: 10px;
}`}),"\n",(0,a.jsxs)(o.p,{children:["F\xedjate en que las dos cajas ",(0,a.jsx)(o.code,{children:"inline"})," ni siquiera llegan a medir 100x60: ",(0,a.jsx)(o.code,{children:"width"})," y ",(0,a.jsx)(o.code,{children:"height"})," se ignoran por completo en un elemento ",(0,a.jsx)(o.code,{children:"inline"}),". Las ",(0,a.jsx)(o.code,{children:"inline-block"}),", en cambio, s\xed respetan el tama\xf1o, pero se colocan una junto a otra en vez de ocupar toda la l\xednea como la ",(0,a.jsx)(o.code,{children:"block"}),"."]}),"\n",(0,a.jsxs)(o.h2,{id:"outline-frente-a-border",children:[(0,a.jsx)(o.code,{children:"outline"})," frente a ",(0,a.jsx)(o.code,{children:"border"})]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"outline"})," dibuja una l\xednea alrededor del elemento, visualmente parecida a ",(0,a.jsx)(o.code,{children:"border"}),", pero ",(0,a.jsx)(o.strong,{children:"no forma parte del modelo de caja"}),": no ocupa espacio, no empuja a los elementos vecinos, y puede incluso solaparse con ellos. Se usa sobre todo como indicador de foco accesible (recuerda ",(0,a.jsx)(o.code,{children:":focus"}),", de la p\xe1gina de pseudoclases), precisamente porque a\xf1adirlo o quitarlo no mueve nada del resto del dise\xf1o."]}),"\n",(0,a.jsx)(r.A,{initialHtml:'<input type="text" class="campo" placeholder="Haz clic para enfocar">',initialCss:`.campo {
  padding: 8px;
  border: 1px solid #999;
}

.campo:focus {
  outline: 3px solid teal;
}`})]})}function p(e={}){let{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},944(e,o,d){d.d(o,{N:()=>c});var n=d(4848),a=d(6540),i=d(6069),r=d.n(i),s=d(8848);d(4312),d(1113),d(5723);let l={markup:"HTML",css:"CSS",javascript:"JavaScript"};function c({code:e,onChange:o,language:d}){let[i,p]=(0,a.useState)(!1),x=async()=>{await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),1500)};return(0,n.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,n.jsxs)("button",{type:"button",onClick:x,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:i?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[i?(0,n.jsx)(h,{}):(0,n.jsx)(t,{}),i?"Copiado":""]}),(0,n.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:l[d]})]}),(0,n.jsx)(r(),{value:e,onValueChange:o,highlight:e=>(0,s.highlight)(e,s.languages[d],d),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,n.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,n.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function h(){return(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,o,d){d.d(o,{A:()=>l});var n=d(4848),a=d(6540),i=d(944),r=d(2793),s=d(1756);function l({initialHtml:e,initialCss:o="",layout:d="side-by-side",height:c=460}){let[t,h]=(0,a.useState)(e),[p,x]=(0,a.useState)(o),j=(0,a.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${p}</style></head><body>${t}</body></html>`,[t,p]);return(0,n.jsx)(r.u,{layout:d,codePanel:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsx)(i.N,{code:t,onChange:h,language:"markup"}),(0,n.jsx)(i.N,{code:p,onChange:x,language:"css"})]}),resultPanel:(0,n.jsx)(s.R,{doc:j,title:"Resultado HTML+CSS",height:c})})}},2793(e,o,d){d.d(o,{u:()=>a});var n=d(4848);function a({layout:e,codePanel:o,resultPanel:d}){return(0,n.jsx)("div",{style:{margin:"2rem 0"},children:(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,n.jsx)("div",{children:o}),(0,n.jsx)("div",{children:d})]})})}d(6540)},1756(e,o,d){d.d(o,{R:()=>r});var n=d(4848),a=d(6540),i=d(6497);function r({doc:e,title:o,height:d}){let s=(0,a.useRef)(null),[l,c]=(0,a.useState)(!1),t=(0,i.Ay)("/playground-frame.html");return(0,a.useEffect)(()=>{l&&s.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,l]),(0,n.jsx)("iframe",{ref:s,title:o,src:t,onLoad:()=>c(!0),sandbox:"allow-scripts",style:{width:"100%",height:d,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);