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

# Pasos para correr la app

### Clonar/descargar el repositorio

### Correr el comando `npm install` para instalar las dependencias necesarias

### Correr el comando `npm start` para arrancar la aplicación
