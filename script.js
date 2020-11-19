let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let playercards = [];
let total = 0;

//take card random card from deck, push card in players deck and remove it from the main deck
pullCard = () => {
    let i = Math.floor(Math.random() * deck.length);
    let randomcard = deck[i];
    playercards.push(randomcard);
    deck.splice(i, 1);
}

//compare wining and losing conditions, change message inner html accordingly
winConditions = () => {
    total = playercards.reduce((a,b) => a + b, 0);
    if(total === 21){
        document.getElementById("message").innerHTML= "You win!";
    }
    else if(total > 21){
        document.getElementById("message").innerHTML= "You lose!";
    }
    else{
        document.getElementById("message").innerHTML= "Take another card";
    }
}


document.getElementById("test").addEventListener("click", function(){
    pullCard();
    winConditions();
    console.log(deck);
    console.log(playercards);
    console.log(total);
});