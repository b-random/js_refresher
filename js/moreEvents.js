var first = document.querySelectorAll("li");

//first.addEventListener("mouseover", function(){
//	first.style.color = "red";
//});//

//first.addEventListener("mouseout", function(){
//	first.style.color = "black";
//});

for(var i = 0; i < first.length; i++){
	first[i].addEventListener("mouseover", function(){
	  this.style.color = "red";
    });

    first[i].addEventListener("mouseout", function(){
	  this.style.color = "black";
    });

    first[i].addEventListener("click", function(){
    	this.classList.toggle("done");
    });
};