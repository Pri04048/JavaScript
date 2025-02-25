// Jogo Pedra, Ppel e Tesoura
//Vari´sveis para armazernar os pontos do jogador e pc
let placarJogador = 0
let placarPc = 0

// Variável para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

//Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {


   const escolhaJogador = prompt("Escolha pedra ,papel ou tesoura")
   // Solicita que o usuário informe qual ele quer

   const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
   // Gera uma escolha aleatoria para o computador
   // Criamsos um array com as opções e usamos rendom para escolher uma forma aleatoria

   alert(`Você escolheu ${escolhaJogador}`)
   alert(`O computador escolheu ${escolhaPC}`)
   // Mostrando qual foi a nossa escolha e a escolha do computador 

   if (escolhaJogador == escolhaPC) {
      alert("Empate")
   } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
      // Criamos a primeira verificação de vitoria
      alert("Você venceu")
      placarJogador++
   } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
      // Criamos a  segunda verificação 
      alert("Você venceu")
      placarJogador++
   } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
      // Criamos a  terceira verificação 

      alert("Você venceu")
      placarJogador++
   } else {
      alert("Você perdeu ")
      placarPc++
   }

   //Exibe o placar no console
   console.log("Placar Jogador:") , placarJogador
   console.log("Placar Computador:") , placarPc
}

   //Placra Final
   alert(`Fim de jogo! Placar Final: Jogador ${placarJogador} x ${placarPc} Computador`)