function aparece () {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function mudaCor () {
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}


function completarInformacoes() {

    let nome = "Priscila";
    let idade = 16 ;
    let cidade = "Suzano";
    let escola = "SESI/SUZANO";
    let curso = "Desenvolvimento  de Sistemas";


    let texto = `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, estudo no ${escola} e faço o curso de ${curso}.`;

    document.getElementById("informacoes").innerText = texto;
}

function trocarCor() {
    let pais = document.getElementById("pais");

    let cores = ["green", "yellow", "blue"];
    
    let corAtual = pais.style.color;
    
    let indiceCorAtual = cores.indexOf(corAtual);
    let indiceProximaCor = (indiceCorAtual + 1) % cores.length;
    pais.style.color = cores[indiceProximaCor];
}

function mostrarAlerta() {
    alert("Pare de clicar no botão!"); 
}


function escolherPorta(porta) {
    document.getElementById("imagem").innerHTML = "";

    if (porta === 1) {
        alert("Você ganhou um carro!");
        exibirImagem("carro.jpg", "Carro");
    } else if (porta === 2) {
        alert("Você não ganhou nada!");
        exibirImagem("caixa.png", "Caixa Vazia"); // 
    } else if (porta === 3) {
        alert("Parabéns, você encontrou o tesouro!");
        exibirImagem("bau.jpg", "Tesouro"); 
    }
}


function exibirImagem(url, altTexto) {
    const imagem = document.createElement("img"); 
    imagem.src = url; 
    imagem.alt = altTexto; 
    imagem.style.width = "300px"; 
    imagem.style.height = "auto"; 
    document.getElementById("imagem").appendChild(imagem);
}
function redimensionarImagem() {
   
    let imagem = document.getElementById("minhaImagem");

    let tamanhoAleatorio = Math.floor(Math.random() * (300 - 20 + 1)) + 20;

    imagem.style.width = tamanhoAleatorio + "px";
    imagem.style.height = "auto"; 
}

let clique = 0;


function mudarCor() {
       document.getElementById("div1").style.backgroundColor = "black";
   document.getElementById("div2").style.backgroundColor = "black";
   document.getElementById("div3").style.backgroundColor = "black";

 
   if (clique === 0) {
       document.getElementById("div1").style.backgroundColor = "red";
       alert("PARE");
   } else if (clique === 1) {
       document.getElementById("div2").style.backgroundColor = "yellow";
       alert("ATENÇÃO!");
    } else if (clique === 2) {
        document.getElementById("div3").style.backgroundColor = "green";
        alert("PODE IR!");    }

  
   clique = (clique + 1) % 3;
}
 let imagem1 = document.getElementById("imagem1")
let imagem2 = document.getElementById("imagem2")
 let imagem3 = document.getElementById("imagem3")
function troca1(){
    imagem1.src = "ação.poster.jpg"
}
function destroca1(){
     imagem1.src = "ação.png"
 }
function troca2(){
    imagem2.src = "comédia.poster.jpg"
 }
function destroca2(){
    imagem2.src = "comédia.png"
 }
function troca3(){
     imagem3.src = "romance.png"
}
function destroca3(){
    imagem3.src = "romance.poster.webp"
 }