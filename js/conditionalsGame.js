var secretNumber = 4;
var guess = prompt("Guess a number to win!!!");

if(Number(guess) === secretNumber){
	alert("You guessed the secret number, 4! You are a winner!");
} else {
	alert("Womp, womp. Sorry, you are a loser.");

};