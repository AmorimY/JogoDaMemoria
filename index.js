var cartas = [
    "caracol.png",
    "joaninha.png",
    "caracol.png",
    "joaninha.png"
]

var cartaClicada;
var segundaCarta;
var cartaUm;

let podeClicar = true;

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

function cons(){
    console.log("oi")
}


function onClickCard(card) {
    
       if (!cartaUm){
        cartaUm = card
       // cartaUm.firstChild.classList.add("")
        //cartaUm= card.firstChild.getAttribute("src") 
        //cartaUm.firstChild.classList.add('virada')
        return
        }
        segundaCarta = card.firstChild.getAttribute("src")

        if(cartaUm === segundaCarta){
            console.log("cartas iguais")
        }else{
            console.log("diferentes")
        }
        cartaUm=null
        segundaCarta = null
        




    /* 

        if (!cartaClicada {
        console.log("true?")
        
    }else{
        console.log("aaaa")
    }
    */
    

}


init();