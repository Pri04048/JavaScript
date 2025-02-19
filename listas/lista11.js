function Javascript() {
    console.log("Eu gosto de Javascript")
}
Javascript()

//ex2
function contaAtecinco() {
    for(let i = 1; i <= 5; i++)
        console.log(i)
}
//ex3
contaAtecinco()
let nome=  prompt("Qual o seu nome?")
function saudacao() {
console.log("Olá", nome, "Seja bem-vindo(a)")
}

saudacao()

//ex4
function multiplicarDoisNumeros (a,b) {
    let resultado = a * b 
    return resultado
}
console.log(multiplicarDoisNumeros(5,3))

//ex5
let idad= prompt("Qual a sua idade?")
if(idad >=18){
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}

function verificaridade (){
    
}
console.log(verificaridade())

//ex6
let num = Number (prompt("Digite um  número"))
let num2 = Number (prompt("Digite mais um número"))
function somar (num,num2){
let resultado = num + num2
return resultado
}

console.log(somar(num,num2))

//ex7
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
function calcularAreaRetangulo (n1,n2) {
    let area = n1 * n2
    return area
}
console.log(calcularAreaRetangulo(n1,n2))

//ex8
let idade= prompt("Digite a primeira idade")
let idade2= prompt("Digite a segunda idade")
if(idade >= idade2){
    console.log("A primeira idade é mais velha")
} else{
    console.log("A segunda  idade é mais velha")
}

function compararidade (){
    
}
console.log(compararidade())
