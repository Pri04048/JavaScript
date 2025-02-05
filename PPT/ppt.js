// Jogo Pedra, Ppel e Tesoura
const escolhaJogador = prompt("Escolha pedra ,papel ou tesoura")
// Solicita que o usuário informe qual ele quer

const escolhaPC = ["pedra", "papel" , "tesoura"] [Math.floor(Math.random() * 3)]
// Gera uma escolha aleatoria para o computador
// Criamsos um array com as opções e usamos rendom para escolher uma forma aleatoria

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
// Mostrando qual foi a nossa escolha e a escolha do computador 

if(escolhaJogador == escolhaPC) {
    alert("Empate")
 } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
    // Criamos a primeira verificação de vitoria
    alert("Você venceu")
 } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
    // Criamos a  segunda verificação 
} else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
    // Criamos a  terceira verificação 

    alert("Você venceu")
 } else {
    alert("Você perdeu ")
 }

