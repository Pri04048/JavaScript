//ARQUIVO DOM.JS
let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover", function () {
    imagem.setAttribute("src" , "flor2.webp")
})
imagem.addEventListener("mouseout" , function(){
    imagem.setAttribute("src" , "flor1.jpg")
})
