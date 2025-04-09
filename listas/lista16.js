//ex1
function mostrarResultados() {
    let numero = parseFloat(document.getElementById("numero").value);

    document.getElementById("teto").textContent = Math.ceil(numero);
    document.getElementById("piso").textContent = Math.floor(numero);
}

//ex2
function transformaremLetra() {
    let letraMa = document.getElementById("letraMa")
    let letraMi = document.getElementById("letraMi")
    let letra = document.getElementById("letra").value

    letraMa.innerText = (letra.toUpperCase())    
    letraMi.innerText = (letra.toLowerCase ())
    
}

//ex3
function TransAlea() {
    let randomNumber = Math.floor(Math.random() * 100)
    document.getElementById("randomNumber").innerText = randomNumber;
}
//Ex4
function Decimal() {
    let numero = document.getElementById("n").value;
    let de = document.getElementById("de");
    let numeroFormatado = Number(numero).toFixed(1); 
    de.textContent = numeroFormatado;}
    
 //Ex5   
