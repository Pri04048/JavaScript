let contador = 1
while(contador <= 20) {
console.log("while:" , contador)
contador ++
} 
/////SEGUNDO EXERCICIO

let deseja = prompt ("Você deseja continuar?")

do {
    if (deseja == "n") {
        console.log("N")
    }
    else if   (deseja == "s"){
        console.log("s")}
    deseja = prompt ("Você deseja continura?")
} while (deseja != "s")


//////// TERCEIRO EXERCICIO
let cont = 1
let escolha = Number(prompt("Escolha um número"))
while(cont <= escolha) {
console.log("while:" , cont)
cont ++
}

////////// QUARTO EXERCICIO 
let num = 1
do{
    console.log(num)
    num +=2
}while(num <= 31)

////////// QUINTO EXERCICIO 
let alg = 1
do{
    let num = Number(prompt("Escolha 5 números"))
    if (num > 0) {
        console.log("Positivo")
    }
    else if (num <0) {
        console.log("Negativo")
    } else {
        console.log("O numero é 0")
    }
    alg ++
} while (alg <= 5 )

//////// SEXTO EXERCICIO 
let res 
do {
    res = prompt ("Deseja fazer uma conta?")
    if (res == "s") {
        let num = Number(prompt("Digite 2 números para a soma "))
        let num1= Number(prompt("Digite 2 números para a soma:"))
        let soma = num + num1 
        console.log(num + num1)
    }
    else {
        console.log("Não doi possível")
    }
} while (resposta == "s")