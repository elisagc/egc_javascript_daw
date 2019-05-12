var boton=document.getElementById("enviar");
var audio=document.getElementById("audio");

audio.style.visibility="hidden";
boton.addEventListener("click",mensaje); 

function mensaje(){
    window.confirm("Gracias por contactar con nosotros ¡Disfruta la canción!");
    audio.style.visibility="visible";
   
}
