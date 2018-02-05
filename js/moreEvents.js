var first = document.querySelector("li");

first.addEventListener("mouseover", function(){
	first.style.color = "red";
});

first.addEventListener("mouseout", function(){
	first.style.color = "black";
});