let idade = Number(prompt("Qua a sua idade?")) 
let carteiradeMotorista = true
if(idade >= 18 && carteiradeMotorista == true ) {
    console.log("Você pode dirigir")
} else {
    console.log("Não vovê não pode dirigir")}

    console.log("-----Ex2-----")

    let n =  Number(prompt("Há quantos anos você trabalha?"))
    let projetosFeitos = true
    if(n >= 5 || projetosFeitos == true  ) {
        console.log("Você está elegível para promoção")
    } else{
        ("Você não pode entrar no evento")
    }

    console.log("-----Ex3-----")
    let ida =  (prompt("Qual a sua idade?"))
    if(ida >=18 && ida<=30) {
        console.log("Você pode entar no evento")
    } else  {
        console.log("Você não pode entar no evento")
    }

    console.log("-----Ex4-----")
    let idad = (prompt("Qual a sua idade?"))
    let experiEncia = true
    if(idad >= 21 && experiEncia == true) {
        console.log("Você foi aceito para a vaga")
    } else {
        console.log("Você não foi aceito")
    }

    console.log("-----Ex-----")
let usuario = (prompt("Insira o usuário"))
let senha = (prompt("Insira a senha"))

if (usuario =="admin" && senha == "1234" ) {
    console.log("Login bem sucedido")
} else {
    console.log("Nome de usuários ou senha incorretos")
}


console.log("-----Ex6-----")
let num = (prompt("Insira um número"))
if (num >= 10 && num <= 20){
    console.log("O número está dentro do intervalo 10 e 20")
} else if(num >=30 && num <=50 ) {
    console.log("O número não está dentro so intervalo 30 e 50")
    } else {
        console.log("O número não está dentro do intervalo 10 e 20 nem 30 e 50")
    }

    console.log("-----Ex7-----")
    let nume = (prompt("Insira um número"))
    if (num >= 10 || num <= 100) {
        console.log("O número foi aceito")
    }else if (num =50){
        console .log("O númer não é aceito")
    }
    