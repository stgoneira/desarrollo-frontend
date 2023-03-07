# GIT 

## Introducción a GIT 
Git es un sistema de control de versiones distribuido y gratuito que permite a los desarrolladores colaborar en proyectos de software de manera eficiente. A continuación se presentan los conceptos fundamentales de Git:

**Repositorio**: un repositorio de Git es un lugar donde se almacena el código fuente y la información relacionada con un proyecto de software. Los repositorios pueden ser locales o remotos.

**Commits**: un commit es un conjunto de cambios realizados en los archivos de un repositorio en un momento dado. Cada commit tiene un mensaje descriptivo que indica el propósito de los cambios.

**Ramas**: una rama es una línea de desarrollo independiente que permite a los desarrolladores trabajar en diferentes funciones o características del proyecto sin afectar el trabajo de otros desarrolladores. Las ramas se fusionan para integrar los cambios de diferentes ramas.

**Merge**: fusionar es el proceso de combinar los cambios de dos o más ramas de Git en una sola rama. Esto permite a los desarrolladores integrar sus cambios y colaborar en un proyecto.

**Pull request**: una solicitud de extracción es una función de Git que permite a los desarrolladores compartir sus cambios con otros miembros del equipo y recibir comentarios antes de fusionar los cambios en la rama principal del proyecto.

**Branching**: el proceso de crear y administrar ramas en Git se conoce como branching. Git permite a los desarrolladores crear nuevas ramas en cualquier momento y fusionarlas cuando sea necesario.

**Conflictos**: un conflicto ocurre cuando dos o más ramas de Git modifican el mismo archivo en diferentes formas. Git proporciona herramientas para resolver conflictos y fusionar los cambios de diferentes ramas.

En resumen, Git es un sistema de control de versiones distribuido y gratuito que permite a los desarrolladores colaborar en proyectos de software de manera efectiva. Los conceptos fundamentales de Git incluyen el repositorio, los commits, las ramas, las fusiones, las solicitudes de extracción, el branching y la resolución de conflictos. Con Git, los desarrolladores pueden trabajar juntos en un proyecto de software de manera colaborativa, controlar los cambios y mantener una versión histórica del código fuente.

## Pull Request 

Un pull request (PR) es una solicitud que un colaborador hace al propietario de un repositorio de código para que este último revise y acepte sus cambios en el código fuente.

Para entender cómo funciona un pull request, es necesario comprender primero la estructura básica del flujo de trabajo en un repositorio colaborativo, como GitHub:

Un colaborador hace una copia del repositorio principal (conocido como "forking").
El colaborador hace los cambios que desea realizar en su copia del repositorio (conocido como "branching").
El colaborador realiza una solicitud de pull request para enviar sus cambios al repositorio principal.
El propietario del repositorio principal revisa los cambios propuestos y decide si los acepta o los rechaza.
En términos prácticos, un pull request es un mensaje que el colaborador envía al propietario del repositorio principal que incluye información sobre los cambios que ha realizado. Este mensaje incluye detalles como:

- La rama que el colaborador ha creado y desde la cual se están proponiendo los cambios.
- La rama de destino en el repositorio principal a la cual se quieren fusionar los cambios.
- Una descripción detallada de los cambios realizados, así como los motivos detrás de ellos.
- Una lista de los problemas que se han resuelto con estos cambios.

Después de enviar la solicitud de pull request, el propietario del repositorio principal puede revisar los cambios propuestos en la rama del colaborador y decidir si desea aceptarlos o rechazarlos. Si se aceptan, los cambios se fusionan en la rama de destino del repositorio principal. Si se rechazan, el colaborador debe realizar las correcciones necesarias y volver a enviar una nueva solicitud de pull request.

En resumen, un pull request es una herramienta esencial en el flujo de trabajo colaborativo para mantener el control de cambios en el código fuente y asegurar la calidad y estabilidad del repositorio.


## Configuración Inicial en Windows 

1. Configurar nombre de usuario y correo electrónico:
Abre Git Bash (o la terminal de Git) y escribe:

```
git config --global user.name "Tu nombre aquí"
git config --global user.email "tu-correo-electronico@ejemplo.com".
```
Esto establece tu nombre de usuario y dirección de correo electrónico que se utilizarán en los commits de Git.

2. Configurar editor de texto:
Si no has configurado previamente tu editor de texto predeterminado, puedes hacerlo con el comando: 

```
git config --global core.editor "nombre-de-tu-editor". 
```

Ejemplo con Sublime:
```
git config --global core.editor "'C:/Program Files/Sublime Text 3/sublime_text.exe' -w"
```

Ejemplo con Notepad++:
```
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
```

Ejemplo con VSCode:
```
git config --global core.editor "code --wait"
```

3. Verificar la configuración:
Para ver la configuración actual de Git, puedes ejecutar el comando de más abajo, esto mostrará una lista de todas las configuraciones de Git establecidas en tu sistema.

```
git config --list
```


## Usar varias credenciales

Para guardar dos cuentas de GitHub diferentes en el Windows Credential Manager con Git Credential Manager Core (GCM Core), puedes seguir estos pasos:

Asegúrate de tener instalado GCM Core. Si no lo tienes instalado, puedes descargarlo desde el sitio web de GCM Core.

Abre una terminal (como el Símbolo del sistema en Windows) y ejecuta el siguiente comando:

```
git config --global credential.useHttpPath true
```

Este comando configura Git para que use la URL completa del repositorio en lugar del host de alojamiento como clave para almacenar las credenciales.

Entonces se abrirá el browser predeterminado y usará la cuenta conectada de Github para la autenticación. Si estás conectado desde distintas cuentas en distintos browsers, puedes ir cambiando el browser predeterminado usando la aplicación ***"Default Apps"*** en Windows.

# Github 

## Issues 

GitHub Issues es una herramienta de seguimiento de problemas que permite a los desarrolladores y colaboradores realizar un seguimiento de los problemas que surgen en un proyecto.

Los issues de GitHub son similares a los tickets de soporte de una empresa, y permiten a los usuarios informar sobre errores, solicitar nuevas funciones, hacer preguntas y discutir problemas relacionados con el proyecto. A continuación, se describen los pasos básicos para utilizar GitHub Issues:

Crear un nuevo issue: El primer paso para utilizar GitHub Issues es crear un nuevo issue. Para ello, simplemente haga clic en el botón "Issues" en la parte superior del repositorio, y luego haga clic en el botón "New Issue". A continuación, se puede proporcionar un título para el issue y una descripción detallada del problema.

Asignar el issue a un colaborador: Una vez creado el issue, puede asignarse a un colaborador específico para su seguimiento y resolución. Para asignar un issue a un colaborador, basta con seleccionar el nombre del colaborador en el menú desplegable "Assignees".

Establecer etiquetas para el issue: Las etiquetas son útiles para organizar los issues y hacer que sean más fáciles de encontrar. Las etiquetas pueden utilizarse para identificar el tipo de problema (bug, mejora, pregunta, etc.) o para indicar la prioridad del problema.

Comentar en el issue: Una vez creado un issue, los usuarios pueden comentar en él para proporcionar información adicional o para discutir posibles soluciones. Los comentarios pueden utilizarse para intercambiar ideas y colaborar con otros miembros del equipo.

Cerrar el issue: Una vez que se ha resuelto un issue, puede cerrarse. Para cerrar un issue, simplemente haga clic en el botón "Close Issue". Si el problema vuelve a surgir más tarde, el issue puede reabrirse.

En resumen, GitHub Issues es una herramienta de seguimiento de problemas muy útil para proyectos de software. Permite a los desarrolladores y colaboradores comunicarse y colaborar en la resolución de problemas, lo que puede mejorar significativamente la calidad del software.

## Github Projects 

GitHub Projects es una herramienta de gestión de proyectos que permite a los desarrolladores y colaboradores organizar, priorizar y hacer un seguimiento del trabajo en un proyecto de software. A continuación, se describen los pasos básicos para utilizar GitHub Projects:

Crear un nuevo proyecto: El primer paso para utilizar GitHub Projects es crear un nuevo proyecto. Para ello, simplemente haga clic en la pestaña "Projects" en la parte superior del repositorio, y luego haga clic en el botón "New project". A continuación, se puede proporcionar un título para el proyecto y una descripción detallada del mismo.

Agregar columnas al proyecto: Una vez creado el proyecto, se pueden agregar columnas para representar los diferentes estados del trabajo en el proyecto. Por ejemplo, se pueden agregar columnas como "To do", "In progress" y "Done". Para agregar una columna, simplemente haga clic en el botón "Add column" y proporcione un nombre para la columna.

Agregar tarjetas al proyecto: Una vez que se han creado las columnas, se pueden agregar tarjetas para representar las tareas individuales que deben realizarse en el proyecto. Por ejemplo, se puede agregar una tarjeta para una tarea como "Corregir un error en el código". Para agregar una tarjeta, simplemente haga clic en la columna correspondiente y haga clic en el botón "Add card". A continuación, se puede proporcionar un título para la tarjeta y una descripción detallada de la tarea.

Asignar tarjetas a colaboradores: Una vez que se han agregado las tarjetas al proyecto, se pueden asignar a los colaboradores específicos para su realización. Para asignar una tarjeta a un colaborador, simplemente arrastre y suelte la tarjeta en la columna "Assigned" y seleccione el nombre del colaborador.

Mover tarjetas entre columnas: A medida que se realiza el trabajo en el proyecto, las tarjetas pueden moverse entre las diferentes columnas para indicar su estado actual. Por ejemplo, una tarjeta que se encuentra en la columna "To do" puede moverse a la columna "In progress" cuando un colaborador comienza a trabajar en ella. Para mover una tarjeta, simplemente arrastre y suelte la tarjeta en la columna correspondiente.