# CSS 

## Fundamentos 
CSS es un lenguaje de estilo utilizado para diseñar y presentar páginas web. A continuación se resumen los fundamentos de CSS:

**Selección de elementos**: CSS permite seleccionar elementos específicos en una página web utilizando selectores. Los selectores pueden ser etiquetas HTML, clases, IDs u otros atributos.

**Propiedades de estilo**: Las propiedades de estilo definen cómo se ve un elemento en una página web. Estas propiedades incluyen el color, la fuente, el tamaño y la posición.

**Reglas de estilo**: Las reglas de estilo combinan un selector y un conjunto de propiedades para definir el estilo de un elemento en una página web.

**Estilos en cascada**: CSS utiliza una técnica llamada "estilos en cascada", que significa que las reglas de estilo se aplican en cascada, lo que significa que se aplican primero las reglas más específicas y luego las reglas menos específicas. También se pueden aplicar estilos heredados de elementos padres a elementos hijos.

**Hojas de estilo externas e internas**: Las hojas de estilo externas se vinculan a una página web utilizando la etiqueta link, mientras que las hojas de estilo internas se definen dentro del documento HTML utilizando la etiqueta style.

**Modelos de caja**: El modelo de caja de CSS define cómo se representa visualmente un elemento HTML. La caja incluye el contenido, el borde, el margen y el relleno.

**Diseño de diseño**: CSS ofrece varias técnicas de diseño, como flexbox y CSS grid, que permiten controlar la distribución y el diseño de los elementos en una página web.

En resumen, CSS permite definir el estilo y la presentación de una página web utilizando selectores, propiedades y reglas de estilo. Las hojas de estilo externas e internas se utilizan para aplicar estos estilos a una página web, mientras que las técnicas de diseño, como flexbox y CSS grid, permiten controlar la distribución y el diseño de los elementos en una página web.

## Selectores CSS 

Los selectores son una parte fundamental del lenguaje CSS, que te permiten seleccionar uno o varios elementos HTML para aplicarles estilos. Hay varios tipos de selectores, y cada uno tiene una sintaxis y uso específicos.

Aquí te explico algunos de los selectores más comunes:

1. **Selector de tipo**: este selector selecciona todos los elementos HTML que coincidan con un tipo específico. Por ejemplo, si queremos aplicar un estilo a todos los párrafos en una página, usaríamos el selector de tipo "p".

```css
p {
  color: red;
}
```

2. **Selector de clase**: este selector selecciona todos los elementos HTML que tengan un atributo "class" específico. Las clases son muy útiles para aplicar estilos a grupos de elementos que comparten características comunes.

```css
.my-class {
  color: red;
}

```

3. **Selector de ID**: este selector selecciona un elemento HTML específico que tenga un atributo "id" único. Es importante recordar que cada "id" debe ser único en toda la página.

```css
#my-id {
  color: red;
}

```

4. **Selector de descendencia**: este selector selecciona todos los elementos que son descendientes de un elemento HTML específico. Se usa un espacio para separar el elemento padre del hijo.

```css
div p {
  color: red;
}
```

5. Selector de hijo directo: este selector selecciona todos los elementos que son hijos directos de un elemento HTML específico. Se usa el signo ">" para separar el elemento padre del hijo directo.

```css
div > p {
  color: red;
}
```

6. **Pseudo-clases**: las pseudo-clases seleccionan elementos en función de su estado o relación con otros elementos. Se usan con un colon ":" después del selector. Algunas de las pseudo-clases más comunes son:

- :hover: selecciona un elemento cuando el cursor se sitúa sobre él.
- :active: selecciona un elemento cuando está siendo clicado.
- :visited: selecciona un enlace visitado.
- :nth-child(n): selecciona el elemento n-ésimo de un padre.
- :first-child: selecciona el primer hijo de un padre.
- :last-child: selecciona el último hijo de un padre.
- :not(selector): selecciona los elementos que no coinciden con el selector especificado.

```css
a:hover {
  text-decoration: underline;
}

li:first-child {
  font-weight: bold;
}
```


7. **Pseudo-elementos**: los pseudo-elementos seleccionan partes específicas de un elemento, como su primer letra o su contenido después del elemento. Se usan con dos puntos "::" después del selector. Algunos de los pseudo-elementos más comunes son:

- ::before: inserta contenido antes del contenido del elemento seleccionado.
- ::after: inserta contenido después del contenido del elemento seleccionado.
- ::first-letter: selecciona la primera letra de un elemento.
- ::first-line: selecciona la primera línea de texto de un elemento.
- ::selection: selecciona el texto seleccionado por el usuario.

```css
p::first-letter {
  font-size: 2em;
}

h1::before {
  content: "Título: ";
}
```

Es importante tener en cuenta que algunos navegadores pueden no admitir todas las pseudo-clases y pseudo-elementos, por lo que es recomendable verificar su compatibilidad antes de usarlos en un proyecto.


## Layouts usando CSS 

### CSS Flexbox 

CSS Flexbox es una técnica de diseño de CSS que permite crear diseños flexibles y adaptables a diferentes tamaños de pantalla y dispositivos. A continuación se resumen los fundamentos de CSS Flexbox:

**Flex container**: La técnica Flexbox se basa en un contenedor (flex container) que contiene elementos flexibles (flex items).

**Eje principal y eje transversal**: En un contenedor de Flexbox, se define un eje principal y un eje transversal. El eje principal es la dirección en la que se alinean los elementos flexibles, mientras que el eje transversal es perpendicular al eje principal.

**Propiedades del contenedor**: El contenedor Flexbox se puede personalizar mediante propiedades como display, flex-direction, justify-content y align-items. Estas propiedades permiten controlar la dirección, el alineamiento y la distribución de los elementos flexibles dentro del contenedor.

**Propiedades de los elementos flexibles**: Los elementos flexibles (flex items) también se pueden personalizar mediante propiedades como flex-grow, flex-shrink y flex-basis. Estas propiedades permiten controlar el tamaño y el comportamiento de los elementos flexibles dentro del contenedor.

**Diseño responsive**: Flexbox es una técnica de diseño responsive que permite crear diseños que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos.

**Anidamiento de contenedores**: Los contenedores Flexbox se pueden anidar para crear diseños más complejos y personalizados.

En resumen, CSS Flexbox es una técnica de diseño de CSS que se basa en un contenedor de elementos flexibles. La dirección, el alineamiento y la distribución de los elementos flexibles se controlan mediante propiedades del contenedor, mientras que el tamaño y el comportamiento de los elementos flexibles se controlan mediante propiedades de los elementos. Flexbox es una técnica de diseño responsive que permite crear diseños adaptables a diferentes tamaños de pantalla y dispositivos, y se puede utilizar junto con otras técnicas de diseño de CSS, como CSS grid. 

### CSS Grid 

CSS Grid es una técnica de diseño de CSS que permite crear diseños de página complejos y adaptables a diferentes tamaños de pantalla y dispositivos. A continuación se resumen los fundamentos de CSS Grid:

**Grid container**: La técnica CSS Grid se basa en un contenedor (grid container) que contiene elementos flexibles (grid items).

**Filas y columnas**: En un contenedor de CSS Grid, se define una cuadrícula de filas y columnas. Las filas se definen mediante la propiedad grid-template-rows y las columnas se definen mediante la propiedad grid-template-columns.

**Espacio entre filas y columnas**: CSS Grid permite definir el espacio entre las filas y las columnas mediante la propiedad grid-gap.

**Posicionamiento de elementos**: Los elementos de la cuadrícula se pueden posicionar en las celdas de la cuadrícula mediante las propiedades grid-row y grid-column.

**Diseño responsive**: CSS Grid es una técnica de diseño responsive que permite crear diseños que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos.

**Anidamiento de cuadrículas**: Las cuadrículas de CSS Grid se pueden anidar para crear diseños más complejos y personalizados.

**Diseño de áreas**: CSS Grid permite definir áreas en la cuadrícula mediante la propiedad grid-template-areas, lo que facilita la creación de diseños complejos con múltiples elementos.

En resumen, CSS Grid es una técnica de diseño de CSS que se basa en un contenedor de elementos flexibles organizados en una cuadrícula de filas y columnas. Las propiedades de la cuadrícula permiten controlar el espacio entre filas y columnas, el posicionamiento de los elementos y la definición de áreas en la cuadrícula. CSS Grid es una técnica de diseño responsive que permite crear diseños adaptables a diferentes tamaños de pantalla y dispositivos, y se puede utilizar junto con otras técnicas de diseño de CSS, como Flexbox.