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


# PreEntrega Final

### En la entrega final se agregaron los siguientes componentes:

#### AddItemButton : Agrega el artículo seleccionado con su respectiva cantidad al carrito de compra
#### CartItem : Muestra el artículo en el carro con su cantidad, precio y total. Condicionalmente muestra un botón para quitarlo del carrito.
#### CheckoutCartProduct : Muestra el artículo en la ventana del checkout
#### ConfirmationModal: Un modal que permite validar con el usuario antes de realizar alguna acción que puede considerarse crítica
#### Description : Muestra los detalles del artículo (nombre, descripcion, imagen, precio, stock)
#### ErrorToast : Un Toast que despliega mensajes de error
#### ItemQuantitySelector : Selecciona la cantidad del artículo para añadirlo al carrito
#### LoadingModal : Un loader que se muestra cuando hay ejecuciones async 
#### OrderDetail : Detalles de la orden registrada
#### ReloadDataWidget : Un ícono que permite recargar la data desde al API
#### RemoveItemButton : Botón para eliminar un artículo del carrito.

### Se agregaron las siguientes pages:

#### Brief: Muestra los detalles de orden
#### Cart : Muestra los detalles del carrito
#### Checkout : Muestra el formulario para hacer checkout y registrar una orden
#### PastOrders : Permite consultar órdenes ya registradas basado en el # de la orden.

### Se agregaron 3 contextos:

#### CartContext : Maneja el carrito. La cantidad de artículos, un arreglo con los artículos y el total de la orden.
#### ErrorToastContext : Maneja el despliegue de errores en un modal.
#### LoadingContext : Maneja el despliegue de uno loader para bloquear el UI cuando se realizan funciones async.

La creación de estos contextos se hizo para garantizar que todos los componentes del aplicativo puedan consumir los estados/funciones aquí definidos sin la necesidad de hacer uso de prop-drilling para compartir data entre componentes. 

## FireStore

Se integró firestore como base de datos. Se crearon 3 colecciones :

#### categories: Las diferentes categorías de artículos
#### products: Los artículos como tal
#### orders: Las órdenes que se registren desde la app

Se creó un archivo 'api' en la carpeta utils, en el cual se manejan todas las funciones que se comunican con el API. Se creó una interfaz única para acceder a estas funciones desde los componentes:

apiRequest(request, ...params) : Esta recibe el nombre del request que se requiere hacer y asume que los argumentos restantes que se le pasen a la función sean considerados como los parámetros de la misma. Esta función simplifica el proceso de manejo de respuestas/errores ya que provee un mismo formato de respuesta para ambos casos { valid: true/false, message: '', data: function_result }.

## Local Storage

Para que los valores del carrito sean persistentes, se almacenan en el local storage de manera que aunque el usuario salga del APP, puede continuar su proceso de compra con los artículos ya previamente agregados.

Para evitar consumir la cuota límite del firestore, los valores de categories/products se cargan una primera vez y son almacenados en el local storage para su consumo futuro. Las llamadas del API primero validan si estos valores ya se encuentran en el local storage antes de pedirlos al api remoto. Se integró un widget para forzar a la recarga remota de los valores de estas colleciones (previa confirmación del usuario). 


# Pasos para correr la app

### Clonar/descargar el repositorio

### Correr el comando `npm install` para instalar las dependencias necesarias

### Correr el comando `npm start` para arrancar la aplicación
