Proyecto final realizado para el módulo de Lenguaje de Marcas con HTML, CSS y JavaScript.

Enlace: https://elisagc.github.io/proyecto_marcas_1DAW/

A continuación, se resumen los elementos introducidos en cada página:

1. Elige tu carta: 

- Animación "transition" de CSS en los 7 iconos de la portada.
- Animación "spinAround" con "transform" de CSS en el botón inferior que hace que las flechas giren constantemente.
- Al pulsar el botón se ejecuta la función "barajar" de JavaScript que hace aparecer 4 de las 51 cartas posibles aleatoriamente. Esta función bebe sus datos de un archivo JSON que incluye todos los datos de cada juego.
- Al pasar el ratón por cada una de las cartas se ejecuta una función "scale" de CSS que aumenta el tamaño de las cartas. 
- Al hacer click en una de las cartas se ejecuta la función de JavaScript que hace aparecer una ventana modal (lightbox) con los datos del juego cuya carta hemos seleccionado. 
- En la ventana modal se muestra una imagen del juego sacada del archivo JSON y que llama a una foto hospedada en otro servidor (boardgamegeek.com).
- Todos los datos de cada juego que aparecen en la ventana modal están sacados del mismo JSON. 
- Dentro del modal, si hacemos click en la "x" de cerrar, se ejecuta una función de JavaScript que cierra el modal y nos devuelve al listado de cartas. 
- Podemos darle al botón de barajar todas las veces que necesitemos para seguir viendo más cartas. 

2. Los más jugados:

- En esta página aparecen 12 juegos.
- La información contenida bebe de un archivo XML transformado mediante XSL.
- Si este archivo XML es modificado (por ejemplo: si fuese sacado de una API de un servicio web), los cambios se mostrarían automáticamente en esta página.

3. Tutoriales:

- Se muestra una imagen estática a la espera de que el usuario haga click en el nombre de uno de los juegos.
- Una vez pulsado uno de ellos se activa la función "ocultarImg" de JavaScript.
- Esa función, oculta la imagen estática y muestra el iframe de YouTube que enseña el vídeo de ese juego. 
- Si pulsamos en otro juego el iframe cambia para mostrar otro vídeo. 

4. Dónde comprar:

- Se muestran 4 cajas con información sobre 4 tiendas de juegos.
- La información contenida en cada caja está sacada de un JSON. 
- También se muestra un mapa de Google Maps realizado de forma personalizada, creando nosotros mismos las ubicaciones mostradas.
- Las 6 tiendas mostradas en el mapa pueden ser seleccionadas, mostrando la información de cada una de ellas en el mismo mapa. 
- Podemos navegar por el mapa como si estuviéramos directamente dentro de Google Maps, haciendo zoom, yendo a otros países, etc.

5. Contacto:

- Se muestra un formulario que incluye los siguientes elementos HTML: 
- Tres input.
- Un radio selector con 4 opciones.
- Un checkbox selector con 4 opciones. 
- Un text area. 
- Un botón de enviar.
- Al hacer click en el botón de enviar, se activa la función "mensaje" de JavaScript que visualiza un mensaje "confirm" indicando al usuario que el mensaje se ha enviado correctamente.
- También se activa una etiqueta audio que estaba oculta, permitiendo al usuario escuchar una canción.

Nota:

Se ha intentado que toda la página web sea visible correctamente tanto en dispositivos de sobremesa como en dispositivos móviles.
Excepto el menú de navegación, el resto de la web es completamente responsive (se redimensiona según el dispositivo en el que la estemos visualizando).
