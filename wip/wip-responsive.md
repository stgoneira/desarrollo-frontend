Fuente: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

**Diseño web adaptable**: Se refiere a crear sitios web que se ajusten automáticamente al tamaño de la pantalla y la resolución del dispositivo en el que se están visualizando. Para lograr esto se utilizan las Media Queries y el diseño fluido. Para facilitar su implementación, se recomienda el uso de frameworks como Bootstrap, Foundation, Bulma o Tailwind CSS.

**Media Queries**: Permiten aplicar diferentes estilos según las características del dispositivo en el que se está visualizando la página. Es una herramienta esencial para crear diseños responsivos. Para su uso, se deben definir breakpoints o puntos de quiebre que determinen cuándo se aplicarán los cambios de estilo. Las Media Queries se pueden utilizar en conjunto con otras herramientas como los frameworks CSS mencionados anteriormente.

**Frameworks responsivos**: Son frameworks CSS que se enfocan en la creación de sitios web responsivos y proporcionan una serie de herramientas y componentes que pueden utilizarse para crear diseños adaptables rápidamente. Además de los frameworks mencionados anteriormente, también se pueden usar otros como Materialize, Semantic UI o UIKit.

**Imágenes y videos responsivos**: Es importante optimizar el tamaño y la resolución de las imágenes y los videos para que se adapten correctamente a diferentes tamaños de pantalla y resoluciones. Las etiquetas <picture> y <video> son útiles para garantizar que los medios se adapten correctamente. También es recomendable el uso de herramientas como Kraken.io o Cloudinary para optimizar y reducir el tamaño de los medios.

**Pruebas de responsividad**: Es importante realizar pruebas de responsividad en diferentes dispositivos y tamaños de pantalla para asegurarse de que el diseño sea compatible y se ajuste correctamente en todos los casos. Para esto se pueden usar herramientas como BrowserStack, CrossBrowserTesting o Responsinator.

**Tipografía responsiva**: Es importante asegurarse de que la tipografía se adapte adecuadamente a diferentes tamaños de pantalla y resoluciones. Se recomienda el uso de unidades de medida relativas, como em o rem, para definir los tamaños de fuente. También se pueden utilizar herramientas como Google Fonts o Typekit para agregar fuentes web responsivas a los proyectos.

**Carga de recursos responsiva**: Es importante optimizar la carga de recursos, como imágenes, videos y fuentes, utilizando técnicas como el lazy loading y la pre-carga selectiva. Para implementar estas técnicas se pueden utilizar herramientas como LazySizes, Lozad.js o LazyLoad.

**Accesibilidad en dispositivos móviles**: Es importante seguir las mejores prácticas de accesibilidad y utilizar herramientas como ARIA y los atributos HTML5 para mejorar la accesibilidad. También se pueden utilizar herramientas como Axe o Lighthouse para realizar pruebas de accesibilidad en el sitio web y garantizar que sea accesible para todos los usuarios.

## Herramientas
Existen varias herramientas gratuitas en Internet para probar la responsividad de un sitio web. A continuación, se presentan algunas opciones:

1. **Sauce Labs**: Permite seleccionar distintos Sistemas Operativos y versiones para Browsers como Internet Explorer, Safari, Chrome, Firefox, entre muchos otros.

2. **Responsinator**: Este sitio web es una herramienta muy útil para comprobar la responsividad de un sitio en diferentes dispositivos. Al ingresar la URL del sitio, se mostrará cómo se ve en diferentes tamaños de pantalla, desde smartphones hasta tablets.

3. **BrowserStack**: Esta herramienta ofrece una versión gratuita para probar la responsividad de un sitio web en diferentes navegadores y dispositivos. Permite emular diferentes dispositivos y sistemas operativos para comprobar cómo se ve y funciona un sitio en cada uno de ellos.

4. **Am I Responsive?**: Esta herramienta permite ver cómo se ve un sitio web en diferentes tamaños de pantalla, desde un ordenador de escritorio hasta un smartphone. Simplemente hay que ingresar la URL del sitio y esperar a que se cargue.

5. **Screenfly**: Esta herramienta permite previsualizar cómo se ve un sitio web en diferentes tamaños de pantalla y dispositivos. Ofrece varias opciones para elegir, desde smartphones hasta televisores.

6. **Google Mobile-Friendly Test**: Esta herramienta de Google permite comprobar si un sitio web es fácilmente usable en dispositivos móviles. Simplemente hay que ingresar la URL del sitio y se obtendrá un informe detallado con recomendaciones para mejorar su responsividad.

Estas son solo algunas opciones de las muchas herramientas gratuitas que hay disponibles en Internet para probar la responsividad de un sitio web. Es importante probar la responsividad de un sitio en diferentes dispositivos y tamaños de pantalla para asegurarse de que se vea y funcione bien en todos ellos.



# Responsive Web Design 

Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability. It is the way to design for a multi-device web. In this article, we'll help you understand some techniques that can be used to master it.

HTML is fundamentally responsive, or fluid. If you create a web page containing only HTML, with no CSS, and resize the window, the browser will automatically reflow the text to fit the viewport.

Responsive web design, or RWD, is a design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch.

Responsive web design isn't a separate technology — it is an approach. It is a term used to describe a set of best practices used to create a layout that can respond to any device being used to view the content.

The term responsive design, coined by Ethan Marcotte in 2010, described using fluid grids, fluid images, and media queries to create responsive content, as discussed in Zoe Mickley Gillenwater's book Flexible Web Design.

At the time, the recommendation was to use CSS float for layout and media queries to query the browser width, creating layouts for different breakpoints. Fluid images are set to not exceed the width of their container; they have their max-width property set to 100%. Fluid images scale down when their containing column narrows but do not grow larger than their intrinsic size when the column grows. This enables an image to scale down to fit its content, rather than overflow it, but not grow larger and become pixelated if the container becomes wider than the image.


## Media Queries 

Media queries allow us to run a series of tests (e.g. whether the user's screen is greater than a certain width, or a certain resolution) and apply CSS selectively to style the page appropriately for the user's needs.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. The points at which a media query is introduced, and the layout changed, are known as breakpoints.

A common approach when using Media Queries is to create a simple single-column layout for narrow-screen devices (e.g. mobile phones), then check for wider screens and implement a multiple-column layout when you know that you have enough screen width to handle it. Designing for mobile first is known as mobile first design.

If using breakpoints, best practices encourage defining media query breakpoints with relative units rather than absolute sizes of an individual device.

There are different approaches to the styles defined within a media query block; ranging from using media queries to <link> style sheets based on browser size ranges to only including custom properties variables to store values associated with each breakpoint.

Media queries can help with RWD, but are not a requirement. Flexible grids, relative units, and minimum and maximum unit values can be used without queries.


## Responsive layout technologies

Responsive sites are built on flexible grids, meaning you don't need to target every possible device size with pixel perfect layouts.

By using a flexible grid, you can change a feature or add in a breakpoint and change the design at the point where the content starts to look bad. For example, to ensure line lengths don't become unreadably long as the screen size increases you can use columns; if a box becomes squashed with two words on each line as it narrows you can set a breakpoint.

Several layout methods, including Multiple-column layout, Flexbox, and Grid are responsive by default. They all assume that you are trying to create a flexible grid and give you easier ways to do so.


### Flexbox 

In Flexbox, flex items shrink or grow, distributing space between the items according to the space in their container. By changing the values for flex-grow and flex-shrink you can indicate how you want the items to behave when they encounter more or less space around them.

### CSS Grid 

In CSS Grid Layout the fr unit allows the distribution of available space across grid tracks. The next example creates a grid container with three tracks sized at 1fr. This will create three column tracks, each taking one part of the available space in the container. You can find out more about this approach to create a grid in the Learn Layout Grids topic, under Flexible grids with the fr unit.


## Responsive images
To ensure media is never larger than its responsive container, the following approach can be used:

```css
img,
picture,
video {
  max-width: 100%;
}
```

This scales media to ensure they never overflow their containers. Using a single large image and scaling it down to fit small devices wastes bandwidth by downloading images larger than what is needed.

The <picture> element enables providing multiple sizes along with "hints" (metadata that describes the screen size and resolution the image is best suited for), and the browser will choose the most appropriate image for each device, ensuring that a user will download an image size appropriate for the device they are using. Using <picture> along with max-width removes the need for sizing images with media queries. It enables targeting images with different aspect ratios to different viewport sizes.

You can also art direct images used at different sizes, thus providing a different crop or completely different image to different screen sizes.


## Responsive typography

Responsive typography describes changing font sizes within media queries or using viewport units to reflect lesser or greater amounts of screen real estate.

```css
html { font-size: 1em; }

h1 { font-size: 2rem; }

@media (min-width: 1200px) {
  h1 { font-size: 4rem; }
}

```

### Using viewport units for responsive typography
Viewport units vw can also be used to enable responsive typography, without the need for setting breakpoints with media queries. 1vw is equal to one percent of the viewport width, meaning that if you set your font size using vw, it will always relate to the size of the viewport.

```css
h1 { font-size: 6vw; }
```

The problem with doing the above is that the user loses the ability to zoom any text set using the vw unit, as that text is always related to the size of the viewport. Therefore you should never set text using viewport units alone.

There is a solution, and it involves using calc(). If you add the vw unit to a value set using a fixed size such as ems or rems then the text will still be zoomable. Essentially, the vw unit adds on top of that zoomed value:

```css
h1 { font-size: calc(1.5rem + 3vw); }
```

This means that we only need to specify the font size for the heading once, rather than set it up for mobile and redefine it in the media queries. The font then gradually increases as you increase the size of the viewport.


## The viewport meta tag

If you look at the HTML source of a responsive page, you will usually see the following <meta> tag in the <head> of the document.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

This viewport meta tag tells mobile browsers that they should set the width of the viewport to the device width, and scale the document to 100% of its intended size, which shows the document at the mobile-optimized size that you intended.

Why is this needed? Because mobile browsers tend to lie about their viewport width.

This meta tag exists because when smartphones first arrived, most sites were not mobile optimized. The mobile browser would, therefore, set the viewport width to 980 pixels, render the page at that width, and show the result as a zoomed-out version of the desktop layout. Users could zoom in and pan around the website to view the bits they were interested in, but it looked bad.

By setting width=device-width you are overriding a mobile device's default, like Apple's default width=980px, with the actual width of the device. Without it, your responsive design with breakpoints and media queries may not work as intended on mobile browsers. If you've got a narrow screen layout that kicks in at 480px viewport width or less, but the device is saying it is 980px wide, that user will not see your narrow screen layout.

So you should always include the viewport meta tag in the head of your documents.

## Media Queries 

The CSS Media Query gives you a way to apply CSS only when the browser and device environment matches a rule that you specify, for example "viewport is wider than 480 pixels". Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport, but they can also be used to detect other things about the environment your site is running on, for example whether the user is using a touchscreen rather than a mouse. In this lesson you will first learn about the syntax used in media queries, and then move on to use them in a working example showing how a simple design might be made responsive.

### Using Media Queries

Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width. Media queries are used for the following:

- To conditionally apply styles with the CSS @media and @import at-rules.
- To target specific media for the <style>, <link>, <source>, and other HTML elements with the media= attribute.
- To test and monitor media states using the Window.matchMedia() and EventTarget.addEventListener() methods.

```css
/* Definir un estilo para pantallas pequeñas */
@media only screen and (max-width: 600px) {
  body { font-size: 14px; }
}

/* Importar un archivo de estilo solo para pantallas grandes */
@import url("estilos-grandes.css") only screen and (min-width: 1200px);

```

```html
<link rel="stylesheet" href="estilos.css">
<link rel="stylesheet" href="estilos-grandes.css" media="screen and (min-width: 1200px)">
```

```html
<picture>
  <source media="(min-width: 800px)" srcset="imagen-grande.png">
  <source media="(min-width: 400px)" srcset="imagen-mediana.png">
  <img src="imagen-pequena.png" alt="Una imagen">
</picture>
```

### Syntax 

A media query is composed of an optional media type and any number of media feature expressions, which may optionally be combined in various ways using logical operators (and, or, not). Media queries are case-insensitive.

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

It consists of:

-  A media type, which tells the browser what kind of media this code is for (e.g. print, or screen).
- A media expression, which is a rule, or test that must be passed for the contained CSS to be applied.
- A set of CSS rules that will be applied if the test passes and the media type is correct.

### Media types
The possible types of media you can specify are:

- all
- print
- screen

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

You can also target multiple devices. For instance, this @media rule uses two media queries to target both screen and print devices:
```css
@media screen, print {
  /* … */
}
```

**Note**: Media types are optional; if you do not indicate a media type in your media query, then the media query will default to being for all media types.

#### Deprecados  

**Note**: CSS2.1 and Media Queries 3 defined several additional media types (tty, tv, projection, handheld, braille, embossed, and aural), but they were deprecated in Media Queries 4 and shouldn't be used.

En CSS, varios media types han sido deprecados en las Media Queries. Los media types deprecados son aquellos que han sido eliminados de la especificación CSS y, por lo tanto, ya no son recomendados para su uso en Media Queries.

A continuación, te menciono algunos media types que han sido deprecados en CSS:

**aural**: Este media type se utilizaba para hojas de estilo de voz, para dispositivos que leían el contenido en voz alta. Fue eliminado de la especificación CSS.

**braille**: Este media type se utilizaba para hojas de estilo en Braille, para dispositivos de salida Braille. Fue eliminado de la especificación CSS.

**embossed**: Este media type se utilizaba para hojas de estilo en relieve, para dispositivos de salida en relieve. Fue eliminado de la especificación CSS.

**handheld**: Este media type se utilizaba para hojas de estilo para dispositivos móviles. Fue eliminado de la especificación CSS.

Es importante tener en cuenta que, aunque estos media types han sido deprecados, todavía se pueden encontrar en algunos navegadores y dispositivos antiguos. Por lo tanto, si tienes que diseñar para dispositivos antiguos, es posible que aún debas utilizar algunos de estos media types.

### Media Features 

Media features describe a specific characteristic of the user agent, output device, or environment:

Fuente: https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features 

1. **width (width, min-width, max-width)**: Width of the viewport including width of scrollbar.
1. **height**: Height of the viewport. 
1. **orientation**: Orientation of the viewport.
1. **prefers-color-scheme**: Detect if the user prefers a light or dark color scheme. Added in Media Queries Level 5. 
1. **scripting**: Detects whether scripting (i.e. JavaScript) is available. Added in Media Queries Level 5.
1. **resolution**: Pixel density of the output device.
1. **any-hover**: Does any available input mechanism allow the user to hover over elements? Added in Media Queries Level 4.
1. **any-pointer**: Is any available input mechanism a pointing device, and if so, how accurate is it? Added in Media Queries Level 4.
1. **aspect-ratio**: Width-to-height aspect ratio of the viewport
1. **color**: Number of bits per color component of the output device, or zero if the device isn't color
1. **color-gamut**: Approximate range of colors that are supported by the user agent and output device. Added in Media Queries Level 4.
1. **color-index**: Number of entries in the output device's color lookup table, or zero if the device does not use such a table 
1. **display-mode**: The display mode of the application, as specified in the web app manifest's display member. Defined in the Web App Manifest spec
1. **dynamic-range**: Combination of brightness, contrast ratio, and color depth that are supported by the user agent and the output device. Added in Media Queries Level 5. 
1. **forced-colors**: Detect whether user agent restricts color palette. Added in Media Queries Level 5. 
1. **grid**: Does the device use a grid or bitmap screen? 
1. **hover**: Does the primary input mechanism allow the user to hover over elements? Added in Media Queries Level 4. 
1. **inverted-colors**: Is the user agent or underlying OS inverting colors? Added in Media Queries Level 5. 
1. **monochrome**: Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome. 
1. **overflow-block**: How does the output device handle content that overflows the viewport along the block axis? Added in Media Queries Level 4.
1. **overflow-inline**: Can content that overflows the viewport along the inline axis be scrolled? Added in Media Queries Level 4. 
1. **pointer**: Is the primary input mechanism a pointing device, and if so, how accurate is it? Added in Media Queries Level 4. 
1. **prefers-contrast**: Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors. Added in Media Queries Level 5.
1. **prefers-reduced-motion**: The user prefers less motion on the page. Added in Media Queries Level 5.
1. **update**: How frequently the output device can modify the appearance of content. Added in Media Queries Level 4.
1. **video-dynamic-range**: Combination of brightness, contrast ratio, and color depth that are supported by the video plane of user agent and the output device. Added in Media Queries Level 5.
1. **device-aspect-ratio (Deprecated)**:
1. **device-height (Deprecated)**:
1. **device-width (Deprecated)**:

If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is not zero (or none, in Level 4). For example, this CSS will apply to any device with a color screen:
```css
@media (color) {
  /* … */
}
```

```css
/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

### Width and height

The feature we tend to detect most often in order to create responsive designs (and that has widespread browser support) is viewport width, and we can apply CSS if the viewport is above or below a certain width — or an exact width — using the min-width, max-width, and width media features.

- width
- min-width
- max-width 

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

### Orientación 

One well-supported media feature is orientation, which allows us to test for **portrait or landscape** mode. To change the body text color if the device is in landscape orientation, use the following media query.

@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}


### Use of pointing devices

As part of the Level 4 specification, the hover media feature was introduced. This feature means you can test if the user has the ability to hover over an element, which essentially means they are using some kind of pointing device; touchscreen and keyboard navigation does not hover.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

Also in Level 4 is the pointer media feature. This takes three possible values, none, fine and coarse. A **fine** pointer is something like a mouse or trackpad. It enables the user to precisely target a small area. A **coarse** pointer is your finger on a touchscreen. The value **none** means the user has no pointing device; perhaps they are navigating with the keyboard only or with voice commands.

```css
@media (pointer: coarse) {
  /* Estilos para dispositivos con pantallas táctiles */
  /* Por ejemplo: */
  body {
    background-color: red;
  }
}

@media (pointer: fine) {
  /* Estilos para dispositivos sin pantallas táctiles */
  /* Por ejemplo: */
  body {
    background-color: blue;
  }
}
```

Using pointer can help you to design better interfaces that respond to the type of interaction a user is having with a screen. For example, you could create larger hit areas if you know that the user is interacting with the device as a touchscreen.

### More complex media queries

With all of the different possible media queries, you may want to combine them, or create lists of queries — any of which could be matched.

#### "and" logic in media queries
To combine media features you can use and in much the same way as we have used and above to combine a media type and feature. For example, we might want to test for a min-width and orientation. The body text will only be blue if the viewport is at least 600 pixels wide and the device is in landscape mode.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

#### "or" logic in media queries

If you have a set of queries, any of which could match, then you can comma separate these queries. In the below example the text will be blue if the viewport is at least 600 pixels wide OR the device is in landscape orientation. If either of these things are true the query matches.

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

#### "not" logic in media queries

You can negate an entire media query by using the not operator. This reverses the meaning of the entire media query. Therefore in this next example the text will only be blue if the orientation is portrait.

```css
@media not all and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

### Do you really need a media query?

Flexbox, Grid, and multi-column layout all give you ways to create flexible and even responsive components without the need for a media query.