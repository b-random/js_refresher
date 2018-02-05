var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var reset = document.getElementById('reset');
var h1 = document.querySelector('h1');
var p1Score = document.getElementById('p1Score');
var p2Score = document.getElementById('p2Score');
var p1Counter = 0;
var p2Counter = 0;
var winner = document.getElementById("winner");
var gameOver = false;
var newInput = document.querySelector("input");
var playTo = document.querySelector("h4 span");
var winningNumber = 5;

//p1Button is click, p1Counter + 1, p1Score.textContent = p1Counter

//p1Button.addEventListener("click", function(){
//	p1Counter++;
//	p1Score.textContent = p1Counter;
//	if(p1Counter === 5){
//		winner.textContent = "PLAYER ONE WINS!!!"
//	}
//});//

//p2Button.addEventListener("click", function(){
//	p2Counter++;
//	p2Score.textContent = p2Counter;
//	if(p2Counter === 5){
//		winner.textContent = "PLAYER TWO WINS!!!"
//	} 
//});//

//reset.addEventListener("click", function(){
//    p1Counter = 0;
//	p1Score.textContent = "0";
//	p2Counter = 0;
//	p2Score.textContent = "0";
//    winner.textContent = " ";
//});

p1Button.addEventListener("click", function(){
  if(!gameOver){ //if gameOver is false
    p1Counter++;
    if(p1Counter === winningNumber){
    	p1Score.classList.add("scoreColor");
    	gameOver = true;
    	winner.textContent = "Player 1 wins!"
    };
  }; 
  p1Score.textContent = p1Counter;
});

p2Button.addEventListener("click", function(){
  if(!gameOver){ //if gameOver is false
    p2Counter++;
    if(p2Counter === winningNumber){
    	p2Score.classList.add("scoreColor");
    	gameOver = true;
    	winner.textContent = "Player 2 wins!"
    };
  }; 
  p2Score.textContent = p2Counter;
});

reset.addEventListener("click", function(){
	resetAll(); 
});

newInput.addEventListener("change", function(){
	playTo.textContent = newInput.value;
	winningNumber = Number(newInput.value);
});

function resetAll(){
	p1Counter = 0;
	p2Counter = 0;
	p1Score.textContent = p1Counter;
	p2Score.textContent = p2Counter;
	gameOver = false;
	winner.textContent = "";
	p1Score.classList.remove("scoreColor");
	p2Score.classList.remove("scoreColor");
	newInput.value = "";
	winningNumber = 5;
	playTo.textContent = winningNumber;
};

