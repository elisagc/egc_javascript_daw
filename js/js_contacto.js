var boton=document.getElementById("enviar");
boton.addEventListener("click",mensaje); 

function mensaje(){
    window.confirm("Gracias por contactar con nosotros ¡Disfruta la canción!");
    musica();
}

function musica(){
    var audio = new Audio('../img/musica3.mp3');
	audio.play();
}

