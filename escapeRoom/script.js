let gameState = "inicio";
let enigmasResolvidos = {
    maca: false,
    armario: false,
    quadro: false
};

function startGame() {
    gameState = "sala";
    mostrarTexto("Você está em uma sala escura de um hospital abandonado... Você vê: uma maca ensanguentada , um armário antigo  e um quadro de avisos rasgado . O que deseja investigar?");
    mostrarOpcoes([
        { texto: "Investigar a maca", acao: () => investigarObjeto("maca") },
        { texto: "Investigar o armário", acao: () => investigarObjeto("armario") },
        { texto: "Investigar o quadro", acao: () => investigarObjeto("quadro") },
    ]);
}

function mostrarTexto(texto) {
    document.getElementById("game-text").innerHTML = `<p>${texto}</p>`;
}

function mostrarOpcoes(opcoes) {
    let container = document.getElementById("game-input");
    container.innerHTML = "";
    opcoes.forEach(opcao => {
        let btn = document.createElement("button");
        btn.textContent = opcao.texto;
        btn.onclick = opcao.acao;
        container.appendChild(btn);
    });
}

function investigarObjeto(objeto) {
    if (objeto === "maca" && !enigmasResolvidos.maca) {
        mostrarTexto("Na maca há um bilhete com a pergunta: 'Quantas pernas tem uma aranha? 🕷️'");
        mostrarCampoTexto(responderMaca);
    } else if (objeto === "armario" && !enigmasResolvidos.armario) {
        mostrarTexto("O armário está trancado com uma senha numérica. A dica é: 'Metade de 16 mais 2'");
        mostrarCampoTexto(responderArmario);
    } else if (objeto === "quadro" && !enigmasResolvidos.quadro) {
        mostrarTexto("No quadro, uma frase escrita com sangue diz: 'O que tem olhos mas não pode ver?'");
        mostrarCampoTexto(responderQuadro);
    } else {
        mostrarTexto("Nada mais aqui... Escolha outro lugar para investigar.");
        mostrarOpcoes([
            { texto: "Voltar para a sala", acao: startGame }
        ]);
    }
}

function mostrarCampoTexto(callback) {
    let container = document.getElementById("game-input");
    container.innerHTML = `<input type="text" id="user-input"><br><button onclick="processarResposta(${callback.name})">Enviar</button>`;
}

function processarResposta(callback) {
    let resposta = document.getElementById("user-input").value.trim().toLowerCase();
    callback(resposta);
}

function responderMaca(resposta) {
    if (resposta === "8" || resposta === "oito") {
        enigmasResolvidos.maca = true;
        mostrarTexto("Um barulho ecoa na sala... Algo parece ter destrancado.");
        verificarFim();
    } else {
        mostrarTexto("Algo parece errado... Tente de novo.");
        mostrarCampoTexto(responderMaca);
    }
}

function responderArmario(resposta) {
    if (resposta === "10" || resposta === "dez") {
        enigmasResolvidos.armario = true;
        mostrarTexto("Você ouve o clique de uma tranca se abrindo ao fundo...");
        verificarFim();
    } else {
        mostrarTexto("A senha não funciona... Tente de novo.");
        mostrarCampoTexto(responderArmario);
    }
}

function responderQuadro(resposta) {
    if (resposta.includes("agulha") || resposta.includes("agulhas")) {
        enigmasResolvidos.quadro = true;
        mostrarTexto("Uma corrente de ar frio passa por você... Algo mudou na sala.");
        verificarFim();
    } else {
        mostrarTexto("Resposta incorreta... Tente de novo.");
        mostrarCampoTexto(responderQuadro);
    }
}

function verificarFim() {
    if (enigmasResolvidos.maca && enigmasResolvidos.armario && enigmasResolvidos.quadro) {
        mostrarTexto(" Uma porta de emergência se abre ao fundo... Você corre... Finalmente conseguiu escapar desse hospital amaldiçoado! 🏃‍♂️🏃‍♀️💨");
        document.getElementById("game-input").innerHTML = "<button onclick='location.reload()'>Jogar Novamente</button>";
    } else {
        startGame();
    }
}
