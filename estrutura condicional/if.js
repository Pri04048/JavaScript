//Estrutura condicional - if else
let idade = prompt("Qual sua idade ?")
console.log("Sua idade é " , idade)

if(idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

console.log("--------------------------------------------------------")
//Verificando se um número é impar ou par
let numero = prompt("Escolha um número:")
let resultado = numero % 2 
if (resultado ==0) //condição 
{
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("----------------------------------------------------")

// Avalição do aluno
let nota1 = prompt ("Qual a primeira nota:")
let nota2 = prompt ("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

