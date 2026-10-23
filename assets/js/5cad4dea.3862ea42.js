"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["2071"],{8363(e,a,s){s.r(a),s.d(a,{metadata:()=>n,default:()=>u,frontMatter:()=>l,contentTitle:()=>r,toc:()=>c,assets:()=>d});var n=JSON.parse('{"id":"css/texto-tipografia","title":"Texto y tipograf\xeda","description":"El texto es, con diferencia, lo que m\xe1s aparece en cualquier p\xe1gina web. Las propiedades de esta p\xe1gina controlan tanto la fuente en s\xed (qu\xe9 letra se usa, de qu\xe9 tama\xf1o, con qu\xe9 peso) como su disposici\xf3n (alineaci\xf3n, espaciado, interlineado).","source":"@site/docs/lenguajes-de-marcas/css/05-texto-tipografia.mdx","sourceDirName":"css","slug":"/css/texto-tipografia","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/texto-tipografia","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Texto y tipograf\xeda"},"sidebar":"marcasSidebar","previous":{"title":"Colores y unidades","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/colores-unidades"},"next":{"title":"Filtros","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/filtros"}}'),o=s(4848),i=s(8453),t=s(6841);let l={sidebar_position:5,title:"Texto y tipograf\xeda"},r,d={},c=[{value:"<code>font-family</code>",id:"font-family",level:2},{value:"Fuentes web",id:"fuentes-web",level:3},{value:"Tama\xf1o, peso y estilo",id:"tama\xf1o-peso-y-estilo",level:2},{value:"<code>line-height</code>",id:"line-height",level:2},{value:"Alineaci\xf3n y decoraci\xf3n",id:"alineaci\xf3n-y-decoraci\xf3n",level:2},{value:"Espaciado de texto",id:"espaciado-de-texto",level:2},{value:"Truncar texto con puntos suspensivos",id:"truncar-texto-con-puntos-suspensivos",level:2},{value:"<code>text-shadow</code>",id:"text-shadow",level:2}];function p(e){let a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"El texto es, con diferencia, lo que m\xe1s aparece en cualquier p\xe1gina web. Las propiedades de esta p\xe1gina controlan tanto la fuente en s\xed (qu\xe9 letra se usa, de qu\xe9 tama\xf1o, con qu\xe9 peso) como su disposici\xf3n (alineaci\xf3n, espaciado, interlineado)."}),"\n",(0,o.jsx)(a.h2,{id:"font-family",children:(0,o.jsx)(a.code,{children:"font-family"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"font-family"})," indica la fuente a usar. Se escribe como una lista de opciones, de m\xe1s a menos preferida, separadas por comas: el navegador usa la primera que tenga instalada o disponible, y sigue probando con las siguientes si no la encuentra."]}),"\n",(0,o.jsx)(t.A,{initialHtml:'<p class="texto">Este texto usa una pila de fuentes con alternativas.</p>',initialCss:`.texto {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 1.2rem;
}`}),"\n",(0,o.jsxs)(a.p,{children:["Si un nombre de fuente tiene espacios (como ",(0,o.jsx)(a.code,{children:'"Segoe UI"'}),"), hay que escribirlo entre comillas. El \xfaltimo elemento de la lista suele ser una ",(0,o.jsx)(a.strong,{children:"familia gen\xe9rica"}),": no es una fuente concreta, sino una categor\xeda que el navegador resuelve con su propia fuente por defecto de ese tipo."]}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Familia gen\xe9rica"}),(0,o.jsx)(a.th,{children:"Aspecto"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.code,{children:"serif"})}),(0,o.jsx)(a.td,{children:"Con remates (como Times New Roman)"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.code,{children:"sans-serif"})}),(0,o.jsx)(a.td,{children:"Sin remates (como Arial)"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.code,{children:"monospace"})}),(0,o.jsx)(a.td,{children:"Todos los caracteres con el mismo ancho (para c\xf3digo)"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.code,{children:"cursive"})}),(0,o.jsx)(a.td,{children:"Estilo manuscrito"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.code,{children:"fantasy"})}),(0,o.jsx)(a.td,{children:"Decorativa"})]})]})]}),"\n",(0,o.jsx)(t.A,{initialHtml:`<p class="serif">Texto con serif</p>
<p class="sans">Texto con sans-serif</p>
<p class="mono">Texto con monospace</p>`,initialCss:`.serif {
  font-family: serif;
}

.sans {
  font-family: sans-serif;
}

.mono {
  font-family: monospace;
}`}),"\n",(0,o.jsx)(a.admonition,{type:"tip",children:(0,o.jsx)(a.p,{children:"Terminar siempre la pila de fuentes con una familia gen\xe9rica es una buena pr\xe1ctica: si ninguna de las fuentes concretas est\xe1 disponible, el texto sigue siendo legible con un estilo razonable, en vez de usar una fuente aleatoria del sistema."})}),"\n",(0,o.jsx)(a.h3,{id:"fuentes-web",children:"Fuentes web"}),"\n",(0,o.jsx)(a.p,{children:"Para usar una fuente que el sistema operativo del usuario no tenga instalada, se puede enlazar una fuente web, por ejemplo de Google Fonts, igual que se enlaza una hoja de estilos CSS externa:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:'<head>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">\n</head>\n'})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-css",children:'body {\n    font-family: "Roboto", sans-serif;\n}\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Tambi\xe9n es posible alojar la propia fuente en el servidor, con ",(0,o.jsx)(a.code,{children:"@font-face"}),", en vez de depender de un servicio externo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-css",children:'@font-face {\n    font-family: "MiFuente";\n    src: url("mifuente.woff2") format("woff2");\n}\n\nbody {\n    font-family: "MiFuente", sans-serif;\n}\n'})}),"\n",(0,o.jsx)(a.h2,{id:"tama\xf1o-peso-y-estilo",children:"Tama\xf1o, peso y estilo"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"font-size"}),": el tama\xf1o de la fuente. Admite las unidades que ya vimos (",(0,o.jsx)(a.code,{children:"px"}),", ",(0,o.jsx)(a.code,{children:"em"}),", ",(0,o.jsx)(a.code,{children:"rem"}),"...), e incluso ",(0,o.jsx)(a.code,{children:"clamp()"})," para un tama\xf1o fluido."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"font-weight"}),": el grosor del trazo. Los valores con nombre m\xe1s comunes son ",(0,o.jsx)(a.code,{children:"normal"})," (400) y ",(0,o.jsx)(a.code,{children:"bold"})," (700), pero tambi\xe9n se puede usar directamente un n\xfamero de 100 a 900."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"font-style"}),": ",(0,o.jsx)(a.code,{children:"normal"}),", ",(0,o.jsx)(a.code,{children:"italic"})," (cursiva) u ",(0,o.jsx)(a.code,{children:"oblique"})," (una versi\xf3n inclinada de la fuente normal, en vez de un dise\xf1o cursivo propio)."]}),"\n"]}),"\n",(0,o.jsx)(t.A,{initialHtml:`<p class="ligera">font-weight: 300</p>
<p class="normal">font-weight: normal (400)</p>
<p class="negrita">font-weight: bold (700)</p>
<p class="extra">font-weight: 900</p>
<p class="cursiva">font-style: italic</p>`,initialCss:`p {
  font-size: 1.1rem;
}

.ligera {
  font-weight: 300;
}

.normal {
  font-weight: normal;
}

.negrita {
  font-weight: bold;
}

.extra {
  font-weight: 900;
}

.cursiva {
  font-style: italic;
}`}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:["No todas las fuentes incluyen los nueve pesos: muchas fuentes del sistema solo distinguen entre normal y negrita, as\xed que pedir ",(0,o.jsx)(a.code,{children:"font-weight: 300"})," puede no notarse si la fuente activa no trae ese peso concreto."]})}),"\n",(0,o.jsx)(a.h2,{id:"line-height",children:(0,o.jsx)(a.code,{children:"line-height"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"line-height"}),' controla el alto de cada l\xednea de texto, no solo el espacio "extra" entre l\xedneas: incluye tambi\xe9n el propio tama\xf1o del texto. Se puede dar con una unidad fija (',(0,o.jsx)(a.code,{children:"24px"}),") o, m\xe1s habitualmente, como un n\xfamero sin unidad (",(0,o.jsx)(a.code,{children:"1.5"}),'), que se interpreta como "1.5 veces el ',(0,o.jsx)(a.code,{children:"font-size"}),' de ese elemento":']}),"\n",(0,o.jsx)(t.A,{initialHtml:`<p class="apretado">Un interlineado demasiado ajustado, como este, dificulta seguir la l\xednea al leer un p\xe1rrafo largo, porque las l\xedneas quedan muy pegadas entre s\xed y el ojo tiende a saltar a la l\xednea equivocada.</p>
<p class="comodo">Un interlineado m\xe1s c\xf3modo, como este, separa visualmente cada l\xednea y hace que el p\xe1rrafo largo se lea con m\xe1s facilidad, sin que el ojo se pierda al pasar de una l\xednea a la siguiente.</p>`,initialCss:`p {
  max-width: 350px;
  font-size: 1rem;
}

.apretado {
  line-height: 1;
}

.comodo {
  line-height: 1.6;
}`}),"\n",(0,o.jsx)(a.admonition,{type:"tip",children:(0,o.jsxs)(a.p,{children:["Se prefiere el valor sin unidad porque se recalcula correctamente si el tama\xf1o de fuente cambia (por herencia, por ",(0,o.jsx)(a.code,{children:"rem"}),", por ",(0,o.jsx)(a.code,{children:"clamp()"}),"...). Un ",(0,o.jsx)(a.code,{children:"line-height: 24px"})," fijo, en cambio, deja de tener sentido si el ",(0,o.jsx)(a.code,{children:"font-size"})," del elemento cambia pero el alto de l\xednea se queda igual."]})}),"\n",(0,o.jsx)(a.h2,{id:"alineaci\xf3n-y-decoraci\xf3n",children:"Alineaci\xf3n y decoraci\xf3n"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"text-align"}),": ",(0,o.jsx)(a.code,{children:"left"}),", ",(0,o.jsx)(a.code,{children:"right"}),", ",(0,o.jsx)(a.code,{children:"center"}),", ",(0,o.jsx)(a.code,{children:"justify"})," (estira los espacios para que el texto llegue justo al margen derecho en todas las l\xedneas menos la \xfaltima)."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"text-decoration"}),": ",(0,o.jsx)(a.code,{children:"underline"}),", ",(0,o.jsx)(a.code,{children:"line-through"}),", ",(0,o.jsx)(a.code,{children:"none"})," (para quitar, por ejemplo, el subrayado por defecto de un enlace). Admite tambi\xe9n color y estilo de l\xednea: ",(0,o.jsx)(a.code,{children:"text-decoration: underline wavy red;"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"text-transform"}),": ",(0,o.jsx)(a.code,{children:"uppercase"}),", ",(0,o.jsx)(a.code,{children:"lowercase"}),", ",(0,o.jsx)(a.code,{children:"capitalize"})," (pone en may\xfascula la primera letra de cada palabra), sin modificar el texto real del HTML, solo c\xf3mo se muestra."]}),"\n"]}),"\n",(0,o.jsx)(t.A,{initialHtml:`<p class="centrado">Texto centrado</p>
<p class="justificado">Este p\xe1rrafo est\xe1 justificado, as\xed que el texto llega exactamente al margen derecho en todas las l\xedneas completas, repartiendo el espacio sobrante entre las palabras de cada l\xednea.</p>
<p class="subrayado">Texto subrayado con una l\xednea ondulada</p>
<p class="tachado">Texto tachado</p>
<p class="mayusculas">texto transformado a may\xfasculas</p>`,initialCss:`.centrado {
  text-align: center;
}

.justificado {
  text-align: justify;
  max-width: 300px;
}

.subrayado {
  text-decoration: underline wavy red;
}

.tachado {
  text-decoration: line-through;
}

.mayusculas {
  text-transform: uppercase;
}`}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"text-align: justify"})," puede dejar huecos raros entre palabras en p\xe1rrafos estrechos o con palabras largas, porque el navegador reparte el espacio sobrante sin ning\xfan criterio tipogr\xe1fico avanzado. Conviene probarlo con el texto real antes de darlo por bueno."]})}),"\n",(0,o.jsx)(a.h2,{id:"espaciado-de-texto",children:"Espaciado de texto"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"letter-spacing"})," ajusta el espacio entre letras, y ",(0,o.jsx)(a.code,{children:"word-spacing"})," el espacio entre palabras. Un uso t\xedpico de ",(0,o.jsx)(a.code,{children:"letter-spacing"}),' es "abrir" un poco un t\xedtulo en may\xfasculas, para que no se vea apelmazado:']}),"\n",(0,o.jsx)(t.A,{initialHtml:`<h2 class="titulo">T\xedtulo de secci\xf3n</h2>
<p class="espaciado">Texto con m\xe1s separaci\xf3n entre palabras.</p>`,initialCss:`.titulo {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.espaciado {
  word-spacing: 8px;
}`}),"\n",(0,o.jsx)(a.h2,{id:"truncar-texto-con-puntos-suspensivos",children:"Truncar texto con puntos suspensivos"}),"\n",(0,o.jsx)(a.p,{children:"Cuando el espacio es limitado (una tarjeta, un elemento de men\xfa, una celda de tabla), es habitual cortar el texto que no cabe y mostrar puntos suspensivos en vez de desbordarlo o partirlo en varias l\xedneas. Hacen falta tres propiedades a la vez:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"white-space: nowrap"}),": evita que el texto salte de l\xednea."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"overflow: hidden"}),": oculta lo que no cabe en el ancho disponible."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"text-overflow: ellipsis"}),": sustituye lo oculto por ",(0,o.jsx)(a.code,{children:"..."}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.A,{initialHtml:`<div class="tarjeta">
  <p class="truncado">Este es un t\xedtulo bastante largo que no cabe en el ancho de la tarjeta</p>
</div>`,initialCss:`.tarjeta {
  width: 200px;
  border: 1px solid #ccc;
  padding: 8px;
}

.truncado {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}`}),"\n",(0,o.jsxs)(a.p,{children:["Las tres propiedades son necesarias a la vez: sin ",(0,o.jsx)(a.code,{children:"nowrap"})," el texto saltar\xeda de l\xednea en vez de desbordar, sin ",(0,o.jsx)(a.code,{children:"overflow: hidden"})," el texto que no cabe se saldr\xeda de la caja en vez de ocultarse, y sin ",(0,o.jsx)(a.code,{children:"text-overflow: ellipsis"})," simplemente se cortar\xeda sin puntos suspensivos."]}),"\n",(0,o.jsx)(a.h2,{id:"text-shadow",children:(0,o.jsx)(a.code,{children:"text-shadow"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"text-shadow"})," a\xf1ade una sombra al texto, con una sintaxis muy parecida a la de ",(0,o.jsx)(a.code,{children:"box-shadow"})," que ya vimos en Im\xe1genes: desplazamiento horizontal, desplazamiento vertical, desenfoque (opcional) y color."]}),"\n",(0,o.jsx)(t.A,{initialHtml:'<h2 class="con-sombra">T\xedtulo con sombra</h2>',initialCss:`.con-sombra {
  color: white;
  background-color: darkslateblue;
  padding: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}`})]})}function u(e={}){let{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},944(e,a,s){s.d(a,{N:()=>d});var n=s(4848),o=s(6540),i=s(6069),t=s.n(i),l=s(8848);s(4312),s(1113),s(5723);let r={markup:"HTML",css:"CSS",javascript:"JavaScript"};function d({code:e,onChange:a,language:s}){let[i,u]=(0,o.useState)(!1),x=async()=>{await navigator.clipboard.writeText(e),u(!0),setTimeout(()=>u(!1),1500)};return(0,n.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,n.jsxs)("button",{type:"button",onClick:x,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:i?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[i?(0,n.jsx)(p,{}):(0,n.jsx)(c,{}),i?"Copiado":""]}),(0,n.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:r[s]})]}),(0,n.jsx)(t(),{value:e,onValueChange:a,highlight:e=>(0,l.highlight)(e,l.languages[s],s),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function c(){return(0,n.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,n.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,n.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,a,s){s.d(a,{A:()=>r});var n=s(4848),o=s(6540),i=s(944),t=s(2793),l=s(1756);function r({initialHtml:e,initialCss:a="",layout:s="side-by-side",height:d=460}){let[c,p]=(0,o.useState)(e),[u,x]=(0,o.useState)(a),h=(0,o.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${u}</style></head><body>${c}</body></html>`,[c,u]);return(0,n.jsx)(t.u,{layout:s,codePanel:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsx)(i.N,{code:c,onChange:p,language:"markup"}),(0,n.jsx)(i.N,{code:u,onChange:x,language:"css"})]}),resultPanel:(0,n.jsx)(l.R,{doc:h,title:"Resultado HTML+CSS",height:d})})}},2793(e,a,s){s.d(a,{u:()=>o});var n=s(4848);function o({layout:e,codePanel:a,resultPanel:s}){return(0,n.jsx)("div",{style:{margin:"2rem 0"},children:(0,n.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,n.jsx)("div",{children:a}),(0,n.jsx)("div",{children:s})]})})}s(6540)},1756(e,a,s){s.d(a,{R:()=>t});var n=s(4848),o=s(6540),i=s(6497);function t({doc:e,title:a,height:s}){let l=(0,o.useRef)(null),[r,d]=(0,o.useState)(!1),c=(0,i.Ay)("/playground-frame.html");return(0,o.useEffect)(()=>{r&&l.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,r]),(0,n.jsx)("iframe",{ref:l,title:a,src:c,onLoad:()=>d(!0),sandbox:"allow-scripts",style:{width:"100%",height:s,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);