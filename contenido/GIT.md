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
Abre Git Bash (o la terminal de Git) y escribe git config --global user.name "Tu nombre aquí" seguido de git config --global user.email "tu-correo-electronico@ejemplo.com".
Esto establece tu nombre de usuario y dirección de correo electrónico que se utilizarán en los commits de Git.

2. Configurar editor de texto:
Si no has configurado previamente tu editor de texto predeterminado, puedes hacerlo con el comando: 

```
git config --global core.editor "nombre-de-tu-editor". 
```

Ejemplo con Sublime:
```
git config --global core.editor "'C:/Program Files/Sublime Text 3/sublime_text.exe' -w
```

Ejemplo con Notepad++:
```
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin
```

Ejemplo con VSCode:
```
git config --global core.editor "code --wait
```


3. Configurar credenciales:
Si planeas conectarte a un repositorio remoto, debes configurar tus credenciales de Git para que puedas autenticarte. Ejecuta el comando para guardar tus credenciales de forma segura en el administrador de credenciales de Windows.

```
git config --global credential.helper wincred
```

4. Verificar la configuración:
Para ver la configuración actual de Git, puedes ejecutar el comando de más abajo, esto mostrará una lista de todas las configuraciones de Git establecidas en tu sistema.

```
git config --list
```


## Gestión de Credenciales en Windows

Para manejar las credenciales de Git en Windows, hay varios métodos que puedes utilizar. Aquí te presento dos de las formas más comunes: el administrador de credenciales de Windows y 

### Administrador de Credenciales de Windows
Usar el "Administrador de Credenciales de Windows"
Windows tiene una herramienta llamada "Administrador de Credenciales" que te permite almacenar tus credenciales de Git de manera segura. Para hacer esto, sigue los siguientes pasos:

Abre el "Administrador de Credenciales" buscándolo en el menú Inicio o en la barra de búsqueda.
Haz clic en "Agregar una credencial".
Ingresa el nombre del servidor Git (por ejemplo, github.com) y tu nombre de usuario y contraseña de Git.
Haz clic en "Aceptar" para guardar tus credenciales.
A partir de ahora, Git usará estas credenciales cada vez que te conectes al servidor Git.

### Git Credential Manager para Windows
Usar Git Credential Manager para Windows
Otra opción es usar el Git Credential Manager para Windows, que es un programa que te permite almacenar tus credenciales de Git de manera segura. Para hacer esto, sigue los siguientes pasos:

Descarga e instala Git Credential Manager para Windows desde https://github.com/microsoft/Git-Credential-Manager-for-Windows/releases.

Abre una ventana de línea de comandos de Git y ejecuta el siguiente comando:

```
git config --global credential.helper manager
```

La primera vez que Git te pida tus credenciales, el Git Credential Manager te pedirá permiso para almacenarlas. Haz clic en "Aceptar" para permitirlo.

A partir de ahora, Git usará Git Credential Manager para Windows para almacenar y recuperar tus credenciales cada vez que necesite conectarse al servidor Git.

Espero que esto te ayude a manejar tus credenciales de Git en Windows de manera efectiva.