var first = document.querySelectorAll("li");

//first.addEventListener("mouseover", function(){
//	first.style.color = "red";
//});//

//first.addEventListener("mouseout", function(){
//	first.style.color = "black";
//});

for(var i = 0; i < first.length; i++){
	first[i].addEventListener("mouseover", function(){
	  this.classList.add("colored");
    });

    first[i].addEventListener("mouseout", function(){
	  this.classList.remove("colored");
    });

    first[i].addEventListener("click", function(){
    	this.classList.toggle("done");
    });
};