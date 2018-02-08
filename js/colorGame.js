var colors = [
  "rgb(225, 0, 0)",
  "rgb(225, 225, 0)",
  "rgb(225, 0, 225)",
  "rgb(0, 225, 0)",
  "rgb(0, 225, 225)",
  "rgb(0, 0, 225)"
 ];

var squares = document.querySelectorAll(".square");
var colorPicked = colors[3];
var rgbSpan = document.getElementById("rgb");
var message = document.getElementById("message");

rgbSpan.textContent = colorPicked;



 for(var i = 0; i < squares.length; i++){

 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click", function(){
 		var clickedColor = this.style.backgroundColor;
 		if(clickedColor === colorPicked){
 			message.textContent = "Correct!"
 			changeColor(clickedColor);
 		} else {
 			this.style.backgroundColor = '#232323';
 			message.textContent = "Try Again!"
 		}
 	});

};

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  };
};