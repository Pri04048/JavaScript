let titulo = document.getElementById("titulo")
//document = HTML
//getElementByt = pague o elemento pelo id 
//logo,quando fizemos isso guardamos o que estava no HTML em uma variável no js
console.log(titulo.innerText)
//-------------------------------------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
// Desse jeito trocamos o texto de uma tag
texto.style.color = "pink"
//Usamos o style podemos mexer mp css
//----------------------------------------------
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})
//----------------------------------------------
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick" , function (){
duplo.style.backgroundColor = "purple"
})
//Só acontece quando clica duas vezes
//----------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.innerText = "o mouse estpa aqui"
    passe.style.backgroundColor = "yellow"
})
passe.addEventListener("mouseout" , function () {
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
})// o mouseout é quando mouse está forá do elemento
