//ex1
let botton = document.getElementById("botton")

botton.addEventListener("click", function(){
   botton.style.backgroundColor = "pink"
})  
botton.addEventListener("dblclick" , function (){
botton.style.backgroundColor = "purple"
})

//ex2
let like = document.getElementById("like")
let para = document.getElementById("para")
let curtir = 0
like.addEventListener("click" , function() {
 
   curtir++
   para.innerText=curtir
})

//ex3
let par1 = document.getElementById("par1")
let par2 = document.getElementById("par2")
let par3 = document.getElementById("par3")
let par4 = document.getElementById("par4")
let par5 = document.getElementById("par5")
let bot = document.getElementById("bot")
bot.addEventListener("click" , function() {
    par1.innerText="Eu gosto de JavaScript"
     par2.innerText="Eu gosto de JavaScript"
      par3.innerText="Eu gosto de JavaScript"
       par4.innerText="Eu gosto de JavaScript"
        par5.innerText="Eu gosto de JavaScript"

})

//ex4
let lais = document.getElementById("lais")
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
if (lais.lastChild) {
    lais.removeChild(lais.lastChild)
    botao.innerText = "Mensagem Enviada"
} 
})

//ex5
let tex1 = document.getElementById("tex1")
let aju = document.getElementById("aju")
aju.addEventListener("click" ,   function() {
    tex1.style.display = "flex"
})

//ex6
let div = document.getElementById("div")
let bot2 = document.getElementById("bot2")
let bot3 = document.getElementById("bot3")
bot2.addEventListener("click" , function (){
div.style.borderRadius="0px"
})
bot3.addEventListener("click" , function (){
   div.style.borderRadius="360px"
   
})



