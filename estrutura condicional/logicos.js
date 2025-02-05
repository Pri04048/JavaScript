// Verifica se a pessoa pode votal 
let idade = 12
let tituloEleitor = true

if(idade >= 18 && tituloEleitor == true ) {
    console.log("Pode votar")
} else {
    console.log("Não pode voltar")
}
console.log("---------------------------------")
// Verificar se o número estaá dentro do intervalo
let numero = 15
if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")
} else {
    console.log("O número está fora do intervalo")
}
console.log("---------------------------------")
//  Compra com desconto 
let valor = Number(prompt("Qual o valor da compra?"))
let clienteVip = false

if (valor >= 100 || clienteVip == true) {
    console.log("Você ganhou fretes grátis")
} else {
    console.log("Tem que pagar o frete")
}
console.log("-------------------------------------")

//Número no intervalo
let num = 10
if (num >= 5 || num <= 20){
    console.log("Funcionou")
} else {
    console.log("Não funcionou")
}