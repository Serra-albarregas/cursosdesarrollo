"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["5293"],{8263(e,i,s){s.r(i),s.d(i,{metadata:()=>d,default:()=>p,frontMatter:()=>c,contentTitle:()=>a,toc:()=>h,assets:()=>t});var d=JSON.parse('{"id":"css/pseudoclases-pseudoelementos","title":"Pseudoclases y pseudoelementos","description":"En la p\xe1gina anterior vimos selectores que dependen de la estructura del HTML seleccionan seg\xfan un estado del elemento (como si el rat\xf3n est\xe1 encima) o crean/seleccionan una parte de \xe9l que no existe como etiqueta propia en el HTML.","source":"@site/docs/lenguajes-de-marcas/css/03-pseudoclases-pseudoelementos.mdx","sourceDirName":"css","slug":"/css/pseudoclases-pseudoelementos","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/pseudoclases-pseudoelementos","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Pseudoclases y pseudoelementos"},"sidebar":"marcasSidebar","previous":{"title":"Selectores","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/selectores"}}'),n=s(4848),l=s(8453),o=s(6841),r=s(2084);let c={sidebar_position:3,title:"Pseudoclases y pseudoelementos"},a,t={},h=[{value:"Tabla resumen",id:"tabla-resumen",level:2},{value:"Pseudoclases de interacci\xf3n",id:"pseudoclases-de-interacci\xf3n",level:2},{value:"<code>:target</code>",id:"target",level:3},{value:"Pseudoclases estructurales",id:"pseudoclases-estructurales",level:2},{value:"Prueba tu propia f\xf3rmula",id:"prueba-tu-propia-f\xf3rmula",level:3},{value:"Negaci\xf3n con <code>:not()</code>",id:"negaci\xf3n-con-not",level:3},{value:"<code>:root</code>",id:"root",level:3},{value:"<code>:is()</code>",id:"is",level:3},{value:"<code>:has()</code>",id:"has",level:3},{value:"Pseudoclases de formularios",id:"pseudoclases-de-formularios",level:2},{value:"<code>:user-valid</code> y <code>:user-invalid</code>",id:"user-valid-y-user-invalid",level:3},{value:"Pseudoelementos",id:"pseudoelementos",level:2},{value:"<code>::before</code> y <code>::after</code>",id:"before-y-after",level:3},{value:"<code>::first-letter</code> y <code>::first-line</code>",id:"first-letter-y-first-line",level:3},{value:"<code>::selection</code>",id:"selection",level:3},{value:"<code>::placeholder</code>",id:"placeholder",level:3},{value:"Especificidad",id:"especificidad",level:2},{value:"Qu\xe9 viene a continuaci\xf3n",id:"qu\xe9-viene-a-continuaci\xf3n",level:2}];function u(e){let i={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["En la p\xe1gina anterior vimos selectores que dependen de la estructura del HTML: la etiqueta, una clase, un id, un atributo. Las ",(0,n.jsx)(i.strong,{children:"pseudoclases"})," y los ",(0,n.jsx)(i.strong,{children:"pseudoelementos"})," son distintos: seleccionan seg\xfan un ",(0,n.jsx)(i.em,{children:"estado"})," del elemento (como si el rat\xf3n est\xe1 encima) o crean/seleccionan una ",(0,n.jsx)(i.em,{children:"parte"})," de \xe9l que no existe como etiqueta propia en el HTML."]}),"\n",(0,n.jsx)(i.p,{children:"Se distinguen por la sintaxis:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pseudoclase:"})," dos puntos simples, ",(0,n.jsx)(i.code,{children:":nombre"}),". Ejemplo: ",(0,n.jsx)(i.code,{children:":hover"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pseudoelemento:"})," dos puntos dobles, ",(0,n.jsx)(i.code,{children:"::nombre"}),". Ejemplo: ",(0,n.jsx)(i.code,{children:"::before"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Por motivos hist\xf3ricos, algunos pseudoelementos antiguos (como ",(0,n.jsx)(i.code,{children:":first-line"}),") tambi\xe9n se aceptan con un solo ",(0,n.jsx)(i.code,{children:":"}),", pero en CSS3 la forma correcta es con dos, para distinguirlos claramente de las pseudoclases."]})}),"\n",(0,n.jsx)(i.h2,{id:"tabla-resumen",children:"Tabla resumen"}),"\n",(0,n.jsx)(i.p,{children:"Para consulta r\xe1pida. Cada una se explica con m\xe1s detalle, y con ejemplo, en su apartado correspondiente."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Pseudoclases"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Pseudoclase"}),(0,n.jsx)(i.th,{children:"Selecciona"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":hover"})}),(0,n.jsx)(i.td,{children:"El rat\xf3n est\xe1 encima del elemento"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":focus"})}),(0,n.jsx)(i.td,{children:"El elemento tiene el foco"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":active"})}),(0,n.jsx)(i.td,{children:"El elemento se est\xe1 pulsando en ese instante"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":link"})}),(0,n.jsx)(i.td,{children:"Un enlace no visitado"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":visited"})}),(0,n.jsx)(i.td,{children:"Un enlace ya visitado"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":target"})}),(0,n.jsxs)(i.td,{children:["El elemento cuyo id coincide con el ancla (",(0,n.jsx)(i.code,{children:"#..."}),") de la URL"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":first-child"})}),(0,n.jsx)(i.td,{children:"El primer hijo de su padre"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":last-child"})}),(0,n.jsx)(i.td,{children:"El \xfaltimo hijo de su padre"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":only-child"})}),(0,n.jsx)(i.td,{children:"El \xfanico hijo de su padre"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-child(n)"})}),(0,n.jsxs)(i.td,{children:["La posici\xf3n ",(0,n.jsx)(i.code,{children:"n"})," entre todos los hermanos"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-last-child(n)"})}),(0,n.jsx)(i.td,{children:"Igual, contando desde el final"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":first-of-type"})}),(0,n.jsx)(i.td,{children:"El primero de su mismo tipo de etiqueta entre sus hermanos"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":last-of-type"})}),(0,n.jsx)(i.td,{children:"El \xfaltimo de su mismo tipo entre sus hermanos"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-of-type(n)"})}),(0,n.jsxs)(i.td,{children:["La posici\xf3n ",(0,n.jsx)(i.code,{children:"n"})," entre los hermanos del mismo tipo"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-last-of-type(n)"})}),(0,n.jsx)(i.td,{children:"Igual, contando desde el final"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":not(selector)"})}),(0,n.jsx)(i.td,{children:"Lo que NO cumple el selector indicado"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":root"})}),(0,n.jsxs)(i.td,{children:["El elemento ra\xedz del documento (",(0,n.jsx)(i.code,{children:"<html>"}),")"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":is(lista)"})}),(0,n.jsx)(i.td,{children:"Lo que cumple cualquiera de los selectores de la lista"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":has(lista)"})}),(0,n.jsx)(i.td,{children:"El elemento que contiene algo que cumple el selector de la lista"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":checked"})}),(0,n.jsx)(i.td,{children:"Un checkbox o radio marcado"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":disabled"})}),(0,n.jsx)(i.td,{children:"Un campo desactivado"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":enabled"})}),(0,n.jsxs)(i.td,{children:["Un campo activo (lo contrario de ",(0,n.jsx)(i.code,{children:":disabled"}),")"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":required"})}),(0,n.jsx)(i.td,{children:"Un campo obligatorio"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":optional"})}),(0,n.jsx)(i.td,{children:"Un campo no obligatorio"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":valid"})}),(0,n.jsx)(i.td,{children:"Un campo que cumple sus condiciones de validaci\xf3n"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":invalid"})}),(0,n.jsx)(i.td,{children:"Un campo que no las cumple"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":user-valid"})}),(0,n.jsxs)(i.td,{children:["Como ",(0,n.jsx)(i.code,{children:":valid"}),", pero solo tras interactuar con el campo"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":user-invalid"})}),(0,n.jsxs)(i.td,{children:["Como ",(0,n.jsx)(i.code,{children:":invalid"}),", pero solo tras interactuar con el campo"]})]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Pseudoelementos"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Pseudoelemento"}),(0,n.jsx)(i.th,{children:"Selecciona"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::before"})}),(0,n.jsx)(i.td,{children:"Contenido generado antes del contenido real"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::after"})}),(0,n.jsx)(i.td,{children:"Contenido generado despu\xe9s del contenido real"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::first-letter"})}),(0,n.jsx)(i.td,{children:"La primera letra de un texto"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::first-line"})}),(0,n.jsx)(i.td,{children:"La primera l\xednea visual de un texto"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::selection"})}),(0,n.jsx)(i.td,{children:"El texto mientras est\xe1 seleccionado por el usuario"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"::placeholder"})}),(0,n.jsx)(i.td,{children:"El texto de ayuda de un campo"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"pseudoclases-de-interacci\xf3n",children:"Pseudoclases de interacci\xf3n"}),"\n",(0,n.jsx)(i.p,{children:"Estas pseudoclases reaccionan a c\xf3mo el usuario interact\xfaa con el elemento, normalmente un enlace o un bot\xf3n."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":hover"}),": el rat\xf3n est\xe1 encima del elemento."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":focus"}),": el elemento tiene el foco (por ejemplo, un campo de formulario en el que se est\xe1 escribiendo)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":active"}),": el elemento se est\xe1 pulsando en ese instante."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":link"})," / ",(0,n.jsx)(i.code,{children:":visited"}),": un enlace no visitado, o uno que ya se ha visitado antes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":target"}),": el elemento cuyo id coincide con el ancla (",(0,n.jsx)(i.code,{children:"#..."}),") de la URL actual."]}),"\n"]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<a href="#">Enlace no visitado (pasa el rat\xf3n por aqu\xed)</a>
<br />
<a href="https://example.com">Enlace que S\xcd hayas visitado antes en tu navegador</a>
<br />
<button>Haz clic y mant\xe9n pulsado</button>
<br />
<input type="text" placeholder="Haz clic para enfocar" />`,initialCss:`a:link {
  color: navy;
}

a:visited {
  color: purple;
}

a:hover {
  color: orange;
}

button:active {
  background-color: darkred;
  color: white;
}

input:focus {
  border: 2px solid teal;
  outline: none;
}`}),"\n",(0,n.jsxs)(i.p,{children:["Cuando se combinan ",(0,n.jsx)(i.code,{children:":link"}),", ",(0,n.jsx)(i.code,{children:":visited"}),", ",(0,n.jsx)(i.code,{children:":hover"})," y ",(0,n.jsx)(i.code,{children:":active"})," sobre el mismo ",(0,n.jsx)(i.code,{children:"<a>"}),", el orden en el que se escriben importa, porque tienen la misma especificidad y gana la \xfaltima regla que coincida. El orden recomendado se suele recordar con la regla mnemot\xe9cnica ",(0,n.jsx)(i.strong,{children:"LVHA"}),": ",(0,n.jsx)(i.code,{children:":link"}),", ",(0,n.jsx)(i.code,{children:":visited"}),", ",(0,n.jsx)(i.code,{children:":hover"}),", ",(0,n.jsx)(i.code,{children:":active"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":visited"})," es dif\xedcil de demostrar en vivo: por privacidad, el navegador solo aplica ",(0,n.jsx)(i.code,{children:":visited"})," a enlaces que de verdad figuran en tu historial, y adem\xe1s, una vez aplicado, solo permite cambiar unas pocas propiedades (",(0,n.jsx)(i.code,{children:"color"}),", ",(0,n.jsx)(i.code,{children:"background-color"}),", ",(0,n.jsx)(i.code,{children:"border-color"}),", ",(0,n.jsx)(i.code,{children:"outline-color"}),'), nunca el tama\xf1o del texto ni nada que pudiera usarse para "leer" el historial de alguien con JavaScript. En la demo de arriba ver\xe1s ',(0,n.jsx)(i.code,{children:":link"})," funcionando siempre; ",(0,n.jsx)(i.code,{children:":visited"})," solo se notar\xe1 en el segundo enlace si lo has visitado antes en tu propio navegador."]})}),"\n",(0,n.jsx)(i.h3,{id:"target",children:(0,n.jsx)(i.code,{children:":target"})}),"\n",(0,n.jsxs)(i.p,{children:["A diferencia de las anteriores, ",(0,n.jsx)(i.code,{children:":target"})," no depende de una acci\xf3n del rat\xf3n, sino de la URL: selecciona el elemento cuyo ",(0,n.jsx)(i.code,{children:"id"})," coincide con el ancla (la parte despu\xe9s de ",(0,n.jsx)(i.code,{children:"#"}),") de la URL actual. Se activa al pulsar un enlace interno (",(0,n.jsx)(i.code,{children:'<a href="#seccion1">'}),"), sin necesidad de JavaScript."]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<nav>
  <a href="#seccion1">Ir a la secci\xf3n 1</a> |
  <a href="#seccion2">Ir a la secci\xf3n 2</a>
</nav>

<section id="seccion1">
  <h3>Secci\xf3n 1</h3>
  <p>Contenido de la primera secci\xf3n.</p>
</section>

<section id="seccion2">
  <h3>Secci\xf3n 2</h3>
  <p>Contenido de la segunda secci\xf3n.</p>
</section>`,initialCss:`section {
  padding: 10px;
  margin-top: 8px;
  border: 2px solid transparent;
}

section:target {
  border-color: teal;
  background-color: #e0f7f7;
}`}),"\n",(0,n.jsx)(i.h2,{id:"pseudoclases-estructurales",children:"Pseudoclases estructurales"}),"\n",(0,n.jsx)(i.p,{children:"Seleccionan un elemento seg\xfan su posici\xf3n entre sus hermanos, sin necesidad de clases ni ids."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":first-child"}),": es el primer hijo de su padre."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":last-child"}),": es el \xfaltimo hijo de su padre."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":only-child"}),": es el \xfanico hijo de su padre."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":nth-child(n)"}),": ocupa la posici\xf3n ",(0,n.jsx)(i.code,{children:"n"})," entre sus hermanos. Admite un n\xfamero (",(0,n.jsx)(i.code,{children:":nth-child(3)"}),"), o una f\xf3rmula como ",(0,n.jsx)(i.code,{children:":nth-child(2n)"})," (los pares) o ",(0,n.jsx)(i.code,{children:":nth-child(2n+1)"})," (los impares)."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":nth-last-child(n)"}),": igual que ",(0,n.jsx)(i.code,{children:":nth-child(n)"}),", pero contando las posiciones desde el final en vez de desde el principio."]}),"\n"]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
  <li>Elemento 5</li>
</ul>`,initialCss:`li:first-child {
  font-weight: bold;
}

li:last-child {
  color: red;
}

li:nth-child(2n) {
  background-color: #eee;
}`}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":nth-child(2n)"}),' es justo la t\xe9cnica de "filas pares" que vimos con ',(0,n.jsx)(i.code,{children:"tbody tr:nth-child(even)"})," en la p\xe1gina de Tablas: ",(0,n.jsx)(i.code,{children:"even"})," y ",(0,n.jsx)(i.code,{children:"odd"})," son alias de ",(0,n.jsx)(i.code,{children:"2n"})," y ",(0,n.jsx)(i.code,{children:"2n+1"}),"."]})}),"\n",(0,n.jsx)(i.h3,{id:"prueba-tu-propia-f\xf3rmula",children:"Prueba tu propia f\xf3rmula"}),"\n",(0,n.jsxs)(i.p,{children:["La f\xf3rmula ",(0,n.jsx)(i.code,{children:"an+b"})," de ",(0,n.jsx)(i.code,{children:":nth-child()"})," cuesta de visualizar solo con la teor\xeda. Elige ",(0,n.jsx)(i.code,{children:":nth-child"})," o ",(0,n.jsx)(i.code,{children:":nth-last-child"}),", escribe una f\xf3rmula (por ejemplo ",(0,n.jsx)(i.code,{children:"2n"}),", ",(0,n.jsx)(i.code,{children:"3n+1"}),", ",(0,n.jsx)(i.code,{children:"odd"}),", ",(0,n.jsx)(i.code,{children:"even"}),", o un n\xfamero suelto como ",(0,n.jsx)(i.code,{children:"5"}),") y comprueba qu\xe9 casillas se resaltan en la rejilla:"]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<p>
  <select id="nthMode">
      <option value=":nth-child">:nth-child</option>
      <option value=":nth-last-child">:nth-last-child</option>
  </select>
  <input type="text" id="nthInput" placeholder="2n, 3n+1, odd, 3n of .itemB" />
</p>
<pre><code>.grid-item<span id="selectorMode"></span>(<span id="selectorFormula"></span>) {
  background-color: #ff5722;
  color: white;
}</code></pre>
<div class="grid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item itemB">5<div class="small">itemB</div></div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item itemB">12<div class="small">itemB</div></div>
  <div class="grid-item">13</div>
  <div class="grid-item">14</div>
  <div class="grid-item">15</div>
  <div class="grid-item itemB">16<div class="small">itemB</div></div>
  <div class="grid-item">17</div>
  <div class="grid-item">18</div>
  <div class="grid-item">19</div>
  <div class="grid-item">20</div>
  <div class="grid-item">21</div>
  <div class="grid-item">22</div>
  <div class="grid-item">23</div>
  <div class="grid-item">24</div>
  <div class="grid-item">25</div>
  <div class="grid-item">26</div>
  <div class="grid-item itemB">27<div class="small">itemB</div></div>
  <div class="grid-item itemB">28<div class="small">itemB</div></div>
  <div class="grid-item">29</div>
  <div class="grid-item">30</div>
  <div class="grid-item">31</div>
  <div class="grid-item">32</div>
  <div class="grid-item">33</div>
  <div class="grid-item">34</div>
  <div class="grid-item itemB">35<div class="small">itemB</div></div>
  <div class="grid-item">36</div>
  <div class="grid-item">37</div>
  <div class="grid-item">38</div>
  <div class="grid-item">39</div>
  <div class="grid-item">40</div>
</div>`,initialCss:`.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 6px;
  max-width: 480px;
}

.grid-item {
  position: relative;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0;
}

.itemB {
  outline: 2px dashed #999;
}

.small {
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  font-size: 0.6em;
  color: #777;
}

.highlighted {
  background-color: #ff5722;
  color: white;
}

pre {
  background-color: #272822;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 4px;
}`,initialJs:`const nthInput = document.getElementById('nthInput');
const nthMode = document.getElementById('nthMode');
const gridItems = document.querySelectorAll('.grid-item');
const selectorMode = document.getElementById('selectorMode');
const selectorFormula = document.getElementById('selectorFormula');

const patronValido = /^(\\d+n?|\\d+n\\+\\d+|\\d+|odd|even)( of( [.#]?[A-Za-z0-9]+))?$/;

function actualizar() {
  const formula = nthInput.value.trim();
  const pseudoclase = nthMode.value;

  gridItems.forEach(item => item.classList.remove('highlighted'));
  selectorMode.textContent = pseudoclase;
  selectorFormula.textContent = formula;

  if (formula === '') {
      return;
  }

  if (!patronValido.test(formula)) {
      selectorFormula.textContent = formula + ' (f\xf3rmula no v\xe1lida)';
      return;
  }

  const selector = '.grid-item' + pseudoclase + '(' + formula + ')';

  try {
      document.querySelectorAll(selector).forEach(item => {
          item.classList.add('highlighted');
      });
  } catch (error) {
      selectorFormula.textContent = formula + ' (selector no v\xe1lido)';
  }
}

nthInput.addEventListener('input', actualizar);
nthMode.addEventListener('change', actualizar);`,layout:"stacked"}),"\n",(0,n.jsxs)(i.p,{children:["Prueba, por ejemplo, ",(0,n.jsx)(i.code,{children:"3"})," (solo el tercer elemento), ",(0,n.jsx)(i.code,{children:"3n"})," (cada tres), ",(0,n.jsx)(i.code,{children:"-n+10"})," con ",(0,n.jsx)(i.code,{children:":nth-last-child"})," (los \xfaltimos 10) o ",(0,n.jsx)(i.code,{children:"3n of .itemB"})," (cada tercer elemento, contando solo entre los marcados como ",(0,n.jsx)(i.code,{children:"itemB"}),"; esta sintaxis con ",(0,n.jsx)(i.code,{children:"of"})," es m\xe1s moderna y puede no funcionar en navegadores antiguos)."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":nth-child"})," solo se fija en la posici\xf3n entre ",(0,n.jsx)(i.strong,{children:"todos"})," los hermanos, sin importar su etiqueta. Si necesitas contar solo entre hermanos del mismo tipo, existe la variante ",(0,n.jsx)(i.code,{children:":nth-of-type(n)"})," (y tambi\xe9n ",(0,n.jsx)(i.code,{children:":first-of-type"})," / ",(0,n.jsx)(i.code,{children:":last-of-type"}),"):"]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<div class="caja">
  <h3>T\xedtulo</h3>
  <p>Primer p\xe1rrafo.</p>
  <p>Segundo p\xe1rrafo.</p>
  <p>Tercer p\xe1rrafo.</p>
</div>`,initialCss:`p:first-child {
  color: red;
}

p:first-of-type {
  font-weight: bold;
}`}),"\n",(0,n.jsxs)(i.p,{children:["En este ejemplo, ning\xfan ",(0,n.jsx)(i.code,{children:"<p>"})," es ",(0,n.jsx)(i.code,{children:":first-child"})," (el primer hijo del ",(0,n.jsx)(i.code,{children:"div"})," es el ",(0,n.jsx)(i.code,{children:"<h3>"}),"), as\xed que la primera regla no se aplica a nadie. En cambio, el primer p\xe1rrafo s\xed es ",(0,n.jsx)(i.code,{children:":first-of-type"})," dentro de los p\xe1rrafos, as\xed que se pone en negrita."]}),"\n",(0,n.jsxs)(i.p,{children:["La familia completa de ",(0,n.jsx)(i.code,{children:":nth-of-type"})," tiene cuatro pseudoclases, con el mismo matiz en todas: cuentan solo entre los hermanos del mismo tipo de etiqueta, ignorando el resto."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Pseudoclase"}),(0,n.jsx)(i.th,{children:"Selecciona"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":first-of-type"})}),(0,n.jsx)(i.td,{children:"El primer elemento de ese tipo entre sus hermanos"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":last-of-type"})}),(0,n.jsx)(i.td,{children:"El \xfaltimo elemento de ese tipo entre sus hermanos"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-of-type(n)"})}),(0,n.jsxs)(i.td,{children:["El elemento que ocupa la posici\xf3n ",(0,n.jsx)(i.code,{children:"n"})," ",(0,n.jsx)(i.strong,{children:"entre los de ese tipo"}),", contando desde el principio. Admite las mismas f\xf3rmulas que ",(0,n.jsx)(i.code,{children:":nth-child"})," (",(0,n.jsx)(i.code,{children:"2n"}),", ",(0,n.jsx)(i.code,{children:"odd"}),", ",(0,n.jsx)(i.code,{children:"even"}),"...)"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:":nth-last-of-type(n)"})}),(0,n.jsxs)(i.td,{children:["Igual que ",(0,n.jsx)(i.code,{children:":nth-of-type(n)"}),", pero contando desde el final"]})]})]})]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<div class="caja">
  <h3>T\xedtulo</h3>
  <p>P\xe1rrafo 1</p>
  <p>P\xe1rrafo 2</p>
  <p>P\xe1rrafo 3</p>
  <p>P\xe1rrafo 4</p>
  <p>P\xe1rrafo 5</p>
</div>`,initialCss:`p:nth-of-type(2n) {
  background-color: #eee;
}

p:last-of-type {
  font-weight: bold;
}

p:nth-last-of-type(1) {
  color: red;
}`}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"p:last-of-type"})," y ",(0,n.jsx)(i.code,{children:"p:nth-last-of-type(1)"})," seleccionan, en este ejemplo, al mismo elemento (el \xfaltimo p\xe1rrafo): son dos formas distintas de llegar al mismo sitio, igual que ",(0,n.jsx)(i.code,{children:":first-child"})," y ",(0,n.jsx)(i.code,{children:":nth-child(1)"})," cuando el primer hijo es del tipo que buscas."]}),"\n",(0,n.jsxs)(i.h3,{id:"negaci\xf3n-con-not",children:["Negaci\xf3n con ",(0,n.jsx)(i.code,{children:":not()"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":not(selector)"})," selecciona los elementos que ",(0,n.jsx)(i.strong,{children:"no"}),' cumplen el selector que lleva dentro. Es \xfatil para aplicar un estilo a "todos menos uno".']}),"\n",(0,n.jsx)(o.A,{initialHtml:`<ul>
  <li>Elemento 1</li>
  <li class="activo">Elemento 2</li>
  <li>Elemento 3</li>
</ul>`,initialCss:`li:not(.activo) {
  opacity: 0.5;
}`}),"\n",(0,n.jsx)(i.h3,{id:"root",children:(0,n.jsx)(i.code,{children:":root"})}),"\n",(0,n.jsxs)(i.p,{children:["Selecciona el elemento ra\xedz del documento: en HTML, siempre es ",(0,n.jsx)(i.code,{children:"<html>"}),". Hace lo mismo que el selector de tipo ",(0,n.jsx)(i.code,{children:"html"}),", pero con la especificidad de una clase en vez de un tipo, as\xed que gana si hay conflicto entre ambos. Se usa sobre todo para declarar ",(0,n.jsx)(i.strong,{children:"variables CSS"})," (propiedades personalizadas), que veremos m\xe1s adelante, porque as\xed quedan disponibles en todo el documento:"]}),"\n",(0,n.jsx)(o.A,{initialHtml:'<p class="aviso">Este p\xe1rrafo usa el color definido en :root.</p>',initialCss:`:root {
  --color-aviso: darkorange;
}

.aviso {
  color: var(--color-aviso);
  border: 2px solid var(--color-aviso);
  padding: 8px;
}`}),"\n",(0,n.jsx)(i.h3,{id:"is",children:(0,n.jsx)(i.code,{children:":is()"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":is(lista-de-selectores)"})," selecciona cualquier elemento que cumpla ",(0,n.jsx)(i.strong,{children:"al menos uno"})," de los selectores de la lista. Sirve para evitar repetir el mismo selector varias veces cuando varias rutas comparten una parte final."]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<article>
  <h3>T\xedtulo en art\xedculo</h3>
</article>
<aside>
  <h3>T\xedtulo en aside</h3>
</aside>
<footer>
  <h3>T\xedtulo en footer (no cambia)</h3>
</footer>`,initialCss:`:is(article, aside) h3 {
  color: darkslateblue;
}`}),"\n",(0,n.jsxs)(i.p,{children:["Esto equivale a escribir ",(0,n.jsx)(i.code,{children:"article h3, aside h3"}),", pero resulta m\xe1s corto cuanto m\xe1s larga es la parte que se repite."]}),"\n",(0,n.jsx)(i.h3,{id:"has",children:(0,n.jsx)(i.code,{children:":has()"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":has(lista-de-selectores)"})," selecciona un elemento si ",(0,n.jsx)(i.strong,{children:"contiene"}),' algo que cumple el selector indicado. Es la pseudoclase "al rev\xe9s": en vez de describir al propio elemento, describe lo que hay dentro de \xe9l. Por ejemplo, para resaltar el contenedor de un campo de formulario cuando el campo que lleva dentro es inv\xe1lido:']}),"\n",(0,n.jsx)(o.A,{initialHtml:`<div class="campo">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" required />
</div>
<div class="campo">
  <label for="email">Email (opcional)</label>
  <input type="email" id="email" />
</div>`,initialCss:`.campo {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.campo:has(input:invalid) {
  background-color: #ffe5e5;
}`}),"\n",(0,n.jsxs)(i.p,{children:["El primer campo, obligatorio y vac\xedo, es ",(0,n.jsx)(i.code,{children:":invalid"}),", as\xed que su ",(0,n.jsx)(i.code,{children:".campo"})," contenedor se resalta. El segundo, al no ser obligatorio y estar vac\xedo, es ",(0,n.jsx)(i.code,{children:":valid"})," por defecto (como vimos en la p\xe1gina de validaci\xf3n), as\xed que no se resalta."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":has()"})," es de las pseudoclases m\xe1s recientes de CSS; ya est\xe1 disponible en las versiones actuales de los navegadores principales, pero conviene tenerlo en cuenta si el proyecto necesita dar soporte a navegadores antiguos."]})}),"\n",(0,n.jsx)(i.h2,{id:"pseudoclases-de-formularios",children:"Pseudoclases de formularios"}),"\n",(0,n.jsxs)(i.p,{children:["Ya usamos ",(0,n.jsx)(i.code,{children:":valid"})," e ",(0,n.jsx)(i.code,{children:":invalid"})," en la p\xe1gina de validaci\xf3n de formularios. Hay varias m\xe1s que reaccionan al estado de un campo:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":checked"}),": un checkbox o radio button marcado."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":disabled"})," / ",(0,n.jsx)(i.code,{children:":enabled"}),": un campo desactivado o activo."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":required"})," / ",(0,n.jsx)(i.code,{children:":optional"}),": un campo obligatorio o no."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:":valid"})," / ",(0,n.jsx)(i.code,{children:":invalid"}),": un campo que cumple, o no, sus condiciones de validaci\xf3n."]}),"\n"]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<form>
  <p><input type="checkbox" id="c1" /> <label for="c1">Marca esta casilla</label></p>
  <p><input type="text" disabled value="Campo desactivado" /> (:disabled)</p>
  <p><input type="text" value="Campo activo" /> (:enabled)</p>
  <p><input type="text" required placeholder="Campo obligatorio" /> (:required)</p>
  <p><input type="text" placeholder="Campo opcional" /> (:optional)</p>
</form>`,initialCss:`input:checked + label {
  font-weight: bold;
  color: teal;
}

input:disabled {
  background-color: #eee;
  color: #999;
}

input:enabled {
  border: 2px solid teal;
}

input:required {
  border-left: 4px solid darkorange;
}

input:optional {
  border-left: 4px solid lightgray;
}`}),"\n",(0,n.jsxs)(i.h3,{id:"user-valid-y-user-invalid",children:[(0,n.jsx)(i.code,{children:":user-valid"})," y ",(0,n.jsx)(i.code,{children:":user-invalid"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":valid"})," e ",(0,n.jsx)(i.code,{children:":invalid"})," se aplican desde el primer instante, incluso antes de que el usuario haya escrito nada. Eso significa que un campo obligatorio y vac\xedo aparece en rojo nada m\xe1s cargar la p\xe1gina, lo cual puede resultar agresivo."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":user-valid"})," y ",(0,n.jsx)(i.code,{children:":user-invalid"})," resuelven esto: se comportan igual que ",(0,n.jsx)(i.code,{children:":valid"}),"/",(0,n.jsx)(i.code,{children:":invalid"}),", pero ",(0,n.jsx)(i.strong,{children:"solo despu\xe9s de que el usuario haya interactuado"})," con el campo (lo haya rellenado y perdido el foco, o se haya intentado enviar el formulario). Compara los dos campos siguientes, ambos obligatorios y con un m\xednimo de 3 caracteres: haz clic dentro, sal sin escribir nada y compara."]}),"\n",(0,n.jsx)(o.A,{initialHtml:`<form>
  <p>
      <label for="a">Con <code>:invalid</code> (se marca nada m\xe1s cargar la p\xe1gina):</label><br />
      <input type="text" id="a" required minlength="3" />
  </p>
  <p>
      <label for="b">Con <code>:user-invalid</code> (se marca solo tras interactuar):</label><br />
      <input type="text" id="b" required minlength="3" />
  </p>
</form>`,initialCss:`#a:invalid {
  border: 2px solid red;
  background-color: #ffe5e5;
}

#b:user-invalid {
  border: 2px solid red;
  background-color: #ffe5e5;
}`}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":user-valid"}),"/",(0,n.jsx)(i.code,{children:":user-invalid"})," tienen buen soporte en navegadores modernos, pero son m\xe1s recientes que ",(0,n.jsx)(i.code,{children:":valid"}),"/",(0,n.jsx)(i.code,{children:":invalid"}),". En la p\xe1gina de validaci\xf3n de formularios decidimos mantener los ejemplos solo con ",(0,n.jsx)(i.code,{children:":valid"}),"/",(0,n.jsx)(i.code,{children:":invalid"}),' por sencillez; estas pseudoclases son la forma "correcta" de resolver ese mismo problema cuando quieras pulir la experiencia de usuario.']})}),"\n",(0,n.jsx)(i.h2,{id:"pseudoelementos",children:"Pseudoelementos"}),"\n",(0,n.jsx)(i.p,{children:"Un pseudoelemento selecciona una parte del elemento que no tiene una etiqueta propia en el HTML."}),"\n",(0,n.jsxs)(i.h3,{id:"before-y-after",children:[(0,n.jsx)(i.code,{children:"::before"})," y ",(0,n.jsx)(i.code,{children:"::after"})]}),"\n",(0,n.jsxs)(i.p,{children:["Insertan contenido antes o despu\xe9s del contenido real del elemento, sin necesidad de a\xf1adirlo al HTML. Requieren siempre la propiedad ",(0,n.jsx)(i.code,{children:"content"})," (puede estar vac\xeda, ",(0,n.jsx)(i.code,{children:'content: "";'}),", si solo se quiere usar para decorar con CSS)."]}),"\n",(0,n.jsx)(o.A,{initialHtml:'<p class="nota">Esto es una nota importante.</p>',initialCss:`.nota::before {
  content: "\u{26A0}\u{FE0F} ";
}

.nota::after {
  content: " (l\xe9elo con atenci\xf3n)";
  font-style: italic;
  color: gray;
}`}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"::before"})," y ",(0,n.jsx)(i.code,{children:"::after"})," tambi\xe9n se usan mucho para a\xf1adir formas o decoraciones puramente visuales con ",(0,n.jsx)(i.code,{children:'content: "";'}),", combinado con ",(0,n.jsx)(i.code,{children:"position"})," (que veremos m\xe1s adelante) o con ",(0,n.jsx)(i.code,{children:"border"}),"."]}),"\n",(0,n.jsxs)(i.h3,{id:"first-letter-y-first-line",children:[(0,n.jsx)(i.code,{children:"::first-letter"})," y ",(0,n.jsx)(i.code,{children:"::first-line"})]}),"\n",(0,n.jsx)(i.p,{children:"Seleccionan la primera letra o la primera l\xednea (visual, no una frase) de un elemento de texto."}),"\n",(0,n.jsx)(o.A,{initialHtml:'<p class="capitular">\xc9rase una vez un lenguaje de marcas que organizaba el contenido de las p\xe1ginas web, mientras que otro lenguaje se encargaba de darle estilo.</p>',initialCss:`.capitular::first-letter {
  font-size: 2.5em;
  font-weight: bold;
  color: darkred;
}

.capitular::first-line {
  font-variant: small-caps;
}`}),"\n",(0,n.jsx)(i.h3,{id:"selection",children:(0,n.jsx)(i.code,{children:"::selection"})}),"\n",(0,n.jsx)(i.p,{children:"Da estilo al texto mientras est\xe1 seleccionado por el usuario (al arrastrar el rat\xf3n sobre \xe9l)."}),"\n",(0,n.jsx)(o.A,{initialHtml:"<p>Selecciona este texto para ver el efecto.</p>",initialCss:`::selection {
  background-color: yellow;
  color: black;
}`}),"\n",(0,n.jsx)(i.h3,{id:"placeholder",children:(0,n.jsx)(i.code,{children:"::placeholder"})}),"\n",(0,n.jsxs)(i.p,{children:["Da estilo al texto de ayuda de un campo (el que se define con el atributo ",(0,n.jsx)(i.code,{children:"placeholder"}),"), antes de que el usuario escriba nada."]}),"\n",(0,n.jsx)(o.A,{initialHtml:'<input type="text" placeholder="Escribe aqu\xed..." />',initialCss:`::placeholder {
  color: lightgray;
  font-style: italic;
}`}),"\n",(0,n.jsx)(i.h2,{id:"especificidad",children:"Especificidad"}),"\n",(0,n.jsxs)(i.p,{children:["Como vimos en la p\xe1gina anterior: las ",(0,n.jsx)(i.strong,{children:"pseudoclases"})," cuentan como una clase a efectos de especificidad (mismo nivel que ",(0,n.jsx)(i.code,{children:".clase"})," o ",(0,n.jsx)(i.code,{children:"[atributo]"}),"), y los ",(0,n.jsx)(i.strong,{children:"pseudoelementos"})," cuentan como un tipo (mismo nivel que ",(0,n.jsx)(i.code,{children:"p"})," o ",(0,n.jsx)(i.code,{children:"div"}),"). Por eso ",(0,n.jsx)(i.code,{children:"a:hover"})," tiene la misma especificidad que ",(0,n.jsx)(i.code,{children:"a.destacado"}),", y ",(0,n.jsx)(i.code,{children:"p::first-letter"})," la misma que ",(0,n.jsx)(i.code,{children:"p span"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:":is()"})," y ",(0,n.jsx)(i.code,{children:":has()"})," son una excepci\xf3n: no cuentan como una clase fija, sino que adoptan la especificidad de su argumento m\xe1s espec\xedfico. Por ejemplo, ",(0,n.jsx)(i.code,{children:":is(#aviso, p)"})," cuenta como un id, porque ",(0,n.jsx)(i.code,{children:"#aviso"})," es el m\xe1s espec\xedfico de los dos argumentos."]}),"\n",(0,n.jsx)(i.h2,{id:"qu\xe9-viene-a-continuaci\xf3n",children:"Qu\xe9 viene a continuaci\xf3n"}),"\n",(0,n.jsx)(i.p,{children:"En la siguiente p\xe1gina veremos los colores y las unidades de medida de CSS."})]})}function p(e={}){let{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},944(e,i,s){s.d(i,{N:()=>a});var d=s(4848),n=s(6540),l=s(6069),o=s.n(l),r=s(8848);s(4312),s(1113),s(5723);let c={markup:"HTML",css:"CSS",javascript:"JavaScript"};function a({code:e,onChange:i,language:s}){let[l,u]=(0,n.useState)(!1),p=async()=>{await navigator.clipboard.writeText(e),u(!0),setTimeout(()=>u(!1),1500)};return(0,d.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,d.jsxs)("button",{type:"button",onClick:p,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:l?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[l?(0,d.jsx)(h,{}):(0,d.jsx)(t,{}),l?"Copiado":""]}),(0,d.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:c[s]})]}),(0,d.jsx)(o(),{value:e,onValueChange:i,highlight:e=>(0,r.highlight)(e,r.languages[s],s),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,d.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,d.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,d.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function h(){return(0,d.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,d.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},2084(e,i,s){s.d(i,{A:()=>c});var d=s(4848),n=s(6540),l=s(944),o=s(2793),r=s(1756);function c({initialHtml:e,initialCss:i="",initialJs:s="",layout:a="side-by-side",height:t=700}){let[h,u]=(0,n.useState)(e),[p,x]=(0,n.useState)(i),[m,j]=(0,n.useState)(s),v=(0,n.useMemo)(()=>{let e=m.replace(/<\/script>/gi,"<\\/script>");return`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${p}</style></head><body>${h}<script>${e}</script></body></html>`},[h,p,m]);return(0,d.jsx)(o.u,{layout:a,codePanel:(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,d.jsx)(l.N,{code:h,onChange:u,language:"markup"}),(0,d.jsx)(l.N,{code:p,onChange:x,language:"css"}),(0,d.jsx)(l.N,{code:m,onChange:j,language:"javascript"})]}),resultPanel:(0,d.jsx)(r.R,{doc:v,title:"Resultado HTML+CSS+JS",height:t})})}},6841(e,i,s){s.d(i,{A:()=>c});var d=s(4848),n=s(6540),l=s(944),o=s(2793),r=s(1756);function c({initialHtml:e,initialCss:i="",layout:s="side-by-side",height:a=460}){let[t,h]=(0,n.useState)(e),[u,p]=(0,n.useState)(i),x=(0,n.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${u}</style></head><body>${t}</body></html>`,[t,u]);return(0,d.jsx)(o.u,{layout:s,codePanel:(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,d.jsx)(l.N,{code:t,onChange:h,language:"markup"}),(0,d.jsx)(l.N,{code:u,onChange:p,language:"css"})]}),resultPanel:(0,d.jsx)(r.R,{doc:x,title:"Resultado HTML+CSS",height:a})})}},2793(e,i,s){s.d(i,{u:()=>n});var d=s(4848);function n({layout:e,codePanel:i,resultPanel:s}){return(0,d.jsx)("div",{style:{margin:"2rem 0"},children:(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,d.jsx)("div",{children:i}),(0,d.jsx)("div",{children:s})]})})}s(6540)},1756(e,i,s){s.d(i,{R:()=>o});var d=s(4848),n=s(6540),l=s(6497);function o({doc:e,title:i,height:s}){let r=(0,n.useRef)(null),[c,a]=(0,n.useState)(!1),t=(0,l.Ay)("/playground-frame.html");return(0,n.useEffect)(()=>{c&&r.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,c]),(0,d.jsx)("iframe",{ref:r,title:i,src:t,onLoad:()=>a(!0),sandbox:"allow-scripts",style:{width:"100%",height:s,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);