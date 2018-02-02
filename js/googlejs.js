//find all links

var links = document.getElementsByTag("a");

for(var i - 0; i < links.length; i++){
	console.log(links[i].getAttribute("href"));
};
//loops through and prints all links

//set all links to www.somesite.com

for(var i - 0; i < links.length; i++){
	links[i].setAttribute("href", "http://www.somesite.com");
};