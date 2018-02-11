var colors = generateRandomColors(6)
var squares = document.querySelectorAll(".square");
var colorPicked = colorChoice();
var rgbSpan = document.getElementById("rgb");
var stripe1 = document.getElementById("stripe1");
var message = document.getElementById("message");
var title = document.getElementById("title");
var colorButton = document.getElementById("colorButton");

rgbSpan.textContent = colorPicked;

colorButton.addEventListener("click", function(){  
    colors = generateRandomColors(6);
    colorPicked = colorChoice();
    rgbSpan.textContent = colorPicked;
    for(var i = 0; i < squares.length; i++){
    	squares[i].style.background = colors[i];
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor === colorPicked){
 			message.textContent = "Correct!"
 			changeColor(clickedColor);
 			stripe1.style.backgroundColor = colorPicked;
 		} else {
 			this.style.backgroundColor = '#232323';
 			message.textContent = "Try Again!"
 		}
    };
});


for(var i = 0; i < squares.length; i++){
   
 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click", function(){
 		var clickedColor = this.style.backgroundColor;
 		if(clickedColor === colorPicked){
 			message.textContent = "Correct!"
 			changeColor(clickedColor);
 			stripe1.style.backgroundColor = colorPicked;
 			colorButton.textContent = "Play Again?"
 		} else {
 			this.style.backgroundColor = '#232323';
 			message.textContent = "Try Again!"
 		}
 	});

};

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
    title.style.background = color;
  };
};

function colorChoice(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
    for (var i = 0; i < num; i++) {
    	arr.push(randomColor());
    }
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
} 


