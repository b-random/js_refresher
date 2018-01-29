var myObj = {
	name: "Bob",
	age: 35,
	isCool: false,
	friends: ["jim", "Jerry"], 
	add: function(x, y){
		return x + y;
	}
};

//myObj.add(5, 5);
var a = myObj.add(5, 5);

a + 10;
//20