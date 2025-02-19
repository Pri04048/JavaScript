let filmes = ["Minha vida em parte" , "Fala sério mãe" , "Os Farrofeiros"]

console.log("Filme Favorito" , filmes[1])

// ex2
let frutas = ["Manga" , "Uva" , "Melancia" , "Morango", "Ameixa"]

console.log("Fruta favorita" , frutas[3])

//ex3
let cores = ["rosa", "roxo" , "vermelho"]
for(let i = 0; i < cores.length; i++){
console.log(cores[i])
}
console.log("adicionado na lista")
cores.push("verde")
console.log(cores)

//ex4
let n = ["5", "4", "3", "2"]
for(let i = 0; i < n.length; i++) {
    console.log(n[i])
    
}
n.pop()
console.log(n)

//ex5
//5
let cid = ["Madri", "Paris"]
for(let i = 0; i < cid.length; i++) {
    console.log(cid[i])
}
cid.unshift("Ibiza")
console.log(cid)

//6
let ani = ["cachorro", "gato", "tartaruga"]
for(let i = 0; i < ani.length; i++) {
    console.log(ani[i])
    
}
ani.shift()
console.log(ani)

//7
let car = ["BMW X5", "Tesla", "Porsche 718", "Audi R8"]
for(let i = 0; i < car.length; i++) {
    console.log(car[i])
}
console.log(car)

 //8 
let vazio = []
console.log("adiciona no final")
vazio.push("3", "2", "1")
console.log(vazio)

console.log("adiciona no inicio")
vazio.unshift("4")
console.log(vazio)

console.log("remove o ultimo")
vazio.pop()
console.log(vazio)

console.log("remove o primeiro")
vazio.shift()
console.log(vazio)

console.log("array final")
for(let i = 0; i < vazio.length; i++) {
    console.log(vazio[i])
}
console.log(vazio)