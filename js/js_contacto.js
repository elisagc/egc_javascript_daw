var boton=document.getElementById("enviar");
boton.addEventListener("click",mensaje); 

function mensaje(){
    window.confirm("El formulario ha sido enviado, ¡GRACIAS!");
}