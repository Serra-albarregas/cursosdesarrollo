"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["5383"],{9626(e,a,r){r.r(a),r.d(a,{metadata:()=>s,default:()=>u,frontMatter:()=>n,contentTitle:()=>d,toc:()=>c,assets:()=>l});var s=JSON.parse('{"id":"css/filtros","title":"Filtros","description":"La propiedad filter aplica efectos visuales a un elemento (habitualmente una imagen, aunque funciona sobre cualquier elemento), de forma parecida a los filtros de una app de fotos: sin modificar el archivo original, solo c\xf3mo se muestra.","source":"@site/docs/lenguajes-de-marcas/css/06-filtros.mdx","sourceDirName":"css","slug":"/css/filtros","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/filtros","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Filtros"},"sidebar":"marcasSidebar","previous":{"title":"Texto y tipograf\xeda","permalink":"/cursosdesarrollo/lenguajes-de-marcas/css/texto-tipografia"}}'),i=r(4848),o=r(8453),t=r(6841);let n={sidebar_position:6,title:"Filtros"},d,l={},c=[{value:"Funciones de filtro",id:"funciones-de-filtro",level:2},{value:"Combinar varios filtros a la vez",id:"combinar-varios-filtros-a-la-vez",level:2},{value:"<code>drop-shadow()</code> frente a <code>box-shadow</code>",id:"drop-shadow-frente-a-box-shadow",level:2}];function h(e){let a={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["La propiedad ",(0,i.jsx)(a.code,{children:"filter"})," aplica efectos visuales a un elemento (habitualmente una imagen, aunque funciona sobre cualquier elemento), de forma parecida a los filtros de una app de fotos: sin modificar el archivo original, solo c\xf3mo se muestra."]}),"\n",(0,i.jsx)(a.h2,{id:"funciones-de-filtro",children:"Funciones de filtro"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"filter"})," acepta una o varias funciones, separadas por espacios. Estas son las m\xe1s habituales:"]}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Funci\xf3n"}),(0,i.jsx)(a.th,{children:"Efecto"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"blur(px)"})}),(0,i.jsx)(a.td,{children:"Desenfoque"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"grayscale(%)"})}),(0,i.jsx)(a.td,{children:"Quita el color (0% = sin cambios, 100% = blanco y negro)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"brightness(%)"})}),(0,i.jsx)(a.td,{children:"Brillo (100% = sin cambios)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"contrast(%)"})}),(0,i.jsx)(a.td,{children:"Contraste (100% = sin cambios)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"saturate(%)"})}),(0,i.jsx)(a.td,{children:"Saturaci\xf3n del color (100% = sin cambios)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"sepia(%)"})}),(0,i.jsx)(a.td,{children:"Tono sepia (como una foto antigua)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"invert(%)"})}),(0,i.jsx)(a.td,{children:"Invierte los colores"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:(0,i.jsx)(a.code,{children:"hue-rotate(deg)"})}),(0,i.jsx)(a.td,{children:"Gira el tono de color sobre la rueda de color"})]})]})]}),"\n",(0,i.jsx)(t.A,{initialHtml:`<div class="muestra original">Original</div>
<div class="muestra blur">blur(4px)</div>
<div class="muestra grayscale">grayscale(100%)</div>
<div class="muestra brightness">brightness(1.6)</div>
<div class="muestra contrast">contrast(200%)</div>
<div class="muestra saturate">saturate(3)</div>
<div class="muestra sepia">sepia(100%)</div>
<div class="muestra invert">invert(100%)</div>
<div class="muestra hue">hue-rotate(120deg)</div>`,initialCss:`.muestra {
  display: inline-block;
  width: 110px;
  height: 80px;
  margin: 4px;
  padding: 6px;
  box-sizing: border-box;
  color: white;
  font-size: 0.75rem;
  text-align: center;
  background: linear-gradient(135deg, #ff5e5e, #5ea1ff);
}

.blur {
  filter: blur(4px);
}

.grayscale {
  filter: grayscale(100%);
}

.brightness {
  filter: brightness(1.6);
}

.contrast {
  filter: contrast(200%);
}

.saturate {
  filter: saturate(3);
}

.sepia {
  filter: sepia(100%);
}

.invert {
  filter: invert(100%);
}

.hue {
  filter: hue-rotate(120deg);
}`,layout:"stacked"}),"\n",(0,i.jsx)(a.p,{children:"Todas parten exactamente del mismo degradado de fondo; lo \xfanico que cambia es el filtro aplicado."}),"\n",(0,i.jsx)(a.h2,{id:"combinar-varios-filtros-a-la-vez",children:"Combinar varios filtros a la vez"}),"\n",(0,i.jsx)(a.p,{children:"Se pueden encadenar varias funciones en la misma propiedad, separadas por espacios. Se aplican en el orden en que se escriben:"}),"\n",(0,i.jsx)(t.A,{initialHtml:'<div class="muestra combo">grayscale(50%) brightness(1.2) blur(1px)</div>',initialCss:`.muestra {
  display: inline-block;
  width: 140px;
  height: 100px;
  padding: 6px;
  box-sizing: border-box;
  color: white;
  font-size: 0.75rem;
  text-align: center;
  background: linear-gradient(135deg, #ff5e5e, #5ea1ff);
}

.combo {
  filter: grayscale(50%) brightness(1.2) blur(1px);
}`}),"\n",(0,i.jsxs)(a.h2,{id:"drop-shadow-frente-a-box-shadow",children:[(0,i.jsx)(a.code,{children:"drop-shadow()"})," frente a ",(0,i.jsx)(a.code,{children:"box-shadow"})]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"filter: drop-shadow()"})," se parece a ",(0,i.jsx)(a.code,{children:"box-shadow"}),", pero con una diferencia importante: ",(0,i.jsx)(a.code,{children:"box-shadow"})," siempre dibuja la sombra con la forma rectangular (o redondeada) de la caja del elemento, mientras que ",(0,i.jsx)(a.code,{children:"drop-shadow()"})," sigue la silueta real de lo que se ve, aunque el elemento tenga una forma recortada con ",(0,i.jsx)(a.code,{children:"clip-path"}),"."]}),"\n",(0,i.jsx)(t.A,{initialHtml:`<div class="forma forma-box">box-shadow</div>
<div class="forma forma-drop">drop-shadow</div>`,initialCss:`.forma {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin: 20px;
  background-color: teal;
  color: white;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.forma-box {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

.forma-drop {
  filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.6));
}`}),"\n",(0,i.jsxs)(a.p,{children:["F\xedjate en la diferencia: la sombra de ",(0,i.jsx)(a.code,{children:"box-shadow"})," se nota con forma rectangular por detr\xe1s de la figura (sigue la caja, no el recorte), mientras que la de ",(0,i.jsx)(a.code,{children:"drop-shadow"})," abraza la forma de la estrella. Por eso ",(0,i.jsx)(a.code,{children:"drop-shadow()"})," es la opci\xf3n recomendada para dar sombra a iconos o im\xe1genes con transparencia."]})]})}function u(e={}){let{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},944(e,a,r){r.d(a,{N:()=>l});var s=r(4848),i=r(6540),o=r(6069),t=r.n(o),n=r(8848);r(4312),r(1113),r(5723);let d={markup:"HTML",css:"CSS",javascript:"JavaScript"};function l({code:e,onChange:a,language:r}){let[o,u]=(0,i.useState)(!1),p=async()=>{await navigator.clipboard.writeText(e),u(!0),setTimeout(()=>u(!1),1500)};return(0,s.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,s.jsxs)("button",{type:"button",onClick:p,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:o?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[o?(0,s.jsx)(h,{}):(0,s.jsx)(c,{}),o?"Copiado":""]}),(0,s.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:d[r]})]}),(0,s.jsx)(t(),{value:e,onValueChange:a,highlight:e=>(0,n.highlight)(e,n.languages[r],r),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function c(){return(0,s.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,s.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,s.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function h(){return(0,s.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,a,r){r.d(a,{A:()=>d});var s=r(4848),i=r(6540),o=r(944),t=r(2793),n=r(1756);function d({initialHtml:e,initialCss:a="",layout:r="side-by-side",height:l=460}){let[c,h]=(0,i.useState)(e),[u,p]=(0,i.useState)(a),x=(0,i.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${u}</style></head><body>${c}</body></html>`,[c,u]);return(0,s.jsx)(t.u,{layout:r,codePanel:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,s.jsx)(o.N,{code:c,onChange:h,language:"markup"}),(0,s.jsx)(o.N,{code:u,onChange:p,language:"css"})]}),resultPanel:(0,s.jsx)(n.R,{doc:x,title:"Resultado HTML+CSS",height:l})})}},2793(e,a,r){r.d(a,{u:()=>i});var s=r(4848);function i({layout:e,codePanel:a,resultPanel:r}){return(0,s.jsx)("div",{style:{margin:"2rem 0"},children:(0,s.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,s.jsx)("div",{children:a}),(0,s.jsx)("div",{children:r})]})})}r(6540)},1756(e,a,r){r.d(a,{R:()=>t});var s=r(4848),i=r(6540),o=r(6497);function t({doc:e,title:a,height:r}){let n=(0,i.useRef)(null),[d,l]=(0,i.useState)(!1),c=(0,o.Ay)("/playground-frame.html");return(0,i.useEffect)(()=>{d&&n.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,d]),(0,s.jsx)("iframe",{ref:n,title:a,src:c,onLoad:()=>l(!0),sandbox:"allow-scripts",style:{width:"100%",height:r,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);