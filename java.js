function getComputerSelection(){
	x = Math.floor(Math.random()*(3-1+1) + 1);
	alert(x);
}

/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

function getplayerSelection() {
	y=prompt ('Choose your gun: 1) Paper; 2) Rock; 3)Scissor');
	alert(y);
}



function playRound(playerSelection, computerSelection) {
	/*
	1)paper;
	2)rock;
	3)scissor;
	*/
	

	switch (true) {
    	case playerSelection == 1 && computerSelection == 2:
        	alert("Player Won: paper win rock");
        	break;
    	case playerSelection == 2 && computerSelection == 1:
        	alert("Computer Won: paper win rock");
        	break;
    	case playerSelection == 1 && computerSelection == 3:
        	alert("Computer Won: scissor win paper");
        	break;
    	case playerSelection == 3 && computerSelection == 1:
        	alert("Player Won: scissor win paper");
        	break;
    	case playerSelection == 2 && computerSelection == 3:
        	alert("Player Won: rock win scissor");
        	break;
    	case playerSelection == 3 && computerSelection == 2:
        	alert("Computer Won: rock win scissor");
        	break;
    	case playerSelection == computerSelection:
        	alert("It was a tie");
        	break;
    	default:
        	alert("Something went horribly wrong...");
		
	}

}

	console.log(playRound(getplayerSelection(), getComputerSelection()));
	


//game()---> Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.