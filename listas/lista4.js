let idade = Number(prompt("Qual a sua idade"))
if (idade<=12)  {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolescente")
} else if (idade <= 59){
    console.log("Adulta")
} else {
    console.log("Idoso")}

    console.log("------Ex2-----")
    let temperatura= Number (prompt("Qual a temperatura atual?"))
if (temperatura<10) {
    console.log("Muito Frio")
} else if (temperatura<=20) {
    console.log("Frio")
} else if (temperatura<=30){
    console.log("Regular")
} else {
    console.log("Muito Quente")
}

console.log("------Ex3-----")
let turno = Number (prompt("Qual o seu  turno de estudo"))
if (turno =="M") {
    console.log("Bom Dia")
} else if (turno =="V") {
    console.log("Boa Tarde")
} else if (turno == "N"){
    console.log("Boa Noite")
} else {
    console.log("Turno Inválido")
}
  
console.log("-----Ex4-----")
let compra = Number (prompt("Qual o valor da Compra"))
if(compra <=100){
    console.log("Ganhou 5% de desconto" )
}else if (compra <=200){
    console.log("Ganhou 10% de desconto" )
} else if (compra>=200){
    console.log("Ganhou 15% de desconto")
}

console.log("-----Ex5-----")
let nota = Number (prompt("Qual é a nota"))
if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70){
    console.log("C")}
    else if (nota >= 60){
        console.log("D")}
        else if (nota <60){
            console.log("F")}


console.log("-----Ex6-----")
let num = Number (prompt("Qual o dia da Semana"))
if (num ==1) {
    console.log("Domingo")
} else if (num == 2) {
    console.log("Segunda")
} else if (num== 3){
    console.log("Terça")
}else if (num==4){
    console.log("Quarta")
}else if (num==5){
    console.log("Quinta")
}else if (num== 6){
    console.log("Sexta")
}
 else if (num==7) {
    console.log("Sábado")}

console.log("-----Ex7-----")
let pista = Number (prompt("Qual a distância"))
if (pista<=400) {
    console.log("Pista Curta")
} else if (pista<=800) {
    console.log("Pista Média")
} else if (pista<=1500){
    console.log("Pista Longa")
} else if (pista>1500) {
    console.log("Pista Muito Lonha")}

    console.log("-----Ex8-----")
    let pontos = Number (prompt("Qual a pontuação"))
if (pontos<=1000) {
    console.log("Iniciante")
} else if (pontos<5000) {
    console.log("Intermediário")
} else if (pontos <=10000){
    console.log("Avançado")
} else  if (pontos >10000){
    console.log("Mestre")}