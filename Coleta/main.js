//Funções Matemáticas
let num = 4.7


//Arredondar números
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num))//arendona para baixo
console.log(Math.ceil(num))//arredonda para cima
//Número Aleatório
console.log(Math.random())//número aleatório entre 0 e 1
console.log(Math.random()*10)//númeoro aleatória entre 0 e 10


//Funções de String
let texto = "Eu amo javaScript"
//Manipular String
console.log(texto.toUpperCase()) // Deixa tudo maiusculo
console.log(texto.toLowerCase())//Deixa tudo minusculo
console.log(texto.trim())//Remove espaços entes e depois
//Localizar Texto
sd
console.log(texto.charAt(5))//mostra a letra que está nessa posição
//Trocar Textos
console.log(texto.replace("amo","adoro"))

//Funções Númericas
let numero = "42.85"
console.log(parseInt(numero))//converte String para número interiro
console.log(parseFloat(numero))//converte String para número decimal
console.log(Number(numero).toFixed(1))//Define quabras casas decimais