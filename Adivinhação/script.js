// script.js
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const entrada = document.getElementById("palpite");
  const mensagem = document.getElementById("mensagem");
  const tentativasTexto = document.getElementById("tentativas");
  const palpite = Number(entrada.value);
  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.innerHTML = "🛸 Pouso concluído! Você encontrou o planeta secreto!";
    mensagem.style.color = "#9eeaf9";
  } else if (palpite > numeroSecreto) {
    mensagem.innerHTML = "☄️ Coordenada muito alta! Reduza altitude.";
    mensagem.style.color = "#ffd2d2";
  } else {
    mensagem.innerHTML = "🪐 Muito baixo! A nave ainda está longe da órbita.";
    mensagem.style.color = "#fff1b0";
  }

  tentativasTexto.textContent = `Tentativas: ${tentativas}`;
  entrada.value = "";
}

function reiniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById("palpite").value = "";
  document.getElementById("mensagem").textContent = "";
  document.getElementById("tentativas").textContent = "";
}
