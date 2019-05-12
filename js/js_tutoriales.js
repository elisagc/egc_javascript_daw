var imgIframe=document.getElementsByClassName("foto-videos");
var iframe=document.getElementsByClassName("myiframe");
var enlaces=document.getElementsByClassName("enlaces");

iframe[0].style.display="none";

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click",ocultarImg); 
}

function ocultarImg(){
    imgIframe[0].style.display="none";
    iframe[0].style.display="block";
}