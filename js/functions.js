function displayResult(argComputerMove, argPlayerMove){
    console.log('moves: ', argComputerMove, argPlayerMove);
    
    printMessage('Wybrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
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