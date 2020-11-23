let deck = [];
let suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let playershand = [];
let computershand = [];
let totalplayer = 0;
let totalcomputer = 0;
let computerInterval;

//create deck from 2 arrays with all the suits, give a higher weight to, joker, king, queen and ace.
for(i = 0; i < values.length; i++){
    for(a = 0; a < suits.length; a++){
        let weight;
        if(values[i] === "J" || values[i] === "Q" || values[i] === "K"){
            weight = 10;
        }
        else if(values[i] === "A"){
            weight = 11;
        }
        else{
            weight = values[i];
        }
        let card = {Suit: suits[a], Value: values[i], Weight: weight};
        deck.push(card);
    }
}

console.log(deck);

//take card random card from deck, push card in players deck and remove it from the main deck. Create list item for every card that's pulled
pullCardplayer = () => {
    let i = Math.floor(Math.random() * deck.length);
    let randomcard = deck[i];
    let node = document.createElement("LI");
    let textnode = document.createTextNode(deck[i].weight);
    playershand.push(randomcard);
    deck.splice(i, 1);
    node.appendChild(textnode);
    document.getElementById("playercards").appendChild(node);
}

pullCardcomputer = () => {
    let i = Math.floor(Math.random() * deck.length);
    let randomcard = deck[i];
    let node = document.createElement("LI");
    let textnode = document.createTextNode(randomcard);
    computershand.push(randomcard);
    deck.splice(i, 1);
    node.appendChild(textnode);
    document.getElementById("computercards").appendChild(node);


}

//compare wining and losing conditions, change message inner html accordingly
winConditions = () => {
   totalplayer = playershand.reduce((a,b) => a + b, 0);
   totalcomputer = computershand.reduce((a,b) => a + b, 0);
   document.getElementById("totalcomputer").innerHTML = totalcomputer;
   document.getElementById("totalplayer").innerHTML = totalplayer;
    if(totalplayer === 21 && totalcomputer < 21){
        document.getElementById("message").innerHTML= "You win!";
    }
    else if(totalplayer > 21){
        document.getElementById("message").innerHTML= "You lose!";
    }
    else if(totalplayer < 21 && totalcomputer > 21){
        document.getElementById("message").innerHTML= "You win!";
    }
    else if(totalcomputer === 21 && totalplayer === 21){
        document.getElementById("message").innerHTML= "Computer wins!";
    }
    else if(totalcomputer === 21 && totalplayer < 21){
        document.getElementById("message").innerHTML= "Computer wins!";
    }
    else{
        document.getElementById("message").innerHTML= "Take another card";
    }

}

document.getElementById("test").addEventListener("click", function(){
    pullCardplayer();
    winConditions();
    setTimeout(combineWinPullCard, 400);
    console.log(playershand);
});

//Combined pullcard function and winconditions to put into interval, clear interval when conditions are met.
combineWinPullCard = () =>{
    pullCardcomputer();
    winConditions();
    if (totalcomputer > 21){
        clearInterval(computerInterval);
    }
}

//let computer pull cards until win or bust with use of an interval
document.getElementById("stop").addEventListener("click", function(){
       computerInterval = setInterval(combineWinPullCard, 500);
});


