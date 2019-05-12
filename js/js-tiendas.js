
var json=JSON.parse(jsonString);

console.log(json);

var fila1=document.getElementsByClassName("fila1");
var fila2=document.getElementsByClassName("fila2");
var fila3=document.getElementsByClassName("fila3");


for (let i=0; i<=3 ;i++ ){
  fila1[i].innerHTML=json.tienda[i].nombre;
  fila2[i].innerHTML=json.tienda[i].telefono;
  fila3[i].innerHTML=json.tienda[i].web;
}


