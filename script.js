let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let playershand = [];
let computershand = [];
let totalplayer = 0;
let totalcomputer = 0;
let computerInterval;


//take card random card from deck, push card in players deck and remove it from the main deck. Create list item for every card that's pulled
pullCardplayer = () => {
    let i = Math.floor(Math.random() * deck.length);
    let randomcard = deck[i];
    let node = document.createElement("LI");
    let textnode = document.createTextNode(randomcard);
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
    setTimeout(combineWinPullCard, 400);
});

//Combined pullcard function and winconditions to put into interval, clear interval when conditions are met.
combineWinPullCard = () =>{
    pullCardcomputer();
    document.getElementById("totalcomputer").innerHTML = totalcomputer;
    winConditions();
    if (totalcomputer > 21){
        clearInterval(computerInterval);
        document.getElementById("totalcomputer").innerHTML = totalcomputer;
    }
}

//let computer pull cards until win or bust with use of an interval
document.getElementById("stop").addEventListener("click", function(){
       computerInterval = setInterval(combineWinPullCard, 500);
});


