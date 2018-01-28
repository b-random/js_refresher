//Basic object key/value pair

var person1 = {
	name: "Bob",
	age: 37,
	city: "Austin"
};

//two ways to call
console.log(person1.name);
console.log(person1["age"]);

var str = "city";

//if key is set to a variable, it must be called with brackets


console.log(person1[str]);