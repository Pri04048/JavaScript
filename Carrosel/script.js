const container = document.querySelector(".container")
const botaoAnterior = document.querySelector(".botao-anterior")
const botaoProximo = document.querySelector(".botao-proximo")
let indiceAtual = 0
let idIntervalo

function atualizarCarrosel(){
    container.style.transform = `translateX(-${indiceAtual*33.33}%)` 
}
function proximoImagem(){
    indiceAtual = (indiceAtual + 1) % 3
    atualizarCarrosel()
}
function iniciarCarrosel(){
    idIntervalo = setInterval(proximoImagem, 5000)
}
iniciarCarrosel() //executa automaticamente

botaoAnterior.addEventListener("click", () =>{
indiceAtual = (indiceAtual -1 + 3 ) % 3
atualizarCarrosel()
})
botaoProximo.addEventListener("click", () => {
    indiceAtual = (indiceAtual +1) % 3
    atualizarCarrosel()
})