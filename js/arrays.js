//var arr = ["red", "white", "blue"];
//function printer(x){
//	console.log(arr[x]);
//};

//printer(1);// white

//var arr = ["red", "white", "blue"];

//arr.push("green");// adds to end

//arr.pop();// removes from end

//arr.unshift("yellow");//add to beginning

//arr.shift();//remove from beginning




//var arr = [
//  [1, 2, 3],
//  ["red", "white", "blue"],
//  ["Bob", "Bill", "Brad"]
//];

//console.log(arr[1][2]);//blue

//var todo = ["school"];

//var input = prompt("What would you like to do?");

//while(input !== "quit"){
//	if(input == "list"){
//		console.log(todo);
//	} else if(input === "new") {
//		var newItem = prompt("Add a new task to the list:");
//		todo.push(newItem);
//	}
//	input = prompt("What would you like to do?");
//};

//console.log("Goodbye.");

//Array iteration

//var color = ['red', 'blue', 'yellow', 'green'];

//for(var i = 0; i < color.length; i++){
//	console.log(color[i]);
//}

//var color = ['red', 'blue', 'yellow', 'green', 'orange'];

//color.forEach(function(x){
//	console.log(x);
//});

//extracting the functionality of the forEach method:

//var colorList = ['red', 'blue', 'yellow', 'green', 'orange'];

//function printColor(color){
//	console.log(color);
//};

//printColor("red");

//colorList.forEach(printColor);

//the same as a for loop

//for(var i = 0; i < colorList.length; i++){
//	console.log(colorList[i]);
//};

var todo = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){
	if(input === "list"){
		todo.forEach(function(add, i){
			console.log(i + 1 + ": " + todo[i]);
		})
	} else if(input === "new") {
		var newItem = prompt("Add a new task to the list:");
		todo.push(newItem);
	} else if(input === "delete") {
		var number = prompt("Number of item you would like to remove:");
		todo.splice(number - 1, 1);
		todo.forEach(function(i){
		
		})
	}
	input = prompt("What would you like to do?");
};




