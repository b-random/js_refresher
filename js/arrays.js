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


//revised todo list with 'delete'

//var todo = [];

//var input = prompt("What would you like to do?");


//while(input !== "quit"){
//	if(input === "list"){
//		todo.forEach(function(add, i){
//			console.log(i + 1 + ": " + todo[i]);
//		})
//	} else if(input === "new") {
//		var newItem = prompt("Add a new task to the list:");
//		todo.push(newItem);
//	} else if(input === "delete") {
//		var number = prompt("Number of item you would like to remove:");
//		todo.splice(number - 1, 1);
//		todo.forEach(function(i){
//		
//		})
//	}
//	input = prompt("What would you like to do?");
//};

//
//var input = prompt("What would you like to do?");


//function addNew(){
//	var newItem = prompt("Add a new task to the list:");
//	todo.push(newItem);
//};

//function listAll(){
//	todo.forEach(function(add, i){
//		console.log(i + 1 + ": " + todo[i]);
//	});
//};

//function removeIndex(){
 // var number = prompt("Number of item you would like to remove:");
 // todo.splice(number - 1, 1);
 // todo.forEach(function(i){
 // });
//};

//while(input !== "quit"){
	//if(input === "list"){
	//	listAll();//
	//} else if(input === "new") {
	//	addNew();
	//} else if(input === "delete") {
	//	removeIndex();
	//}
	//input = prompt("What would you like to do?");
//};

//alert("Goodbye.");

//Arrays Exercises

//log an array backwards without changing the original array

//var testArr = [100, 100, 100];

//function printReverse(){
//  for(var i = arr.length; i > 0; i--){
//	console.log(arr[i - 1]);
//  };
//};

//check array for uniformness, true or false

//function isUniform(arr){
//    var first = arr[0];
//	for(var i = 1; i < arr.length; i++){
//		if(arr[i] !== first){
//			return false;
//		};
//	};	
//	return true;	
//};


// sum of array

//function sumArray(arr){
//	var count = 0;
	
//      arr.forEach(function(current){
//		count = count + current;
//	  });
	  
//	return count
//};



//return highest numerical value, assume all values are numbers
//var testArr = [100, 300, 200];

//function max(x){
//	var holder = x[0];
//    for(var i = 1; i < x.length; i++){
//      if(x[i] > holder){
//      	holder = x[i];
//      }   
//    }; 
//    return holder;
//};

//breaking down the forEach logic

//function myForEach(arr, func){
//	for(var i = 0; i < arr.length; i++){
//		func(arr[i]);
//	};
//};
//
//myForEach([1, 2, 3], function(x){
//   console.log(x + 1);
//})

//create myforEach as an object

Array.prototype.myforEach = function(func){
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	};
};

// call the object

var nums = [2, 5, 9];

nums.myforEach(function(x){
	console.log(x);
});






