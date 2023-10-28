const array = [
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
]
array.sort(() => 0.5 - Math.random())
let gridMap = document.getElementById('grid');
let cardChoosen = [];
let cardChoosenId = []
let cardWon = []
let resultDisp = document.querySelector('#score');
function createBoard(){
    for(let i = 0 ; i < 10 ; i++){
        let card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridMap.appendChild(card);
    }
}
function checkMatch(){
    const cards = document.querySelectorAll('img');
    const OPT_ONE = cardChoosenId[0];
    const OPT_TWO = cardChoosenId[1];
    if(OPT_ONE === OPT_TWO){
        alert("SAME CARD");
        cards[OPT_ONE].setAttribute('src', 'images/blank.png');
        cards[OPT_TWO].setAttribute('src', 'images/blank.png');
    }
    else if(cardChoosen[0] == cardChoosen[1]){
        cards[OPT_ONE].setAttribute('src', 'images/white.png');
        cards[OPT_TWO].setAttribute('src', 'images/white.png');
        cards[OPT_ONE].removeEventListener('click', flipCard);
        cards[OPT_TWO].removeEventListener('click', flipCard);
        cardWon.push(cardChoosen);
    } else {
        cards[OPT_ONE].setAttribute('src', 'images/blank.png');
        cards[OPT_TWO].setAttribute('src', 'images/blank.png');
    }
    cardChoosen = [];
    cardChoosenId = [];
    resultDisp.innerHTML = cardWon.length;
    if(cardWon.length === array.length/2){
        resultDisp.innerHTML = 'done';
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChoosen.push(array[cardId].name);
    cardChoosenId.push(cardId)
    this.setAttribute('src',array[cardId].img);
    if(cardChoosen.length === 2){
        setTimeout( checkMatch , 500);
    }
}
createBoard();