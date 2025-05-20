const palavras = ["SENAI", "APRENDIZAGEM", "CURSO", "TECNICO", "FUTURO" , "SISTEMAS"];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
let erros = 0;
let letrasCorretas = [];

const imagemForca = document.getElementById("imagemForca");
const containerLetras = document.querySelector(".container-letras");

function desenharPalavra() {
  containerLetras.innerHTML = "";
  for (let letra of palavra) {
    const divLetra = document.createElement("div");
    divLetra.classList.add("letra-palavra");
    divLetra.textContent = letrasCorretas.includes(letra) ? letra : "";
    containerLetras.appendChild(divLetra);
  }
}

function criarTeclado(teclas, containerId) {
  const container = document.getElementById(containerId);
  teclas.forEach((tecla) => {
    const btn = document.createElement("button");
    btn.textContent = tecla;
    btn.addEventListener("click", () => verificarLetra(tecla, btn));
    container.appendChild(btn);
  });
}

function verificarLetra(letra, botao) {
  botao.disabled = true;
  if (palavra.includes(letra)) {
    if (!letrasCorretas.includes(letra)) {
      letrasCorretas.push(letra);
    }
    desenharPalavra();

   
    const todasDescobertas = [...palavra].every(l => letrasCorretas.includes(l));
    if (todasDescobertas) {
      setTimeout(() => alert("Parabéns, você venceu!"), 100);
    }
  } else {
    erros++;
    imagemForca.src = `img/forca${erros}.png`;
    if (erros === 6) {
      setTimeout(() => alert(`Você perdeu! A palavra era ${palavra}`), 100);
    }
  }
}

document.getElementById("reiniciar").addEventListener("click", () => location.reload());

desenharPalavra();
criarTeclado(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], "linhaTeclado1");
criarTeclado(["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"], "linhaTeclado2");
criarTeclado(["Z", "X", "C", "V", "B", "N", "M"], "linhaTeclado3");
