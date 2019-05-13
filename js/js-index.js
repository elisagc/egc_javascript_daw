
//BARAJAR LAS CARTAS DE LA PÁGINA PRINCIPAL

document.getElementById('boton2').addEventListener("click",barajar);


var imagenes=document.getElementsByClassName("card-img");


function barajar () {

	ocultarMostrar();

	for (let i=0; i<imagenes.length; i++){
		var aleatorio=Math.floor((Math.random() * 53) + 10);
		imagenes[i].src="img/cartas/carta_"+aleatorio+".png";
	
	}			
}

function ocultarMostrar(){
	document.getElementById('caja-principal').style="display:flex";
	document.getElementById('caja-iconos').style="display:none;";
	document.getElementById('mensaje-bienvenida').style="display:none;";
	
	}

/*MODAL*/

var modal = document.getElementById('miModal');
var btn = document.getElementsByClassName("card-img");
var span = document.getElementsByClassName("close")[0];

// AL HACER CLICK EN LA CARTA SE ABRE EL MODAL
btn.onclick = function() {
  modal.style.display = "block";
}

// AL HACER CLICK EN LA X SE CIERRA EL MODAL
span.onclick = function() {
  modal.style.display = "none";
}

// CUANDO SE PINCHA FUERA DEL MODAL SE CIERRA
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//FUNCIÓN PARA QUE SALGA LA INFO EN EL MODAL

var json=JSON.parse(jsonString);

//FUNCIÓN QUE BUSCA EL ID DENTRO DEL SRC DE LA CARTA

function buscarID(element){
	var enlace=element.src;
	var idjuego = enlace.substring(enlace.length-6,enlace.length-4);
	console.log(idjuego);
	console.log(idjuego);

	buscarIDenJSON(idjuego);
}

//VARIABLES PARA PINTAR UNA IMAGEN EN EL DIV

var cont=0;
var div=document.getElementById("foto-modal");
var img=document.createElement("img");

// FUNCION QUE RECOGE EL ID Y PINTA LA INFORMACIÓN EN EL MODAL
//AÑADE LA IMAGEN DENTRO DEL MODAL, EXISTE CONT PARA ELIMINAR LA IMAGEN ANTERIOR

function buscarIDenJSON(element){

document.getElementById("miModal").style="display:flex;justify-content:center;align-items:center;";

if(cont!=0){
	div.removeChild(img);
}

img.src=json.juegos.juego[element-10].portada;
div.appendChild(img);
img.style.width="250px";
img.style.height="250px";
cont++;

//AÑADE LA INFORMACIÓN DENTRO DEL MODAL

var parrafo=document.getElementsByClassName("info");

parrafo[0].innerHTML=json.juegos.juego[element-10].nombre;
parrafo[1].innerHTML="Año: " +json.juegos.juego[element-10].anyo;
var min=json.juegos.juego[element-10].minjugadores;
var max=json.juegos.juego[element-10].maxjugadores;

if (min==max){
	parrafo[2].innerHTML="Para: " + max + " jugadores";
}else{
	parrafo[2].innerHTML="De "+min + " a " + max + " jugadores";
}
parrafo[3].innerHTML="Duración de la partida: " +json.juegos.juego[element-10].duracion + " minutos";
parrafo[4].innerHTML="Edad: " + json.juegos.juego[element-10].edad + " años o más";

}
