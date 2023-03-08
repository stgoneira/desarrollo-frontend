# HTML 

## Fundamentos de HTML 

HTML es un lenguaje de marcado que se utiliza para crear páginas web. A continuación se resumen los fundamentos de HTML:

**Estructura básica**: Todo documento HTML comienza con el elemento html, que contiene dos elementos principales: ***head y body***. El elemento head contiene información sobre el documento, como el título de la página y los enlaces a las hojas de estilo CSS, mientras que el elemento body contiene el contenido visible de la página.

**Etiquetas y elementos**: Los elementos de HTML se definen utilizando etiquetas. Cada etiqueta comienza con el símbolo < y termina con el símbolo >. Los elementos pueden contener texto, imágenes, enlaces y otros elementos. Algunos elementos, como las imágenes y los enlaces, requieren atributos para funcionar correctamente.

**Encabezados y párrafos**: Los encabezados se utilizan para dividir el contenido de la página en secciones y se definen utilizando las etiquetas ***h1 a h6***. Los párrafos se definen utilizando la ***etiqueta p*** y se utilizan para agrupar el texto en párrafos.

**Enlaces**: Los enlaces se definen utilizando la ***etiqueta a*** y se utilizan para crear hipervínculos a otras páginas web o a secciones de la misma página.

**Imágenes**: Las imágenes se definen utilizando la ***etiqueta img*** y requieren un ***atributo src*** para especificar la ubicación del archivo de imagen.

**Listas**: Las listas se definen utilizando las etiquetas ***ul (lista sin orden), ol (lista ordenada)*** y ***li (elemento de lista)***.

**Tablas**: Las tablas se definen utilizando las ***etiquetas table, tr (fila de tabla) y td (celda de tabla)*** y se utilizan para mostrar datos en forma de tabla.

**Formularios**: Los formularios se definen utilizando la ***etiqueta form*** y se utilizan para recopilar datos de los usuarios. Los elementos de formulario, como los campos de texto y los botones, se definen utilizando ***etiquetas específicas, como input y button***.

En resumen, HTML proporciona las herramientas necesarias para crear páginas web mediante el uso de etiquetas y elementos para definir la estructura y el contenido de la página, así como para crear interactividad con los usuarios mediante el uso de formularios y enlaces.

## Sintaxis HTML 

### Etiquetas 
Las etiquetas son elementos que definen y estructuran el contenido de una página web. Cada etiqueta se escribe entre corchetes angulares (< y >) y puede tener atributos para proporcionar información adicional sobre el elemento.

Un ejemplo de etiqueta básica sería:

```html 
<p>Este es un párrafo de ejemplo</p>
```

En este ejemplo, la etiqueta ***P*** define un párrafo.

### Atributos 
Los atributos son propiedades que se aplican a una etiqueta y se utilizan para proporcionar información adicional sobre el elemento. Los atributos se escriben dentro de la etiqueta y se componen de un nombre y un valor, separados por un signo igual (=).

Un ejemplo de etiqueta con atributos sería:

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

En este ejemplo, la etiqueta <img> define una imagen. Los atributos src y alt proporcionan información sobre la ubicación de la imagen y una descripción alternativa para la imagen, respectivamente.

### Etiqueta de apertura y cierre 

En HTML5, la mayoría de las etiquetas requieren tanto una etiqueta de apertura como una etiqueta de cierre para definir el contenido que se encuentra entre ellas. La etiqueta de apertura se escribe con el nombre de la etiqueta y se coloca entre corchetes angulares (< y >), mientras que la etiqueta de cierre se escribe con una barra diagonal (/) antes del nombre de la etiqueta y se coloca entre corchetes angulares.

En este ejemplo, la etiqueta de apertura ***P*** define un párrafo y la etiqueta de cierre indica el final del párrafo.

Algunas etiquetas en HTML5, como la etiqueta ***IMG***, no requieren una etiqueta de cierre porque no contienen contenido entre ellas. En estos casos, la etiqueta de apertura se escribe con un signo de cierre (/) al final.

Es importante asegurarse de que todas las etiquetas de apertura tengan su correspondiente etiqueta de cierre para evitar errores en el código HTML.

```html
<p>Este es un párrafo de ejemplo</p>

<img src="imagen.jpg" alt="Descripción de la imagen" />
```

Hay varias etiquetas de HTML que no requieren una etiqueta de cierre y se consideran etiquetas "autocerrantes". Algunas de ellas son:

**&lt;br&gt;**: se utiliza para agregar un salto de línea en una página web y no requiere una etiqueta de cierre.

**&lt;img&gt;**: se utiliza para insertar imágenes en una página web y no requiere una etiqueta de cierre.

**&lt;input&gt;**: se utiliza para crear campos de entrada de datos en una página web y no requiere una etiqueta de cierre.

**&lt;meta&gt;**: se utiliza para proporcionar información meta sobre una página web, como la descripción, palabras clave y codificación de caracteres, y no requiere una etiqueta de cierre.

**&lt;link&gt;**: se utiliza para enlazar archivos externos como hojas de estilo CSS y fuentes de Google Fonts y no requiere una etiqueta de cierre.


### Comentarios
Además, HTML también incluye la posibilidad de agregar comentarios en el código. Los comentarios son notas que se agregan al código para proporcionar información adicional o para recordar a los programadores lo que hace una sección específica del código. Los comentarios en HTML se escriben entre <!-- y -->.

Un ejemplo de comentario en HTML sería:

```html
<!-- Este es un comentario en HTML -->
```

En resumen, la sintaxis de HTML se compone de etiquetas, que definen y estructuran el contenido de una página web, y atributos, que proporcionan información adicional sobre una etiqueta. También se pueden agregar comentarios para proporcionar información adicional sobre el código.

## Estructura Básica 

La estructura básica de un documento HTML consta de tres partes principales: ***la declaración DOCTYPE, el elemento head y el elemento body.***

### DOCTYPE 
La declaración DOCTYPE es la primera línea del documento HTML y se utiliza para indicar el tipo de documento HTML que se está utilizando. Esta declaración no es un elemento HTML, sino una instrucción que le dice al navegador cómo procesar el código HTML. La declaración DOCTYPE se escribe como sigue:

```html
<!DOCTYPE html>
```

### HEAD
El elemento head es un contenedor para metadatos (información sobre el documento) y enlaces a archivos externos como hojas de estilo CSS y scripts JavaScript. Los metadatos incluyen información como el título de la página, la descripción y palabras clave que los motores de búsqueda pueden utilizar para clasificar y encontrar la página. El elemento head se escribe dentro del elemento HTML y antes del elemento body. Un ejemplo de un elemento head básico se muestra a continuación:

```html
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
    <meta name="description" content="Descripción de la página">
    <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
```

### BODY 

El elemento body es el contenedor principal para el contenido de la página. ***Incluye todo el texto, imágenes, videos y otros elementos visuales*** que se muestran en la página. El elemento body se escribe después del elemento head y se cierra al final del documento. Un ejemplo de un elemento body básico se muestra a continuación:

```html
<body>
    <h1>Título principal de la página</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <img src="imagen.jpg" alt="Descripción de la imagen">
</body>

```

### Ejemplo estructura completa

En resumen, la estructura básica de un documento HTML incluye la declaración DOCTYPE, el elemento head y el elemento body. La declaración DOCTYPE indica el tipo de documento HTML que se está utilizando, el elemento head contiene información sobre el documento y enlaces a archivos externos, y el elemento body contiene el contenido principal de la página. A continuación se muestra un ejemplo completo de un documento HTML que utiliza la estructura básica:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
    <meta name="description" content="Descripción de la página">
    <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>Título principal de la página</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <!-- falta agregar más información -->
    <img src="imagen.jpg" alt="Descripción de la imagen">
</body>
</html>

```

## Etiquetas

### Encabezados y párrafos 

En HTML, los encabezados se utilizan para indicar la importancia y jerarquía del contenido en una página web, mientras que los párrafos se utilizan para agrupar y presentar contenido textual.

Los encabezados se indican mediante etiquetas de "h1" a "h6", donde "h1" representa el encabezado más importante y "h6" el menos importante. 

```html
<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo de encabezados y párrafos en HTML</title>
</head>
<body>
	<h1>Encabezado de nivel 1</h1>
	<p>Este es un párrafo que contiene un ejemplo de encabezado de nivel 2:</p>
	<h2>Encabezado de nivel 2</h2>
	<p>Este es otro párrafo que contiene un ejemplo de encabezado de nivel 3:</p>
	<h3>Encabezado de nivel 3</h3>
	<p>Este es un párrafo que contiene varios ejemplos de encabezados:</p>
	<h4>Encabezado de nivel 4</h4>
	<h5>Encabezado de nivel 5</h5>
	<h6>Encabezado de nivel 6</h6>
	<p>Este es un párrafo que contiene más texto después de los encabezados.</p>
</body>
</html>
```

### Enlaces 

En HTML, los enlaces se utilizan para crear hipervínculos a otras páginas web o recursos en línea, como imágenes, archivos de audio o video, documentos PDF, etc. Los enlaces se crean utilizando la etiqueta "A", que significa "ancla". La etiqueta "A" se utiliza junto con el atributo "href", que especifica la URL del recurso al que se desea enlazar.

Por ejemplo, para crear un enlace a la página principal de Google, se utilizaría el siguiente código:

```html
<a href="https://www.google.com">Ir a Google</a>
```

En este ejemplo, "https://www.google.com" es la URL del recurso al que se desea enlazar, y "Ir a Google" es el texto del enlace que se mostrará en la página. Cuando el usuario haga clic en el texto del enlace, se abrirá la página de Google en una nueva pestaña del navegador.

Además del atributo "href", la etiqueta "<a>" también puede incluir otros atributos, como "target" para especificar dónde se abrirá el recurso vinculado (por ejemplo, en una nueva pestaña del navegador), "title" para proporcionar información adicional sobre el recurso vinculado, y "rel" para especificar la relación entre la página actual y la página vinculada.

Por ejemplo, para crear un enlace a un archivo de audio llamado "mi_cancion.mp3" que se encuentra en el mismo directorio que la página actual, se utilizaría el siguiente código:

```html
<a href="mi_cancion.mp3" target="_blank" title="Escuchar mi canción">Mi canción</a>
```

En este ejemplo, el atributo "href" se establece en "mi_cancion.mp3" para indicar que se trata de un archivo de audio en lugar de una página web. El atributo "target" se establece en "_blank" para indicar que se abrirá el archivo de audio en una nueva pestaña del navegador. El atributo "title" se establece en "Escuchar mi canción" para proporcionar información adicional sobre el recurso vinculado. "Mi canción" es el texto del enlace que se mostrará en la página. Cuando el usuario haga clic en el texto del enlace, se abrirá el archivo de audio en una nueva pestaña del navegador.

### Imágenes 

En HTML, las imágenes se insertan en una página utilizando la etiqueta "IMG". La etiqueta "IMG" es un elemento vacío, lo que significa que no tiene una etiqueta de cierre. En su lugar, se utilizan los atributos para indicar la información necesaria para mostrar la imagen.

El atributo más importante de la etiqueta "IMG" es "src", que especifica la URL de la imagen que se desea mostrar. Otros atributos útiles incluyen "alt" para proporcionar una descripción de la imagen para las personas con discapacidades visuales, "width" y "height" para especificar las dimensiones de la imagen en píxeles, y "title" para proporcionar información adicional sobre la imagen.

Por ejemplo, para insertar una imagen de un gato llamado "michi.jpg" que se encuentra en el mismo directorio que la página actual, se utilizaría el siguiente código:

```html
<img src="michi.jpg" alt="Foto de un gato llamado Michi" />
```

En este ejemplo, "michi.jpg" es la URL de la imagen que se desea mostrar, y "Foto de un gato llamado Michi" es una descripción alternativa de la imagen para las personas con discapacidades visuales. Cuando se muestra la página, se mostrará la imagen de Michi en su tamaño original.

```html
<img src="michi.jpg" alt="Foto de un gato llamado Michi" width="300" height="200" style="border: 1px solid black;" class="imagen-gato" id="michi-foto" />
```

En este ejemplo, la imagen de Michi se muestra con un borde negro sólido, y se ha aplicado la clase "imagen-gato" y el identificador "michi-foto" para poder aplicar estilos o referirse a la imagen de manera única en el futuro.

### Listas 

En HTML, las listas se utilizan para presentar información en un formato estructurado y fácilmente legible. Hay tres tipos de listas en HTML: listas ordenadas, listas desordenadas y listas de definición.

Las listas ordenadas se utilizan cuando se necesita presentar información en un orden específico. Se indican mediante la etiqueta "OL". Cada elemento de la lista se indica con la etiqueta "LI". Por ejemplo, para crear una lista ordenada de números del 1 al 5, se utiliza la siguiente estructura:

```html
<ol>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ol>
```

Las listas desordenadas se utilizan para presentar información en un orden no específico. Se indican mediante la etiqueta "UL". Cada elemento de la lista se indica con la etiqueta "LI". Por ejemplo, para crear una lista desordenada de frutas, se utiliza la siguiente estructura:

```html
<ul>
	<li>Manzana</li>
	<li>Pera</li>
	<li>Banana</li>
	<li>Naranja</li>
</ul>
```

Las listas de definición se utilizan para presentar información en un formato de "término-definición". Se indican mediante la etiqueta "DL". Cada término se indica con la etiqueta "DT", y cada definición se indica con la etiqueta "DD". Por ejemplo, para crear una lista de definición de términos informáticos, se utiliza la siguiente estructura:

```html
<dl>
	<dt>HTML</dt>
	<dd>Lenguaje de marcado utilizado para crear páginas web.</dd>
	<dt>CSS</dt>
	<dd>Lenguaje utilizado para dar estilo y diseño a páginas web.</dd>
	<dt>JavaScript</dt>
	<dd>Lenguaje de programación utilizado para crear interactividad en páginas web.</dd>
</dl>
```


### Otras etiquetas  

#### Audio 

Este ejemplo muestra cómo insertar un archivo de audio en una página web con controles de reproducción y dos etiquetas &lt;source&gt; que proporcionan diferentes formatos de archivo de audio. Si el navegador no puede reproducir el archivo de audio, se mostrará el mensaje "Tu navegador no soporta la etiqueta audio.".

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta la etiqueta audio.
</audio>
```


#### Video

Este ejemplo muestra cómo insertar un archivo de video en una página web con controles de reproducción y dos etiquetas &lt;source&gt; que proporcionan diferentes formatos de archivo de video. El ancho y alto del video se especifican en los atributos "width" y "height". Si el navegador no puede reproducir el archivo de video, se mostrará el mensaje "Tu navegador no soporta la etiqueta video.".

```html
<video controls width="600" height="400">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta la etiqueta video.
</video>
```

#### Picture 

La etiqueta &lt;picture&gt; permite proporcionar varias imágenes en diferentes tamaños y resoluciones, para que el navegador pueda elegir la imagen más adecuada para el dispositivo del usuario y la velocidad de conexión a Internet. La etiqueta &lt;picture&gt; se utiliza en combinación con la etiqueta &lt;source&gt; para proporcionar diferentes imágenes en diferentes formatos y resoluciones, y la etiqueta &lt;img&gt; para proporcionar una imagen de respaldo en caso de que no se pueda cargar ninguna de las imágenes especificadas.

Aquí te dejo un ejemplo de cómo utilizar la etiqueta &lt;picture&gt;:

```html
<picture>
  <source media="(min-width: 768px)" srcset="imagen-grande.jpg">
  <source media="(min-width: 576px)" srcset="imagen-mediana.jpg">
  <img src="imagen-pequena.jpg" alt="Descripción de la imagen">
</picture>
```

En este ejemplo, se proporcionan tres imágenes diferentes para diferentes tamaños de pantalla. Si el ancho de la pantalla es mayor o igual a 768 píxeles, se mostrará la imagen grande, si es mayor o igual a 576 píxeles, se mostrará la imagen mediana, y si es menor que 576 píxeles, se mostrará la imagen pequeña. Si ninguna de las imágenes especificadas puede ser cargada, se mostrará la imagen de respaldo especificada en el atributo "src" de la etiqueta &lt;img&gt;.

## Divitis (DIV)

La "divitis" es un término que se utiliza para referirse a la sobreutilización de elementos div en un documento HTML, lo que puede conducir a una estructura de código ineficiente, difícil de mantener y poco semántica. Aquí te presento algunas recomendaciones para evitar la divitis en HTML:

**Utiliza elementos semánticos**: Los elementos HTML5 como ***header, nav, main, section, article, aside y footer*** proporcionan una estructura semántica clara y significativa al contenido de la página. Utiliza estos elementos siempre que sea posible para definir la estructura del contenido de la página.

**Agrupa elementos con contenedores semánticos**: En lugar de envolver cada elemento con un elemento div genérico, utiliza contenedores semánticos para agrupar los elementos relacionados. Por ejemplo, puedes usar un elemento aside para agrupar los elementos de la barra lateral, o un elemento section para agrupar los elementos relacionados de una sección de contenido.

**Utiliza clases y atributos personalizados**: Si necesitas aplicar estilos específicos a un conjunto de elementos, utiliza clases en lugar de elementos div genéricos. Además, puedes utilizar atributos personalizados para describir la función de los elementos en la página, como data-nav para indicar que un elemento es parte de la navegación.

**Simplifica el código HTML**: Evita anidar elementos div innecesariamente. En su lugar, utiliza clases y contenedores semánticos para agrupar y estructurar el contenido.

**Utiliza CSS para aplicar estilos**: En lugar de utilizar elementos div para aplicar estilos, utiliza hojas de estilo en cascada (CSS) para aplicar estilos y diseño a los elementos en la página. Utiliza selectores y reglas de estilo para aplicar estilos a elementos específicos en lugar de anidar elementos div innecesariamente.

**Utiliza herramientas de análisis de código**: Las herramientas de análisis de código pueden ayudarte a detectar y corregir la divitis en tus documentos HTML. Utiliza herramientas como HTMLHint, CSSLint y W3C Markup Validation Service para comprobar la calidad y la validez de tu código HTML.

En resumen, para evitar la divitis en HTML, es importante utilizar elementos semánticos, agrupar elementos con contenedores semánticos, utilizar clases y atributos personalizados, simplificar el código HTML, utilizar CSS para aplicar estilos y utilizar herramientas de análisis de código para detectar y corregir errores en el código.

Ejemplo de código con DIVITIS:
```html
<div id="wrapper">
  <div id="header">
    <div class="logo">
      <img src="logo.png" alt="Logo">
    </div>
    <div class="menu">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </div>
  <div id="content">
    <div class="section">
      <h2>Sección 1</h2>
      <div class="subsection">
        <h3>Subsección 1</h3>
        <p>Contenido de la subsección 1.</p>
      </div>
      <div class="subsection">
        <h3>Subsección 2</h3>
        <p>Contenido de la subsección 2.</p>
      </div>
    </div>
    <div class="section">
      <h2>Sección 2</h2>
      <div class="subsection">
        <h3>Subsección 1</h3>
        <p>Contenido de la subsección 1.</p>
      </div>
      <div class="subsection">
        <h3>Subsección 2</h3>
        <p>Contenido de la subsección 2.</p>
      </div>
    </div>
  </div>
  <div id="footer">
    <p>Derechos de autor © 2021. Todos los derechos reservados.</p>
  </div>
</div>
```

Ejemplo con DIVITIS corregida:
```html
<header>
  <div class="logo">
    <img src="logo.png" alt="Logo">
  </div>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>Sección 1</h2>
    <div class="subsection">
      <h3>Subsección 1</h3>
      <p>Contenido de la subsección 1.</p>
    </div>
    <div class="subsection">
      <h3>Subsección 2</h3>
      <p>Contenido de la subsección 2.</p>
    </div>
  </section>
  <section>
    <h2>Sección 2</h2>
    <div class="subsection">
      <h3>Subsección 1</h3>
      <p>Contenido de la subsección 1.</p>
    </div>
    <div class="subsection">
      <h3>Subsección 2</h3>
      <p>Contenido de la subsección 2.</p>
    </div>
  </section>
</main>
<footer>
  <p>Derechos de autor © 2021. Todos los derechos reservados.</p>
</footer>
```

## Recursos 

- https://developer.mozilla.org/es/docs/Web/HTML
- https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL 
- https://developer.mozilla.org/es/docs/Web/HTML/Attributes/rel 
- https://validator.w3.org/ 
- https://developer.mozilla.org/es/docs/Web/HTML/Element/form
- https://www.w3schools.com/html/html_forms.asp 
