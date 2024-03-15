# sweetStore

sweetStore es una tienda online de artículos variados.

Está desarrollada utilizando reactJs con integración de librearías como:

* react-bootstrap
* fa-icon
* firebase/firestore

Para el desarrollo de la aplicación se emplearon los diversos conceptos que conocimos en la clase. Para el manejo de un 'global state' usé Context. Esto me ayudó a poder manejar el carrito de compras, el loader y también un toast para mostrar los mensajes de errores de una manera centralizada y reutilizable por toda la app.

Para la conexión con la db de firestore, opté por centralizar las operaciones en un archivo api.jsx y allí definí una interfaz (apiRequest) que recibe como parámetros la referencia textual al request que se quiere realizar, y luego el resto de argumentos que se pasen son usados como los parámetros para el request. Esto me permitió poder normalizar la respuesta del api haciendo que esta sea uniforme { valid: boolean, message: string, data: object }. De esta manera, pude reaccionar siempre de la misma manera a cualquier petición al API y reduje la posibilidad de introducir errores al tener respuestas variadas.

La app permite las siguientes funcionalidades:

* 1- Cargar categorías/productos de manera asíncrona desde firestore
* 2- Cargar productos al carrito de compra 
* 3- Eliminar productos del carrito de compra
* 4- Visualizar la cantidad de artículos en el carrito desde cualquier página via un widget en el navbar
* 5- Hacer checkout de la orden (visualizando los artículos y el total)
* 6- Guardar la orden en la db 
* 7- Extraer detalles de la orden usando el No.Orden

# Pasos para correr la app

### Clonar/descargar el repositorio

### Correr el comando `npm install` para instalar las dependencias necesarias

### Crear un .env y agregar la siguiente línea para conectarse a la DB de firestore : REACT_APP_API_KEY='AIzaSyAD8qMjxXeBnABLcGOkaN1vyuKBTLCFzbU'


### Correr el comando `npm start` para arrancar la aplicación
