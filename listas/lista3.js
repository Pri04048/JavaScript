let idade = prompt("Qual sua idade ?")
console.log("Sua idade é " , idade)

if(idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

console.log("-----ex2-----")
let num = prompt ("Insira um número")
let resul = num %2
if (resul == 0) {

    console.log("Seu número é par")
} else {
    console.log("Seu númereo é impar")
}

console.log("-----ex3-----")
let not1 = prompt ("Insira a sua primeira nota:")
let not2 = prompt ("Insira a sua segunda nota:")
let resultado = (not1 + not2) / 2
if (resultado>=7) {
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}
console.log("-----ex4-----")
let idad = prompt ("Qual a sua idade")

if (idad >=18){
    console.log("Entrada permitida")
}else {
    console.log("Entrada proibida")
}

console.log("-----ex5-----")
let senha = prompt("Insira uma senha:")
if (senha == 123){
    console.log("Senha Correta")
} else {
    console.log("Senha incorreta")
}

console.log("-----ex6-----")
let temperatura = prompt("Qual a temperatura atual")

if (temperatura >= 30) {
    console.log("Está Quente")
} else {
    console.log("Está Frio")
}

console.log("-----ex7-----")
let nume = prompt ("Insira um número")
if(nume< 0){
    console.log("O seu número é negativo")
}else{
    console.log("O seu número é positivo")
}

