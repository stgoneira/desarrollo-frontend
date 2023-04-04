# Javascript 

JavaScript es un lenguaje de programación que se utiliza ampliamente en el desarrollo frontend para crear aplicaciones web interactivas y dinámicas. A continuación, se presentan los conceptos fundamentales de JavaScript para el desarrollo frontend:

**Variables**: las variables se utilizan para almacenar valores y datos en JavaScript. Las variables se definen con la palabra clave "var", "let" o "const" y pueden contener diferentes tipos de datos como números, cadenas, objetos, arreglos, etc.

**Estructuras condicionales**: son una herramienta fundamental que permiten tomar decisiones en función de ciertas condiciones. En JavaScript, existen tres tipos principales de estructuras condicionales: ***if, else y switch***. La estructura "if" evalúa una expresión y, si es verdadera, ejecuta una porción de código. En caso contrario, se puede utilizar la estructura "else" para ejecutar otra porción de código. La estructura "switch" permite evaluar diferentes casos y ejecutar diferentes bloques de código en función del valor de una variable o expresión. En general, las estructuras condicionales son muy útiles para crear programas que se adapten a diferentes situaciones y tomen decisiones de manera dinámica en tiempo de ejecución.

**Bucles**: son estructuras que permiten repetir un bloque de código varias veces hasta que se cumpla cierta condición. En JavaScript, existen principalmente dos tipos de bucles: ***el bucle "for" y el bucle "while"***. El bucle "for" se utiliza cuando se conoce de antemano la cantidad de veces que se debe ejecutar el bloque de código, y se utiliza una variable contadora que va incrementándose en cada iteración. El bucle "while", en cambio, se utiliza cuando no se conoce de antemano la cantidad de veces que se debe ejecutar el bloque de código, y se evalúa una condición en cada iteración para determinar si el bucle debe seguir ejecutándose o no. También existe el bucle "do-while", que es similar al bucle "while", pero asegura que el bloque de código se ejecute al menos una vez antes de evaluar la condición. En general, los bucles son muy útiles para automatizar tareas repetitivas y para procesar grandes cantidades de datos de manera eficiente. Sin embargo, es importante tener cuidado al utilizar bucles, ya que pueden ser propensos a generar errores si no se manejan adecuadamente.

**Funciones**: una función es un bloque de código que se puede llamar para realizar una tarea específica. Las funciones se definen con la palabra clave "function" y se pueden pasar parámetros para personalizar su comportamiento.

**Eventos**: los eventos son acciones que ocurren en una página web, como hacer clic en un botón o mover el mouse sobre un elemento. Los eventos se utilizan para activar funciones y hacer que una página web sea interactiva.

**DOM**: el Document Object Model (DOM) es una representación en memoria de una página web. JavaScript se utiliza para manipular el DOM y cambiar la estructura, el contenido y el estilo de una página web.

**AJAX**: AJAX es una técnica que se utiliza para actualizar partes de una página web sin tener que recargar toda la página. AJAX se utiliza para cargar contenido dinámico, enviar formularios y actualizar datos en tiempo real.

**Frameworks de JavaScript**: los frameworks de JavaScript como React, Angular y Vue son herramientas populares para el desarrollo frontend. Estos frameworks proporcionan estructuras y patrones para desarrollar aplicaciones web escalables y complejas.

En resumen, JavaScript es un lenguaje de programación que se utiliza ampliamente en el desarrollo frontend para crear aplicaciones web interactivas y dinámicas. Los conceptos fundamentales de JavaScript incluyen variables, funciones, eventos, DOM, jQuery, AJAX y frameworks de JavaScript. Con JavaScript y sus herramientas asociadas, los desarrolladores frontend pueden crear aplicaciones web avanzadas que proporcionan una experiencia interactiva y atractiva para los usuarios.



## Introducción 

- Liviano
- Interpretado o compilado justo a tiempo (Just in Time)
- First-Class Functions (funciones tratadas como una variable)
- Prototype-based Programming (estilo de POO donde las clases no están explícitamente definidas)

- Web APIs
- DOM 

## Primeros pasos 

## Browser APIs

Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

- **The DOM (Document Object Model) API** allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.

- **The Geolocation API** retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.

- **The Canvas and WebGL APIs** allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies — see Chrome Experiments and webglsamples.

- **Audio and Video APIs** like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).


## Lenguajes AOT y JIT

Tanto los lenguajes de programación compilados en tiempo de compilación (ahead-of-time o AOT) como los lenguajes de programación compilados en tiempo de ejecución (just-in-time o JIT) tienen sus ventajas y desventajas, a continuación te presento algunas de ellas:

### Ahead of Time (AOT)

Ventajas de los lenguajes compilados en AOT:

- El código compilado se puede ejecutar de manera muy rápida.
- El rendimiento del código suele ser predecible y consistente.
- No se necesita un entorno de tiempo de ejecución específico para el lenguaje de programación.

Desventajas de los lenguajes compilados en AOT:

- Es necesario recompilar el código cada vez que se realizan cambios.
- El código compilado no es portable entre diferentes plataformas.
- Es más difícil depurar el código compilado ya que no se tiene acceso al código fuente original.

### Just in Time (JIT)

Ventajas de los lenguajes compilados en JIT:

- El código compilado se puede adaptar a la plataforma de ejecución específica, lo que puede mejorar el rendimiento.
- El código compilado es portable entre diferentes plataformas.
- Es más fácil depurar el código ya que se tiene acceso al código fuente original.

Desventajas de los lenguajes compilados en JIT:

- El rendimiento del código puede variar en función de la plataforma de ejecución específica.
- La fase de compilación JIT puede consumir tiempo de ejecución y recursos de la máquina.
- El código compilado no se puede ejecutar de manera tan rápida como el código compilado en AOT.

En resumen, la elección entre un lenguaje de programación compilado en AOT o JIT depende en gran medida de las necesidades y requisitos del proyecto. Si se necesita un alto rendimiento y predictibilidad, un lenguaje compilado en AOT podría ser la mejor opción. Si la portabilidad y la facilidad de depuración son importantes, un lenguaje compilado en JIT podría ser la mejor opción.


## Server-side versus client-side code

## Agregar Javascript a mi página 

1. Archivo externo:
```javascript
<script src="script.js" defer></script>
```

2. Incrustado en HTML 
```javascript
<script>
  // JavaScript goes here
</script>
```

3. En línea
```html
<button onclick="saludar()">Saludar</button>
```

### defer attribute 
**defer**: This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
***Warning***: This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.

The defer attribute has no effect on module scripts — they defer by default.
Scripts with the defer attribute will execute in the order in which they appear in the document.
This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.

An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the </body> tag), so that it would load after all the HTML has been parsed. The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

### async and defer

![Defer vs Async](../assets/ppt/script-defer-async.jpg)

There are actually two modern features we can use to bypass the problem of the blocking script — async and defer (which we saw above). Let's look at the difference between these two.

Scripts loaded using the async attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. You get no guarantee that scripts will run in any specific order. It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).

Tanto el atributo async como el atributo defer en la etiqueta SCRIPT en HTML permiten cargar y ejecutar archivos de script de manera asíncrona. Sin embargo, hay algunas diferencias importantes entre ambos atributos:

- **async**: Con este atributo, se carga el archivo de script de forma asíncrona mientras se procesa el resto del contenido HTML. Esto significa que el archivo de script se ejecutará tan pronto como esté disponible, sin esperar a que se cargue el resto del contenido de la página. Este atributo se usa comúnmente para scripts que no dependen del resto del contenido de la página, como por ejemplo el seguimiento de analíticas.

- **defer**: Con este atributo, también se carga el archivo de script de forma asíncrona, pero se diferirá su ejecución hasta que se complete el procesamiento del contenido HTML. Esto significa que el archivo de script se ejecutará en el orden en el que se encuentra en el documento HTML, después de que se haya cargado y analizado todo el contenido HTML. Este atributo se usa comúnmente para scripts que dependen del contenido de la página y deben ejecutarse en un orden específico.

A continuación, se presenta un listado de cuándo se debe usar cada atributo:

Usa async cuando:

- El script es independiente del resto del contenido de la página.
- La carga y ejecución del script no afectará significativamente la experiencia del usuario.
- La secuencia de carga y ejecución del script no es crítica.
- El script no necesita acceder a elementos de la página que todavía no se han cargado.

Usa defer cuando:

- El script depende del resto del contenido de la página.
- La carga y ejecución del script pueden afectar significativamente la experiencia del usuario.
- La secuencia de carga y ejecución del script es crítica.
- El script necesita acceder a elementos de la página que aún no se han cargado.

En resumen, el atributo async se utiliza para scripts independientes y no críticos, mientras que el atributo defer se utiliza para scripts críticos y que dependen del contenido de la página. Es importante elegir cuidadosamente entre ambos atributos para optimizar el rendimiento y la experiencia del usuario.

## Security 

Note: There are ways to send code and data between different websites/tabs in a safe manner, but these are advanced techniques that we won't cover in this course.
