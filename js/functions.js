
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
    
    printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');   
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Wykonałeś nieznany ruch...');
    }
}

function getMoveName(MoveId){
    if(MoveId == 1){
      return 'kamień';
    } else if (MoveId == 2) {
        return 'papier';
    } else if (MoveId == 3) {
        return 'nożyce';
    } else {
        return 'nieznany ruch';
    }
}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}