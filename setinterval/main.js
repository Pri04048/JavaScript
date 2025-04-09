let contato = 0
let intervalo;

function iniciarContador(){
    intervalo = setInterval(function() {
        contador++
        console.log("Contador" + contador)
    },1000)
}
function paraContador(){
    clearInterval(intervalo)
}
iniciarContador()