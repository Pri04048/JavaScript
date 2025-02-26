//ex1
let botao  = document.getElementById("botao")
botao.addEventListener("click" , function (){
al.style.backgroundColor = "pink"})



//ex2
let bot= document.getElementById("bot")
bot.addEventListener("click" , function (){
bot.style.backgroundColor = "purple"})

//ex3
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick" , function (){
duplo.style.fontSize = "20px"
})

//ex4
let pass = document.getElementById("pass")
pass.addEventListener("mouseover", function() {
    pass.innerText = "o mouse estpa aqui"
    pass.style.backgroundColor = "blue"
})
pass.addEventListener("mouseout" , function () {
    pass.innerText = "passe o mouse aqui"
    pass.style.backgroundColor = ""
})
    
//ex5
let bo = document.getElementById("bo")
let img = document.getElementById("img")
bo.addEventListener("click" , function () {
    bo.innerText = "bo"
    img.style.width = "200px"
    img.style.heigth = "200px"
})

//ex6
let border = document.getElementById("border")
let imagem = document.getElementById("imagem")
border.addEventListener("click" , function () {
    border.innerText = "border"
    imagem.style.borderRadius = "100px"; 
    imagem.style.width = "200px"
    imagem.style.heigth = "200px" 
})

//ex7
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

let bot1=document.getElementById ("bot1")
bot1.addEventListener("click", () => {
  para1.style.backgroundColor = "pink";
  para1.style.color = "purple";
});

let bot2=document.getElementById("bot2")
bot2.addEventListener("click", () => {
  para2.style.backgroundColor = "blue";
 para2.style.color = "orange";
  para2.style.fontSize = "20px";
});

let bot3 = document.getElementById("bot3")
bot3.addEventListener("click", () => {
  para3.style.backgroundColor = "yellow";
  para3.style.color = "green";
  para3.style.fontSize = "22px";
  para3.style.borderRadius = "10px";
  para3.style.padding = "10px";
});


