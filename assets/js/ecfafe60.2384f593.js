"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["6854"],{4340(e,a,o){o.r(a),o.d(a,{metadata:()=>r,default:()=>u,frontMatter:()=>n,contentTitle:()=>i,toc:()=>t,assets:()=>c});var r=JSON.parse('{"id":"css/colores-unidades","title":"Colores y unidades","description":"Colores y unidades de medida son dos de las piezas que m\xe1s vamos a usar en el resto del tema. Ya han aparecido de forma suelta en p\xe1ginas anteriores (color, %, px...); aqu\xed los vemos de forma ordenada, y adem\xe1s aprendemos a guardarlos en variables para no repetirlos por todo el CSS.","source":"@site/docs/lenguajes-de-marcas/css/04-colores-unidades.mdx","sourceDirName":"css","slug":"/css/colores-unidades","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/colores-unidades","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Colores y unidades"},"sidebar":"marcasSidebar","previous":{"title":"Pseudoclases y pseudoelementos","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/pseudoclases-pseudoelementos"},"next":{"title":"Texto y tipograf\xeda","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/texto-tipografia"}}'),s=o(4848),d=o(8453),l=o(6841);let n={sidebar_position:4,title:"Colores y unidades"},i,c={},t=[{value:"Formatos de color",id:"formatos-de-color",level:2},{value:"Transparencia",id:"transparencia",level:3},{value:"<code>currentColor</code>",id:"currentcolor",level:2},{value:"Accesibilidad: contraste de color",id:"accesibilidad-contraste-de-color",level:2},{value:"Unidades de medida",id:"unidades-de-medida",level:2},{value:"<code>em</code> frente a <code>rem</code>",id:"em-frente-a-rem",level:3},{value:"Unidades de viewport: <code>vh</code> frente a <code>svh</code>/<code>dvh</code>",id:"unidades-de-viewport-vh-frente-a-svhdvh",level:3},{value:"<code>calc()</code>",id:"calc",level:2},{value:"Variables CSS (propiedades personalizadas)",id:"variables-css-propiedades-personalizadas",level:2},{value:"Valor por defecto",id:"valor-por-defecto",level:3},{value:"\xc1mbito: redefinir una variable",id:"\xe1mbito-redefinir-una-variable",level:3},{value:"Variables m\xe1s all\xe1 del color",id:"variables-m\xe1s-all\xe1-del-color",level:3},{value:"<code>calc()</code> con variables",id:"calc-con-variables",level:3},{value:"<code>clamp()</code>, <code>min()</code> y <code>max()</code>",id:"clamp-min-y-max",level:2}];function p(e){let a={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Colores y unidades de medida son dos de las piezas que m\xe1s vamos a usar en el resto del tema. Ya han aparecido de forma suelta en p\xe1ginas anteriores (",(0,s.jsx)(a.code,{children:"color"}),", ",(0,s.jsx)(a.code,{children:"%"}),", ",(0,s.jsx)(a.code,{children:"px"}),"...); aqu\xed los vemos de forma ordenada, y adem\xe1s aprendemos a guardarlos en variables para no repetirlos por todo el CSS."]}),"\n",(0,s.jsx)(a.h2,{id:"formatos-de-color",children:"Formatos de color"}),"\n",(0,s.jsx)(a.p,{children:"CSS admite varias formas de escribir el mismo color:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Nombre:"})," ",(0,s.jsx)(a.code,{children:"red"}),", ",(0,s.jsx)(a.code,{children:"teal"}),", ",(0,s.jsx)(a.code,{children:"darkorange"}),"... CSS reconoce unos 140 nombres de color."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Hexadecimal:"})," ",(0,s.jsx)(a.code,{children:"#ff0000"}),", tres pares de d\xedgitos (rojo, verde, azul) en base 16. Tambi\xe9n existe la forma corta de 3 d\xedgitos, ",(0,s.jsx)(a.code,{children:"#f00"}),", cuando cada par se repite."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsxs)(a.strong,{children:[(0,s.jsx)(a.code,{children:"rgb()"}),":"]})," los mismos tres componentes (rojo, verde, azul), pero en base 10, de 0 a 255."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsxs)(a.strong,{children:[(0,s.jsx)(a.code,{children:"hsl()"}),":"]})," tono (",(0,s.jsx)(a.code,{children:"hue"}),", un \xe1ngulo de 0 a 360), saturaci\xf3n y luminosidad, ambas en porcentaje. Es el m\xe1s intuitivo para ajustar un color a mano: cambiar el tono es girar la rueda de color, sin tener que recalcular tres n\xfameros a la vez."]}),"\n"]}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="caja nombre">red</div>
<div class="caja hex">#ff0000</div>
<div class="caja rgb">rgb(255, 0, 0)</div>
<div class="caja hsl">hsl(0, 100%, 50%)</div>`,initialCss:`.caja {
  display: inline-block;
  width: 110px;
  padding: 10px;
  color: white;
  text-align: center;
}

.nombre {
  background-color: red;
}

.hex {
  background-color: #ff0000;
}

.rgb {
  background-color: rgb(255, 0, 0);
}

.hsl {
  background-color: hsl(0, 100%, 50%);
}`}),"\n",(0,s.jsx)(a.p,{children:"Los cuatro recuadros muestran exactamente el mismo color, escrito de cuatro formas distintas."}),"\n",(0,s.jsx)(a.h3,{id:"transparencia",children:"Transparencia"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"rgba()"})," y ",(0,s.jsx)(a.code,{children:"hsl()"})," (con una barra ",(0,s.jsx)(a.code,{children:"/"}),") a\xf1aden un cuarto valor, el ",(0,s.jsx)(a.strong,{children:"canal alfa"}),", de 0 (totalmente transparente) a 1 (totalmente opaco):"]}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="fondo">
  <div class="caja">rgba 25%</div>
  <div class="caja hsl">hsl 75%</div>
</div>`,initialCss:`.fondo {
  background-image: repeating-linear-gradient(45deg, #ccc 0 10px, #eee 10px 20px);
  padding: 10px;
}

.caja {
  display: inline-block;
  width: 120px;
  padding: 10px;
  color: black;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.25);
}

.hsl {
  background-color: hsl(0 100% 50% / 0.75);
}`}),"\n",(0,s.jsx)(a.p,{children:"El fondo a cuadros deja ver, a trav\xe9s del color semitransparente, cu\xe1nto se nota el patr\xf3n de debajo: con un 25% de opacidad se ve casi todo el fondo; con un 75%, casi nada."}),"\n",(0,s.jsx)(a.h2,{id:"currentcolor",children:(0,s.jsx)(a.code,{children:"currentColor"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"currentColor"})," es una palabra clave especial: siempre vale lo mismo que la propiedad ",(0,s.jsx)(a.code,{children:"color"}),' calculada en ese elemento. Es \xfatil para que un borde, una sombra o cualquier otra propiedad de color "seiga" autom\xe1ticamente al color del texto, sin tener que repetirlo ni crear una variable para algo tan puntual.']}),"\n",(0,s.jsx)(l.A,{initialHtml:`<blockquote class="cita cita-1">Esta cita usa un azul.</blockquote>
<blockquote class="cita cita-2">Esta cita usa un verde.</blockquote>`,initialCss:`.cita {
  padding: 8px 12px;
  border-left: 4px solid currentColor;
  font-style: italic;
}

.cita-1 {
  color: darkslateblue;
}

.cita-2 {
  color: darkgreen;
}`}),"\n",(0,s.jsxs)(a.p,{children:["El ",(0,s.jsx)(a.code,{children:"border-left"})," no menciona ning\xfan color propio: toma el que tenga ",(0,s.jsx)(a.code,{children:"color"})," en cada cita, as\xed que cambiar ",(0,s.jsx)(a.code,{children:"color"})," cambia tambi\xe9n el borde, sin tocar la regla del borde."]}),"\n",(0,s.jsx)(a.h2,{id:"accesibilidad-contraste-de-color",children:"Accesibilidad: contraste de color"}),"\n",(0,s.jsx)(a.p,{children:"No todas las combinaciones de color de texto y de fondo se leen bien. Un contraste insuficiente (por ejemplo, gris claro sobre blanco) dificulta la lectura, especialmente a personas con baja visi\xf3n. Antes de dar por buena una combinaci\xf3n de colores, conviene comprobar el contraste con alguna herramienta:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"WebAIM Contrast Checker:"})," p\xe1gina web donde se introducen los dos colores (texto y fondo) y da el ratio de contraste y si cumple los niveles de accesibilidad AA/AAA."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"El inspector del navegador:"})," en Chrome y Firefox, al inspeccionar un elemento y abrir el selector de color de la propiedad ",(0,s.jsx)(a.code,{children:"color"}),", se muestra directamente el ratio de contraste frente al fondo."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Lighthouse:"}),' la auditor\xeda de accesibilidad integrada en Chrome (pesta\xf1a "Lighthouse" de las herramientas de desarrollador) se\xf1ala autom\xe1ticamente los contrastes insuficientes de toda la p\xe1gina.']}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"unidades-de-medida",children:"Unidades de medida"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Unidad"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{children:"Es relativa a..."})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"px"})}),(0,s.jsx)(a.td,{children:"Absoluta"}),(0,s.jsx)(a.td,{children:"Nada, siempre mide lo mismo"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"%"})}),(0,s.jsx)(a.td,{children:"Relativa"}),(0,s.jsx)(a.td,{children:"El tama\xf1o del elemento contenedor"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"em"})}),(0,s.jsx)(a.td,{children:"Relativa"}),(0,s.jsxs)(a.td,{children:["El ",(0,s.jsx)(a.code,{children:"font-size"})," del propio elemento (o del padre, si no se ha definido en el propio elemento)"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"rem"})}),(0,s.jsx)(a.td,{children:"Relativa"}),(0,s.jsxs)(a.td,{children:["El ",(0,s.jsx)(a.code,{children:"font-size"})," del elemento ra\xedz (",(0,s.jsx)(a.code,{children:"<html>"}),")"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.code,{children:"vw"})," / ",(0,s.jsx)(a.code,{children:"vh"})]}),(0,s.jsx)(a.td,{children:"Relativa"}),(0,s.jsx)(a.td,{children:"El ancho/alto de la ventana del navegador"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.code,{children:"svh"})," / ",(0,s.jsx)(a.code,{children:"dvh"})]}),(0,s.jsx)(a.td,{children:"Relativa"}),(0,s.jsx)(a.td,{children:'El alto "peque\xf1o"/"din\xe1mico" de la ventana (ver m\xe1s abajo)'})]})]})]}),"\n",(0,s.jsxs)(a.h3,{id:"em-frente-a-rem",children:[(0,s.jsx)(a.code,{children:"em"})," frente a ",(0,s.jsx)(a.code,{children:"rem"})]}),"\n",(0,s.jsxs)(a.p,{children:["Ambas se basan en un tama\xf1o de fuente, pero ",(0,s.jsx)(a.code,{children:"em"})," se acumula con el anidamiento (porque cada elemento mira al ",(0,s.jsx)(a.code,{children:"font-size"})," de su padre) y ",(0,s.jsx)(a.code,{children:"rem"})," no (porque siempre mira a la ra\xedz, sin importar cu\xe1ntos niveles de anidamiento haya):"]}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="nivel-em">
  Nivel 1 (em)
  <div class="nivel-em">
      Nivel 2 (em)
      <div class="nivel-em">
          Nivel 3 (em)
      </div>
  </div>
</div>

<div class="nivel-rem">
  Nivel 1 (rem)
  <div class="nivel-rem">
      Nivel 2 (rem)
      <div class="nivel-rem">
          Nivel 3 (rem)
      </div>
  </div>
</div>`,initialCss:`.nivel-em {
  font-size: 1.2em;
  border: 1px solid #ccc;
  padding: 6px;
}

.nivel-rem {
  font-size: 1.2rem;
  border: 1px solid #ccc;
  padding: 6px;
}`}),"\n",(0,s.jsxs)(a.p,{children:["En el primer bloque, el texto crece en cada nivel (1.2em del padre, que a su vez ya era 1.2em del suyo...). En el segundo, los tres niveles miden exactamente lo mismo, porque ",(0,s.jsx)(a.code,{children:"rem"})," ignora el anidamiento y siempre mira al tama\xf1o de fuente de ",(0,s.jsx)(a.code,{children:"<html>"}),"."]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["Por eso ",(0,s.jsx)(a.code,{children:"rem"})," suele preferirse para tama\xf1os de fuente y espaciados generales (resultado predecible, sin sorpresas por anidamiento), y ",(0,s.jsx)(a.code,{children:"em"})," se reserva para cuando s\xed interesa que algo escale junto con el texto que lo rodea (por ejemplo, el espaciado interno de un bot\xf3n, para que crezca si el texto del bot\xf3n crece)."]})}),"\n",(0,s.jsxs)(a.h3,{id:"unidades-de-viewport-vh-frente-a-svhdvh",children:["Unidades de viewport: ",(0,s.jsx)(a.code,{children:"vh"})," frente a ",(0,s.jsx)(a.code,{children:"svh"}),"/",(0,s.jsx)(a.code,{children:"dvh"})]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"100vh"})," mide toda la altura de la ventana del navegador. El problema aparece en m\xf3vil: muchos navegadores muestran y ocultan barras (la de direcciones, por ejemplo) al hacer scroll, y ",(0,s.jsx)(a.code,{children:"vh"})," no se recalculaba con ese cambio, lo que provocaba que un elemento con ",(0,s.jsx)(a.code,{children:"height: 100vh"})," quedara cortado o dejara un hueco seg\xfan el momento."]}),"\n",(0,s.jsx)(a.p,{children:"Para resolverlo existen variantes m\xe1s nuevas:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"svh"})," (",(0,s.jsx)(a.em,{children:"small viewport height"}),"): la altura cuando las barras del navegador est\xe1n visibles (el valor m\xe1s peque\xf1o posible)."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"lvh"})," (",(0,s.jsx)(a.em,{children:"large viewport height"}),"): la altura cuando las barras est\xe1n ocultas (el valor m\xe1s grande posible)."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"dvh"})," (",(0,s.jsx)(a.em,{children:"dynamic viewport height"}),"): se recalcula en tiempo real seg\xfan las barras est\xe9n visibles o no en cada momento."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Este efecto no se puede apreciar bien en el entorno de prueba de esta p\xe1gina, porque el tama\xf1o de la ventana de la demo es fijo; pru\xe9balo directamente en el m\xf3vil con ",(0,s.jsx)(a.code,{children:"height: 100dvh"})," para notar la diferencia frente a ",(0,s.jsx)(a.code,{children:"100vh"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"calc",children:(0,s.jsx)(a.code,{children:"calc()"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"calc()"}),' permite combinar unidades distintas en un mismo c\xe1lculo, algo que no se puede hacer con una simple suma de n\xfameros. Es imprescindible, por ejemplo, para "el 100% del ancho menos un margen fijo en p\xedxeles":']}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="contenedor">
  <div class="caja-100">width: 100%</div>
  <div class="caja-calc">width: calc(100% - 40px)</div>
</div>`,initialCss:`.contenedor {
  background-color: #eee;
  padding: 10px;
}

.caja-100, .caja-calc {
  background-color: teal;
  color: white;
  padding: 8px;
  margin-bottom: 6px;
  box-sizing: border-box;
}

.caja-calc {
  background-color: darkorange;
}`}),"\n",(0,s.jsxs)(a.p,{children:["F\xedjate en el espacio que queda a la derecha de la caja naranja: son los 40px que ",(0,s.jsx)(a.code,{children:"calc()"})," ha restado al 100% del contenedor. La sintaxis exige espacios alrededor de ",(0,s.jsx)(a.code,{children:"+"})," y ",(0,s.jsx)(a.code,{children:"-"})," (",(0,s.jsx)(a.code,{children:"calc(100% - 40px)"}),", nunca ",(0,s.jsx)(a.code,{children:"calc(100%-40px)"}),"), porque si no, CSS no sabr\xeda distinguir el signo del operador de un signo pegado al n\xfamero."]}),"\n",(0,s.jsx)(a.h2,{id:"variables-css-propiedades-personalizadas",children:"Variables CSS (propiedades personalizadas)"}),"\n",(0,s.jsxs)(a.p,{children:["Una variable CSS se declara con dos guiones delante del nombre (",(0,s.jsx)(a.code,{children:"--color-principal"}),") y se lee con la funci\xf3n ",(0,s.jsx)(a.code,{children:"var()"}),". Se pueden declarar en cualquier selector, pero lo habitual es declararlas en ",(0,s.jsx)(a.code,{children:":root"})," para que est\xe9n disponibles en todo el documento:"]}),"\n",(0,s.jsx)(l.A,{initialHtml:`<button class="boton">Aceptar</button>
<p class="aviso">Aviso con el mismo color.</p>`,initialCss:`:root {
  --color-principal: teal;
}

.boton {
  background-color: var(--color-principal);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.aviso {
  color: var(--color-principal);
  font-weight: bold;
}`}),"\n",(0,s.jsxs)(a.p,{children:["Cambiar ",(0,s.jsx)(a.code,{children:"--color-principal"})," en un solo sitio actualiza a la vez el bot\xf3n y el aviso, en vez de tener que buscar y cambiar ",(0,s.jsx)(a.code,{children:"teal"})," en cada regla que lo use."]}),"\n",(0,s.jsx)(a.h3,{id:"valor-por-defecto",children:"Valor por defecto"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"var()"})," admite un segundo argumento: el valor que se usar\xe1 si la variable no existe (por ejemplo, porque a\xfan no se ha declarado, o se ha escrito mal el nombre):"]}),"\n",(0,s.jsx)(l.A,{initialHtml:`<p class="correcta">Usa --color-texto (s\xed existe)</p>
<p class="con-fallback">Usa --color-inexistente (no existe, usa el valor por defecto)</p>`,initialCss:`:root {
  --color-texto: darkslateblue;
}

.correcta {
  color: var(--color-texto, black);
}

.con-fallback {
  color: var(--color-inexistente, gray);
}`}),"\n",(0,s.jsxs)(a.p,{children:["El segundo p\xe1rrafo queda en gris: como ",(0,s.jsx)(a.code,{children:"--color-inexistente"})," no se ha declarado en ning\xfan sitio, ",(0,s.jsx)(a.code,{children:"var()"})," recurre al valor alternativo en vez de fallar o dejar la propiedad sin aplicar."]}),"\n",(0,s.jsx)(a.h3,{id:"\xe1mbito-redefinir-una-variable",children:"\xc1mbito: redefinir una variable"}),"\n",(0,s.jsx)(a.p,{children:"Una variable se puede volver a declarar dentro de un selector m\xe1s concreto, y ese nuevo valor solo afecta a ese selector y a lo que haya dentro de \xe9l, sin tocar el valor general:"}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="tarjeta">Tarjeta normal</div>
<div class="tarjeta tarjeta-alerta">Tarjeta de alerta</div>
<div class="tarjeta">Otra tarjeta normal</div>`,initialCss:`:root {
  --color-tarjeta: teal;
}

.tarjeta {
  border: 3px solid var(--color-tarjeta);
  padding: 10px;
  margin-bottom: 8px;
}

.tarjeta-alerta {
  --color-tarjeta: crimson;
}`}),"\n",(0,s.jsxs)(a.p,{children:["Las dos tarjetas normales usan el valor de ",(0,s.jsx)(a.code,{children:":root"})," (",(0,s.jsx)(a.code,{children:"teal"}),"); la de alerta redefine ",(0,s.jsx)(a.code,{children:"--color-tarjeta"})," solo para s\xed misma, y como el borde se sigue leyendo con ",(0,s.jsx)(a.code,{children:"var(--color-tarjeta)"}),", cambia de color sin tocar la regla ",(0,s.jsx)(a.code,{children:".tarjeta"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"variables-m\xe1s-all\xe1-del-color",children:"Variables m\xe1s all\xe1 del color"}),"\n",(0,s.jsx)(a.p,{children:'Una variable CSS puede guardar cualquier valor, no solo colores: un espaciado, un radio de borde, una fuente... Declarando varias variables relacionadas se puede montar un peque\xf1o "sistema de dise\xf1o" que varios componentes comparten:'}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="tarjeta">
  <h3>Tarjeta 1</h3>
  <p>Todo el espaciado y los bordes salen de las mismas variables.</p>
</div>
<div class="tarjeta">
  <h3>Tarjeta 2</h3>
  <p>Cambia una variable y las dos tarjetas cambian a la vez.</p>
</div>`,initialCss:`:root {
  --color-principal: teal;
  --espaciado: 12px;
  --radio-borde: 8px;
}

.tarjeta {
  border: 2px solid var(--color-principal);
  border-radius: var(--radio-borde);
  padding: var(--espaciado);
  margin-bottom: var(--espaciado);
}

.tarjeta h3 {
  color: var(--color-principal);
  margin-top: 0;
}`}),"\n",(0,s.jsxs)(a.p,{children:["Prueba a cambiar solo ",(0,s.jsx)(a.code,{children:"--espaciado"})," o ",(0,s.jsx)(a.code,{children:"--radio-borde"})," en el CSS: como todas las propiedades que lo usan son ",(0,s.jsx)(a.code,{children:"var(--espaciado)"})," y ",(0,s.jsx)(a.code,{children:"var(--radio-borde)"}),", un solo cambio se nota en todas partes a la vez."]}),"\n",(0,s.jsxs)(a.h3,{id:"calc-con-variables",children:[(0,s.jsx)(a.code,{children:"calc()"})," con variables"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"calc()"})," y ",(0,s.jsx)(a.code,{children:"var()"}),' se combinan a menudo: es una forma habitual de derivar un valor a partir de otro sin declarar una segunda variable aparte, por ejemplo para que un espaciado "grande" sea siempre el doble que el espaciado base:']}),"\n",(0,s.jsx)(l.A,{initialHtml:`<div class="caja">padding = var(--espaciado)</div>
<div class="caja caja-grande">padding = calc(var(--espaciado) * 2)</div>`,initialCss:`:root {
  --espaciado: 10px;
}

.caja {
  background-color: teal;
  color: white;
  padding: var(--espaciado);
  margin-bottom: 8px;
}

.caja-grande {
  background-color: darkorange;
  padding: calc(var(--espaciado) * 2);
}`}),"\n",(0,s.jsxs)(a.p,{children:["Si cambias ",(0,s.jsx)(a.code,{children:"--espaciado"})," en ",(0,s.jsx)(a.code,{children:":root"}),", la segunda caja sigue manteniendo el doble de espaciado que la primera, porque su valor depende del de la variable en vez de estar escrito a mano."]}),"\n",(0,s.jsxs)(a.h2,{id:"clamp-min-y-max",children:[(0,s.jsx)(a.code,{children:"clamp()"}),", ",(0,s.jsx)(a.code,{children:"min()"})," y ",(0,s.jsx)(a.code,{children:"max()"})]}),"\n",(0,s.jsx)(a.p,{children:"Estas tres funciones permiten que un valor se adapte a su contexto sin necesidad de escribir una media query:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"min(a, b)"}),": usa el ",(0,s.jsx)(a.strong,{children:"m\xe1s peque\xf1o"})," de los dos valores."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"max(a, b)"}),": usa el ",(0,s.jsx)(a.strong,{children:"m\xe1s grande"})," de los dos valores."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"clamp(m\xednimo, preferido, m\xe1ximo)"}),": usa el valor preferido, pero sin bajar del m\xednimo ni subir del m\xe1ximo. Es, en realidad, un atajo de ",(0,s.jsx)(a.code,{children:"max(m\xednimo, min(preferido, m\xe1ximo))"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:'Se usan mucho para tama\xf1os de fuente "fluidos": que crezcan con el ancho de la ventana, pero sin hacerse nunca demasiado peque\xf1os ni demasiado grandes.'}),"\n",(0,s.jsx)(l.A,{initialHtml:'<p class="fluido">Cambia el ancho de la ventana de la demo (o del navegador) para ver c\xf3mo cambia este texto.</p>',initialCss:`.fluido {
  font-size: clamp(1rem, 4vw, 2.5rem);
}`}),"\n",(0,s.jsxs)(a.p,{children:["Aqu\xed, ",(0,s.jsx)(a.code,{children:"1rem"})," es el tama\xf1o m\xednimo, ",(0,s.jsx)(a.code,{children:"4vw"}),' el tama\xf1o "preferido" (que depende del ancho de la ventana) y ',(0,s.jsx)(a.code,{children:"2.5rem"})," el m\xe1ximo. En una ventana estrecha, ",(0,s.jsx)(a.code,{children:"4vw"})," da un valor menor que ",(0,s.jsx)(a.code,{children:"1rem"}),", as\xed que ",(0,s.jsx)(a.code,{children:"clamp()"})," usa el m\xednimo; en una ventana muy ancha, ",(0,s.jsx)(a.code,{children:"4vw"})," supera ",(0,s.jsx)(a.code,{children:"2.5rem"}),", as\xed que usa el m\xe1ximo; en medio, usa el valor fluido tal cual."]}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"clamp()"})," resuelve de un plumazo muchos casos en los que antes hac\xedan falta dos o tres media queries solo para ir ajustando un ",(0,s.jsx)(a.code,{children:"font-size"}),'. No sustituye a las media queries para cambios de dise\xf1o m\xe1s grandes (eso lo veremos en la p\xe1gina de dise\xf1o responsive), pero para un valor num\xe9rico que solo necesita "crecer un poco, con l\xedmites", suele ser la opci\xf3n m\xe1s simple.']})})]})}function u(e={}){let{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},944(e,a,o){o.d(a,{N:()=>c});var r=o(4848),s=o(6540),d=o(6069),l=o.n(d),n=o(8848);o(4312),o(1113),o(5723);let i={markup:"HTML",css:"CSS",javascript:"JavaScript"};function c({code:e,onChange:a,language:o}){let[d,u]=(0,s.useState)(!1),m=async()=>{await navigator.clipboard.writeText(e),u(!0),setTimeout(()=>u(!1),1500)};return(0,r.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,r.jsxs)("button",{type:"button",onClick:m,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:d?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[d?(0,r.jsx)(p,{}):(0,r.jsx)(t,{}),d?"Copiado":""]}),(0,r.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:i[o]})]}),(0,r.jsx)(l(),{value:e,onValueChange:a,highlight:e=>(0,n.highlight)(e,n.languages[o],o),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,r.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,r.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,r.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return(0,r.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,a,o){o.d(a,{A:()=>i});var r=o(4848),s=o(6540),d=o(944),l=o(2793),n=o(1756);function i({initialHtml:e,initialCss:a="",layout:o="side-by-side",height:c=460}){let[t,p]=(0,s.useState)(e),[u,m]=(0,s.useState)(a),h=(0,s.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${u}</style></head><body>${t}</body></html>`,[t,u]);return(0,r.jsx)(l.u,{layout:o,codePanel:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,r.jsx)(d.N,{code:t,onChange:p,language:"markup"}),(0,r.jsx)(d.N,{code:u,onChange:m,language:"css"})]}),resultPanel:(0,r.jsx)(n.R,{doc:h,title:"Resultado HTML+CSS",height:c})})}},2793(e,a,o){o.d(a,{u:()=>s});var r=o(4848);function s({layout:e,codePanel:a,resultPanel:o}){return(0,r.jsx)("div",{style:{margin:"2rem 0"},children:(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,r.jsx)("div",{children:a}),(0,r.jsx)("div",{children:o})]})})}o(6540)},1756(e,a,o){o.d(a,{R:()=>l});var r=o(4848),s=o(6540),d=o(6497);function l({doc:e,title:a,height:o}){let n=(0,s.useRef)(null),[i,c]=(0,s.useState)(!1),t=(0,d.Ay)("/playground-frame.html");return(0,s.useEffect)(()=>{i&&n.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,i]),(0,r.jsx)("iframe",{ref:n,title:a,src:t,onLoad:()=>c(!0),sandbox:"allow-scripts",style:{width:"100%",height:o,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);