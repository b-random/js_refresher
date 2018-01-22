var age = prompt("What is your age?");
if(age < 18){
	console.log("Sorry youngin\', but you are too young to get in!");
} else if(age > 18 && age < 21){
	console.log("You can get in the club, but no drinking!");
} else {
	console.log("Have a good time!");
};