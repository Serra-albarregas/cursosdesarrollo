"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["2388"],{5468(e,a,i){i.r(a),i.d(a,{metadata:()=>n,default:()=>h,frontMatter:()=>d,contentTitle:()=>c,toc:()=>t,assets:()=>l});var n=JSON.parse('{"id":"css/fondos-efectos","title":"Fondos y efectos","description":"Esta p\xe1gina re\xfane lo que decora una caja por dentro y por fuera: fondos, degradados, esquinas redondeadas, sombras, transparencias y efectos de cristal. Al final, las transiciones permiten suavizar cualquiera de estos cambios en vez de que ocurran de golpe.","source":"@site/docs/lenguajes-de-marcas/css/11-fondos-efectos.mdx","sourceDirName":"css","slug":"/css/fondos-efectos","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/fondos-efectos","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"Fondos y efectos"},"sidebar":"marcasSidebar","previous":{"title":"Grid","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/grid"}}'),r=i(4848),o=i(8453),s=i(6841);let d={sidebar_position:11,title:"Fondos y efectos"},c,l={},t=[{value:"Fondos",id:"fondos",level:2},{value:"<code>background-repeat</code>",id:"background-repeat",level:3},{value:"<code>background-position</code>",id:"background-position",level:3},{value:"<code>background-size</code>",id:"background-size",level:3},{value:"<code>background-attachment</code>",id:"background-attachment",level:3},{value:"Degradados",id:"degradados",level:2},{value:"<code>linear-gradient</code>",id:"linear-gradient",level:3},{value:"<code>radial-gradient</code> y <code>conic-gradient</code>",id:"radial-gradient-y-conic-gradient",level:3},{value:"Degradados repetidos",id:"degradados-repetidos",level:3},{value:"Varios fondos y la abreviatura <code>background</code>",id:"varios-fondos-y-la-abreviatura-background",level:2},{value:"Varias capas de fondo",id:"varias-capas-de-fondo",level:3},{value:"La abreviatura <code>background</code>",id:"la-abreviatura-background",level:3},{value:"<code>border-radius</code>",id:"border-radius",level:2},{value:"<code>box-shadow</code>",id:"box-shadow",level:2},{value:"<code>opacity</code>",id:"opacity",level:2},{value:"<code>backdrop-filter</code>",id:"backdrop-filter",level:2},{value:"Texto con degradado: <code>background-clip</code>",id:"texto-con-degradado-background-clip",level:2},{value:"Transiciones",id:"transiciones",level:2},{value:"Primera transici\xf3n",id:"primera-transici\xf3n",level:3},{value:"Las propiedades de una transici\xf3n",id:"las-propiedades-de-una-transici\xf3n",level:3},{value:"D\xf3nde se escribe la transici\xf3n",id:"d\xf3nde-se-escribe-la-transici\xf3n",level:3},{value:"Funciones de temporizaci\xf3n",id:"funciones-de-temporizaci\xf3n",level:3},{value:"Retraso con <code>transition-delay</code>",id:"retraso-con-transition-delay",level:3},{value:"Varias propiedades a la vez",id:"varias-propiedades-a-la-vez",level:3},{value:"Qu\xe9 se puede animar y qu\xe9 no",id:"qu\xe9-se-puede-animar-y-qu\xe9-no",level:3},{value:"Casos pr\xe1cticos",id:"casos-pr\xe1cticos",level:3}];function p(e){let a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Esta p\xe1gina re\xfane lo que decora una caja por dentro y por fuera: fondos, degradados, esquinas redondeadas, sombras, transparencias y efectos de cristal. Al final, las transiciones permiten suavizar cualquiera de estos cambios en vez de que ocurran de golpe."}),"\n",(0,r.jsx)(a.h2,{id:"fondos",children:"Fondos"}),"\n",(0,r.jsxs)(a.p,{children:["Ya hemos usado ",(0,r.jsx)(a.code,{children:"background-color"})," en muchas p\xe1ginas. Un elemento tambi\xe9n puede tener una ",(0,r.jsx)(a.strong,{children:"imagen de fondo"})," con ",(0,r.jsx)(a.code,{children:"background-image"}),", que se coloca detr\xe1s del contenido y se controla con otras cuatro propiedades: ",(0,r.jsx)(a.code,{children:"background-repeat"}),", ",(0,r.jsx)(a.code,{children:"background-position"}),", ",(0,r.jsx)(a.code,{children:"background-size"})," y ",(0,r.jsx)(a.code,{children:"background-attachment"}),"."]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Para no depender de archivos, los ejemplos de esta p\xe1gina usan im\xe1genes SVG escritas directamente dentro del CSS (",(0,r.jsx)(a.code,{children:'url("data:image/svg+xml,...")'}),"). En un proyecto real escribir\xedas simplemente ",(0,r.jsx)(a.code,{children:'url("imagen.jpg")'}),", con la ruta de tu archivo. Para no repetir esa imagen en cada regla, la guardamos en una variable CSS (",(0,r.jsx)(a.code,{children:"--tile"}),", ",(0,r.jsx)(a.code,{children:"--escena"}),"), como vimos en la p\xe1gina de colores y unidades."]})}),"\n",(0,r.jsx)(a.h3,{id:"background-repeat",children:(0,r.jsx)(a.code,{children:"background-repeat"})}),"\n",(0,r.jsx)(a.p,{children:"Por defecto, una imagen de fondo se repite como un mosaico hasta cubrir todo el elemento."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"repeat"}),": se repite en horizontal y en vertical (valor por defecto)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"no-repeat"}),": se muestra una sola vez."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"repeat-x"}),": se repite solo en horizontal."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"repeat-y"}),": se repite solo en vertical."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja r1"><span>repeat</span></div>
<div class="caja r2"><span>no-repeat</span></div>
<div class="caja r3"><span>repeat-x</span></div>
<div class="caja r4"><span>repeat-y</span></div>`,initialCss:`:root {
  --tile: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='10' fill='%23e76f51'/></svg>");
}

.caja {
  display: inline-block;
  width: 130px;
  height: 90px;
  margin: 4px;
  border: 1px solid #999;
  background-image: var(--tile);
}

span {
  background-color: white;
  padding: 2px 4px;
  font-size: 0.75rem;
}

.r1 { background-repeat: repeat; }
.r2 { background-repeat: no-repeat; }
.r3 { background-repeat: repeat-x; }
.r4 { background-repeat: repeat-y; }`,layout:"stacked"}),"\n",(0,r.jsx)(a.h3,{id:"background-position",children:(0,r.jsx)(a.code,{children:"background-position"})}),"\n",(0,r.jsxs)(a.p,{children:["Indica d\xf3nde se coloca la imagen dentro del elemento. Admite palabras clave (",(0,r.jsx)(a.code,{children:"center"}),", ",(0,r.jsx)(a.code,{children:"top"}),", ",(0,r.jsx)(a.code,{children:"right"}),", ",(0,r.jsx)(a.code,{children:"bottom"}),", ",(0,r.jsx)(a.code,{children:"left"}),", y combinaciones como ",(0,r.jsx)(a.code,{children:"top right"}),"), medidas (",(0,r.jsx)(a.code,{children:"20px 10px"}),", primero la horizontal y luego la vertical) y porcentajes."]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja p1"><span>center</span></div>
<div class="caja p2"><span>top right</span></div>
<div class="caja p3"><span>20px 10px</span></div>
<div class="caja p4"><span>75% 25%</span></div>`,initialCss:`:root {
  --tile: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='10' fill='%23e76f51'/></svg>");
}

.caja {
  display: inline-block;
  width: 130px;
  height: 90px;
  margin: 4px;
  border: 1px solid #999;
  background-image: var(--tile);
  background-repeat: no-repeat;
}

span {
  background-color: white;
  padding: 2px 4px;
  font-size: 0.75rem;
}

.p1 { background-position: center; }
.p2 { background-position: top right; }
.p3 { background-position: 20px 10px; }
.p4 { background-position: 75% 25%; }`,layout:"stacked"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["Con porcentajes, ",(0,r.jsx)(a.code,{children:"50% 50%"})," es lo mismo que ",(0,r.jsx)(a.code,{children:"center"}),". Un porcentaje alinea ese punto de la imagen con ese mismo punto del elemento: por eso ",(0,r.jsx)(a.code,{children:"100%"})," pega la imagen al borde derecho (su borde derecho coincide con el del elemento), en vez de sacarla fuera."]})}),"\n",(0,r.jsx)(a.h3,{id:"background-size",children:(0,r.jsx)(a.code,{children:"background-size"})}),"\n",(0,r.jsx)(a.p,{children:"Controla el tama\xf1o de la imagen de fondo. Los valores m\xe1s importantes son:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"auto"}),": la imagen conserva su tama\xf1o original (valor por defecto)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"cover"}),": la imagen se escala lo justo para ",(0,r.jsx)(a.strong,{children:"cubrir todo"})," el elemento, sin dejar huecos, aunque eso recorte una parte."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"contain"}),": la imagen se escala lo justo para que ",(0,r.jsx)(a.strong,{children:"quepa entera"}),", aunque eso deje huecos vac\xedos a los lados."]}),"\n",(0,r.jsxs)(a.li,{children:["Una medida o un porcentaje (",(0,r.jsx)(a.code,{children:"60px 60px"}),", ",(0,r.jsx)(a.code,{children:"50% auto"}),"): tama\xf1o concreto. Si das dos valores que no respetan la proporci\xf3n de la imagen, esta se deforma."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja t1"><span>auto</span></div>
<div class="caja t2"><span>cover</span></div>
<div class="caja t3"><span>contain</span></div>
<div class="caja t4"><span>60px 60px</span></div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.caja {
  display: inline-block;
  vertical-align: top;
  width: 150px;
  height: 220px;
  margin: 4px;
  border: 1px solid #999;
  background-color: #eee;
  background-image: var(--escena);
  background-repeat: no-repeat;
  background-position: center;
}

span {
  background-color: white;
  padding: 2px 4px;
  font-size: 0.75rem;
}

.t1 { background-size: auto; }
.t2 { background-size: cover; }
.t3 { background-size: contain; }
.t4 { background-size: 60px 60px; }`,layout:"stacked"}),"\n",(0,r.jsxs)(a.p,{children:["La imagen original mide 300x150 (el doble de ancha que alta) y las cajas son m\xe1s altas que anchas (150x220). Con ",(0,r.jsx)(a.code,{children:"auto"})," se ve a su tama\xf1o real: se corta por los lados y sobran franjas arriba y abajo (el gris de fondo). Con ",(0,r.jsx)(a.code,{children:"cover"})," se ampl\xeda hasta llenar toda la caja, y por eso se recorta mucho por los lados. Con ",(0,r.jsx)(a.code,{children:"contain"})," se ve completa, m\xe1s peque\xf1a, y sobran franjas arriba y abajo. Con ",(0,r.jsx)(a.code,{children:"60px 60px"})," se deforma."]}),"\n",(0,r.jsx)(a.h3,{id:"background-attachment",children:(0,r.jsx)(a.code,{children:"background-attachment"})}),"\n",(0,r.jsx)(a.p,{children:"Define si el fondo se desplaza junto con el contenido al hacer scroll o se queda fijo respecto a la ventana."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"scroll"}),": el fondo se mueve con el elemento (valor por defecto)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"fixed"}),': el fondo se queda fijo respecto a la ventana, y el elemento funciona como una "ventana" por la que se ve.']}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<p>Despl\xe1zate hacia abajo dentro de esta demo.</p>
<div class="banda">Banda con fondo fixed</div>
<div class="relleno">Contenido de relleno</div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.banda {
  height: 120px;
  padding: 8px;
  color: white;
  font-weight: bold;
  background-image: var(--escena);
  background-size: cover;
  background-attachment: fixed;
}

.relleno {
  height: 500px;
  padding: 8px;
  background-color: #f4f4f4;
}`}),"\n",(0,r.jsx)(a.p,{children:"Al hacer scroll, la banda no arrastra la imagen consigo: va mostrando partes distintas de la misma imagen, que permanece quieta detr\xe1s."}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"background-attachment: fixed"})," no se comporta igual en todos los navegadores m\xf3viles (en varios se ignora), as\xed que conviene no depender de \xe9l para algo importante."]})}),"\n",(0,r.jsx)(a.h2,{id:"degradados",children:"Degradados"}),"\n",(0,r.jsxs)(a.p,{children:["Un degradado es una imagen generada por el propio CSS, sin necesidad de ning\xfan archivo. Se usa como valor de ",(0,r.jsx)(a.code,{children:"background-image"})," (o de la abreviatura ",(0,r.jsx)(a.code,{children:"background"}),"), ",(0,r.jsx)(a.strong,{children:"no"})," de ",(0,r.jsx)(a.code,{children:"background-color"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"linear-gradient",children:(0,r.jsx)(a.code,{children:"linear-gradient"})}),"\n",(0,r.jsxs)(a.p,{children:["Pasa de un color a otro en l\xednea recta. Su sintaxis es ",(0,r.jsx)(a.code,{children:"linear-gradient(direcci\xf3n, color1, color2, ...)"}),":"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["La ",(0,r.jsx)(a.strong,{children:"direcci\xf3n"})," puede ser una palabra (",(0,r.jsx)(a.code,{children:"to right"}),", ",(0,r.jsx)(a.code,{children:"to bottom right"}),"...) o un \xe1ngulo (",(0,r.jsx)(a.code,{children:"90deg"}),"). ",(0,r.jsx)(a.code,{children:"0deg"})," apunta hacia arriba y los \xe1ngulos crecen en sentido horario: ",(0,r.jsx)(a.code,{children:"90deg"})," hacia la derecha, ",(0,r.jsx)(a.code,{children:"180deg"})," hacia abajo. Si se omite, es ",(0,r.jsx)(a.code,{children:"to bottom"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Cada color puede llevar una ",(0,r.jsx)(a.strong,{children:"posici\xf3n"})," (",(0,r.jsx)(a.code,{children:"red 30%"}),"). Si dos colores seguidos tienen la misma posici\xf3n, no hay degradado entre ellos, sino un corte limpio."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja g1">por defecto</div>
<div class="caja g2">to right</div>
<div class="caja g3">135deg, 3 colores</div>
<div class="caja g4">con posiciones</div>
<div class="caja g5">corte limpio</div>
<div class="caja g6">transparencia</div>`,initialCss:`.caja {
  display: inline-block;
  width: 130px;
  height: 90px;
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
  color: white;
  font-size: 0.8rem;
  text-shadow: 0 0 3px black;
  border: 1px solid #999;
}

.g1 { background-image: linear-gradient(#e76f51, #2a9d8f); }
.g2 { background-image: linear-gradient(to right, #e76f51, #2a9d8f); }
.g3 { background-image: linear-gradient(135deg, #e76f51, #e9c46a, #2a9d8f); }
.g4 { background-image: linear-gradient(to right, #e76f51 0%, #e76f51 30%, #2a9d8f 70%, #2a9d8f 100%); }
.g5 { background-image: linear-gradient(to right, #e76f51 50%, #2a9d8f 50%); }
.g6 { background-image: linear-gradient(90deg, rgba(231, 111, 81, 1), rgba(231, 111, 81, 0)); }`,layout:"stacked"}),"\n",(0,r.jsxs)(a.h3,{id:"radial-gradient-y-conic-gradient",children:[(0,r.jsx)(a.code,{children:"radial-gradient"})," y ",(0,r.jsx)(a.code,{children:"conic-gradient"})]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"radial-gradient"}),": los colores se reparten desde un punto central hacia fuera, en forma de elipse (por defecto) o de c\xedrculo (",(0,r.jsx)(a.code,{children:"circle"}),"). Con ",(0,r.jsx)(a.code,{children:"at"})," se cambia el centro: ",(0,r.jsx)(a.code,{children:"radial-gradient(circle at 70% 30%, white, teal)"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"conic-gradient"}),": los colores se reparten girando alrededor de un punto central, como las agujas de un reloj. Con posiciones iguales se consiguen sectores: la base de los gr\xe1ficos de tarta hechos solo con CSS."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="forma f1">elipse</div>
<div class="forma f2">c\xedrculo</div>
<div class="forma f3">esfera</div>
<div class="forma f4">c\xf3nico</div>
<div class="forma f5">tarta</div>`,initialCss:`.forma {
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
  color: white;
  font-size: 0.75rem;
  text-shadow: 0 0 3px black;
}

.f1 { background-image: radial-gradient(#e9c46a, #e76f51); }
.f2 { background-image: radial-gradient(circle, #e9c46a, #e76f51); }
.f3 {
  background-image: radial-gradient(circle at 70% 30%, white, #1b5e56);
  border-radius: 50%;
}
.f4 {
  background-image: conic-gradient(red, yellow, lime, cyan, blue, magenta, red);
  border-radius: 50%;
}
.f5 {
  background-image: conic-gradient(#2a9d8f 0 40%, #e9c46a 40% 70%, #e76f51 70% 100%);
  border-radius: 50%;
}`,layout:"stacked"}),"\n",(0,r.jsx)(a.h3,{id:"degradados-repetidos",children:"Degradados repetidos"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"repeating-linear-gradient"})," y ",(0,r.jsx)(a.code,{children:"repeating-radial-gradient"})," repiten el patr\xf3n indicado hasta cubrir todo el elemento. Son perfectos para rayas y tramas."]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja rayas"></div>
<div class="caja lineas"></div>
<div class="caja anillos"></div>`,initialCss:`.caja {
  display: inline-block;
  width: 130px;
  height: 90px;
  margin: 4px;
  border: 1px solid #999;
}

.rayas {
  background-image: repeating-linear-gradient(45deg, #2a9d8f 0 10px, #e9f5f3 10px 20px);
}

.lineas {
  background-image: repeating-linear-gradient(90deg, #e76f51 0 4px, white 4px 16px);
}

.anillos {
  background-image: repeating-radial-gradient(circle, #e9c46a 0 8px, white 8px 16px);
}`,layout:"stacked"}),"\n",(0,r.jsxs)(a.h2,{id:"varios-fondos-y-la-abreviatura-background",children:["Varios fondos y la abreviatura ",(0,r.jsx)(a.code,{children:"background"})]}),"\n",(0,r.jsx)(a.h3,{id:"varias-capas-de-fondo",children:"Varias capas de fondo"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"background-image"})," admite una lista de im\xe1genes separadas por comas: se dibujan como capas, y ",(0,r.jsx)(a.strong,{children:"la primera de la lista queda encima"}),". Un uso muy habitual es poner un degradado oscuro semitransparente sobre una foto, para que el texto blanco se lea bien:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="portada">
  <h3>T\xedtulo legible sobre la imagen</h3>
</div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.portada {
  height: 150px;
  padding: 16px;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), var(--escena);
  background-size: cover;
  background-position: center;
}

.portada h3 {
  margin: 0;
}`,layout:"stacked"}),"\n",(0,r.jsxs)(a.p,{children:["Las otras propiedades (",(0,r.jsx)(a.code,{children:"background-size"}),", ",(0,r.jsx)(a.code,{children:"background-position"}),", ",(0,r.jsx)(a.code,{children:"background-repeat"}),"...) tambi\xe9n admiten una lista, con un valor por capa. Si das un solo valor, se aplica a todas las capas."]}),"\n",(0,r.jsxs)(a.h3,{id:"la-abreviatura-background",children:["La abreviatura ",(0,r.jsx)(a.code,{children:"background"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"background"})," resume en una sola propiedad todas las anteriores. Los valores pueden ir en casi cualquier orden, con una excepci\xf3n: si se incluye tama\xf1o, va ",(0,r.jsx)(a.strong,{children:"despu\xe9s de la posici\xf3n y separado por una barra"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-css",children:'background: #2a9d8f url("imagen.jpg") no-repeat center / cover;\n/*           color   imagen             repetici\xf3n posici\xf3n / tama\xf1o */\n'})}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsxs)(a.p,{children:["Al usar ",(0,r.jsx)(a.code,{children:"background"}),", todo lo que no escribas vuelve a su valor por defecto. Por eso, si pones ",(0,r.jsx)(a.code,{children:"background-size: cover"})," y ",(0,r.jsx)(a.strong,{children:"despu\xe9s"})," una regla ",(0,r.jsx)(a.code,{children:"background: ..."})," sobre el mismo elemento, el tama\xf1o se pierde. Con el orden contrario funciona."]})}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja mal">background-size antes de background</div>
<div class="caja bien">background-size despu\xe9s</div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.caja {
  display: inline-block;
  vertical-align: top;
  width: 150px;
  height: 220px;
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
  border: 1px solid #999;
  color: black;
  font-size: 0.75rem;
}

.mal {
  background-size: cover;
  background: var(--escena) no-repeat center;
}

.bien {
  background: var(--escena) no-repeat center;
  background-size: cover;
}`,layout:"stacked"}),"\n",(0,r.jsx)(a.h2,{id:"border-radius",children:(0,r.jsx)(a.code,{children:"border-radius"})}),"\n",(0,r.jsxs)(a.p,{children:["Redondea las esquinas de una caja. Con un valor, afecta a las cuatro; con varios, sigue el mismo orden que ",(0,r.jsx)(a.code,{children:"margin"})," pero empezando por la esquina superior izquierda y girando en sentido horario:"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Valores"}),(0,r.jsx)(a.th,{children:"Significado"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"border-radius: 10px;"})}),(0,r.jsx)(a.td,{children:"Las cuatro esquinas"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"border-radius: 10px 30px;"})}),(0,r.jsx)(a.td,{children:"Superior izquierda e inferior derecha / superior derecha e inferior izquierda"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"border-radius: 10px 30px 0;"})}),(0,r.jsx)(a.td,{children:"Superior izquierda / superior derecha e inferior izquierda / inferior derecha"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"border-radius: 10px 30px 0 50%;"})}),(0,r.jsx)(a.td,{children:"Superior izquierda, superior derecha, inferior derecha, inferior izquierda"})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["Tambi\xe9n se puede dar una esquina por separado (",(0,r.jsx)(a.code,{children:"border-top-left-radius"}),", ",(0,r.jsx)(a.code,{children:"border-top-right-radius"}),"...). Con porcentajes, el radio se calcula respecto al tama\xf1o de la caja, por eso ",(0,r.jsx)(a.code,{children:"50%"})," en un cuadrado da un c\xedrculo y en un rect\xe1ngulo una elipse. Un valor muy grande (",(0,r.jsx)(a.code,{children:"999px"}),') en un rect\xe1ngulo da una "p\xedldora".']}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja c1">10px</div>
<div class="caja c2">50%</div>
<div class="caja c3 ancha">50%</div>
<div class="caja c4 ancha">999px</div>
<div class="caja c5">0 40px</div>
<div class="caja c6">50% / 20%</div>`,initialCss:`.caja {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
  background-color: teal;
  color: white;
  font-size: 0.8rem;
  line-height: 88px;
  text-align: center;
}

.ancha {
  width: 170px;
  height: 60px;
  line-height: 48px;
}

.c1 { border-radius: 10px; }
.c2 { border-radius: 50%; }
.c3 { border-radius: 50%; }
.c4 { border-radius: 999px; }
.c5 { border-radius: 0 40px; }
.c6 { border-radius: 50% / 20%; }`,layout:"stacked"}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"border-radius"})," redondea el fondo y el borde del elemento, pero no recorta a sus hijos. Si dentro hay una imagen que debe seguir las esquinas redondeadas, a\xf1ade ",(0,r.jsx)(a.code,{children:"overflow: hidden"})," al elemento redondeado."]})}),"\n",(0,r.jsx)(a.h2,{id:"box-shadow",children:(0,r.jsx)(a.code,{children:"box-shadow"})}),"\n",(0,r.jsx)(a.p,{children:"Ya la usamos en la p\xe1gina de im\xe1genes. Su sintaxis completa es:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-css",children:"box-shadow: desplazamiento-x desplazamiento-y desenfoque extensi\xf3n color;\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Desplazamiento x / y:"})," cu\xe1nto se mueve la sombra respecto a la caja (valores negativos la llevan a la izquierda o arriba)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Desenfoque:"})," cu\xe1nto se difumina el borde de la sombra (",(0,r.jsx)(a.code,{children:"0"})," es un borde duro)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsxs)(a.strong,{children:["Extensi\xf3n (",(0,r.jsx)(a.code,{children:"spread"}),"):"]})," cu\xe1nto crece o se encoge la sombra respecto al tama\xf1o de la caja."]}),"\n",(0,r.jsxs)(a.li,{children:["La palabra ",(0,r.jsx)(a.code,{children:"inset"})," delante la convierte en una sombra ",(0,r.jsx)(a.strong,{children:"interior"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Se pueden poner ",(0,r.jsx)(a.strong,{children:"varias sombras"})," separadas por comas; la primera queda encima."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="caja s1">suave</div>
<div class="caja s2">anillo</div>
<div class="caja s3">dura</div>
<div class="caja s4">inset</div>
<div class="caja s5">varias</div>`,initialCss:`body {
  padding: 12px;
  background-color: #e9e9e9;
}

.caja {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  height: 80px;
  margin: 10px;
  padding: 6px;
  box-sizing: border-box;
  background-color: white;
  font-size: 0.8rem;
}

.s1 { box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4); }
.s2 { box-shadow: 0 0 0 4px teal; }
.s3 { box-shadow: 6px 6px 0 #2a9d8f; }
.s4 { box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5); }
.s5 { box-shadow: 0 0 0 4px white, 0 0 0 8px teal, 4px 4px 12px rgba(0, 0, 0, 0.4); }`,layout:"stacked"}),"\n",(0,r.jsx)(a.p,{children:'La sombra "anillo" no tiene desplazamiento ni desenfoque, solo extensi\xf3n: es una forma sencilla de dibujar un borde que no ocupa espacio. En la sombra "varias", los dos primeros anillos (blanco y teal) se apilan, y la tercera sombra suave queda por debajo.'}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Una ",(0,r.jsx)(a.code,{children:"box-shadow"})," ",(0,r.jsx)(a.strong,{children:"no forma parte del modelo de caja"}),": no ocupa espacio ni empuja a los elementos vecinos (igual que ",(0,r.jsx)(a.code,{children:"outline"}),"), y sigue la forma de la caja, incluidas las esquinas redondeadas. Para que una sombra siga la silueta real de una imagen con transparencia, existe ",(0,r.jsx)(a.code,{children:"filter: drop-shadow()"}),", que vimos en la p\xe1gina de filtros."]})}),"\n",(0,r.jsx)(a.h2,{id:"opacity",children:(0,r.jsx)(a.code,{children:"opacity"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"opacity"})," hace transparente un elemento, con un n\xfamero de ",(0,r.jsx)(a.code,{children:"0"})," (invisible) a ",(0,r.jsx)(a.code,{children:"1"})," (totalmente opaco). Afecta al elemento ",(0,r.jsx)(a.strong,{children:"entero"}),": fondo, borde, texto e hijos. Si solo quieres que sea transparente el color de fondo, usa un color con canal alfa (",(0,r.jsx)(a.code,{children:"rgba()"}),", como vimos en colores y unidades)."]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="fondo">
  <div class="caja">normal</div>
  <div class="caja op">opacity: 0.5</div>
  <div class="caja alfa">fondo rgba(\u{2026}, 0.5)</div>
</div>`,initialCss:`.fondo {
  padding: 10px;
  background-image: repeating-linear-gradient(45deg, #ccc 0 10px, #eee 10px 20px);
}

.caja {
  display: inline-block;
  width: 120px;
  margin: 4px;
  padding: 12px;
  box-sizing: border-box;
  background-color: teal;
  color: white;
  font-weight: bold;
}

.op {
  opacity: 0.5;
}

.alfa {
  background-color: rgba(0, 128, 128, 0.5);
}`,layout:"stacked"}),"\n",(0,r.jsx)(a.p,{children:"En la segunda caja, todo es semitransparente, tambi\xe9n el texto. En la tercera, solo lo es el fondo: el texto sigue siendo totalmente opaco. Detr\xe1s se ven las rayas, que dejan claro cu\xe1nto se transparenta cada una."}),"\n",(0,r.jsxs)(a.p,{children:["Un elemento con ",(0,r.jsx)(a.code,{children:"opacity: 0"})," es invisible, pero ",(0,r.jsx)(a.strong,{children:"sigue ah\xed"}),". Compara las tres formas de esconder un elemento:"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Ocupa espacio"}),(0,r.jsx)(a.th,{children:"Recibe clics"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"opacity: 0"})}),(0,r.jsx)(a.td,{children:"S\xed"}),(0,r.jsx)(a.td,{children:"S\xed"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"visibility: hidden"})}),(0,r.jsx)(a.td,{children:"S\xed"}),(0,r.jsx)(a.td,{children:"No"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"display: none"})}),(0,r.jsx)(a.td,{children:"No"}),(0,r.jsx)(a.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"backdrop-filter",children:(0,r.jsx)(a.code,{children:"backdrop-filter"})}),"\n",(0,r.jsxs)(a.p,{children:["En la p\xe1gina de filtros vimos que ",(0,r.jsx)(a.code,{children:"filter"})," aplica el efecto al propio elemento. ",(0,r.jsx)(a.code,{children:"backdrop-filter"})," aplica el efecto a ",(0,r.jsx)(a.strong,{children:"lo que hay detr\xe1s"})," del elemento, es decir, a la parte del fondo que queda visible a trav\xe9s de \xe9l. Con ",(0,r.jsx)(a.code,{children:"blur()"}),' se consigue el t\xedpico efecto de "cristal esmerilado".']}),"\n",(0,r.jsxs)(a.p,{children:["Hace falta que el elemento tenga un fondo semitransparente, porque si fuera opaco no se ver\xeda nada de lo que hay detr\xe1s. Y, por supuesto, que haya algo detr\xe1s: normalmente un panel colocado encima de una imagen con ",(0,r.jsx)(a.code,{children:"position"}),"."]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="escena">
  <div class="panel">Sin backdrop-filter</div>
</div>
<div class="escena">
  <div class="panel cristal">Con backdrop-filter: blur(6px)</div>
</div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.escena {
  position: relative;
  width: 300px;
  height: 150px;
  margin-bottom: 8px;
  background-image: var(--escena);
}

.panel {
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 30px;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  font-weight: bold;
}

.cristal {
  backdrop-filter: blur(6px);
}`,layout:"stacked"}),"\n",(0,r.jsx)(a.p,{children:"Los dos paneles tienen exactamente el mismo fondo semitransparente. En el segundo, el c\xedrculo y el rect\xe1ngulo que quedan debajo se ven difuminados, y en el primero se ven n\xedtidos."}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Algunas versiones antiguas de Safari necesitan adem\xe1s el prefijo ",(0,r.jsx)(a.code,{children:"-webkit-backdrop-filter"}),". Aparte de ",(0,r.jsx)(a.code,{children:"blur()"}),", admite las mismas funciones que ",(0,r.jsx)(a.code,{children:"filter"})," (",(0,r.jsx)(a.code,{children:"brightness()"}),", ",(0,r.jsx)(a.code,{children:"saturate()"}),"...), y es habitual combinarlas, por ejemplo ",(0,r.jsx)(a.code,{children:"blur(8px) saturate(150%)"}),"."]})}),"\n",(0,r.jsxs)(a.h2,{id:"texto-con-degradado-background-clip",children:["Texto con degradado: ",(0,r.jsx)(a.code,{children:"background-clip"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"background-clip"})," decide hasta d\xf3nde se pinta el fondo de un elemento: ",(0,r.jsx)(a.code,{children:"border-box"})," (por defecto, hasta el borde), ",(0,r.jsx)(a.code,{children:"padding-box"})," (hasta el relleno), ",(0,r.jsx)(a.code,{children:"content-box"})," (solo bajo el contenido) o ",(0,r.jsx)(a.code,{children:"text"})," (solo bajo las ",(0,r.jsx)(a.strong,{children:"letras"}),"). Combinado con un texto transparente, permite rellenar el texto con un degradado:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:'<h2 class="titulo">Texto con degradado</h2>',initialCss:`.titulo {
  display: inline-block;
  font-size: 2.5rem;
  background-image: linear-gradient(90deg, #e76f51, #2a9d8f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`}),"\n",(0,r.jsxs)(a.p,{children:["El texto se pone ",(0,r.jsx)(a.code,{children:"transparent"})," para que se vea el fondo a trav\xe9s de las letras. El t\xedtulo es ",(0,r.jsx)(a.code,{children:"inline-block"})," para que el degradado mida solo lo que mide el texto; si fuera un bloque normal, el degradado se repartir\xeda por todo el ancho de la l\xednea y las letras solo mostrar\xedan su primera parte. Durante a\xf1os ",(0,r.jsx)(a.code,{children:"background-clip: text"})," solo funcion\xf3 con el prefijo ",(0,r.jsx)(a.code,{children:"-webkit-"}),", por eso se ve en muchos c\xf3digos; hoy ya funciona sin \xe9l, pero escribir las dos l\xedneas no hace da\xf1o."]}),"\n",(0,r.jsx)(a.h2,{id:"transiciones",children:"Transiciones"}),"\n",(0,r.jsxs)(a.p,{children:["Normalmente, cuando una propiedad cambia de valor (por ejemplo, al pasar el rat\xf3n por encima de un bot\xf3n), el cambio es instant\xe1neo. Una ",(0,r.jsx)(a.strong,{children:"transici\xf3n"})," hace que ese cambio ocurra de forma gradual durante un tiempo, pasando por todos los valores intermedios."]}),"\n",(0,r.jsxs)(a.p,{children:["Una transici\xf3n solo hace falta declararla una vez, y se activa sola cada vez que la propiedad cambia: con ",(0,r.jsx)(a.code,{children:":hover"}),", ",(0,r.jsx)(a.code,{children:":focus"}),", ",(0,r.jsx)(a.code,{children:":checked"}),", al a\xf1adir una clase con JavaScript..."]}),"\n",(0,r.jsx)(a.h3,{id:"primera-transici\xf3n",children:"Primera transici\xf3n"}),"\n",(0,r.jsx)(s.A,{initialHtml:'<button class="boton">Pasa el rat\xf3n</button>',initialCss:`.boton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: teal;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.boton:hover {
  background-color: darkorange;
}`}),"\n",(0,r.jsxs)(a.p,{children:["La l\xednea ",(0,r.jsx)(a.code,{children:"transition: background-color 0.3s;"}),' dice: "cuando cambie ',(0,r.jsx)(a.code,{children:"background-color"}),', hazlo durante 0,3 segundos". Sin ella, el color saltar\xeda de golpe.']}),"\n",(0,r.jsx)(a.h3,{id:"las-propiedades-de-una-transici\xf3n",children:"Las propiedades de una transici\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["Una transici\xf3n se describe con cuatro propiedades, aunque casi siempre se escriben juntas en la abreviatura ",(0,r.jsx)(a.code,{children:"transition"}),":"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Propiedad"}),(0,r.jsx)(a.th,{children:"Qu\xe9 indica"}),(0,r.jsx)(a.th,{children:"Valor por defecto"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"transition-property"})}),(0,r.jsx)(a.td,{children:"Qu\xe9 propiedad(es) se animan"}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"all"})})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"transition-duration"})}),(0,r.jsx)(a.td,{children:"Cu\xe1nto dura"}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.code,{children:"0s"})," (sin transici\xf3n)"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"transition-timing-function"})}),(0,r.jsx)(a.td,{children:"C\xf3mo se reparte la velocidad durante la transici\xf3n"}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"ease"})})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"transition-delay"})}),(0,r.jsx)(a.td,{children:"Cu\xe1nto espera antes de empezar"}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"0s"})})]})]})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-css",children:"transition: background-color 0.3s ease-in-out 0.1s;\n/*          propiedad        duraci\xf3n funci\xf3n   retraso */\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Los tiempos se escriben en segundos (",(0,r.jsx)(a.code,{children:"0.3s"}),") o milisegundos (",(0,r.jsx)(a.code,{children:"300ms"}),"). Si en la abreviatura hay dos tiempos, el primero es siempre la duraci\xf3n y el segundo el retraso."]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:"Las transiciones de interfaz suelen durar entre 150 y 400 milisegundos. M\xe1s cortas casi no se aprecian y m\xe1s largas hacen que la p\xe1gina se sienta lenta."})}),"\n",(0,r.jsx)(a.h3,{id:"d\xf3nde-se-escribe-la-transici\xf3n",children:"D\xf3nde se escribe la transici\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["Importa en qu\xe9 regla se escribe. La transici\xf3n que se aplica es la del estado ",(0,r.jsx)(a.strong,{children:"al que se llega"}),". Compara estos dos botones, con una duraci\xf3n exagerada de 1 segundo:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<button class="boton b-base">En la regla base</button>
<button class="boton b-hover">Solo en :hover</button>`,initialCss:`.boton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: teal;
  color: white;
  font-size: 1rem;
}

.b-base {
  transition: background-color 1s;
}

.b-base:hover {
  background-color: darkorange;
}

.b-hover:hover {
  background-color: darkorange;
  transition: background-color 1s;
}`}),"\n",(0,r.jsxs)(a.p,{children:["El primer bot\xf3n se anima al entrar y al salir. El segundo se anima al entrar, pero ",(0,r.jsx)(a.strong,{children:"vuelve de golpe"})," al salir: cuando el rat\xf3n se va, la regla ",(0,r.jsx)(a.code,{children:":hover"})," deja de aplicarse, y el estado al que se vuelve (la regla base) no tiene ninguna transici\xf3n. Por eso, lo habitual es escribir la transici\xf3n en la regla base."]}),"\n",(0,r.jsx)(a.h3,{id:"funciones-de-temporizaci\xf3n",children:"Funciones de temporizaci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"transition-timing-function"})," decide c\xf3mo var\xeda la velocidad a lo largo del recorrido:"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Valor"}),(0,r.jsx)(a.th,{children:"Comportamiento"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"linear"})}),(0,r.jsx)(a.td,{children:"Velocidad constante"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"ease"})}),(0,r.jsx)(a.td,{children:"Valor por defecto: arranca con suavidad, acelera pronto y frena despacio al final"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"ease-in"})}),(0,r.jsx)(a.td,{children:"Empieza lento y acelera"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"ease-out"})}),(0,r.jsx)(a.td,{children:"Empieza r\xe1pido y frena al final"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"ease-in-out"})}),(0,r.jsx)(a.td,{children:"Lento al principio y al final, m\xe1s r\xe1pido en el medio"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"cubic-bezier(a, b, c, d)"})}),(0,r.jsx)(a.td,{children:"Una curva personalizada"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"steps(n)"})}),(0,r.jsxs)(a.td,{children:["En vez de moverse de forma continua, avanza a saltos, en ",(0,r.jsx)(a.code,{children:"n"})," pasos"]})]})]})]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="pistas">
  <p>Pasa el rat\xf3n por esta zona</p>
  <div class="barra linear">linear</div>
  <div class="barra ease">ease</div>
  <div class="barra ease-in">ease-in</div>
  <div class="barra ease-out">ease-out</div>
  <div class="barra ease-in-out">ease-in-out</div>
  <div class="barra pasos">steps(5)</div>
</div>`,initialCss:`.pistas {
  padding: 8px;
  border: 1px solid #ccc;
}

.barra {
  width: 20%;
  margin-bottom: 4px;
  padding: 4px;
  box-sizing: border-box;
  background-color: teal;
  color: white;
  font-size: 0.8rem;
  transition-property: width;
  transition-duration: 2s;
}

.pistas:hover .barra {
  width: 100%;
}

.linear { transition-timing-function: linear; }
.ease { transition-timing-function: ease; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }
.pasos { transition-timing-function: steps(5); }`,layout:"stacked"}),"\n",(0,r.jsxs)(a.p,{children:["Todas las barras tardan lo mismo en llegar al final (2 segundos), pero lo hacen de forma distinta: la de ",(0,r.jsx)(a.code,{children:"linear"})," avanza a ritmo constante, ",(0,r.jsx)(a.code,{children:"ease-in"})," va ganando velocidad y ",(0,r.jsx)(a.code,{children:"ease-out"})," la va perdiendo, y la de ",(0,r.jsx)(a.code,{children:"steps(5)"})," avanza en cinco saltos. En las herramientas de desarrollador de los navegadores hay un editor visual para dise\xf1ar tu propia curva con ",(0,r.jsx)(a.code,{children:"cubic-bezier()"}),"."]}),"\n",(0,r.jsxs)(a.h3,{id:"retraso-con-transition-delay",children:["Retraso con ",(0,r.jsx)(a.code,{children:"transition-delay"})]}),"\n",(0,r.jsx)(a.p,{children:"El retraso es \xfatil para encadenar efectos. Aqu\xed, las tres cajas tienen la misma transici\xf3n, pero cada una espera un poco m\xe1s antes de empezar:"}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="fila">
  <div class="punto p1"></div>
  <div class="punto p2"></div>
  <div class="punto p3"></div>
</div>`,initialCss:`.fila {
  padding: 8px;
  border: 1px solid #ccc;
}

.punto {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 4px;
  background-color: teal;
  transition: background-color 0.4s, border-radius 0.4s;
}

.fila:hover .punto {
  background-color: darkorange;
  border-radius: 50%;
}

.p2 { transition-delay: 0.3s; }
.p3 { transition-delay: 0.6s; }`}),"\n",(0,r.jsx)(a.h3,{id:"varias-propiedades-a-la-vez",children:"Varias propiedades a la vez"}),"\n",(0,r.jsx)(a.p,{children:"Para animar varias propiedades, se separan con comas, y cada una puede tener su propia duraci\xf3n y su propia curva:"}),"\n",(0,r.jsx)(s.A,{initialHtml:'<div class="tarjeta">Pasa el rat\xf3n por encima</div>',initialCss:`.tarjeta {
  width: 220px;
  padding: 16px;
  background-color: white;
  border: 2px solid teal;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, border-radius 0.6s, box-shadow 0.3s;
}

.tarjeta:hover {
  background-color: #e0f7f7;
  border-radius: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}`}),"\n",(0,r.jsxs)(a.p,{children:["Tambi\xe9n existe ",(0,r.jsx)(a.code,{children:"transition: all 0.3s;"}),", que anima ",(0,r.jsx)(a.strong,{children:"cualquier"})," propiedad que cambie. Es c\xf3moda, pero tiene un riesgo: si m\xe1s adelante otra regla cambia una propiedad que no pensabas animar (el ancho, un margen...), esa propiedad tambi\xe9n se animar\xe1, a veces con efectos extra\xf1os. Es preferible listar solo las propiedades que quieres animar."]}),"\n",(0,r.jsx)(a.h3,{id:"qu\xe9-se-puede-animar-y-qu\xe9-no",children:"Qu\xe9 se puede animar y qu\xe9 no"}),"\n",(0,r.jsx)(a.p,{children:"Una transici\xf3n necesita poder calcular valores intermedios, as\xed que solo funciona con propiedades que los tienen:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"S\xed se animan:"})," colores, medidas (",(0,r.jsx)(a.code,{children:"width"}),", ",(0,r.jsx)(a.code,{children:"height"}),", ",(0,r.jsx)(a.code,{children:"margin"}),", ",(0,r.jsx)(a.code,{children:"padding"}),", ",(0,r.jsx)(a.code,{children:"border-radius"}),"...), porcentajes, n\xfameros (",(0,r.jsx)(a.code,{children:"opacity"}),") y sombras (",(0,r.jsx)(a.code,{children:"box-shadow"}),", ",(0,r.jsx)(a.code,{children:"text-shadow"}),")."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"No se animan:"})," ",(0,r.jsx)(a.code,{children:"display"})," (no hay punto intermedio entre ",(0,r.jsx)(a.code,{children:"none"})," y ",(0,r.jsx)(a.code,{children:"block"}),"), ",(0,r.jsx)(a.code,{children:"height: auto"})," (no se puede calcular un valor intermedio entre un n\xfamero y ",(0,r.jsx)(a.code,{children:"auto"}),") y los degradados de ",(0,r.jsx)(a.code,{children:"background-image"}),", que cambian de golpe."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Para esconder y mostrar un elemento con suavidad, en vez de cambiar ",(0,r.jsx)(a.code,{children:"display"}),", se anima ",(0,r.jsx)(a.code,{children:"opacity"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Para los degradados hay un truco muy usado: dibujar un degradado el doble de ancho que el elemento (",(0,r.jsx)(a.code,{children:"background-size: 200%"}),") y animar ",(0,r.jsx)(a.code,{children:"background-position"}),", de forma que el elemento va mostrando una parte distinta del degradado:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:'<div class="boton-grad">Pasa el rat\xf3n</div>',initialCss:`.boton-grad {
  display: inline-block;
  padding: 12px 24px;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(90deg, #2a9d8f, #e76f51);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.6s;
}

.boton-grad:hover {
  background-position: right;
}`}),"\n",(0,r.jsx)(a.h3,{id:"casos-pr\xe1cticos",children:"Casos pr\xe1cticos"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Resaltar un campo de formulario al enfocarlo."})," Si se quita el ",(0,r.jsx)(a.code,{children:"outline"})," por defecto, hay que dar otro indicador de foco visible, como aqu\xed:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:'<input type="text" class="campo" placeholder="Haz clic aqu\xed">',initialCss:`.campo {
  padding: 8px;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.campo:focus {
  border-color: teal;
  box-shadow: 0 0 0 4px rgba(0, 128, 128, 0.25);
}`}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Mostrar un texto sobre una imagen al pasar el rat\xf3n."})," Une posicionamiento (",(0,r.jsx)(a.code,{children:"position: absolute"})," con ",(0,r.jsx)(a.code,{children:"inset: 0"}),"), ",(0,r.jsx)(a.code,{children:"opacity"})," y una transici\xf3n:"]}),"\n",(0,r.jsx)(s.A,{initialHtml:`<div class="foto">
  <div class="pie">Texto sobre la imagen</div>
</div>`,initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.foto {
  position: relative;
  width: 300px;
  height: 150px;
  background-image: var(--escena);
}

.pie {
  position: absolute;
  inset: 0;
  padding-top: 60px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s;
}

.foto:hover .pie {
  opacity: 1;
}`,layout:"stacked"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Pasar de blanco y negro a color."})," Una transici\xf3n tambi\xe9n funciona con ",(0,r.jsx)(a.code,{children:"filter"}),":"]}),"\n",(0,r.jsx)(s.A,{initialHtml:'<div class="galeria"></div>',initialCss:`:root {
  --escena: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='150'><rect width='300' height='150' fill='%232a9d8f'/><circle cx='80' cy='75' r='45' fill='%23e9c46a'/><rect x='170' y='40' width='100' height='70' fill='%23e76f51'/></svg>");
}

.galeria {
  width: 300px;
  height: 150px;
  background-image: var(--escena);
  filter: grayscale(100%);
  transition: filter 0.5s;
}

.galeria:hover {
  filter: grayscale(0%);
}`,layout:"stacked"}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Una transici\xf3n solo va de un valor A a un valor B cuando algo cambia. Para movimientos que se repiten solos, o que pasan por varios pasos intermedios, existen las animaciones con ",(0,r.jsx)(a.code,{children:"@keyframes"}),", que son otra herramienta distinta."]})})]})}function h(e={}){let{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},944(e,a,i){i.d(a,{N:()=>l});var n=i(4848),r=i(6540),o=i(6069),s=i.n(o),d=i(8848);i(4312),i(1113),i(5723);let c={markup:"HTML",css:"CSS",javascript:"JavaScript"};function l({code:e,onChange:a,language:i}){let[o,h]=(0,r.useState)(!1),u=async()=>{await navigator.clipboard.writeText(e),h(!0),setTimeout(()=>h(!1),1500)};return(0,n.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,n.jsxs)("button",{type:"button",onClick:u,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:o?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[o?(0,n.jsx)(p,{}):(0,n.jsx)(t,{}),o?"Copiado":""]}),(0,n.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:c[i]})]}),(0,n.jsx)(s(),{value:e,onValueChange:a,highlight:e=>(0,d.highlight)(e,d.languages[i],i),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function t(){return(0,n.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,n.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,a,i){i.d(a,{A:()=>c});var n=i(4848),r=i(6540),o=i(944),s=i(2793),d=i(1756);function c({initialHtml:e,initialCss:a="",layout:i="side-by-side",height:l=460}){let[t,p]=(0,r.useState)(e),[h,u]=(0,r.useState)(a),x=(0,r.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${h}</style></head><body>${t}</body></html>`,[t,h]);return(0,n.jsx)(s.u,{layout:i,codePanel:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsx)(o.N,{code:t,onChange:p,language:"markup"}),(0,n.jsx)(o.N,{code:h,onChange:u,language:"css"})]}),resultPanel:(0,n.jsx)(d.R,{doc:x,title:"Resultado HTML+CSS",height:l})})}},2793(e,a,i){i.d(a,{u:()=>r});var n=i(4848);function r({layout:e,codePanel:a,resultPanel:i}){return(0,n.jsx)("div",{style:{margin:"2rem 0"},children:(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,n.jsx)("div",{children:a}),(0,n.jsx)("div",{children:i})]})})}i(6540)},1756(e,a,i){i.d(a,{R:()=>s});var n=i(4848),r=i(6540),o=i(6497);function s({doc:e,title:a,height:i}){let d=(0,r.useRef)(null),[c,l]=(0,r.useState)(!1),t=(0,o.Ay)("/playground-frame.html");return(0,r.useEffect)(()=>{c&&d.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,c]),(0,n.jsx)("iframe",{ref:d,title:a,src:t,onLoad:()=>l(!0),sandbox:"allow-scripts",style:{width:"100%",height:i,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);