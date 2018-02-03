var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var reset = document.getElementById('reset');
var h1 = document.querySelector('h1');
var p1Score = document.getElementById('p1Score');
var p2Score = document.getElementById('p2Score');
var p1Counter = 0;
var p2Counter = 0;
var winner = document.getElementById("winner");

//p1Button is click, p1Counter + 1, p1Score.textContent = p1Counter

p1Button.addEventListener("click", function(){
	p1Counter++;
	p1Score.textContent = p1Counter;
	if(p1Counter === 5){
		winner.textContent = "PLAYER ONE WINS!!!"
	}
});

p2Button.addEventListener("click", function(){
	p2Counter++;
	p2Score.textContent = p2Counter;
	if(p2Counter === 5){
		winner.textContent = "PLAYER TWO WINS!!!"
	} 
});

reset.addEventListener("click", function(){
    p1Counter = 0;
	p1Score.textContent = "0";
	p2Counter = 0;
	p2Score.textContent = "0";
    winner.textContent = " ";
});