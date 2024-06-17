# Web Components
Este es el repositorio de la tarea 5 del grupo 2 del curso IIC3585.

## 💡 Descripción de la aplicación
La aplicación implementa los web components de un Producto y una ToDo List. Cada uno de ellos está implementado de dos maneras. En primer lugar, se utiliza el método estándar de creación de web components, que incluye el manejo de template, custom elements y shadow dom; este se encuentra en la carpeta `/components`. También, se usaron Lit Components, de la librería lit, para esto se usaron Lit Elements, Lit HTML y Lit CSS; esto se encuentra ubicado en la carpeta `/litComponents`. Todo esto se implementa en el archivo `index.html`.

## 🚀 Correr App
Para correr la app hay estar conectado a internet para poder importar lit (no usamos npm para no depender de node). Por lo mismo, se debe correr el comando `python3 -m http.server 3000` en el directorio en el que esté el archivo `index.html` y luego abrir `localhost:3000`. De igual manera, se pueden usar otros métodos para servir la aplicación en localhost.

