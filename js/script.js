{
const playRock = document.getElementById('play-rock'),
playPaper = document.getElementById('play-paper'),
playScissors = document.getElementById('play-scissors');

playRock.addEventListener("click", function(){
    playGame(1);
});
playPaper.addEventListener("click", function(){
    playGame(2);
});
playScissors.addEventListener("click", function(){
    playGame(3);
});
}
let playerPoints = 0, computerPoints = 0;
        
