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
//var tag = document.getElementById("highlight");
//tag.style.color = "orange";

//.getElementsByClassName
//var tags = document.getElementsByClassName("bolded");
//tags[0].style.color = "red"; //ByClassName returns an array and the elements must be referred to by position

//.getElementsByTagName
//var elTag = document.getElementsByTagName("li");
//elTag[1].style.fontWeight = 800;

//iterate through all elements returned by TagName^
//function thruElTag(arr){
//	for(var i = 0; i < arr.length; i++ ){
//		arr[i].style.color = "pink";
//	};
//};

//thruElTag(elTag);

//.querySelector
//returns first of kind

//var first = document.querySelector("h1");
//first.style.color = "red";

//to target id's or classes with querySelector

//var firstId = document.querySelector("#highlight");
//firstId.style.fontWeight = 800;

//
//var all = document.querySelectorAll("h1");
//
//all[1].style.color = "orange";



//Find 4 different ways to query the first <p> tag

//var p = document.querySelector('#firstp');
//p.style.fontStyle = "italic";//

//var p2 = document.querySelectorAll('p');
//p2[0].style.fontWeight = 800;//

//var p3 = document.getElementsByTagName('p');
//p3[0].style.color = '#ff0381';//

//var p4 = document.getElementsByClassName('firstp');
//p4[0].style.textDecoration = "underline"

//using js to enable defined css classes

//var img1 = document.getElementsByClassName('img1');
//img1[0].classList.add("some-class");//

//var h1 = document.getElementsByTagName("h1");
//h1[1].classList.add("another-class");//

//var anotherh1 = document.getElementsByTagName("li");
//anotherh1[2].classList.toggle("bolded"); //toggle enales/disables with each iteration.  very useful for onClick



//textContent vs innerHTML

//var p = document.getElementsByTagName("p")[1];
//p.textContent = "test test test"; //replaces with text//

//var ul = document.querySelector("ul");
//ul.innerHTML // shows all html tags

//"
//<li id="highlight">Item 1</li>
//<li class="bolded">Item 2</li>
//<li class="bolded">Item 3</li>	
//"

//querying attributes

//var link = document.querySelector('a');
//link.setAttribute("href", "https://www.reddit.com");
////changes the destination, but not the hyperlink
//link.textContent = "Go Reddit!"
////update the textContent to change the hyperlink text//

//var img = document.querySelector('img');
//img.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/2016-07/20/11/campaign_images/buzzfeed-prod-fastlane02/16-corgi-mixes-that-will-melt-your-cold-unloving--2-2759-1469026977-1_dblbig.jpg");
////changes image

