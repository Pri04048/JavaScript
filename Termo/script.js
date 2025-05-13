const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const  linhaTeclado1 = document.querySelector("#linhaTeclado1")
const  linhaTeclado2 = document.querySelector("#linhaTeclado2")
const  linhaTeclado3 = document.querySelector("#linhaTeclado3")

const teclasLinha1 = ["Q", "W", "E", "R", "T","Y","U","I","O","P"]
const teclasLinha2 = ["A", "S", "D", "F", "G","H","J","K","L","Ç"]
const teclasLinha3 = ["Z", "X", "C", "V", "B","N","M"]

const linhas = 6
const colunas = 5

let linhaAtual = 0
let colunasAtual = 0

const palavrasSecretas = ["SENAI","LIVRO"]
let mapaPalavra = {}
let palavrasSecreta = palavrasSecretas[Math.floor(Math.random()*palavrasSecretas.length)]

for(let i= 0; i<palavrasSecreta.length; i+=1) {
    mapaPalavra[palavrasSecreta[i]] = 1
}

const palpites = []

for (let l=0; l <linhas; l+=1) {
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" +l)
    linhasLetras.setAttribute("class", "linha-letras")

    for (let c = 0; c < colunas; c+=1) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id" , "linha"+ l +"coluna" + c)
        colunaLetra.setAttribute("class", l==0 ?"coluna-letra digitando":"coluna-letra")
        linhasLetras.append(colunaLetra)
        palpites[l][c] = ""
    }
    letras.append(linhasLetras)
}

function verificarPalpite () {
    const palpite = palpites[linhaAtual].join("")
    if(palpite.length !== colunas){
        return
    }
    const colunaAtuais = document.querySelectorAll(".digitando")
    for (let i = 0; i < colunas; i += 1) {
        const letra = palpite[i]

        if(mapaPalavra[letra] == undefined){
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] == i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            colunaAtuais[i].classList.add("desloca")
        }
    }
    if(palpite == palavrasSecreta) {
        window.alert("Acertou !! Parabéns")
    } else if (linhaAtual == linhas -1) {
        window.alert("Errou")
    } else {
        moverParaProximaLinha()
    }
}
function moverParaProximaLinha (){
    const colunaDigitando = document.querySelectorAll(".digitando")
    colunaDigitando.forEach(col => {
        col.classList.remove("digitando")
    })
    linhaAtual += 1
    colunasAtual = 0
    
    const novaLinha = document.querySelector("#linha"+linhaAtual)
    const novasColunas = novaLinha.querySelectorAll(".coluna-letra")
    novasColunas.forEach(col => {
        col.classList.add("digitando")
    })
}

function clicarTecla(tecla) {
    if(colunasAtual == colunas) {
        return
    }
    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunasAtual)
    letraAtual.textContent = tecla
    palpites[linhaAtual][colunasAtual] = tecla
    colunasAtual += 1
}
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)

        botao.addEventListener("click", () => clicarTecla(tecla))
        container.append(botao)
    })
}

criarLinhaTeclado(teclasLinha1, linhaTeclado1)
criarLinhaTeclado(teclasLinha2, linhaTeclado2)
criarLinhaTeclado(teclasLinha3, linhaTeclado3)

function apagarLetra() {
    if(colunasAtual == 0) {
        return
    }
    colunasAtual -= 1
    palpites[linhaAtual][colunasAtual] =""
    const letra = document.querySelector("#linha" +linhaAtual+"coluna"
        +colunasAtual)
        letra.textContent =""
}

const botaoApagar = document.createElement("button")
botaoApagar.textContent = "Enter"
botaoApagar.addEventListener("click", apagarLetra)
linhaBackspaceEnter.append(botaoApagar)

const botaoEnter = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", verificarPalpite)

linhaBackspaceEnter.append(botaoEnter)

document.onkeydown = function(evt) {
    evt = evt || window.event
    if(evt.key == "Enter") {
        verificarPalpite()
    } else if (evt.key == "Backspace") {
        apagarLetra ()
    } else {
        clicarTecla(evt.key.toLocaleLowerCase())
    }
}