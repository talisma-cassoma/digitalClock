function clock (){
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")

horas.innerHTML = new Date().getHours();
minutos.innerHTML = new Date().getMinutes();
segundos.innerHTML = new Date().getSeconds();

if(minutos.innerHTML.toString().length == 1){
    minutos.innerHTML= "0" + minutos.innerHTML;
}
if(horas.innerHTML.toString().length == 1){
    horas.innerHTML= "0" + horas.innerHTML;
}
if(segundos.innerHTML.toString().length == 1){
    segundos.innerHTML= "0" + segundos.innerHTML;
}
}
const intervel = setInterval(clock, 1000)
