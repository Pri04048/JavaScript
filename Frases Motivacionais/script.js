// script.js

const frases = [
  "Acredite em si mesmo e vá em frente!",
  "Você é capaz de coisas incríveis!",
  "Nunca desista dos seus sonhos!",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A persistência é o caminho do êxito.",
  "Faça hoje o que outros não querem, para conquistar amanhã o que poucos podem!",
  "A sua única limitação é você mesmo.",
  "Grandes conquistas exigem grandes esforços.",
  "Mantenha o foco e a disciplina.",
  "Você é mais forte do que pensa!"
];

let ultimaFrase = -1;

function gerarFrase() {
  let indice;
  do {
    indice = Math.floor(Math.random() * frases.length);
  } while (indice === ultimaFrase);
  ultimaFrase = indice;

  const fraseBox = document.getElementById("frase");
  fraseBox.textContent = frases[indice];

  // Trocar cor de fundo e texto
  document.body.style.backgroundColor = corAleatoria();
  fraseBox.style.color = corAleatoria();
}

function corAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
