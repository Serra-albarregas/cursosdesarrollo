"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["236"],{5541(e,o,a){a.r(o),a.d(o,{metadata:()=>i,default:()=>h,frontMatter:()=>d,contentTitle:()=>l,toc:()=>c,assets:()=>t});var i=JSON.parse('{"id":"css/posicionamiento","title":"Posicionamiento","description":"Por defecto, el navegador coloca los elementos uno detr\xe1s de otro, de arriba abajo (los de bloque) o de izquierda a derecha (los inline). La propiedad position permite romper ese orden y colocar un elemento en un sitio concreto, o hacer que se comporte de forma especial al hacer scroll.","source":"@site/docs/lenguajes-de-marcas/css/08-posicionamiento.mdx","sourceDirName":"css","slug":"/css/posicionamiento","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/posicionamiento","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Posicionamiento"},"sidebar":"marcasSidebar","previous":{"title":"El modelo de caja","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/modelo-caja"}}'),n=a(4848),s=a(8453),r=a(6841);let d={sidebar_position:8,title:"Posicionamiento"},l,t={},c=[{value:"El flujo normal y <code>position: static</code>",id:"el-flujo-normal-y-position-static",level:2},{value:"<code>position: relative</code>",id:"position-relative",level:2},{value:"<code>position: absolute</code>",id:"position-absolute",level:2},{value:"<code>inset</code>",id:"inset",level:3},{value:"<code>position: fixed</code>",id:"position-fixed",level:2},{value:"<code>position: sticky</code>",id:"position-sticky",level:2},{value:"<code>z-index</code>",id:"z-index",level:2},{value:"<code>float</code> y <code>clear</code>",id:"float-y-clear",level:2},{value:"Tabla resumen",id:"tabla-resumen",level:2}];function p(e){let o={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Por defecto, el navegador coloca los elementos uno detr\xe1s de otro, de arriba abajo (los de bloque) o de izquierda a derecha (los inline). La propiedad ",(0,n.jsx)(o.code,{children:"position"})," permite romper ese orden y colocar un elemento en un sitio concreto, o hacer que se comporte de forma especial al hacer scroll."]}),"\n",(0,n.jsxs)(o.h2,{id:"el-flujo-normal-y-position-static",children:["El flujo normal y ",(0,n.jsx)(o.code,{children:"position: static"})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"static"})," es el valor por defecto de todos los elementos: se colocan en el ",(0,n.jsx)(o.strong,{children:"flujo normal"}),", tal como vimos en el modelo de caja. Con ",(0,n.jsx)(o.code,{children:"static"}),", las propiedades ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," y ",(0,n.jsx)(o.code,{children:"left"})," no tienen ning\xfan efecto."]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="caja">Caja 1</div>
<div class="caja desplazada">Caja 2 (top y left ignorados)</div>
<div class="caja">Caja 3</div>`,initialCss:`.caja {
  background-color: teal;
  color: white;
  padding: 10px;
  margin-bottom: 8px;
}

.desplazada {
  position: static;
  top: 20px;
  left: 40px;
}`}),"\n",(0,n.jsxs)(o.p,{children:["La segunda caja no se mueve: aunque se le han dado ",(0,n.jsx)(o.code,{children:"top"})," y ",(0,n.jsx)(o.code,{children:"left"}),", con ",(0,n.jsx)(o.code,{children:"position: static"})," esas propiedades se ignoran."]}),"\n",(0,n.jsx)(o.h2,{id:"position-relative",children:(0,n.jsx)(o.code,{children:"position: relative"})}),"\n",(0,n.jsxs)(o.p,{children:["Con ",(0,n.jsx)(o.code,{children:"relative"}),", el elemento se desplaza respecto a ",(0,n.jsx)(o.strong,{children:"su propia posici\xf3n original"})," usando ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," y ",(0,n.jsx)(o.code,{children:"left"}),". Lo importante es que el hueco que ocupaba se conserva: los dem\xe1s elementos no se recolocan."]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="caja">Caja 1</div>
<div class="caja desplazada">Caja 2 (relative)</div>
<div class="caja">Caja 3</div>`,initialCss:`.caja {
  background-color: teal;
  color: white;
  padding: 10px;
  margin-bottom: 8px;
}

.desplazada {
  position: relative;
  top: 15px;
  left: 40px;
  background-color: darkorange;
}`}),"\n",(0,n.jsx)(o.p,{children:"La caja naranja se ha movido 15px hacia abajo y 40px hacia la derecha, pero la caja 3 no ha subido para ocupar su sitio: el hueco original sigue reservado, y por eso la caja naranja se solapa un poco con la siguiente."}),"\n",(0,n.jsxs)(o.p,{children:["Los valores de ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," y ",(0,n.jsx)(o.code,{children:"left"}),' funcionan como "empuja desde ese lado": ',(0,n.jsx)(o.code,{children:"top: 15px"})," empuja el elemento 15px ",(0,n.jsx)(o.strong,{children:"hacia abajo"})," desde su borde superior original (no lo sube), y ",(0,n.jsx)(o.code,{children:"left: 40px"})," lo empuja 40px hacia la derecha."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["En la pr\xe1ctica, ",(0,n.jsx)(o.code,{children:"relative"}),' se usa m\xe1s como "punto de referencia" para elementos ',(0,n.jsx)(o.code,{children:"absolute"})," que como forma de desplazar cosas. Lo vemos justo a continuaci\xf3n."]})}),"\n",(0,n.jsx)(o.h2,{id:"position-absolute",children:(0,n.jsx)(o.code,{children:"position: absolute"})}),"\n",(0,n.jsxs)(o.p,{children:["Un elemento ",(0,n.jsx)(o.code,{children:"absolute"})," ",(0,n.jsx)(o.strong,{children:"sale del flujo"}),": los dem\xe1s elementos se colocan como si no existiera, sin dejar hueco. Se coloca con ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," y ",(0,n.jsx)(o.code,{children:"left"}),", pero no respecto a su posici\xf3n original, sino respecto a su ",(0,n.jsx)(o.strong,{children:"ancestro posicionado m\xe1s cercano"}),": el primer elemento por encima de \xe9l en el HTML que tenga una ",(0,n.jsx)(o.code,{children:"position"})," distinta de ",(0,n.jsx)(o.code,{children:"static"}),". Si no hay ninguno, se coloca respecto a la p\xe1gina."]}),"\n",(0,n.jsxs)(o.p,{children:["El patr\xf3n cl\xe1sico es un padre con ",(0,n.jsx)(o.code,{children:"position: relative"})," y un hijo con ",(0,n.jsx)(o.code,{children:"position: absolute"}),", por ejemplo una insignia en la esquina de una tarjeta. Compara qu\xe9 ocurre con y sin el ",(0,n.jsx)(o.code,{children:"position: relative"})," en el padre:"]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="tarjeta con-relative">
  Tarjeta con position: relative
  <span class="insignia">1</span>
</div>

<div class="tarjeta">
  Tarjeta sin position: relative
  <span class="insignia">2</span>
</div>`,initialCss:`.tarjeta {
  width: 220px;
  height: 70px;
  border: 2px solid teal;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.con-relative {
  position: relative;
}

.insignia {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: crimson;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
}`}),"\n",(0,n.jsxs)(o.p,{children:["Las dos insignias tienen exactamente las mismas reglas (",(0,n.jsx)(o.code,{children:"top: 8px; right: 8px"}),"). La primera queda en la esquina de su tarjeta porque su padre tiene ",(0,n.jsx)(o.code,{children:"position: relative"}),"; la segunda, al no tener ning\xfan ancestro posicionado, se coloca en la esquina superior derecha de toda la p\xe1gina."]}),"\n",(0,n.jsx)(o.h3,{id:"inset",children:(0,n.jsx)(o.code,{children:"inset"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"inset"})," es una abreviatura de ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," y ",(0,n.jsx)(o.code,{children:"left"}),", con la misma sintaxis de 1 a 4 valores que ",(0,n.jsx)(o.code,{children:"margin"}),". Un uso muy habitual es ",(0,n.jsx)(o.code,{children:"inset: 0"}),", que hace que un elemento ",(0,n.jsx)(o.code,{children:"absolute"})," cubra por completo a su ancestro posicionado, por ejemplo para superponer una capa semitransparente:"]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="tarjeta">
  <p>Contenido de la tarjeta</p>
  <div class="capa">Capa superpuesta</div>
</div>`,initialCss:`.tarjeta {
  position: relative;
  width: 220px;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  background-color: teal;
  color: white;
}

.capa {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;
}`}),"\n",(0,n.jsx)(o.h2,{id:"position-fixed",children:(0,n.jsx)(o.code,{children:"position: fixed"})}),"\n",(0,n.jsxs)(o.p,{children:["Un elemento ",(0,n.jsx)(o.code,{children:"fixed"})," tambi\xe9n sale del flujo, pero se coloca respecto a la ",(0,n.jsx)(o.strong,{children:"ventana del navegador"}),' y se queda ah\xed aunque se haga scroll. Es lo que se usa para cabeceras fijas, banners de cookies o el bot\xf3n de "volver arriba".']}),"\n",(0,n.jsx)(r.A,{initialHtml:`<button class="subir">\u{2191} Subir</button>
<p>Despl\xe1zate hacia abajo dentro de esta demo y observa el bot\xf3n.</p>
<div class="largo">Contenido muy largo</div>`,initialCss:`.subir {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 8px 12px;
}

.largo {
  height: 800px;
  background: linear-gradient(#eee, teal);
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
}`}),"\n",(0,n.jsx)(o.p,{children:'En esta demo, "la ventana" es el propio recuadro de la demo (es una p\xe1gina aparte incrustada en esta), pero el comportamiento es el mismo que en una p\xe1gina real: el bot\xf3n no se mueve del rinc\xf3n inferior derecho mientras haces scroll.'}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Si un ancestro del elemento ",(0,n.jsx)(o.code,{children:"fixed"})," tiene ",(0,n.jsx)(o.code,{children:"transform"})," o ",(0,n.jsx)(o.code,{children:"filter"})," (como vimos en la p\xe1gina de Filtros), ",(0,n.jsx)(o.code,{children:"fixed"})," deja de colocarse respecto a la ventana y pasa a colocarse respecto a ese ancestro. Es una fuente habitual de errores dif\xedciles de localizar."]})}),"\n",(0,n.jsx)(o.h2,{id:"position-sticky",children:(0,n.jsx)(o.code,{children:"position: sticky"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"sticky"})," es un h\xedbrido: el elemento se comporta como ",(0,n.jsx)(o.code,{children:"relative"})," (ocupa su sitio en el flujo) hasta que el scroll lo lleva a un umbral que t\xfa defines con ",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"right"}),", ",(0,n.jsx)(o.code,{children:"bottom"})," o ",(0,n.jsx)(o.code,{children:"left"}),', y a partir de ah\xed se "pega" y deja de moverse. Es ideal para cabeceras de secci\xf3n o de tabla.']}),"\n",(0,n.jsx)(r.A,{initialHtml:`<h3 class="cabecera">Cabecera pegajosa</h3>
<p>Despl\xe1zate hacia abajo dentro de esta demo.</p>
<div class="largo">Contenido muy largo</div>`,initialCss:`.cabecera {
  position: sticky;
  top: 0;
  margin: 0;
  padding: 8px;
  background-color: teal;
  color: white;
}

.largo {
  height: 800px;
  background: linear-gradient(#eee, #aaa);
  padding-top: 20px;
  box-sizing: border-box;
}`}),"\n",(0,n.jsxs)(o.p,{children:["Mientras la cabecera no llega a ",(0,n.jsx)(o.code,{children:"top: 0"}),", se comporta como un elemento normal; al llegar a la parte superior de la ventana, se queda pegada. Se queda pegada solo mientras su elemento padre siga a la vista: cuando el padre termina, la cabecera se va con \xe9l."]}),"\n",(0,n.jsxs)(o.admonition,{type:"warning",children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"sticky"})," tiene dos condiciones que fallan con facilidad:"]}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Hace falta un umbral"})," (",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"bottom"}),'...): sin \xe9l, no tiene d\xf3nde "pegarse" y se comporta como ',(0,n.jsx)(o.code,{children:"relative"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:["Ning\xfan ancestro puede tener ",(0,n.jsx)(o.code,{children:"overflow"})," distinto de ",(0,n.jsx)(o.code,{children:"visible"})]})," (",(0,n.jsx)(o.code,{children:"hidden"}),", ",(0,n.jsx)(o.code,{children:"auto"}),", ",(0,n.jsx)(o.code,{children:"scroll"}),"): ese ancestro pasar\xeda a ser el contenedor de scroll respecto al que se pega, y normalmente deja de funcionar como se espera."]}),"\n"]})]}),"\n",(0,n.jsx)(o.h2,{id:"z-index",children:(0,n.jsx)(o.code,{children:"z-index"})}),"\n",(0,n.jsxs)(o.p,{children:["Cuando dos elementos se solapan, el navegador decide cu\xe1l se pinta encima. Por defecto, gana el que aparece ",(0,n.jsx)(o.strong,{children:"despu\xe9s"})," en el HTML. ",(0,n.jsx)(o.code,{children:"z-index"})," permite cambiar ese orden con un n\xfamero entero: a mayor valor, m\xe1s arriba (los valores negativos tambi\xe9n son v\xe1lidos, y llevan el elemento por detr\xe1s)."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"z-index"})," solo afecta a elementos ",(0,n.jsx)(o.strong,{children:"posicionados"})," (con una ",(0,n.jsx)(o.code,{children:"position"})," distinta de ",(0,n.jsx)(o.code,{children:"static"}),") y a los hijos directos de contenedores Flexbox o Grid."]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="contenedor">
  <div class="caja c1">1</div>
  <div class="caja c2">2</div>
  <div class="caja c3">3</div>
</div>`,initialCss:`.contenedor {
  position: relative;
  height: 170px;
}

.caja {
  position: absolute;
  width: 100px;
  height: 100px;
  color: white;
  font-size: 1.5rem;
  padding: 6px;
  box-sizing: border-box;
}

.c1 {
  top: 0;
  left: 0;
  background-color: teal;
  z-index: 3;
}

.c2 {
  top: 30px;
  left: 50px;
  background-color: darkorange;
}

.c3 {
  top: 60px;
  left: 100px;
  background-color: darkslateblue;
}`}),"\n",(0,n.jsxs)(o.p,{children:["Sin ",(0,n.jsx)(o.code,{children:"z-index"}),", la caja 3 (la \xfaltima en el HTML) quedar\xeda encima de todas. Al darle ",(0,n.jsx)(o.code,{children:"z-index: 3"})," a la caja 1, pasa a pintarse por encima de las dem\xe1s aunque sea la primera. Prueba a quitar esa l\xednea para ver la diferencia."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Cuando un elemento posicionado tiene un ",(0,n.jsx)(o.code,{children:"z-index"}),", forma un ",(0,n.jsx)(o.strong,{children:"contexto de apilado"}),": sus hijos se ordenan entre s\xed dentro de \xe9l, pero ya no pueden saltar por encima de elementos que est\xe9n por encima de su padre, por muy alto que sea su propio ",(0,n.jsx)(o.code,{children:"z-index"}),". Si un ",(0,n.jsx)(o.code,{children:"z-index"}),' enorme "no funciona", casi siempre es porque alg\xfan ancestro lo est\xe1 encerrando en su propio contexto.']})}),"\n",(0,n.jsxs)(o.h2,{id:"float-y-clear",children:[(0,n.jsx)(o.code,{children:"float"})," y ",(0,n.jsx)(o.code,{children:"clear"})]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"float"})," saca un elemento hacia la izquierda o la derecha de su contenedor, y hace que el contenido que va a continuaci\xf3n (sobre todo el texto) lo ",(0,n.jsx)(o.strong,{children:"rodee"}),". Hoy se sigue usando para ese fin concreto: que el texto envuelva una imagen, como en una revista."]}),"\n",(0,n.jsx)(r.A,{initialHtml:`<div class="foto">Foto</div>
<p>Este texto rodea la foto flotante. Es corto a prop\xf3sito.</p>
<p class="pie">Este pie de p\xe1gina usa clear: both.</p>`,initialCss:`.foto {
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 12px 8px 0;
  background-color: teal;
  color: white;
  text-align: center;
  line-height: 100px;
}

.pie {
  clear: both;
  background-color: #eee;
  padding: 6px;
}`}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"clear"})," hace que un elemento no pueda tener un flotante a su lado, y por eso baja hasta quedar por debajo de \xe9l. Quita ",(0,n.jsx)(o.code,{children:"clear: both"})," del pie para ver c\xf3mo, sin \xe9l, el pie intentar\xeda colocarse al lado de la foto."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Hace a\xf1os ",(0,n.jsx)(o.code,{children:"float"})," era la herramienta habitual para maquetar columnas y p\xe1ginas enteras, pero hoy esa tarea la hacen Flexbox y Grid (que veremos en las siguientes p\xe1ginas), mucho m\xe1s c\xf3modos y predecibles."]})}),"\n",(0,n.jsx)(o.h2,{id:"tabla-resumen",children:"Tabla resumen"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:(0,n.jsx)(o.code,{children:"position"})}),(0,n.jsx)(o.th,{children:"\xbfOcupa hueco en el flujo?"}),(0,n.jsx)(o.th,{children:"Se coloca respecto a..."}),(0,n.jsx)(o.th,{children:"Uso t\xedpico"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"static"})}),(0,n.jsx)(o.td,{children:"S\xed"}),(0,n.jsxs)(o.td,{children:["Su posici\xf3n normal (",(0,n.jsx)(o.code,{children:"top"}),", ",(0,n.jsx)(o.code,{children:"left"}),"... se ignoran)"]}),(0,n.jsx)(o.td,{children:"Valor por defecto"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"relative"})}),(0,n.jsx)(o.td,{children:"S\xed (conserva el hueco original)"}),(0,n.jsx)(o.td,{children:"Su propia posici\xf3n original"}),(0,n.jsxs)(o.td,{children:["Punto de referencia para hijos ",(0,n.jsx)(o.code,{children:"absolute"}),", ajustes peque\xf1os"]})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"absolute"})}),(0,n.jsx)(o.td,{children:"No"}),(0,n.jsx)(o.td,{children:"El ancestro posicionado m\xe1s cercano (o la p\xe1gina)"}),(0,n.jsx)(o.td,{children:"Insignias, capas superpuestas, men\xfas desplegables"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"fixed"})}),(0,n.jsx)(o.td,{children:"No"}),(0,n.jsx)(o.td,{children:"La ventana del navegador"}),(0,n.jsx)(o.td,{children:'Cabeceras fijas, bot\xf3n "volver arriba"'})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"sticky"})}),(0,n.jsx)(o.td,{children:"S\xed"}),(0,n.jsx)(o.td,{children:"Su posici\xf3n normal, hasta que el scroll alcanza el umbral"}),(0,n.jsx)(o.td,{children:"Cabeceras de secci\xf3n o de tabla"})]})]})]})]})}function h(e={}){let{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},944(e,o,a){a.d(o,{N:()=>t});var i=a(4848),n=a(6540),s=a(6069),r=a.n(s),d=a(8848);a(4312),a(1113),a(5723);let l={markup:"HTML",css:"CSS",javascript:"JavaScript"};function t({code:e,onChange:o,language:a}){let[s,h]=(0,n.useState)(!1),x=async()=>{await navigator.clipboard.writeText(e),h(!0),setTimeout(()=>h(!1),1500)};return(0,i.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,i.jsxs)("button",{type:"button",onClick:x,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:s?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[s?(0,i.jsx)(p,{}):(0,i.jsx)(c,{}),s?"Copiado":""]}),(0,i.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:l[a]})]}),(0,i.jsx)(r(),{value:e,onValueChange:o,highlight:e=>(0,d.highlight)(e,d.languages[a],a),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function c(){return(0,i.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,i.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,i.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return(0,i.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,o,a){a.d(o,{A:()=>l});var i=a(4848),n=a(6540),s=a(944),r=a(2793),d=a(1756);function l({initialHtml:e,initialCss:o="",layout:a="side-by-side",height:t=460}){let[c,p]=(0,n.useState)(e),[h,x]=(0,n.useState)(o),u=(0,n.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${h}</style></head><body>${c}</body></html>`,[c,h]);return(0,i.jsx)(r.u,{layout:a,codePanel:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,i.jsx)(s.N,{code:c,onChange:p,language:"markup"}),(0,i.jsx)(s.N,{code:h,onChange:x,language:"css"})]}),resultPanel:(0,i.jsx)(d.R,{doc:u,title:"Resultado HTML+CSS",height:t})})}},2793(e,o,a){a.d(o,{u:()=>n});var i=a(4848);function n({layout:e,codePanel:o,resultPanel:a}){return(0,i.jsx)("div",{style:{margin:"2rem 0"},children:(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,i.jsx)("div",{children:o}),(0,i.jsx)("div",{children:a})]})})}a(6540)},1756(e,o,a){a.d(o,{R:()=>r});var i=a(4848),n=a(6540),s=a(6497);function r({doc:e,title:o,height:a}){let d=(0,n.useRef)(null),[l,t]=(0,n.useState)(!1),c=(0,s.Ay)("/playground-frame.html");return(0,n.useEffect)(()=>{l&&d.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,l]),(0,i.jsx)("iframe",{ref:d,title:o,src:c,onLoad:()=>t(!0),sandbox:"allow-scripts",style:{width:"100%",height:a,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);