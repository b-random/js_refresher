//var hh = document.querySelector("h1");//

//hh.addEventListener("click", function(){
//  hh.textContent = "Howdy!";
//  hh.style.background = "orange"
//});

//how to select and creat an event on specific, buried elements
//var li = document.querySelectorAll("li");

//for(var i = 0; i < li.length; i++){
//	li[i].addEventListener("click", function(){
//		this.style.color = "red";
//	})
//}
//adds event on click to each li individually

 //do the same thing, but without using an annonymous function

var li = document.querySelectorAll("li");

var change = function(){
	this.style.color = "yellow"
};

for(var i = 0; i < li.length; i++){
	li[i].addEventListener("click", change);
};
