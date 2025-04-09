function mostrarNome(){
    let nome = document.getElementById("nome").value 
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "Oi" + nome
}//mostrando o inut de um tipo de texto

function mostraridade(){
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Você tem" + idade +"anos."
}//mostrando o input de um tipo número

function mostrarComentario () {
    let comentario = document.getElementById("comentario").value
    let comentarioExibido = document.getElementById("comentarioExibido")
    comentarioExibido.innerText = "Comentario :" + comentario }//mostar o texto do textarea

    function atualizarTexto() {
        let campoTexto = document.getElementById("campoTexto").value
        let digitado = document.getElementById("textoDigitado")
        digitado.innerText = "Você digitou :" + campoTexto 
    }//mostrando o texto do input em tempo real