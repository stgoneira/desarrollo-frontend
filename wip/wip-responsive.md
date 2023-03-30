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

