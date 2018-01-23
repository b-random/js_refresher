var age = prompt("What is your age?");
//var squared = Math.sqrt(age);

if(age % Math.sqrt(age) === 0){//if(Number.isInteger(squared) && squared * squared == age){
	console.log("PERFECT SQUARE!");
} else if(age < 18 && age % 2 === 1){
	console.log("Your age is odd.");
} else if(age < 18){
	console.log("Sorry kid, but you are too young to get in!");
} else if(age < 21 && age % 2 === 1){
	console.log("Your age is odd.");
} else if(age < 21){ 
	console.log("You may enter, but you cannot drink!");
} else if(age == 21){
	console.log("Happy 21st Birthday!");
} else {
	console.log("Have a good time!");
};