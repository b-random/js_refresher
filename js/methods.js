//var myObj = {
//	name: "Bob",
//	age: 35,
//	isCool: false,
//	friends: ["jim", "Jerry"], 
//	add: function(x, y){
//		return x + y;
//	}
//};

//myObj.add(5, 5);
//var a = myObj.add(5, 5);

//a + 10;
//20

//methods allow you to group create functions of the same name at different areas of an object

var dog = {
	species: "dog",
	name: "Spot",

	says: function(){
		console.log("WOOF!");
	}
};

var cat = {
	species: "cat",
	name: "Tabby",
	says: function(){
		console.log("MEOW!");
	}
};

dog.says();
cat.says();

var bird = {};

bird.says = function(){
	console.log("TWEET-TWEET!");
};

bird.says();