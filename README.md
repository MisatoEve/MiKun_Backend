# MiKun Store - **e-commerce** Backend Project
_____

Link test to live version _[MiKun Store](https://mikunbackend-production.up.railway.app/home)_
>MiKun Store es una aplicación web de e-commerce, la cual tiene la funcionalidad para navegar y agregar productos al carrito. 

## UX 
----------
El propósito del proyecto es crear una aplicación de e-commerce para el curso de Backend en CoderHouse. El diseño es simple y claro. El proyecto es accesible a través de dispositivos móviles y de escritorio. Para construir la funcionalidad de front-end y para back-end su desarrollo en Javascript.
____
_AÑO: 2023 NOVIEMBRE - MAYO_
_Proyecto Final de Programación Backend - Coder House_
_COMISIÓN #32205 ~ **Profesor:** Arturo Verbel de León_
_TUTOR: Agustín García_

## User
___________

- Los usuarios pueden encontrar varios productos en la página de inicio: después de hacer click en el producto seleccionado, el usuario es redirigido a la página con todos los detalles sobre el artículo elegido.
- Los usuarios pueden agregar productos al carrito y seleccionar la cantidad si es necesario (1 es el valor predeterminado).
- Los usuarios pueden actualizar y eliminar artículos en la página del carrito.
- Los usuarios pueden agregar productos a la lista de deseos, luego pueden agregarlos directamente al carrito o eliminarlos. Y de continuar se generará su orden.

## Layout 
_______
El diseño es simple y receptivo, esto fue logrado implementando la mayor parte con estilos personalizados.

## Project consist following pages:
______
### Products(homepage)
Página donde se muestran todos los productos en forma de cart con imagen, breve información sobre especificaciones y precio de cada producto. El usuario también puede acceder a ver más detalles

### Product Details
La página incluye todos los detalles sobre el producto seleccionado: imagen, descripción, precio y botón para agregar al carrito con un campo de contador que permite seleccionar la cantidad del producto.

### Cart page / empty cart
La página permite revisar lo que hay en el carrito: se muestra el nombre del o los productos seleccionados, cantidad y valor del producto, junto al subtotal del pedido. 
El usuario puede eliminar el artículo por completo. La página incluye el precio total de todos los productos colocados en el carrito. Hay dos botones que permiten al usuario limpiar el carrito de compras o ir a realizar la orden. Cuando eliminamos todos los artículos, el ícono del carrito se muestra con información breve de que el carrito está vacío.

## Features
_________
Se puede acceder a la aplicación sin registro de usuario. Es decir que cualquier persona puede realizar la acción de ver todos los detalles sobre el producto seleccionado, al agregar productos al carrito para generar la orden deberá estar logueado/registrado de forma obligatoria. 

Características que quedan por implementar

> Barra de búsqueda: permite al usuario buscar productos por palabra clave.
Imagen en miniatura en el carrito de compra 
Que agregue alguna imagen de la galería en la página de detalles del producto.
Crear página de contacto.
Reseñas de los clientes.
Implementación actual de las pasarelas de pago

## Technologies used
______
**GitHub** - provee el hosting para el desarrollo de software y permite el control utilizando Git.

**Git** - Sistema de control de versiones con el seguimiento de cambios en el código de fuente durante el desarrollo de aplicación y software.

**JavaScript** - Lenguaje de programación.

**CSS** - se utiliza para definir estilos para páginas web, incluido el diseño, y las variaciones en la visualización para diferentes dispositivos y tamaños de pantalla.

**MongoDB**  - Sistema de base de datos NoSQL, orientado a documentos y código abierto.

**Express** - Entorno de trabajo para aplicaciones web para Node.js, para desarrollo de app web y APIs.

**NodeJS** - Entorno de ejecución para Javascript multiplataforma.

**Crud op** - Create(Crear), Read(Leer), Update(Actualizar) y Delete(Borrar), las cuatro operaciones básicas de una DB.

**API Rest** Interfaz de arquitectura de desarrollo, transferencia de estado representacional.

**Testing** Pruebas del software desarrollado.

**Custom Errors** Errores personalizados y 'controlados' para todas las operaciones posibles.

**Docker** Proyecto de código abierto que permite desplegar una aplicación dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatizacón de *virtualización* de aplicaciones *en múltiples sistemas operativos*.

**Kibernetes - Minikube** 

## Framework Dependencies: 
**Bootstrap** / **Dotenv** / **Passport** / **JsonWebToken** / **Handlebars** / **SweetAlert** /
**AUTH: Passport Local ^ GitHub  ^ Google ^ JWT** / **Mongoose Paginate** / **Express Sessions** /
**CookieParser** / **Bcryptjs** / **Winston** / **Nodemailer** / **Multer** / **@faker-js/faker** /
**Swagger Documentation** / **Testing: Chai ^ Mocha ^ Supertest**
______

## Installation
_______________
MikunShop requiere [Node.js](https://nodejs.org/) v10+ para ejecutarse.
Instale las dependencias y devDependencias e inicie el servidor.

https://github.com/MisatoEve/MiKun_Backend.git

```sh 
// ▼  clonar el repositorio 
$ git clone https://github.com/MisatoEve/MiKun_Backend.git
// ▼  accede a la ubicación local
$ cd andradapf_backend / ► carpeta correspondiente
// ▼ instalar dependencias -ver file notes.txt-
$ npm installinit -y
// ▼  inicie el servidor local
$ nodemon src/server.js
```
► **Nota**: 
Si utilizas **Linux Bash** para windows, sigue esta [guía](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) o node desde command prompt.

<<proyecto desplegado en Railway>>
_https://mikunbackend-production.up.railway.app/home/_
- ✨by MisatoEve✨