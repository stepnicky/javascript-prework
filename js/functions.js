function updateResult(){
    let result = document.getElementById('result');
    result.innerHTML = playerPoints + ' - ' + computerPoints;
}


function playGame(playerInput){
    clearMessages();

    // Computer move

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    // Player move

    
    console.log('Gracz wybrał: ' + playerInput);
    let playerMove = getMoveName(playerInput);

    // Game result

    displayResult(computerMove, playerMove);
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves: ', argComputerMove, argPlayerMove);
    
    printMessage('I choose ' + argComputerMove + ', and you choose ' + argPlayerMove + '.');
    
    if (argComputerMove == 'rock' && argPlayerMove == 'paper' || argComputerMove == 'paper' && argPlayerMove == 'scissors' || argComputerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('You win!');
        playerPoints += 1;
        updateResult();
    } else if (argComputerMove == 'rock' && argPlayerMove == 'scissors' || argComputerMove == 'paper' && argPlayerMove == 'rock' || argComputerMove == 'scissors' && argPlayerMove == 'paper') {
        printMessage('I win!');
        computerPoints += 1;
        updateResult();
    } else if (argComputerMove == argPlayerMove) {
        printMessage("It's a tie!");   
    }
}

function getMoveName(MoveId){
    if(MoveId == 1){
      return 'rock';
    } else if (MoveId == 2) {
        return 'paper';
    } else if (MoveId == 3) {
        return 'scissors';
    }
}

function printMessage(msg){
	let h3 = document.createElement('h3');
	h3.innerHTML = msg;
	document.getElementById('messages').appendChild(h3);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}