let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let playercards = [];
let total = 0;


//take card random card from deck, push card in players deck and remove it from the main deck. Create list item for every card that's pulled
pullCard = () => {
    let i = Math.floor(Math.random() * deck.length);
    let randomcard = deck[i];
    let node = document.createElement("LI");
    let textnode = document.createTextNode(randomcard);
    playercards.push(randomcard);
    deck.splice(i, 1);
    node.appendChild(textnode);
    document.getElementById("cards").appendChild(node);
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
    document.getElementById("total").innerHTML = total;
    console.log(deck);
    console.log(playercards);
    console.log(total);
});