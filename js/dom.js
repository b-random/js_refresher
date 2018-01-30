//var h1 = document.querySelector("h1");

//var body = document.querySelector("body");
//var isBlue = false;

//setInterval(function(){
//  if(isBlue){
//  	body.style.background = "white";
//  	h1.style.color = "red";
//  } else {
//  	body.style.background = "#3498db"
//  	h1.style.color = "orange";
//  }
//  isBlue = !isBlue;
//}, 1000);

//Dom selector methods...

//.getElementById
var tag = document.getElementById("highlight");
tag.style.color = "orange";

//.getElementsByClassName
var tags = document.getElementsByClassName("bolded");
tags[0].style.color = "red"; //ByClassName returns an array and the elements must be referred to by position

//.getElementsByTagName
var elTag = document.getElementsByTagName("li");
elTag[1].style.fontWeight = 800;

//iterate through all elements returned by TagName^
function thruElTag(arr){
	for(var i = 0; i < arr.length; i++ ){
		arr[i].style.color = "pink";
	};
};

thruElTag(elTag);

//.querySelector
//returns first of kind

var first = document.querySelector("h1");
first.style.color = "red";
