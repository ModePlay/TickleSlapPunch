//Tickle, Slap, Punch by Rob Guarino April, 2022 for The Odin Project Rock Paper Scissors challenge.

const tspArray = ["Tickle", "Slap", "Punch"];
const div = document.getElementById('chat');
let computerScore = 0;
let playerScore = 0;

var min = document.querySelector(".minutes");
var sec = document.querySelector(".seconds");

var pause = document.querySelector(".pause");
var resume = document.querySelector(".resume");
var reset = document.querySelector(".reset");

var isPaused = true;

var time = 15;
var timer = setInterval(() => {
    if (!isPaused && time >= 0) {
    min.innerHTML=parseInt(time / 60, 10);
    sec.innerHTML=parseInt(time % 60, 10);
    time--;
    }
    if (time==5) {
        document.getElementById("npcFace").src="kindamad.svg";
        document.getElementById('chat').innerHTML = `'Oh yes, the Free Point, it will be mine.'`;
    }
    if (time==00) {
        document.getElementById("npcFace").src="tickled.svg";
        document.getElementById('chat').innerHTML = `'Too Slow! FREE POINT FOR ME!!'`;
        computerScore==++computerScore;
        document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
        document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
    }
    if (computerScore>=5) {
        document.body.style.background = 'darkred';
        time = 20;
        computerScore = 0;
        playerScore = 0;
        setTimeout(function(){ document.getElementById('chat').innerHTML = "'I win!'"; }, 1000);
        setTimeout(function(){ document.getElementById("npcFace").src="tickled.svg"; }, 2000);
        setTimeout(function(){ document.getElementById("npcRighthand").src="hearts1.svg"; }, 2100);
        setTimeout(function(){ document.getElementById("npcLefthand").src="hearts2.svg"; }, 2200);
        setTimeout(function(){ document.getElementById('chat').innerHTML = "'Don't be sad. No losers here, tee-hee. I'm you're my friend forever and ever and ever....'"; }, 3000);
        setTimeout(function(){ document.getElementById("npcScore").innerHTML = `'Ahh, it feels good to be on top.'`;}, 4000);
        setTimeout(function(){ document.getElementById('chat').innerHTML = ""; }, 5000)
        setTimeout(function(){ isPaused = true; }, 5000)
        setTimeout(function(){ document.getElementById("yourScore").innerHTML = `'Play again, my Friend-Muffin? Commit another action.'`;}, 6000);   
    }
}, 1000);

pause.addEventListener("click", (e) => {
    e.preventDefault();
    isPaused = true;
});

resume.addEventListener("click", (e) => {
    e.preventDefault();
    isPaused = false;
});

reset.addEventListener("click", (e) => {
    e.preventDefault();
    time = 15;
});

function get() {
    var text = document.getElementById("name").value;
    let playerChoice = text.toLowerCase();
    return playerChoice;
}

function go() {
    get();
    game();
    isPaused = false;
    document.getElementById("name").value = '';
}


function playerInput() {
    let playerChoice = prompt("Tickle, Slap, Punch").toLowerCase();
    return playerChoice;
} 

function computerPlay() {
    return tspArray[Math.floor(Math.random()*tspArray.length)].toLowerCase();
}

function game() {
    function playRound(playerHandsign, computerHandsign) {
        playerHandsign = get();
        computerHandsign = computerPlay();
            if (playerHandsign == computerHandsign) {
                document.body.style.background = "teal";
                document.getElementById("npcFace").src="greeting.svg";
                document.getElementById("npcRighthand").src="hearts1.svg";
                document.getElementById("npcLefthand").src="hearts2.svg";
                document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Omg samesies!'`) {
                        document.getElementById('chat').innerHTML = `'We're so in sync I love it!'`;
                        document.getElementById("npcFace").src="smiley.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Omg samesies!'`;
                    }
                time = 15;
            } if (computerHandsign=="punch" && playerHandsign=="slap") {
                 computerScore==++computerScore;
                 document.body.style.background = "red";
                 document.getElementById("npcFace").src="saucy.svg";
                 document.getElementById("npcRighthand").src="rightpunch.svg";
                 document.getElementById("npcLefthand").src="leftpunch.svg";
                 document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                 document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Hit ya with a Love Punch! Yay!'`) {
                        document.getElementById('chat').innerHTML = `'Oooo and another!'`;
                        document.getElementById("npcFace").src="shock.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Hit ya with a Love Punch! Yay!'`;
                    }
             } if (computerHandsign=="slap" && playerHandsign=="tickle") {
                computerScore==++computerScore;
                document.body.style.background = "blue";
                document.getElementById("npcFace").src="sleep.svg";
                document.getElementById("npcRighthand").src="rightslap.svg";
                document.getElementById("npcLefthand").src="leftslap.svg";
                document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Can't touch this!' *Tee-hee* 'But maybe next time if you're lucky?'`) {
                        document.getElementById('chat').innerHTML = `'Bet you won't try that again!'`;
                        document.getElementById("npcFace").src="indifferent.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Can't touch this!' *Tee-hee* 'But maybe next time if you're lucky?'`;
                    }
            } if (computerHandsign=="tickle" && playerHandsign=="punch") {
                 computerScore==++computerScore;
                 document.body.style.background = "magenta";
                 document.getElementById("npcFace").src="upset.svg";
                 document.getElementById("npcRighthand").src="righttickle.svg";
                 document.getElementById("npcLefthand").src="lefttickle.svg";
                 document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                 document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `*Tickle-tickle* 'You don't really want to hurt your bestest friend, do you?'`) {
                        document.getElementById('chat').innerHTML = `'Wait! Can we talk about this? Just kidding...' *tickle-tickle*`;
                        document.getElementById("npcFace").src="shock.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `*Tickle-tickle* 'You don't really want to hurt your bestest friend, do you?'`;
                    }
            } if (playerHandsign=="tickle" && computerHandsign=="punch") {
                 playerScore==++playerScore;
                 document.body.style.background = "green";
                 document.getElementById("npcFace").src="tickled.svg";
                 document.getElementById("npcRighthand").src="xrightpunch.svg";
                 document.getElementById("npcLefthand").src="xleftpunch.svg";
                 document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                 document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Aw you do love me!'`) {
                        document.getElementById('chat').innerHTML = `*Giggle-giggle* 'Don't stop! Er ohhh no, stop...'`;
                        document.getElementById("npcFace").src="greeting.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Aw you do love me!'`;
                    }
                time = 15;
            } if (playerHandsign=="slap" && computerHandsign=="tickle") {
                  playerScore==++playerScore;
                  document.body.style.background = "darkorange";
                  document.getElementById("npcFace").src="confused.svg";
                  document.getElementById("npcRighthand").src="xrighttickle.svg";
                  document.getElementById("npcLefthand").src="xlefttickle.svg";
                  document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                  document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Ooo look at you Mr. Saucy Pants!'`) {
                        document.getElementById('chat').innerHTML = `'Somebody's a nippy-Nelly!'`;
                        document.getElementById("npcFace").src="moreconfused.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Ooo look at you Mr. Saucy Pants!'`;
                    }
                time = 15;
            } if (playerHandsign=="punch" && computerHandsign=="slap") {
                playerScore==++playerScore;
                document.body.style.background = "purple";
                document.getElementById("npcFace").src="hurtsgood.svg";
                document.getElementById("npcRighthand").src="xrightslap.svg";
                document.getElementById("npcLefthand").src="xleftslap.svg";
                document.getElementById("npcScore").innerHTML = `My Score = ${computerScore}`;
                document.getElementById("yourScore").innerHTML = `Your Score = ${playerScore}`;
                    if (document.getElementById('chat').innerHTML === `'Ow. But it hurts so good!'`) {
                        document.getElementById('chat').innerHTML = `'Please sir, can I have some more?'`;
                        document.getElementById("npcFace").src="beatup.svg";
                    } else {
                        document.getElementById('chat').innerHTML = `'Ow. But it hurts so good!'`;
                    }
                time = 15;
            } 
    }
    playRound();
    
    if (computerScore>=5) {
        document.body.style.background = 'darkred';
        time = 20;
        computerScore = 0;
        playerScore = 0;
        setTimeout(function(){ document.getElementById('chat').innerHTML = "I win!"; }, 1000);
        setTimeout(function(){ document.getElementById("npcFace").src="tickled.svg"; }, 2000);
        setTimeout(function(){ document.getElementById("npcRighthand").src="hearts1.svg"; }, 2100);
        setTimeout(function(){ document.getElementById("npcLefthand").src="hearts2.svg"; }, 2200);
        setTimeout(function(){ document.getElementById('chat').innerHTML = "'Don't be sad. No losers here, tee-hee. I'm you're my friend forever and ever and ever....'"; }, 3000);
        setTimeout(function(){ document.getElementById("npcScore").innerHTML = `'Ahh, it feels good to be on top.`;}, 4000);
        setTimeout(function(){ document.getElementById('chat').innerHTML = ""; }, 5000)
        setTimeout(function(){ isPaused = true; }, 5000)
        setTimeout(function(){ document.getElementById("yourScore").innerHTML = `Play again, my Friend-Muffin? Commit another action.'`;}, 6000);
        
    } if (playerScore>=5) {
        document.body.style.background = 'green';
        time = 20;
        computerScore = 0;
        playerScore = 0;
        setTimeout(function(){ document.getElementById('chat').innerHTML = `"I'm happy you won"`; }, 1000);
        setTimeout(function(){ document.getElementById("npcFace").src="greeting.svg"; }, 2000);
        setTimeout(function(){ document.getElementById("npcRighthand").src="hearts1.svg"; }, 2100);
        setTimeout(function(){ document.getElementById("npcLefthand").src="hearts2.svg"; }, 2200);
        setTimeout(function(){ document.getElementById('chat').innerHTML = "'Think you can beat me again, friend?'"; }, 3000);
        setTimeout(function(){ document.getElementById("npcScore").innerHTML = `'Hope I gave you good vibes to carry along.`;}, 4000);
        setTimeout(function(){ document.getElementById('chat').innerHTML = ""; }, 5000)
        setTimeout(function(){ isPaused = true; }, 5000)
        setTimeout(function(){ document.getElementById("yourScore").innerHTML = `'I'm here all day, Friend-O. Commit another action?'`;}, 6000);    
    }
}
game();