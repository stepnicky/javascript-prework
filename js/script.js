let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors');

playRock.addEventListener("click", function(){
    playGame(1);
});
playPaper.addEventListener("click", function(){
    playGame(2);
});
playScissors.addEventListener("click", function(){
    playGame(3);
});

// Result

let computerPoints = 0;
let playerPoints = 0;
