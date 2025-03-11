//JAVASCRIPT

let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}

function mudarCor () {
    texto.style.color = "red"
    document.body.style.backgroundColor = "pink"
}

function trocarFundo() {
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "purple"
}

let imagem = document.getElementById("imagem")
function troca () {
    imagem.src = "flor2.webp"
}
function destroca () {
    imagem.src = "flor1.jpg"
}

let mensagem = document.getElementById("mensagem")
function outroTexto () {
    mensagem.innerText = "Texto Alterado"
}
function voltarTexto () {
    mensagem.innerText = "Passe o mouse aqui"
}

function aparece () {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio () {
    let tamanho = document.getElementById ("tamanho")
    let novoTamanho = Math.floor(Math.random () * (40 - 10 + 1)) + 10 //entre 10px e 40px
    tamanho.style.fontSize = novoTamanho + "px"
}
