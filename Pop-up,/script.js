const botaoAbrirPoup = document.getElementById("abrirPopUp")
const popup = document.getElementById("popup")
const fundo = document.getElementById("fundo")
const mensagem = document.getElementById("mensagem")

botaoAbrirPoup.addEventListener("click", () => {
    popup.classList.remove("escondido")
    fundo.classList.remove("escondido")
})
// function responder(resposta){
//     mensagem.innerText = "Você escolheu:" + resposta
//     popup.classList.add("escondido")
//     fundo.classList.add("escondido")}
function abrirHTML(){
    window.location.href = "sobre.html"
}
    function abrirSite () {
    window.location.href = "https://br.pinterest.com/"
    }