const updateResult = function (){
    const result = document.getElementById('result');
    result.innerHTML = playerPoints + ' - ' + computerPoints;
}


 const playGame = function(playerInput){
    clearMessages();
    const backgroundImage = document.getElementById('messages');
    backgroundImage.style.setProperty('display', 'block');
    backgroundImage.animate([
        { transform: 'rotate(10deg)' },
        { transform: 'rotate(-10deg)' },
        { transform: 'rotate(10deg)' },
        { transform: 'rotate(-10deg)' },
        { transform: 'rotate(0)' }
    ], {
        duration: 2000
    });
    // Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    // Player move

    
    console.log('Gracz wybrał: ' + playerInput);
    let playerMove = getMoveName(playerInput);

    // Game result

    displayResult(computerMove, playerMove);
    setTimeout(()=>{
        backgroundImage.style.setProperty('display', 'none');
    }, 4000);
}

 const displayResult = function (argComputerMove, argPlayerMove){
    console.log('moves: ', argComputerMove, argPlayerMove);
    
    setTimeout(()=>{
        printMessage('I choose ' + argComputerMove + ', and you choose ' + argPlayerMove + '.');
    }, 2000);
    
    
    if (argComputerMove == 'rock' && argPlayerMove == 'paper' || argComputerMove == 'paper' && argPlayerMove == 'scissors' || argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        setTimeout(()=>{
            printMessage('You win!');
        }, 2000);
        playerPoints += 1;
        setTimeout(updateResult, 2000);
    } else if (argComputerMove == 'rock' && argPlayerMove == 'scissors' || argComputerMove == 'paper' && argPlayerMove == 'rock' || argComputerMove == 'scissors' && argPlayerMove == 'paper') {
        setTimeout(()=>{
            printMessage('I win!');
        }, 2000);
        computerPoints += 1;
        setTimeout(updateResult, 2000); 
    } else if (argComputerMove == argPlayerMove) {
        setTimeout(()=>{
            printMessage("It's a tie!");
        }, 2000);   
    }
}

 const getMoveName = function (MoveId){
    if(MoveId == 1){
      return 'rock';
    } else if (MoveId == 2) {
        return 'paper';
    } else if (MoveId == 3) {
        return 'scissors';
    }
}

const printMessage = function (msg){
	let h2 = document.createElement('h2');
	h2.innerHTML = msg;
	document.getElementById('display').appendChild(h2);
}

const clearMessages = function (){
	document.getElementById('display').innerHTML = '';
}