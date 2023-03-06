# HTML 

## Fundamentos de HTML 

HTML es un lenguaje de marcado que se utiliza para crear páginas web. A continuación se resumen los fundamentos de HTML:

**Estructura básica**: Todo documento HTML comienza con el elemento html, que contiene dos elementos principales: head y body. El elemento head contiene información sobre el documento, como el título de la página y los enlaces a las hojas de estilo CSS, mientras que el elemento body contiene el contenido visible de la página.

**Etiquetas y elementos**: Los elementos de HTML se definen utilizando etiquetas. Cada etiqueta comienza con el símbolo < y termina con el símbolo >. Los elementos pueden contener texto, imágenes, enlaces y otros elementos. Algunos elementos, como las imágenes y los enlaces, requieren atributos para funcionar correctamente.

**Encabezados y párrafos**: Los encabezados se utilizan para dividir el contenido de la página en secciones y se definen utilizando las etiquetas h1 a h6. Los párrafos se definen utilizando la etiqueta p y se utilizan para agrupar el texto en párrafos.

**Listas**: Las listas se definen utilizando las etiquetas ul (lista sin orden), ol (lista ordenada) y li (elemento de lista).

**Enlaces**: Los enlaces se definen utilizando la etiqueta a y se utilizan para crear hipervínculos a otras páginas web o a secciones de la misma página.

**Imágenes**: Las imágenes se definen utilizando la etiqueta img y requieren un atributo src para especificar la ubicación del archivo de imagen.

**Tablas**: Las tablas se definen utilizando las etiquetas table, tr (fila de tabla) y td (celda de tabla) y se utilizan para mostrar datos en forma de tabla.

**Formularios**: Los formularios se definen utilizando la etiqueta form y se utilizan para recopilar datos de los usuarios. Los elementos de formulario, como los campos de texto y los botones, se definen utilizando etiquetas específicas, como input y button.

En resumen, HTML proporciona las herramientas necesarias para crear páginas web mediante el uso de etiquetas y elementos para definir la estructura y el contenido de la página, así como para crear interactividad con los usuarios mediante el uso de formularios y enlaces.

## Sintaxis HTML 

Las etiquetas son elementos que definen y estructuran el contenido de una página web. Cada etiqueta se escribe entre corchetes angulares (< y >) y puede tener atributos para proporcionar información adicional sobre el elemento.

Un ejemplo de etiqueta básica sería:

```html 
<p>Este es un párrafo de ejemplo</p>
```

En este ejemplo, la etiqueta ***P*** define un párrafo.

Los atributos son propiedades que se aplican a una etiqueta y se utilizan para proporcionar información adicional sobre el elemento. Los atributos se escriben dentro de la etiqueta y se componen de un nombre y un valor, separados por un signo igual (=).

Un ejemplo de etiqueta con atributos sería:

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

En este ejemplo, la etiqueta <img> define una imagen. Los atributos src y alt proporcionan información sobre la ubicación de la imagen y una descripción alternativa para la imagen, respectivamente.

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
    <img src="imagen.jpg" alt="Descripción de la imagen">
</body>
</html>

```

## Divitis (DIV)

La "divitis" es un término que se utiliza para referirse a la sobreutilización de elementos div en un documento HTML, lo que puede conducir a una estructura de código ineficiente, difícil de mantener y poco semántica. Aquí te presento algunas recomendaciones para evitar la divitis en HTML:

**Utiliza elementos semánticos**: Los elementos HTML5 como ***header, nav, main, section, article, aside y footer*** proporcionan una estructura semántica clara y significativa al contenido de la página. Utiliza estos elementos siempre que sea posible para definir la estructura del contenido de la página.

**Agrupa elementos con contenedores semánticos**: En lugar de envolver cada elemento con un elemento div genérico, utiliza contenedores semánticos para agrupar los elementos relacionados. Por ejemplo, puedes usar un elemento aside para agrupar los elementos de la barra lateral, o un elemento section para agrupar los elementos relacionados de una sección de contenido.

**Utiliza clases y atributos personalizados**: Si necesitas aplicar estilos específicos a un conjunto de elementos, utiliza clases en lugar de elementos div genéricos. Además, puedes utilizar atributos personalizados para describir la función de los elementos en la página, como data-nav para indicar que un elemento es parte de la navegación.

**Simplifica el código HTML**: Evita anidar elementos div innecesariamente. En su lugar, utiliza clases y contenedores semánticos para agrupar y estructurar el contenido.

**Utiliza CSS para aplicar estilos**: En lugar de utilizar elementos div para aplicar estilos, utiliza hojas de estilo en cascada (CSS) para aplicar estilos y diseño a los elementos en la página. Utiliza selectores y reglas de estilo para aplicar estilos a elementos específicos en lugar de anidar elementos div innecesariamente.

**Utiliza herramientas de análisis de código**: Las herramientas de análisis de código pueden ayudarte a detectar y corregir la divitis en tus documentos HTML. Utiliza herramientas como HTMLHint, CSSLint y W3C Markup Validation Service para comprobar la calidad y la validez de tu código HTML.

En resumen, para evitar la divitis en HTML, es importante utilizar elementos semánticos, agrupar elementos con contenedores semánticos, utilizar clases y atributos personalizados, simplificar el código HTML, utilizar CSS para aplicar estilos y utilizar herramientas de análisis de código para detectar y corregir errores en el código.