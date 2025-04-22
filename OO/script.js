
class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new Pessoa("Priscila" ,17)
// aluno1.apresentar();

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirInto(){
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}
const meuCarro = new Carro("BMY" , "X5", 2025)
// meuCarro.exibirInto()

class Aluno{
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
    }
    verificarAprovacao(){
        if(this.nome >= 6) {
            console.log(`${this.nome} foi aprovado`)
        } else {
            console.log(`${this.nome} foi reprovado`)
        }
    }
}
const aluno = new Aluno ("João", 7)
aluno.verificarAprovacao()
const aluno2 = new Aluno ("Mariana", 5)
aluno2.verificarAprovacao()