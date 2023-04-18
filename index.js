var cartas = [
    "caracol.png",
    "joaninha.png",
    "caracol.png",
    "joaninha.png"
]

var cartaClicada;

function init() {
    let tabuleiro = document.getElementById('tabuleiro');
    for (let i = 0; i < cartas.length; i++) {
        let carta = cartas[i];
        let div = createCard(carta);
        tabuleiro.appendChild(div);

    }
}
 
function createCard(carta) {
    let card = document.createElement('div');
    let image = document.createElement("img");
    image.src = carta;
    card.classList.add("carta");
    card.appendChild(image);
    card.setAttribute("onclick", "onClickCard(this)");

    return card;
}

function onClickCard(card) {
    cartaClicada = card.firstChild
    let teste = cartaClicada.getAttribute("src") 
    if (!cartaClicada === cartaClicada){
        console.log("true?")
        
    }else{
        console.log("aaaa")
    }


    
    

}

init();