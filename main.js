var cartas = [
  "assets/caracol.png",
  "assets/joaninha.png",
  "assets/caracol.png",
  "assets/joaninha.png",
  "assets/abelha.png",
  "assets/abelha.png",
  "assets/libelula.png",
  "assets/libelula.png",
  "assets/mosca.png",
  "assets/mosca.png",
  "assets/aranha.png",
  "assets/aranha.png",
];

function shuffle(cartas) {
  let currentIndex = cartas.length,
    randomIndex;

  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cartas[currentIndex], cartas[randomIndex]] = [
      cartas[randomIndex],
      cartas[currentIndex],
    ];
  }
  return cartas;
}

shuffle(cartas);

var pontuacao = 0;
var segundaCarta;
var cartaUm;

var podeClicar = true;

function init() {
  let tabuleiro = document.getElementById("tabuleiro");
  for (let i = 0; i < cartas.length; i++) {
    let carta = cartas[i];
    let div = createCard(carta);
    tabuleiro.appendChild(div);
  }
  document.getElementById("informacoes").innerHTML = "Pontuação: " + pontuacao;

}

function createCard(carta) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  image.src = carta;
  card.classList.add("carta");
  card.appendChild(image);
  card.firstChild.classList.add("verso");
  card.setAttribute("onclick", "onClickCard(this)");

  return card;
}

function onClickCard(card) {
  if (!podeClicar || !card.firstChild.classList.contains("verso")) {
    return;
  }
  if (!cartaUm) {
    cartaUm = card;
    cartaUm.firstChild.classList.remove("verso");
    return;
  }
  segundaCarta = card;
  segundaCarta.firstChild.classList.remove("verso");
  podeClicar = false;

  if (
    cartaUm.firstChild.getAttribute("src") ===
    segundaCarta.firstChild.getAttribute("src")
  ) {
    cartaUm = null;
    segundaCarta = null;
    podeClicar = true;
    pontuacao++;
    document.getElementById("informacoes").innerHTML =
      "Pontuação: " + pontuacao;
  } else {
    setTimeout(function () {
      cartaUm.firstChild.classList.add("verso");
      segundaCarta.firstChild.classList.add("verso");
      cartaUm = null;
      segundaCarta = null;
      podeClicar = true;
    }, 800);
  }
}

function recarrega() {
  location.reload();
}

init();
