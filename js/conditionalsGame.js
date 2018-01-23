var secretNumber = 4;
var guess = Number(prompt("Guess a number to win!!!"));

if(guess === secretNumber){
	alert("You guessed the secret number, 4! You are a winner!");
} else if(guess < secretNumber){
	alert("Too low, guess again.");
} else {
	alert("Too high, guess again.");
};