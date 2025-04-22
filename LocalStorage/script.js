//carregar a página
window.onload = function () {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if (textoSalvo) {
        document.getElementById("anotacao").value = textoSalvo
    }
}
// clicar no botao
function salvarAnotacao () {
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}