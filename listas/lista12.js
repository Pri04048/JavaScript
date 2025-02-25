 let nome= prompt("Qual o seu nome?")
let saudacao = function(nome) {
    console.log("Oi" , nome, "Como vai?")

}
saudacao(nome)

//ex2
let n = Number(prompt("Escolha um número"))
let n2= Number(prompt("Escolha outro número"))
let soma = function(n,n2) {
    let resultado = n + n2 
    return resultado
}
console.log(soma(n,n2))

//ex3

let num1 = Number(prompt("Escolha a altura"))
let num2 = Number(prompt("Escolha a base"))
let area = function(num1,num2){
    let resultado = num1 * num2
    return resultado
}
console.log(area(num1,num2))

//ex4
let nume = Number(prompt("Escolha um número"))
let vezesDois = (nume) => {
    let resultado = nume* 2
    return resultado
}
console.log(vezesDois(nume))

//ex5
let numer = Number(prompt("Escolha um número"))
let quadrado = (numer) => {
    let resultado = numer * numer
    return resultado
}
console.log(quadrado(numer))

//ex6
let idad= Number(prompt("Qual a sua idade?"))
if(idad >=18){
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}

function verificaridade (){
    
}
console.log(verificaridade())

//ex7
let not = Number(prompt("Insira a  sua primeira  nota"))
let not2 = Number(prompt("Insira a  sua segunda nota"))
let not3 = Number(prompt("Insira a sua terceira nota"))
let adicao = (not,not2,not3) => {
    let resultado = not + not2 +not3/3

    return resultado
}
console.log(adicao(not,not2,not3))