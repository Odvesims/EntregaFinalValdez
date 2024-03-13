# PreEntrega 1 - sweetStore

Esta primera entrega consiste en desarrollar una APP en React que contenga, como mínimo, los siguientes componentes:

### NavBar

### CartWidget

## Desarrollo

Para el desarrollo se implementó la librería de react-bootstrap para poder utilizar los componentes de NavBar y asociados. También se utilizó react-icons para los íconos.

Se realizó un componente adicional NavBarCategory que permita extraer la lógica de las categorías de la tienda en un componente independiente.

Se utilizó un objeto categories con la siguiente estructura:

{ id: integer, name: "string", path: "string" }

De esta manera se pueden agregar categorías de una manera más dinámica en lugar de que sean hard-coded sino que se puede hacer uso de la function .map() para renderizar los componentes NavBarCategory y pasando los valores necesarios usando props. De igual modo, esta forma es más escalable ya que al momento de implementar un servicio ya sea API o una DB el formato de array de objetos hace que la forma en que se cargan los datos sea más normalizada.



# PreEntrega 2 - sweetStore

En esta segunda entrega se implementó 'react-router-dom' para el manejo de las rutas. Se crearon los siguientes componentes:

### Footer
### ItemContainer

También se crearon las siguientes páginas:

### ItemDetail
### NotFound

Se añadieron las siguientes rutas en la app:

### "/" : Esta es la ruta raiz.
### "/item/:itemId" : Esta ruta recibe un parámetro 'itemId' y devuelve el producto que coincida con dicho id
### "/category/:categoryPath" : Esta ruta recibe un parámetor 'categoryPath' y devuelve la categoría que coincida
### "/:categoryPath/:itemId" : Esta ruta receibe dos parámetros. Primero el 'categoryPath' y luego el'itemId'. Busca el producto que coincida tanto con la categoría como con el id.
### "*" : Esta ruta es default y devuelve '404 NOT FOUND' para rutas no implementadas.

Todas las rutas devuelve 'NOT FOUND' cuando los parámetros no arrojen ningún resultado. 

Se añadieron dos botones para probar la funcionalidad del routing al detalle del producto usando solo el ID o usando tanto el ID como la Cateegoria.

La data se movió a dos archivos .js localizados en /src/utils. Estos consisten de 1 objeto con varias propiedades y funciones asyncrónicas que emulan el consumo de data desde un API. 

Se añadieron varios archivos .css en /src/assets/styles para añadir styling a los componentes.



## Se añadió una carpeta /extra/ en el directorio raiz para ubicar el .gif de la navegación requerida para la entrega.



# Pasos para correr la app

### Clonar/descargar el repositorio

### Correr el comando `npm install` para instalar las dependencias necesarias

### Correr el comando `npm start` para arrancar la aplicación
