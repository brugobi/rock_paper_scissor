function getComputerSelection(){
	numberComputer = Math.floor(Math.random()*(3-1+1) + 1);
    return(numberComputer);
	
}

/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

function getplayerSelection() {
	numberPlayer = prompt ('Choose your gun: 1) Paper; 2) Rock; 3)Scissor');
	return(numberPlayer);
}



function playRound(playerSelection, computerSelection) {
	/*
	1)paper;
	2)rock;
	3)scissor;
	*/

        if (playerSelection == 1 && computerSelection == 2){
            alert("Player Won: paper win rock");
        }else if (playerSelection == 2 && computerSelection == 1){
            alert("Computer Won: paper win rock");
        }else if (playerSelection == 1 && computerSelection == 3) {
            alert("Computer Won: scissor win paper");
        }else if (playerSelection == 3 && computerSelection == 1) {
        	alert("Player Won: scissor win paper");
        }else if (playerSelection == 2 && computerSelection == 3) {
            alert("Player Won: rock win scissor");
        }else if (playerSelection == 3 && computerSelection == 2) {
            alert("Computer Won: rock win scissor");
        }else {
            alert("It was a tie");
        }
}
    
    
	console.log(playRound(getplayerSelection(), getComputerSelection()));
	


//game()---> Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.