const perguntas = [
    {
        pergunta: "Qual organela celular é responsável pela produção de energia nas células animais?",
        opcoes: ["Lisossomo", "Ribossomo", "Mitocôndria", "Cloroplasto"],
        correta: 2
    },
    {
        pergunta: "O que é fotossíntese e em que parte da célula vegetal ela ocorre?",
        opcoes: [
            "É a quebra de glicose, ocorre nas mitocôndrias",
            "É a síntese de proteínas, ocorre nos ribossomos",
            "É a produção de energia luminosa, ocorre nos vacúolos",
            "É a produção de glicose a partir de luz solar, ocorre nos cloroplastos"
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a principal função do sistema linfático no corpo humano?",
        opcoes: ["Produzir hormônios", "Controlar a respiração", "Transportar nutrientes", "Defender o corpo contra infecções"],
        correta: 3
    },
    {
        pergunta: "Qual é o nome da molécula que carrega as informações genéticas dos seres vivos?",
        opcoes: ["RNA", "DNA", "ATP", "Glicose"],
        correta: 1
    },
    {
        pergunta: "O que acontece com uma célula animal colocada em uma solução muito salina (hipertônica)?",
        opcoes: ["Ela absorve água e incha", "Ela mantém o equilíbrio", "Ela perde água e encolhe", "Ela se divide"],
        correta: 2
    },
    {
        pergunta: "Como se chama o processo pelo qual os organismos evoluem ao longo do tempo por meio de seleção natural?",
        opcoes: ["Reprodução", "Hereditariedade", "Adaptação", "Evolução biológica"],
        correta: 3
    },
    {
        pergunta: "Qual é a diferença principal entre reprodução sexuada e assexuada?",
        opcoes: [
            "A sexuada ocorre apenas em plantas",
            "A assexuada exige dois indivíduos",
            "A sexuada envolve variabilidade genética",
            "A assexuada ocorre somente em animais"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um ecossistema?",
        opcoes: [
            "Um conjunto de espécies de um mesmo local",
            "Um ambiente natural sem ação humana",
            "A relação entre organismos e o ambiente onde vivem",
            "Uma cadeia alimentar isolada"
        ],
        correta: 2
    },
    {
        pergunta: "Qual parte do cérebro humano é responsável pela coordenação motora e equilíbrio?",
        opcoes: ["Córtex cerebral", "Hipotálamo", "Cerebelo", "Tronco encefálico"],
        correta: 2
    },
    {
        pergunta: "Qual é o principal gás absorvido pelas plantas durante a fotossíntese?",
        opcoes: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Dióxido de carbono"],
        correta: 3
    }
];


// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opcao o usuario selecionou

const pergunta = document.getElementById ( "pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// funcao que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//funcao que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores

    // Cria um botao para cada opcao de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement ("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () =>
        selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice){
    opcaoSelecionada = indice
    // Atualiza o visual da opção selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima
}

function mostrarPontuacao ( ) {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}    
// Funcao para ir para a proxima pergunta
botaoProxima.addEventListener ( "click", () =>{
    // Verifica se a resposta esta correta
    if(opcaoSelecionada == perguntas [perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()
    
    perguntaAtual++
    if(perguntaAtual < perguntas. length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

//Botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuacao final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
// Inicia o quiz com a primeira pergunta
mostrarPergunta()