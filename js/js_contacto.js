var boton=document.getElementById("enviar");
var audio=document.getElementById("audio");

audio.style.visibility="hidden";
boton.addEventListener("click",mensaje); 

function mensaje(){
    window.confirm("El formulario ha sido enviado, ¡GRACIAS! Te regalamos una canción, ¡Disfrútala!");
    audio.style.visibility="visible";
   
}
