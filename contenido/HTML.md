# HTML 

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

## Divitis (DIV)

La "divitis" es un término que se utiliza para referirse a la sobreutilización de elementos div en un documento HTML, lo que puede conducir a una estructura de código ineficiente, difícil de mantener y poco semántica. Aquí te presento algunas recomendaciones para evitar la divitis en HTML:

Utiliza elementos semánticos: Los elementos HTML5 como header, nav, main, section, article, aside y footer proporcionan una estructura semántica clara y significativa al contenido de la página. Utiliza estos elementos siempre que sea posible para definir la estructura del contenido de la página.

Agrupa elementos con contenedores semánticos: En lugar de envolver cada elemento con un elemento div genérico, utiliza contenedores semánticos para agrupar los elementos relacionados. Por ejemplo, puedes usar un elemento aside para agrupar los elementos de la barra lateral, o un elemento section para agrupar los elementos relacionados de una sección de contenido.

Utiliza clases y atributos personalizados: Si necesitas aplicar estilos específicos a un conjunto de elementos, utiliza clases en lugar de elementos div genéricos. Además, puedes utilizar atributos personalizados para describir la función de los elementos en la página, como data-nav para indicar que un elemento es parte de la navegación.

Simplifica el código HTML: Evita anidar elementos div innecesariamente. En su lugar, utiliza clases y contenedores semánticos para agrupar y estructurar el contenido.

Utiliza CSS para aplicar estilos: En lugar de utilizar elementos div para aplicar estilos, utiliza hojas de estilo en cascada (CSS) para aplicar estilos y diseño a los elementos en la página. Utiliza selectores y reglas de estilo para aplicar estilos a elementos específicos en lugar de anidar elementos div innecesariamente.

Utiliza herramientas de análisis de código: Las herramientas de análisis de código pueden ayudarte a detectar y corregir la divitis en tus documentos HTML. Utiliza herramientas como HTMLHint, CSSLint y W3C Markup Validation Service para comprobar la calidad y la validez de tu código HTML.

En resumen, para evitar la divitis en HTML, es importante utilizar elementos semánticos, agrupar elementos con contenedores semánticos, utilizar clases y atributos personalizados, simplificar el código HTML, utilizar CSS para aplicar estilos y utilizar herramientas de análisis de código para detectar y corregir errores en el código.