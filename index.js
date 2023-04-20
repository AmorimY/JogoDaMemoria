var cartas = ["caracol.png", "joaninha.png", "caracol.png", "joaninha.png"];

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
}

function createCard(carta) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  image.src = carta;
  card.classList.add("carta");
  card.appendChild(image);
  card.firstChild.classList.add("verso")
  card.setAttribute("onclick", "onClickCard(this)");

  return card;
}


function onClickCard(card) {
  if(!card.firstChild.classList.contains("verso")){
    return
  }
  if (!cartaUm) {
    cartaUm= card
    cartaUm.firstChild.classList.remove("verso")
    return
  }
  segundaCarta = card
  segundaCarta.firstChild.classList.remove("verso")

  if (cartaUm.firstChild.getAttribute("src") === segundaCarta.firstChild.getAttribute("src")) {
      console.log("iguais")
      cartaUm = null;
      segundaCarta = null;
  } else {
    setTimeout(function () {
      cartaUm.firstChild.classList.add("verso")
      segundaCarta.firstChild.classList.add("verso")
      cartaUm = null;
      segundaCarta = null;
    },1000)
  }

}

init();
