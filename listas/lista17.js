//Ex1
class Livro {
    constructor(titulo, autor, pagina) {
        this.titulo = titulo
        this.autor = autor
        this.pagina = pagina
    }
    apresentar () {
        console.log(`o livro ${this.titulo} é da ${this.autor } e tem ${this.pagina} paginas`)
    }
}

// const mlivro = new Livro("Melhor do que nos filmes", "Lynn Painter", 352)
// mlivro.apresentar();

//Ex2
class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    depositar (valor) {
        this.saldo += valor
    }
    sacar (valor) {
        this. saldo -= valor
    }
    verSaldo (){
        console.log(`${this.titular}, tem ${this.saldo}`)
    }
}
// const banco = new ContaBancaria ("Prih", 400)
// banco.verSaldo ()
// banco.depositar(400)
// banco.verSaldo()
// banco.sacar(200)
// banco.verSaldo()

//Ex3
class Pet {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie.toLowerCase();
      this.idade = idade;
    }
  
    falar() {
      let som = "";
  
      if (this.especie === "cachorro") {
        som = "AuAu!";
      } else if (this.especie === "gato") {
        som = "MIAU";
      } else if (this.especie === "vaca") {
        som = "MUUUU";
      } else if (this.especie === "ave") {
        som = "PIU PIU";
      } else {
        som = "Som desconhecido";
      }
  
      console.log(`${this.especie}: "${som}"`);
      console.log(`${this.nome} tem ${this.idade} anos e faz "${som}"`);
    }
  }
  
//   const animal = new Pet("Jade", "cachorro", 3);
//   animal.falar();
  
  //Ex4
  class Filme {
    constructor(titulo, genero , minutos) {
        this.titulo = titulo
        this.genero = genero
        this.minutos = minutos
    }
    assistir () {
        console.log(`Você está assistindo  ${this.titulo} que é  do genêro ${this.genero } e tem ${this.minutos} minutos`)
    }
}
// const tipfilme = new Filme("Como perder o homem em 10 dias", "Romance",116) 
// tipfilme.assistir()

//EX5 
class musica {
    constructor(titulo, artista, tempo){
        this.titulo = titulo
        this.artista = artista
        this.tempo = tempo
    }
    tocar(){
        console.log(`Você esta escutando ${this.titulo} do cantor(a) ${this.artista} e tem ${this.tempo} minutos`)
    }
}
const music = new musica("Constellations" , "Jade LeMac" , "3,12")
music.tocar()
