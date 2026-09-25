"use strict";(self.webpackChunkcursos=self.webpackChunkcursos||[]).push([["7602"],{8381(e,a,t){t.r(a),t.d(a,{metadata:()=>l,default:()=>u,frontMatter:()=>i,contentTitle:()=>n,toc:()=>h,assets:()=>c});var l=JSON.parse('{"id":"html/tablas","title":"Tablas","description":"Las tablas se utilizan para organizar informaci\xf3n con un formato de filas y columnas.","source":"@site/docs/lenguajes-de-marcas/html/05-tablas.mdx","sourceDirName":"html","slug":"/html/tablas","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/tablas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Tablas"},"sidebar":"marcasSidebar","previous":{"title":"Listas","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/listas"},"next":{"title":"Im\xe1genes","permalink":"/cursosdesarrollo/lenguajes-de-marcas/html/imagenes"}}'),d=t(4848),o=t(8453),s=t(3432),r=t(6841);let i={sidebar_position:5,title:"Tablas"},n,c={},h=[{value:"Crear una tabla",id:"crear-una-tabla",level:2},{value:"Celdas de cabecera",id:"celdas-de-cabecera",level:2},{value:"Combinar celdas",id:"combinar-celdas",level:2},{value:"Estructura de tabla compleja combinando celdas",id:"estructura-de-tabla-compleja-combinando-celdas",level:2},{value:"T\xedtulo de la tabla",id:"t\xedtulo-de-la-tabla",level:2},{value:"Cabecera, cuerpo y pie",id:"cabecera-cuerpo-y-pie",level:2},{value:"Tablas con bordes",id:"tablas-con-bordes",level:2},{value:"Celdas con bordes",id:"celdas-con-bordes",level:2},{value:"Tabla y celdas con bordes colapsados",id:"tabla-y-celdas-con-bordes-colapsados",level:2},{value:"Espacio interior y alineaci\xf3n de las celdas",id:"espacio-interior-y-alineaci\xf3n-de-las-celdas",level:2},{value:"Cambiar el tama\xf1o de la tabla",id:"cambiar-el-tama\xf1o-de-la-tabla",level:2},{value:"Cambiar el tama\xf1o de las celdas",id:"cambiar-el-tama\xf1o-de-las-celdas",level:2},{value:"Ajustar el tama\xf1o a la pantalla",id:"ajustar-el-tama\xf1o-a-la-pantalla",level:2},{value:"Selectores para filas pares e impares",id:"selectores-para-filas-pares-e-impares",level:2},{value:"Estilo de columnas completas",id:"estilo-de-columnas-completas",level:2},{value:"Ejemplo completo con estilos",id:"ejemplo-completo-con-estilos",level:2}];function p(e){let a={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Las tablas se utilizan para organizar informaci\xf3n con un formato de filas y columnas."}),"\n",(0,d.jsx)(a.admonition,{type:"warning",children:(0,d.jsxs)(a.p,{children:["Las tablas sirven para mostrar ",(0,d.jsx)(a.strong,{children:"datos tabulares"}),". No deben usarse para maquetar la p\xe1gina (colocar men\xfas, columnas de texto, etc.); para eso existen CSS, ",(0,d.jsx)(a.code,{children:"flexbox"})," y ",(0,d.jsx)(a.code,{children:"grid"}),"."]})}),"\n",(0,d.jsx)(a.h2,{id:"crear-una-tabla",children:"Crear una tabla"}),"\n",(0,d.jsxs)(a.p,{children:["Para crear una tabla b\xe1sica en HTML, se utiliza la etiqueta ",(0,d.jsx)(a.code,{children:"<table>"}),", que define el contenedor de la tabla. Dentro de esta etiqueta, se utilizan filas definidas por la etiqueta ",(0,d.jsx)(a.code,{children:"<tr>"})," (table row) y celdas dentro de esas filas, las cuales son creadas por las etiquetas ",(0,d.jsx)(a.code,{children:"<td>"})," (table data). Cada fila puede contener m\xfaltiples celdas."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<table>"}),": define la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<tr>"}),": define una fila de la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<td>"}),": define una celda dentro de una fila."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:'border="1"'}),": atributo de ",(0,d.jsx)(a.code,{children:"<table>"})," que dibuja los bordes. Est\xe1 obsoleto en HTML5, pero se sigue admitiendo con el valor ",(0,d.jsx)(a.code,{children:"1"})," y sirve para ver la estructura de la tabla. La forma actual de dar bordes es CSS (se explica m\xe1s abajo)."]}),"\n"]}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`}),"\n",(0,d.jsx)(a.h2,{id:"celdas-de-cabecera",children:"Celdas de cabecera"}),"\n",(0,d.jsxs)(a.p,{children:["Las celdas de cabecera dentro de una tabla se definen con la etiqueta ",(0,d.jsx)(a.code,{children:"<th>"})," (table header), que representa la cabecera de una columna o de una fila. Estas celdas tienen un estilo predeterminado de texto en negrita y alineado al centro, aunque pueden ser estilizadas mediante CSS."]}),"\n",(0,d.jsxs)(a.p,{children:["El atributo ",(0,d.jsx)(a.code,{children:"scope"})," indica a qu\xe9 se refiere la cabecera y ayuda a los lectores de pantalla a leer bien la tabla."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<th>"}),": define una celda de cabecera."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:'scope="col"'}),": la cabecera se refiere a toda la columna."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:'scope="row"'}),": la cabecera se refiere a toda la fila."]}),"\n"]}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <tr>
      <th scope="col">Cabecera 1</th>
      <th scope="col">Cabecera 2</th>
      <th scope="col">Cabecera 3</th>
      <th scope="col">Cabecera 4</th>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`}),"\n",(0,d.jsx)(a.h2,{id:"combinar-celdas",children:"Combinar celdas"}),"\n",(0,d.jsxs)(a.p,{children:["Para combinar varias celdas dentro de una tabla, se pueden utilizar los atributos ",(0,d.jsx)(a.code,{children:"colspan"})," y ",(0,d.jsx)(a.code,{children:"rowspan"}),". El atributo ",(0,d.jsx)(a.code,{children:"colspan"})," permite que una celda ocupe varias columnas, mientras que ",(0,d.jsx)(a.code,{children:"rowspan"})," hace que una celda ocupe varias filas."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"colspan"}),": define cu\xe1ntas columnas abarcar\xe1 una celda."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"rowspan"}),": define cu\xe1ntas filas abarcar\xe1 una celda."]}),"\n"]}),"\n",(0,d.jsx)(a.admonition,{type:"warning",children:(0,d.jsxs)(a.p,{children:["Al combinar celdas, ",(0,d.jsx)(a.strong,{children:"hay que eliminar las celdas que quedan cubiertas"}),". Cada fila debe seguir sumando el mismo n\xfamero de columnas. En el ejemplo, la primera fila tiene una celda de 2 columnas y dos celdas normales (4 columnas en total). La fila 4 solo tiene una celda porque las dem\xe1s est\xe1n ocupadas por las combinaciones de la fila 3."]})}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <tr>
      <td colspan="2">Fila 1 Col 1 y 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td colspan="2" rowspan="2">Fila 3 y 4 Col 1 y 2</td>
      <td>Fila 3 Col 3</td>
      <td rowspan="2">Fila 3 y 4 Col 4</td>
  </tr>
  <tr>
      <td>Fila 4 Col 3</td>
  </tr>
</table>`}),"\n",(0,d.jsx)(a.h2,{id:"estructura-de-tabla-compleja-combinando-celdas",children:"Estructura de tabla compleja combinando celdas"}),"\n",(0,d.jsxs)(a.p,{children:["Combinando ",(0,d.jsx)(a.code,{children:"rowspan"})," y ",(0,d.jsx)(a.code,{children:"colspan"}),' se pueden construir cabeceras de varios niveles. En este ejemplo, la celda vac\xeda de la esquina ocupa 3 filas, "Resultados" abarca las 6 columnas de datos y cada mes abarca 2 columnas (Ventas y Gastos). Cada fila suma 7 columnas contando las celdas combinadas.']}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <tr>
      <td rowspan="3"></td>
      <th colspan="6" scope="colgroup">Resultados</th>
  </tr>
  <tr>
      <th colspan="2" scope="colgroup">Enero</th>
      <th colspan="2" scope="colgroup">Febrero</th>
      <th colspan="2" scope="colgroup">Marzo</th>
  </tr>
  <tr>
      <th scope="col">Ventas</th>
      <th scope="col">Gastos</th>
      <th scope="col">Ventas</th>
      <th scope="col">Gastos</th>
      <th scope="col">Ventas</th>
      <th scope="col">Gastos</th>
  </tr>
  <tr>
      <th scope="row">2022</th>
      <td>54</td>
      <td>7</td>
      <td>65</td>
      <td>12</td>
      <td>78</td>
      <td>25</td>
  </tr>
  <tr>
      <th scope="row">2023</th>
      <td>123</td>
      <td>66</td>
      <td>85</td>
      <td>50</td>
      <td>102</td>
      <td>75</td>
  </tr>
  <tr>
      <th scope="row">2024</th>
      <td>140</td>
      <td>80</td>
      <td>155</td>
      <td>100</td>
      <td>175</td>
      <td>95</td>
  </tr>
</table>`,layout:"stacked"}),"\n",(0,d.jsx)(a.h2,{id:"t\xedtulo-de-la-tabla",children:"T\xedtulo de la tabla"}),"\n",(0,d.jsxs)(a.p,{children:["La etiqueta ",(0,d.jsx)(a.code,{children:"<caption>"})," a\xf1ade un t\xedtulo a la tabla. Debe ser el ",(0,d.jsx)(a.strong,{children:"primer elemento"})," dentro de ",(0,d.jsx)(a.code,{children:"<table>"})," y, por defecto, se muestra encima de la tabla. Adem\xe1s de describir su contenido, ayuda a los lectores de pantalla."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<caption>"}),": define el t\xedtulo de la tabla."]}),"\n"]}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <caption>Notas del primer trimestre</caption>
  <tr>
      <th scope="col">M\xf3dulo</th>
      <th scope="col">Nota</th>
  </tr>
  <tr>
      <td>Lenguajes de Marcas</td>
      <td>8</td>
  </tr>
  <tr>
      <td>Programaci\xf3n</td>
      <td>7</td>
  </tr>
</table>`}),"\n",(0,d.jsx)(a.h2,{id:"cabecera-cuerpo-y-pie",children:"Cabecera, cuerpo y pie"}),"\n",(0,d.jsxs)(a.p,{children:["Una tabla puede dividirse en tres secciones: cabecera (",(0,d.jsx)(a.code,{children:"<thead>"}),"), cuerpo (",(0,d.jsx)(a.code,{children:"<tbody>"}),") y pie (",(0,d.jsx)(a.code,{children:"<tfoot>"}),"). La cabecera contiene las celdas ",(0,d.jsx)(a.code,{children:"<th>"})," que definen las columnas, el cuerpo contiene los datos y el pie puede incluir filas de totales o resumen. Esto mejora la sem\xe1ntica y la accesibilidad de la tabla, y permite darle estilo a cada secci\xf3n por separado."]}),"\n",(0,d.jsxs)(a.p,{children:["Conviene escribirlas en este orden: primero ",(0,d.jsx)(a.code,{children:"<thead>"}),", despu\xe9s ",(0,d.jsx)(a.code,{children:"<tbody>"})," y al final ",(0,d.jsx)(a.code,{children:"<tfoot>"}),"."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<thead>"}),": define la cabecera de la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<tbody>"}),": define el cuerpo de la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<tfoot>"}),": define el pie de la tabla."]}),"\n"]}),"\n",(0,d.jsx)(s.A,{initialHtml:`<table border="1">
  <thead>
      <tr>
          <th scope="col">Producto</th>
          <th scope="col">Unidades</th>
          <th scope="col">Importe (\u{20AC})</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Cuaderno</td>
          <td>10</td>
          <td>20</td>
      </tr>
      <tr>
          <td>Bol\xedgrafo</td>
          <td>25</td>
          <td>25</td>
      </tr>
      <tr>
          <td>Carpeta</td>
          <td>5</td>
          <td>20</td>
      </tr>
  </tbody>
  <tfoot>
      <tr>
          <th scope="row">Total</th>
          <td>40</td>
          <td>65</td>
      </tr>
  </tfoot>
</table>`}),"\n",(0,d.jsx)(a.h2,{id:"tablas-con-bordes",children:"Tablas con bordes"}),"\n",(0,d.jsxs)(a.p,{children:["Para agregar bordes a una tabla con CSS se utiliza la propiedad ",(0,d.jsx)(a.code,{children:"border"}),", que permite especificar el grosor, el estilo y el color del borde en un solo valor (por ejemplo, ",(0,d.jsx)(a.code,{children:"1px solid black"}),"). Si se aplica solo al elemento ",(0,d.jsx)(a.code,{children:"<table>"}),", \xfanicamente se dibuja el ",(0,d.jsx)(a.strong,{children:"borde exterior"})," de la tabla; las celdas quedan sin borde."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"border"}),": define el borde de un elemento (grosor, estilo y color)."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table {
  border: 1px solid black;
}`}),"\n",(0,d.jsx)(a.h2,{id:"celdas-con-bordes",children:"Celdas con bordes"}),"\n",(0,d.jsxs)(a.p,{children:["Para que las celdas tambi\xe9n tengan borde, se aplica la propiedad ",(0,d.jsx)(a.code,{children:"border"})," a los elementos ",(0,d.jsx)(a.code,{children:"<td>"})," (y a ",(0,d.jsx)(a.code,{children:"<th>"})," si la tabla tiene cabeceras). Se pueden escribir todos los selectores juntos, separados por comas, para no repetir el estilo. Es importante notar que si no se colapsan los bordes, estos aparecer\xe1n duplicados entre las celdas."]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table, td {
  border: 1px solid black;
}`}),"\n",(0,d.jsx)(a.h2,{id:"tabla-y-celdas-con-bordes-colapsados",children:"Tabla y celdas con bordes colapsados"}),"\n",(0,d.jsxs)(a.p,{children:["Al colapsar los bordes de una tabla con CSS utilizando la propiedad ",(0,d.jsx)(a.code,{children:"border-collapse: collapse;"}),", los bordes de las celdas adyacentes se combinan en uno solo. Esto evita que se dupliquen los bordes entre celdas."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"border-collapse"}),": define c\xf3mo se manejan los bordes adyacentes en una tabla."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <th>Cabecera 1</th>
      <th>Cabecera 2</th>
      <th>Cabecera 3</th>
      <th>Cabecera 4</th>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}`}),"\n",(0,d.jsx)(a.h2,{id:"espacio-interior-y-alineaci\xf3n-de-las-celdas",children:"Espacio interior y alineaci\xf3n de las celdas"}),"\n",(0,d.jsxs)(a.p,{children:["Por defecto, el contenido de las celdas queda pegado a su borde y la tabla se ve apretada. La propiedad ",(0,d.jsx)(a.code,{children:"padding"})," a\xf1ade espacio entre el contenido y el borde de la celda, y ",(0,d.jsx)(a.code,{children:"text-align"})," controla la alineaci\xf3n horizontal del texto."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"padding"}),": define el espacio interior de la celda."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"text-align"}),": define la alineaci\xf3n horizontal del texto (",(0,d.jsx)(a.code,{children:"left"}),", ",(0,d.jsx)(a.code,{children:"center"})," o ",(0,d.jsx)(a.code,{children:"right"}),")."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <th>Producto</th>
      <th>Unidades</th>
      <th>Importe (\u{20AC})</th>
  </tr>
  <tr>
      <td>Cuaderno</td>
      <td>10</td>
      <td>20</td>
  </tr>
  <tr>
      <td>Bol\xedgrafo</td>
      <td>25</td>
      <td>25</td>
  </tr>
</table>`,initialCss:`table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
}

td {
  text-align: center;
}`}),"\n",(0,d.jsx)(a.h2,{id:"cambiar-el-tama\xf1o-de-la-tabla",children:"Cambiar el tama\xf1o de la tabla"}),"\n",(0,d.jsxs)(a.p,{children:["Por defecto, el tama\xf1o de una tabla se ajusta al contenido de sus celdas. Con CSS se puede fijar el tama\xf1o de la tabla completa: ",(0,d.jsx)(a.code,{children:"width"})," establece el ancho total (las columnas se reparten ese espacio) y ",(0,d.jsx)(a.code,{children:"height"})," establece la altura total (las filas se reparten esa altura). Los valores pueden ser fijos (",(0,d.jsx)(a.code,{children:"500px"}),") o relativos (",(0,d.jsx)(a.code,{children:"50%"}),")."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"width"}),": define el ancho de la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"height"}),": define la altura de la tabla."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 500px;
  height: 150px;
}`}),"\n",(0,d.jsx)(a.h2,{id:"cambiar-el-tama\xf1o-de-las-celdas",children:"Cambiar el tama\xf1o de las celdas"}),"\n",(0,d.jsxs)(a.p,{children:["Para ajustar el tama\xf1o de las celdas se pueden usar las propiedades CSS ",(0,d.jsx)(a.code,{children:"width"})," y ",(0,d.jsx)(a.code,{children:"height"})," sobre los elementos ",(0,d.jsx)(a.code,{children:"<td>"})," o mediante clases CSS. Hay que tener en cuenta que las celdas de una misma columna comparten el ancho, y las de una misma fila comparten la altura. Por eso, cambiar el ancho de una celda afecta a toda su columna, y cambiar su altura afecta a toda su fila."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"td { width }"}),": define el ancho de una celda (y de toda su columna)."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"td { height }"}),": define la altura de una celda (y de toda su fila)."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table, td {
  border: 1px solid black;
  border-collapse: collapse;
}

td {
  width: 120px;
  height: 50px;
}`}),"\n",(0,d.jsx)(a.h2,{id:"ajustar-el-tama\xf1o-a-la-pantalla",children:"Ajustar el tama\xf1o a la pantalla"}),"\n",(0,d.jsxs)(a.p,{children:["Para hacer que la tabla se ajuste a la pantalla de forma autom\xe1tica, se pueden utilizar unidades relativas como porcentajes en la propiedad ",(0,d.jsx)(a.code,{children:"width"})," de la tabla y de las celdas. Esto asegura que la tabla se escale seg\xfan el tama\xf1o de la ventana del navegador, proporcionando una experiencia m\xe1s adaptable en pantallas de diferentes tama\xf1os."]}),"\n",(0,d.jsxs)(a.p,{children:["Hay que tener cuidado con los tama\xf1os m\xednimos: si ",(0,d.jsx)(a.code,{children:"min-width"})," es mayor que el ancho de la pantalla (por ejemplo, en un m\xf3vil), la tabla se saldr\xe1 de la pantalla y aparecer\xe1 scroll horizontal."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"width: 100%"}),": hace que la tabla ocupe todo el ancho disponible."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"max-width"}),": configura un tama\xf1o m\xe1ximo para la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"min-width"}),": configura un tama\xf1o m\xednimo para la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"margin: auto"}),": centra la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"td { width: 25% }"}),": especifica que cada celda debe ocupar el 25% de la tabla."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <tr>
      <td>Fila 1 Col 1</td>
      <td>Fila 1 Col 2</td>
      <td>Fila 1 Col 3</td>
      <td>Fila 1 Col 4</td>
  </tr>
  <tr>
      <td>Fila 2 Col 1</td>
      <td>Fila 2 Col 2</td>
      <td>Fila 2 Col 3</td>
      <td>Fila 2 Col 4</td>
  </tr>
  <tr>
      <td>Fila 3 Col 1</td>
      <td>Fila 3 Col 2</td>
      <td>Fila 3 Col 3</td>
      <td>Fila 3 Col 4</td>
  </tr>
</table>`,initialCss:`table, td {
  border: 1px solid black;
  border-collapse: collapse;
}

table {
  width: 90%;
  max-width: 700px;
  min-width: 300px;
  margin: auto;
}

td {
  width: 25%;
}`}),"\n",(0,d.jsx)(a.h2,{id:"selectores-para-filas-pares-e-impares",children:"Selectores para filas pares e impares"}),"\n",(0,d.jsxs)(a.p,{children:["Con CSS es posible alternar los estilos de las filas pares e impares de una tabla usando selectores como ",(0,d.jsx)(a.code,{children:":nth-child(even)"})," para las filas pares y ",(0,d.jsx)(a.code,{children:":nth-child(odd)"})," para las impares. Esto mejora la legibilidad de los datos al ofrecer un contraste visual entre las filas."]}),"\n",(0,d.jsxs)(a.p,{children:["Conviene aplicar estos selectores solo a las filas del cuerpo (",(0,d.jsx)(a.code,{children:"tbody tr"}),"). Si se escriben como ",(0,d.jsx)(a.code,{children:"tr:nth-child(...)"}),", tambi\xe9n afectan a la fila de cabecera y esta no se distingue del resto."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"tbody tr:nth-child(even)"}),": aplica estilos a las filas pares del cuerpo."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"tbody tr:nth-child(odd)"}),": aplica estilos a las filas impares del cuerpo."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <thead>
      <tr>
          <th>Cabecera 1</th>
          <th>Cabecera 2</th>
          <th>Cabecera 3</th>
          <th>Cabecera 4</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Fila 1 Col 1</td>
          <td>Fila 1 Col 2</td>
          <td>Fila 1 Col 3</td>
          <td>Fila 1 Col 4</td>
      </tr>
      <tr>
          <td>Fila 2 Col 1</td>
          <td>Fila 2 Col 2</td>
          <td>Fila 2 Col 3</td>
          <td>Fila 2 Col 4</td>
      </tr>
      <tr>
          <td>Fila 3 Col 1</td>
          <td>Fila 3 Col 2</td>
          <td>Fila 3 Col 3</td>
          <td>Fila 3 Col 4</td>
      </tr>
      <tr>
          <td>Fila 4 Col 1</td>
          <td>Fila 4 Col 2</td>
          <td>Fila 4 Col 3</td>
          <td>Fila 4 Col 4</td>
      </tr>
  </tbody>
</table>`,initialCss:`th, td {
  padding: 8px;
}

thead {
  background-color: #2980b9;
  color: #FFFFFF;
}

tbody tr:nth-child(even){
  background-color: #85c1e9;
}

tbody tr:nth-child(odd){
  background-color: #deedf8;
}`}),"\n",(0,d.jsx)(a.h2,{id:"estilo-de-columnas-completas",children:"Estilo de columnas completas"}),"\n",(0,d.jsxs)(a.p,{children:["Con ",(0,d.jsx)(a.code,{children:"<colgroup>"})," y ",(0,d.jsx)(a.code,{children:"<col>"})," se puede dar estilo a una columna entera sin tener que modificar cada celda. ",(0,d.jsx)(a.code,{children:"<colgroup>"})," va justo debajo de ",(0,d.jsx)(a.code,{children:"<table>"})," (o de ",(0,d.jsx)(a.code,{children:"<caption>"}),", si existe) y antes de las filas; dentro, cada ",(0,d.jsx)(a.code,{children:"<col>"})," representa una columna. Con el atributo ",(0,d.jsx)(a.code,{children:"span"})," un mismo ",(0,d.jsx)(a.code,{children:"<col>"})," puede representar varias columnas seguidas."]}),"\n",(0,d.jsxs)(a.p,{children:["Solo funcionan algunas propiedades sobre las columnas: ",(0,d.jsx)(a.code,{children:"background"}),", ",(0,d.jsx)(a.code,{children:"border"}),", ",(0,d.jsx)(a.code,{children:"width"})," y ",(0,d.jsx)(a.code,{children:"visibility"}),"."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<colgroup>"}),": agrupa las definiciones de columnas."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"<col>"}),": representa una columna de la tabla."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.code,{children:"span"}),": n\xfamero de columnas a las que afecta un ",(0,d.jsx)(a.code,{children:"<col>"}),"."]}),"\n"]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <colgroup>
      <col>
      <col class="destacada">
      <col>
  </colgroup>
  <tr>
      <th>Producto</th>
      <th>Unidades</th>
      <th>Importe (\u{20AC})</th>
  </tr>
  <tr>
      <td>Cuaderno</td>
      <td>10</td>
      <td>20</td>
  </tr>
  <tr>
      <td>Bol\xedgrafo</td>
      <td>25</td>
      <td>25</td>
  </tr>
</table>`,initialCss:`table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
}

.destacada {
  background-color: #f7dc6f;
}`}),"\n",(0,d.jsx)(a.h2,{id:"ejemplo-completo-con-estilos",children:"Ejemplo completo con estilos"}),"\n",(0,d.jsxs)(a.p,{children:["Ejemplo que re\xfane todo lo visto: cabecera de varios niveles con ",(0,d.jsx)(a.code,{children:"<thead>"}),", cuerpo con ",(0,d.jsx)(a.code,{children:"<tbody>"}),", pie con ",(0,d.jsx)(a.code,{children:"<tfoot>"}),", cabeceras ",(0,d.jsx)(a.code,{children:"<th>"})," con ",(0,d.jsx)(a.code,{children:"scope"})," y estilos CSS."]}),"\n",(0,d.jsx)(r.A,{initialHtml:`<table>
  <thead>
      <tr>
          <td rowspan="3"></td>
          <th colspan="8" scope="colgroup">Resultados</th>
      </tr>
      <tr>
          <th colspan="2" scope="colgroup">Enero</th>
          <th colspan="2" scope="colgroup">Febrero</th>
          <th colspan="2" scope="colgroup">Marzo</th>
          <th colspan="2" scope="colgroup">Abril</th>
      </tr>
      <tr>
          <th scope="col">Ventas</th>
          <th scope="col">Gastos</th>
          <th scope="col">Ventas</th>
          <th scope="col">Gastos</th>
          <th scope="col">Ventas</th>
          <th scope="col">Gastos</th>
          <th scope="col">Ventas</th>
          <th scope="col">Gastos</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <th scope="row">2020</th>
          <td>40</td>
          <td>6</td>
          <td>52</td>
          <td>10</td>
          <td>60</td>
          <td>20</td>
          <td>65</td>
          <td>22</td>
      </tr>
      <tr>
          <th scope="row">2021</th>
          <td>48</td>
          <td>8</td>
          <td>58</td>
          <td>11</td>
          <td>72</td>
          <td>22</td>
          <td>76</td>
          <td>25</td>
      </tr>
      <tr>
          <th scope="row">2022</th>
          <td>54</td>
          <td>7</td>
          <td>65</td>
          <td>12</td>
          <td>78</td>
          <td>25</td>
          <td>81</td>
          <td>30</td>
      </tr>
      <tr>
          <th scope="row">2023</th>
          <td>123</td>
          <td>66</td>
          <td>85</td>
          <td>50</td>
          <td>102</td>
          <td>75</td>
          <td>110</td>
          <td>78</td>
      </tr>
      <tr>
          <th scope="row">2024</th>
          <td>140</td>
          <td>80</td>
          <td>155</td>
          <td>100</td>
          <td>175</td>
          <td>95</td>
          <td>160</td>
          <td>110</td>
      </tr>
  </tbody>
  <tfoot>
      <tr>
          <th scope="row">Totales</th>
          <td>405</td>
          <td>167</td>
          <td>415</td>
          <td>183</td>
          <td>487</td>
          <td>237</td>
          <td>492</td>
          <td>265</td>
      </tr>
  </tfoot>
</table>`,initialCss:`table {
  width: 90%;
  max-width: 800px;
  margin: auto;
  border-collapse: collapse;
}

th, td {
  padding: 6px;
}

thead {
  background-color: #2980b9;
  color: #FFFFFF;
  text-align: center;
}

tbody tr:nth-child(even){
  background-color: #85c1e9;
}

tbody tr:nth-child(odd){
  background-color: #deedf8;
}

tfoot{
  background-color: #f7dc6f;
}`,layout:"stacked"})]})}function u(e={}){let{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},944(e,a,t){t.d(a,{N:()=>n});var l=t(4848),d=t(6540),o=t(6069),s=t.n(o),r=t(8848);t(4312),t(1113),t(5723);let i={markup:"HTML",css:"CSS",javascript:"JavaScript"};function n({code:e,onChange:a,language:t}){let[o,p]=(0,d.useState)(!1),u=async()=>{await navigator.clipboard.writeText(e),p(!0),setTimeout(()=>p(!1),1500)};return(0,l.jsxs)("div",{style:{borderRadius:"8px",overflow:"hidden",border:"1px solid #1e1e1e",boxShadow:"0 1px 3px rgba(0,0,0,0.15)"},children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",backgroundColor:"#1e1e1e",padding:"0.4rem 0.6rem",borderBottom:"1px solid #333"},children:[(0,l.jsxs)("button",{type:"button",onClick:u,title:"Copiar c\xf3digo","aria-label":"Copiar c\xf3digo",style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"transparent",border:"none",color:o?"#4ec9b0":"#ccc",cursor:"pointer",padding:"0.2rem 0.4rem",borderRadius:"4px",fontSize:"12px"},children:[o?(0,l.jsx)(h,{}):(0,l.jsx)(c,{}),o?"Copiado":""]}),(0,l.jsx)("span",{style:{marginLeft:"auto",color:"#888",fontSize:"12px",fontFamily:"monospace"},children:i[t]})]}),(0,l.jsx)(s(),{value:e,onValueChange:a,highlight:e=>(0,r.highlight)(e,r.languages[t],t),padding:16,tabSize:2,insertSpaces:!1,ignoreTabKey:!1,style:{fontFamily:'"Fira Code", "Fira Mono", Consolas, monospace',fontSize:15,fontWeight:700,lineHeight:1.6,minHeight:220,backgroundColor:"#1e1e1e",color:"#f8f8f2",tabSize:2}})]})}function c(){return(0,l.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,l.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),(0,l.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function h(){return(0,l.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,l.jsx)("path",{d:"M20 6L9 17l-5-5"})})}},6841(e,a,t){t.d(a,{A:()=>i});var l=t(4848),d=t(6540),o=t(944),s=t(2793),r=t(1756);function i({initialHtml:e,initialCss:a="",layout:t="side-by-side",height:n=460}){let[c,h]=(0,d.useState)(e),[p,u]=(0,d.useState)(a),b=(0,d.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${p}</style></head><body>${c}</body></html>`,[c,p]);return(0,l.jsx)(s.u,{layout:t,codePanel:(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,l.jsx)(o.N,{code:c,onChange:h,language:"markup"}),(0,l.jsx)(o.N,{code:p,onChange:u,language:"css"})]}),resultPanel:(0,l.jsx)(r.R,{doc:b,title:"Resultado HTML+CSS",height:n})})}},3432(e,a,t){t.d(a,{A:()=>i});var l=t(4848),d=t(6540),o=t(944),s=t(2793),r=t(1756);function i({initialHtml:e,layout:a="side-by-side",height:t=300}){let[n,c]=(0,d.useState)(e),h=(0,d.useMemo)(()=>`<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body>${n}</body></html>`,[n]);return(0,l.jsx)(s.u,{layout:a,codePanel:(0,l.jsx)(o.N,{code:n,onChange:c,language:"markup"}),resultPanel:(0,l.jsx)(r.R,{doc:h,title:"Resultado HTML",height:t})})}},2793(e,a,t){t.d(a,{u:()=>d});var l=t(4848);function d({layout:e,codePanel:a,resultPanel:t}){return(0,l.jsx)("div",{style:{margin:"2rem 0"},children:(0,l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"stacked"===e?"1fr":"1fr 1fr",gap:"1.5rem"},children:[(0,l.jsx)("div",{children:a}),(0,l.jsx)("div",{children:t})]})})}t(6540)},1756(e,a,t){t.d(a,{R:()=>s});var l=t(4848),d=t(6540),o=t(6497);function s({doc:e,title:a,height:t}){let r=(0,d.useRef)(null),[i,n]=(0,d.useState)(!1),c=(0,o.Ay)("/playground-frame.html");return(0,d.useEffect)(()=>{i&&r.current?.contentWindow?.postMessage({type:"playground:render",doc:e+'<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="playground:render"){document.open();document.write(e.data.doc);document.close();}});<\/script>'},"*")},[e,i]),(0,l.jsx)("iframe",{ref:r,title:a,src:c,onLoad:()=>n(!0),sandbox:"allow-scripts",style:{width:"100%",height:t,border:"1px solid #ccc",backgroundColor:"white",borderRadius:"8px",display:"block"}})}}}]);