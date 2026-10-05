"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["1605"],{8385(e,o,a){a.r(o),a.d(o,{metadata:()=>i,default:()=>m,frontMatter:()=>s,contentTitle:()=>d,toc:()=>p,assets:()=>c});var i=JSON.parse('{"id":"html/formularios","title":"Formularios","description":"Los formularios son un recurso esencial para la comunicaci\xf3n entre el usuario y la aplicaci\xf3n. Permiten a los usuarios la introducci\xf3n de datos, que generalmente se env\xedan a un servidor web para su procesamiento y almacenamiento, o se usan en el lado del cliente para provocar de alguna manera una actualizaci\xf3n inmediata de la interfaz.","source":"@site/docs/lenguajes-de-marcas/html/formularios.mdx","sourceDirName":"html","slug":"/html/formularios","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/formularios","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Formularios"},"sidebar":"marcasSidebar","previous":{"title":"Videos","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/videos"},"next":{"title":"Validaci\xf3n de formularios","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/validacion"}}'),n=a(4848),r=a(8453),l=a(3432),t=a(6841);let s={sidebar_position:8,title:"Formularios"},d,c={},p=[{value:"Creaci\xf3n de un formulario b\xe1sico",id:"creaci\xf3n-de-un-formulario-b\xe1sico",level:2},{value:"M\xe9todos de env\xedo: GET y POST",id:"m\xe9todos-de-env\xedo-get-y-post",level:2},{value:"Ordenar los elementos del formulario",id:"ordenar-los-elementos-del-formulario",level:2},{value:"Agrupar campos con <code>&lt;fieldset&gt;</code> y <code>&lt;legend&gt;</code>",id:"agrupar-campos-con-fieldset-y-legend",level:3},{value:"Checkbox",id:"checkbox",level:2},{value:"Radio",id:"radio",level:2},{value:"Selector desplegable con <code>&lt;select&gt;</code>",id:"selector-desplegable-con-select",level:2},{value:"Lista de sugerencias con <code>&lt;datalist&gt;</code>",id:"lista-de-sugerencias-con-datalist",level:2},{value:"Botones de env\xedo y de borrado",id:"botones-de-env\xedo-y-de-borrado",level:2},{value:"La etiqueta <code>&lt;button&gt;</code>",id:"la-etiqueta-button",level:2},{value:"Selector de color",id:"selector-de-color",level:2},{value:"Selector de fecha",id:"selector-de-fecha",level:2},{value:"Selector de fecha y hora",id:"selector-de-fecha-y-hora",level:2},{value:"Email",id:"email",level:2},{value:"Tel\xe9fono",id:"tel\xe9fono",level:2},{value:"URL",id:"url",level:2},{value:"Campo de texto num\xe9rico",id:"campo-de-texto-num\xe9rico",level:2},{value:"Rango num\xe9rico",id:"rango-num\xe9rico",level:2},{value:"Subir archivos",id:"subir-archivos",level:2},{value:"Campo de b\xfasqueda",id:"campo-de-b\xfasqueda",level:2}];function u(e){let o={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Los formularios son un recurso esencial para la comunicaci\xf3n entre el usuario y la aplicaci\xf3n. Permiten a los usuarios la introducci\xf3n de datos, que generalmente se env\xedan a un servidor web para su procesamiento y almacenamiento, o se usan en el lado del cliente para provocar de alguna manera una actualizaci\xf3n inmediata de la interfaz."}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["En los ejemplos de esta p\xe1gina el formulario apunta a ",(0,n.jsx)(o.code,{children:"recibir"}),', un archivo que no existe. Por eso, al pulsar "Enviar" no se procesar\xe1 nada; lo importante es ver c\xf3mo se construye cada campo.']})}),"\n",(0,n.jsx)(o.h2,{id:"creaci\xf3n-de-un-formulario-b\xe1sico",children:"Creaci\xf3n de un formulario b\xe1sico"}),"\n",(0,n.jsxs)(o.p,{children:["Para crear un formulario, se utiliza la etiqueta ",(0,n.jsx)(o.code,{children:"<form>"}),". En esta etiqueta se especifican atributos importantes como ",(0,n.jsx)(o.code,{children:"action"})," y ",(0,n.jsx)(o.code,{children:"method"}),", que determinan a d\xf3nde se enviar\xe1 la informaci\xf3n y c\xf3mo ser\xe1 procesada."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"action"}),": archivo o URL al que se enviar\xe1n los datos."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"method"}),": m\xe9todo HTTP con el que se env\xedan, ",(0,n.jsx)(o.code,{children:"get"})," o ",(0,n.jsx)(o.code,{children:"post"})," (se explica en el siguiente apartado)."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Cada campo debe tener un atributo ",(0,n.jsx)(o.code,{children:"name"}),": es el nombre con el que viajar\xe1 su valor al servidor. ",(0,n.jsxs)(o.strong,{children:["Un campo sin ",(0,n.jsx)(o.code,{children:"name"})," no se env\xeda."]})]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="post">
  <input type="text" name="nombre" />
  <input type="text" name="apellidos" />
  <input type="password" name="contrasena" />
  <input type="submit" value="Enviar" />
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"m\xe9todos-de-env\xedo-get-y-post",children:"M\xe9todos de env\xedo: GET y POST"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"get"}),": los datos se a\xf1aden a la URL (por ejemplo, ",(0,n.jsx)(o.code,{children:"recibir?nombre=Ana&apellidos=Ruiz"}),"). Son visibles, quedan en el historial del navegador y tienen un tama\xf1o limitado. Se usa para consultas y b\xfasquedas."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"post"}),": los datos viajan en el cuerpo de la petici\xf3n, sin aparecer en la URL, y no tienen un l\xedmite de tama\xf1o pr\xe1ctico. Se usa para datos sensibles (contrase\xf1as), para crear o modificar informaci\xf3n en el servidor y para subir archivos."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsxs)(o.p,{children:["Nunca env\xedes contrase\xf1as con ",(0,n.jsx)(o.code,{children:'method="get"'}),": quedar\xedan escritas en la URL. Por eso los ejemplos con campos ",(0,n.jsx)(o.code,{children:"password"})," de esta p\xe1gina usan ",(0,n.jsx)(o.code,{children:"post"}),"."]})}),"\n",(0,n.jsx)(o.h2,{id:"ordenar-los-elementos-del-formulario",children:"Ordenar los elementos del formulario"}),"\n",(0,n.jsxs)(o.p,{children:["Los elementos de un formulario, como ",(0,n.jsx)(o.code,{children:"<input>"})," o ",(0,n.jsx)(o.code,{children:"<textarea>"}),", son elementos en l\xednea, as\xed que por defecto se colocan uno detr\xe1s de otro en la misma l\xednea. Para ordenarlos, lo habitual es:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Envolver cada campo con su etiqueta ",(0,n.jsx)(o.code,{children:"<label>"})," en un ",(0,n.jsx)(o.code,{children:"<div>"}),", de modo que cada grupo ocupe su propia l\xednea."]}),"\n",(0,n.jsxs)(o.li,{children:["Agrupar los campos relacionados con ",(0,n.jsx)(o.code,{children:"<fieldset>"}),"."]}),"\n",(0,n.jsx)(o.li,{children:"Usar CSS para controlar la disposici\xf3n y el tama\xf1o de los elementos."}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Cada ",(0,n.jsx)(o.code,{children:"<label>"})," se asocia a su campo mediante el atributo ",(0,n.jsx)(o.code,{children:"for"}),", que debe coincidir con el ",(0,n.jsx)(o.code,{children:"id"})," del campo. Con ",(0,n.jsx)(o.code,{children:"display: block"})," en el ",(0,n.jsx)(o.code,{children:"<label>"}),", el campo se coloca debajo de su etiqueta. Con ",(0,n.jsx)(o.code,{children:"width: 100%"})," y ",(0,n.jsx)(o.code,{children:"box-sizing: border-box"}),", los campos ocupan todo el ancho del formulario sin desbordarlo por culpa del ",(0,n.jsx)(o.code,{children:"padding"})," y el borde."]}),"\n",(0,n.jsxs)(o.p,{children:["El atributo ",(0,n.jsx)(o.code,{children:"placeholder"})," muestra una pista dentro del campo (por ejemplo, un formato o un ejemplo), pero ",(0,n.jsxs)(o.strong,{children:["no sustituye al ",(0,n.jsx)(o.code,{children:"<label>"})]}),": desaparece al escribir y los lectores de pantalla no siempre lo leen."]}),"\n",(0,n.jsxs)(o.p,{children:["La etiqueta ",(0,n.jsx)(o.code,{children:"<textarea>"})," crea un campo de texto de varias l\xedneas. Con ",(0,n.jsx)(o.code,{children:"rows"})," se indica su altura inicial en l\xedneas, y el ancho se controla con CSS. El texto por defecto (si lo hay) se escribe entre la etiqueta de apertura y la de cierre."]}),"\n",(0,n.jsxs)(o.h3,{id:"agrupar-campos-con-fieldset-y-legend",children:["Agrupar campos con ",(0,n.jsx)(o.code,{children:"<fieldset>"})," y ",(0,n.jsx)(o.code,{children:"<legend>"})]}),"\n",(0,n.jsxs)(o.p,{children:["Cuando un formulario tiene varios campos relacionados entre s\xed, se agrupan con ",(0,n.jsx)(o.code,{children:"<fieldset>"})," y se les da un t\xedtulo con ",(0,n.jsx)(o.code,{children:"<legend>"}),". Por defecto, el navegador dibuja un marco alrededor del grupo con la leyenda sobre el borde superior. Adem\xe1s de ordenar visualmente el formulario, mejora la accesibilidad: los lectores de pantalla anuncian la leyenda al entrar en el grupo."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"<fieldset>"}),": agrupa campos relacionados."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"<legend>"}),": t\xedtulo del grupo. Debe ser el primer elemento dentro del ",(0,n.jsx)(o.code,{children:"<fieldset>"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Si se a\xf1ade el atributo ",(0,n.jsx)(o.code,{children:"disabled"})," a un ",(0,n.jsx)(o.code,{children:"<fieldset>"}),", se desactivan a la vez todos los campos que contiene."]}),"\n",(0,n.jsx)(t.A,{initialHtml:`<form action="recibir" method="post">
  <fieldset>
      <legend>Datos personales</legend>
      <div class="campo">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ej.: Ana" />
      </div>
      <div class="campo">
          <label for="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" placeholder="Ej.: Garc\xeda Ruiz" />
      </div>
  </fieldset>
  <fieldset>
      <legend>Acceso</legend>
      <div class="campo">
          <label for="contrasena">Contrase\xf1a</label>
          <input type="password" id="contrasena" name="contrasena" />
      </div>
  </fieldset>
  <div class="campo">
      <label for="comentarios">Comentarios</label>
      <textarea id="comentarios" name="comentarios" rows="6"></textarea>
  </div>
  <div class="campo">
      <input type="submit" value="Enviar" />
  </div>
</form>`,initialCss:`form {
  max-width: 400px;
}

fieldset {
  margin-bottom: 16px;
}

legend {
  font-weight: bold;
  padding: 0 6px;
}

.campo {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input[type="text"],
input[type="password"],
textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
}`,layout:"stacked"}),"\n",(0,n.jsx)(o.h2,{id:"checkbox",children:"Checkbox"}),"\n",(0,n.jsxs)(o.p,{children:["Los campos de tipo ",(0,n.jsx)(o.code,{children:"checkbox"})," (casillas de verificaci\xf3n) permiten a los usuarios seleccionar una o m\xe1s opciones. Para crear un checkbox, se usa el atributo ",(0,n.jsx)(o.code,{children:'type="checkbox"'})," en la etiqueta ",(0,n.jsx)(o.code,{children:"<input>"}),'. Es \xfatil para confirmaciones como "Aceptar t\xe9rminos y condiciones" o para seleccionar m\xfaltiples preferencias. Con el atributo ',(0,n.jsx)(o.code,{children:"checked"})," se puede marcar un checkbox de manera predeterminada."]}),"\n",(0,n.jsxs)(o.p,{children:["Solo se env\xedan al servidor las casillas que est\xe9n marcadas, con el valor indicado en ",(0,n.jsx)(o.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" />
  </p>
  <p>
      <label for="apellidos">Apellidos</label>
      <input type="text" id="apellidos" name="apellidos" placeholder="Escribe tus apellidos" />
  </p>
  <p>
      <input type="checkbox" id="condiciones" name="condiciones" value="si" />
      <label for="condiciones">Acepto las condiciones</label>
  </p>
  <p>
      <input type="checkbox" id="promo" name="promo" value="si" checked />
      <label for="promo">Me gustar\xeda recibir correo promocional</label>
  </p>
  <p><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsx)(o.h2,{id:"radio",children:"Radio"}),"\n",(0,n.jsxs)(o.p,{children:["Los botones de opci\xf3n, o ",(0,n.jsx)(o.em,{children:"radio buttons"}),", permiten seleccionar solo una opci\xf3n dentro de un grupo. Para agruparlos, todos los ",(0,n.jsx)(o.code,{children:"<input>"})," deben tener el mismo valor en el atributo ",(0,n.jsx)(o.code,{children:"name"}),", mientras que cada uno tiene un valor diferente en ",(0,n.jsx)(o.code,{children:"value"}),", que es el que se enviar\xe1 al servidor. Con ",(0,n.jsx)(o.code,{children:"checked"})," se puede dejar una opci\xf3n marcada por defecto."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" />
  </p>
  <p>
      <label for="apellidos">Apellidos</label>
      <input type="text" id="apellidos" name="apellidos" placeholder="Escribe tus apellidos" />
  </p>
  <p>G\xe9nero</p>
  <p><input type="radio" id="genero-h" name="genero" value="h" /><label for="genero-h">Hombre</label></p>
  <p><input type="radio" id="genero-m" name="genero" value="m" /><label for="genero-m">Mujer</label></p>
  <p><input type="radio" id="genero-o" name="genero" value="o" /><label for="genero-o">Otro</label></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsxs)(o.h2,{id:"selector-desplegable-con-select",children:["Selector desplegable con ",(0,n.jsx)(o.code,{children:"<select>"})]}),"\n",(0,n.jsxs)(o.p,{children:["El selector desplegable se implementa usando la etiqueta ",(0,n.jsx)(o.code,{children:"<select>"}),", junto con varias etiquetas ",(0,n.jsx)(o.code,{children:"<option>"})," que representan las diferentes opciones disponibles. El usuario puede elegir solo una (o varias, si se usa el atributo ",(0,n.jsx)(o.code,{children:"multiple"}),"). Con el atributo ",(0,n.jsx)(o.code,{children:"selected"})," se deja una opci\xf3n elegida por defecto."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>
      <label for="navegador">Elige tu navegador favorito:</label>
      <select id="navegador" name="navegador">
          <option value="Edge">Edge</option>
          <option value="Firefox">Firefox</option>
          <option value="Chrome" selected>Chrome</option>
          <option value="Opera">Opera</option>
          <option value="Safari">Safari</option>
      </select>
  </p>
  <p><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsxs)(o.h2,{id:"lista-de-sugerencias-con-datalist",children:["Lista de sugerencias con ",(0,n.jsx)(o.code,{children:"<datalist>"})]}),"\n",(0,n.jsxs)(o.p,{children:["Una lista de sugerencias se implementa usando la etiqueta ",(0,n.jsx)(o.code,{children:"<input>"})," con el atributo ",(0,n.jsx)(o.code,{children:"list"}),", que se enlaza con un ",(0,n.jsx)(o.code,{children:"<datalist>"})," cuyo ",(0,n.jsx)(o.code,{children:"id"})," coincide. Dentro del ",(0,n.jsx)(o.code,{children:"<datalist>"})," se escriben las sugerencias con etiquetas ",(0,n.jsx)(o.code,{children:"<option>"}),". A diferencia de ",(0,n.jsx)(o.code,{children:"<select>"}),", el usuario puede elegir una sugerencia o escribir cualquier otro valor."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>
      <label for="navegador">Elige tu navegador favorito</label>
      <input id="navegador" name="navegador" list="navegadores" />
      <datalist id="navegadores">
          <option value="Edge"></option>
          <option value="Firefox"></option>
          <option value="Chrome"></option>
          <option value="Opera"></option>
          <option value="Safari"></option>
      </datalist>
  </p>
  <p><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsx)(o.h2,{id:"botones-de-env\xedo-y-de-borrado",children:"Botones de env\xedo y de borrado"}),"\n",(0,n.jsxs)(o.p,{children:["El bot\xf3n de env\xedo se crea con ",(0,n.jsx)(o.code,{children:'type="submit"'})," y env\xeda el formulario. El bot\xf3n de borrado se crea con ",(0,n.jsx)(o.code,{children:'type="reset"'})," y restablece todos los campos del formulario a sus valores por defecto. Conviene usar el bot\xf3n de borrado con cuidado: es f\xe1cil pulsarlo sin querer y perder todos los datos escritos."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Nombre <input type="text" name="nombre" placeholder="Escribe tu nombre" /></p>
  <p>Apellidos <input type="text" name="apellidos" placeholder="Escribe tus apellidos" /></p>
  <p><input type="reset" value="Borrar" /><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsxs)(o.h2,{id:"la-etiqueta-button",children:["La etiqueta ",(0,n.jsx)(o.code,{children:"<button>"})]}),"\n",(0,n.jsxs)(o.p,{children:["Los botones tambi\xe9n se pueden crear con la etiqueta ",(0,n.jsx)(o.code,{children:"<button>"}),", cuyo texto se escribe entre las etiquetas de apertura y cierre (en lugar de en ",(0,n.jsx)(o.code,{children:"value"}),"). Esto permite incluir dentro de ellos otros elementos, como una imagen. Su atributo ",(0,n.jsx)(o.code,{children:"type"})," puede ser ",(0,n.jsx)(o.code,{children:"submit"})," (valor por defecto), ",(0,n.jsx)(o.code,{children:"reset"})," o ",(0,n.jsx)(o.code,{children:"button"})," (no hace nada por s\xed mismo y se usa junto con JavaScript)."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Nombre <input type="text" name="nombre" placeholder="Escribe tu nombre" /></p>
  <p>
      <button type="reset">Borrar</button>
      <button type="submit">Enviar</button>
  </p>
</form>`,layout:"stacked"}),"\n",(0,n.jsx)(o.h2,{id:"selector-de-color",children:"Selector de color"}),"\n",(0,n.jsxs)(o.p,{children:["El campo ",(0,n.jsx)(o.code,{children:"color"})," permite al usuario seleccionar un color desde un cuadro de di\xe1logo. Se implementa con ",(0,n.jsx)(o.code,{children:'<input type="color">'}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Color <input type="color" name="color" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"selector-de-fecha",children:"Selector de fecha"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de fecha permite al usuario seleccionar una fecha. Se implementa con ",(0,n.jsx)(o.code,{children:'<input type="date">'}),". Adem\xe1s, puedes limitar el rango de fechas permitidas utilizando los atributos ",(0,n.jsx)(o.code,{children:"min"})," y ",(0,n.jsx)(o.code,{children:"max"}),", con las fechas en formato ",(0,n.jsx)(o.code,{children:"AAAA-MM-DD"}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Fecha <input type="date" name="fecha" min="1990-01-01" max="2030-12-31" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"selector-de-fecha-y-hora",children:"Selector de fecha y hora"}),"\n",(0,n.jsxs)(o.p,{children:["El campo ",(0,n.jsx)(o.code,{children:"datetime-local"})," permite seleccionar tanto la fecha como la hora en un solo campo de entrada. Se utiliza con ",(0,n.jsx)(o.code,{children:'<input type="datetime-local">'}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Fecha y hora <input type="datetime-local" name="fecha-hora" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"email",children:"Email"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de entrada para correos electr\xf3nicos se define con ",(0,n.jsx)(o.code,{children:'<input type="email">'}),". Este campo realiza una peque\xf1a validaci\xf3n del formato del correo electr\xf3nico (por ejemplo, que contenga una ",(0,n.jsx)(o.code,{children:"@"}),"), que normalmente no es suficiente. En m\xf3viles, adem\xe1s, muestra un teclado adaptado."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Email <input type="email" name="email" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"tel\xe9fono",children:"Tel\xe9fono"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de entrada para n\xfameros de tel\xe9fono se implementa con ",(0,n.jsx)(o.code,{children:'<input type="tel">'}),", que espera un n\xfamero telef\xf3nico. Aunque no valida autom\xe1ticamente el formato del n\xfamero, es \xfatil para hacer que los campos de tel\xe9fono se comporten correctamente en dispositivos m\xf3viles."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Tel\xe9fono <input type="tel" name="telefono" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"url",children:"URL"}),"\n",(0,n.jsxs)(o.p,{children:["El campo ",(0,n.jsx)(o.code,{children:"url"})," est\xe1 dise\xf1ado para la introducci\xf3n de direcciones web, a\xf1adiendo una validaci\xf3n que suele ser insuficiente (por ejemplo, exige que incluya el protocolo ",(0,n.jsx)(o.code,{children:"https://"}),"). Se implementa con ",(0,n.jsx)(o.code,{children:'<input type="url">'}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>URL <input type="url" name="url" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"campo-de-texto-num\xe9rico",children:"Campo de texto num\xe9rico"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de texto num\xe9rico se define con ",(0,n.jsx)(o.code,{children:'<input type="number">'}),". Permite al usuario ingresar solo n\xfameros y puedes establecer l\xedmites utilizando los atributos ",(0,n.jsx)(o.code,{children:"min"})," y ",(0,n.jsx)(o.code,{children:"max"}),", y el incremento de las flechas con ",(0,n.jsx)(o.code,{children:"step"}),"."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"min"}),": valor m\xednimo permitido."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"max"}),": valor m\xe1ximo permitido."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"step"}),": incremento al subir o bajar el valor (por defecto, 1)."]}),"\n"]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>N\xfamero <input type="number" name="numero" min="0" max="100" step="5" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"rango-num\xe9rico",children:"Rango num\xe9rico"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de rango num\xe9rico se define con ",(0,n.jsx)(o.code,{children:'<input type="range">'}),". Esto permite seleccionar un valor dentro de un rango establecido con ",(0,n.jsx)(o.code,{children:"min"})," y ",(0,n.jsx)(o.code,{children:"max"}),", ideal para seleccionar cantidades o niveles de intensidad. Tambi\xe9n admite ",(0,n.jsx)(o.code,{children:"step"}),"."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Rango num\xe9rico <input type="range" name="rango" min="5" max="15" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`}),"\n",(0,n.jsx)(o.h2,{id:"subir-archivos",children:"Subir archivos"}),"\n",(0,n.jsxs)(o.p,{children:["Para permitir a los usuarios subir archivos, se utiliza ",(0,n.jsx)(o.code,{children:'<input type="file">'}),". El formulario debe usar ",(0,n.jsx)(o.code,{children:'method="post"'})," y el atributo ",(0,n.jsx)(o.code,{children:'enctype="multipart/form-data"'}),"; con ",(0,n.jsx)(o.code,{children:"get"})," solo se enviar\xeda el nombre del archivo, no su contenido."]}),"\n",(0,n.jsxs)(o.p,{children:["Puedes restringir el tipo de archivo que se puede subir usando el atributo ",(0,n.jsx)(o.code,{children:"accept"}),". Por ejemplo, ",(0,n.jsx)(o.code,{children:'accept="image/png, image/jpeg"'})," restringe a im\xe1genes en formato PNG y JPEG. Con el atributo ",(0,n.jsx)(o.code,{children:"multiple"})," se permite seleccionar varios archivos a la vez."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="post" enctype="multipart/form-data">
  <p>Sube tu archivo <input type="file" name="archivo" /></p>
  <p>Sube tu imagen <input type="file" name="imagen" accept="image/png, image/jpeg, image/gif" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`,layout:"stacked"}),"\n",(0,n.jsx)(o.h2,{id:"campo-de-b\xfasqueda",children:"Campo de b\xfasqueda"}),"\n",(0,n.jsxs)(o.p,{children:["El campo de b\xfasqueda se define con ",(0,n.jsx)(o.code,{children:'<input type="search">'}),". Este campo es especialmente \xfatil cuando se implementa una funci\xf3n de b\xfasqueda en el sitio web; algunos navegadores a\xf1aden un bot\xf3n para borrar el texto escrito."]}),"\n",(0,n.jsx)(l.A,{initialHtml:`<form action="recibir" method="get">
  <p>Buscador <input type="search" name="buscador" /></p>
  <p><input type="submit" value="Enviar" /></p>
</form>`})]})}function m(e={}){let{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},944(e,o,a){a.d(o,{N:()=>d});var i=a(4848),n=a(6540),r=a(6069),l=a.n(r),t=a(8848);a(4312),a(1113),a(5723);let s={markup:"HTML",css:"CSS",javascript:"JavaScript"};function d({code:e,onChange:o,language:a}){let[r,u]=(0,n.useState)(!1),m=async()=>{await navigator.clipboard.writeText(e),u(!0),setTimeout(()=>u(!1),1500)};return(0,i.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,i.jsxs)("button",{type:"button",onClick:m,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:r?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[r?(0,i.jsx)(p,{}):(0,i.jsx)(c,{}),r?"Copiado":""]}),(0,i.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:s[a]})]}),(0,i.jsx)(l(),{value:e,onValueChange:o,highlight:e=>(0,t.highlight)(e,t.languages[a],a),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function c(){return(0,i.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,i.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,i.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return(0,i.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,o,a){a.d(o,{A:()=>s});var i=a(4848),n=a(6540),r=a(944),l=a(2793),t=a(1756);function s({initialHtml:e,initialCss:o="",layout:a="side-by-side",height:d=460}){let[c,p]=(0,n.useState)(e),[u,m]=(0,n.useState)(o),h=(0,n.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${u}</style></head><body>${c}</body></html>`,[c,u]);return(0,i.jsx)(l.u,{layout:a,codePanel:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,i.jsx)(r.N,{code:c,onChange:p,language:"markup"}),(0,i.jsx)(r.N,{code:u,onChange:m,language:"css"})]}),resultPanel:(0,i.jsx)(t.R,{doc:h,title:"Resultado HTML+CSS",height:d})})}},3432(e,o,a){a.d(o,{A:()=>s});var i=a(4848),n=a(6540),r=a(944),l=a(2793),t=a(1756);function s({initialHtml:e,layout:o="side-by-side",height:a=300}){let[d,c]=(0,n.useState)(e),p=(0,n.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body>${d}</body></html>`,[d]);return(0,i.jsx)(l.u,{layout:o,codePanel:(0,i.jsx)(r.N,{code:d,onChange:c,language:"markup"}),resultPanel:(0,i.jsx)(t.R,{doc:p,title:"Resultado HTML",height:a})})}},2793(e,o,a){a.d(o,{u:()=>n});var i=a(4848);function n({layout:e,codePanel:o,resultPanel:a}){return(0,i.jsx)("div",{style:{margin:"2rem 0"},children:(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,i.jsx)("div",{children:o}),(0,i.jsx)("div",{children:a})]})})}a(6540)},1756(e,o,a){a.d(o,{R:()=>l});var i=a(4848),n=a(6540),r=a(6497);function l({doc:e,title:o,height:a}){let t=(0,n.useRef)(null),[s,d]=(0,n.useState)(!1),c=(0,r.Ay)("/playground-frame.html");return(0,n.useEffect)(()=>{s&&t.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,s]),(0,i.jsx)("iframe",{ref:t,title:o,src:c,onLoad:()=>d(!0),sandbox:"allow-scripts",style:{width:"100%",height:a,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);