//Basic object key/value pair

var person1 = {
	name: "Bob",
	age: 37,
	city: "Austin"
};

//two ways to call
//console.log(person1.name);
//
//var str = "city";

//if key is set to a variable, it must be called with brackets


//console.log(person1[str]);

//reassign a keys value

//person1.name = "John";

//console.log(person1);

//var person2 = new Object();

//person2.job = "Tech";
//person2.weight = 190;

//console.log(person2);

//Objects in arrays

var posts = [
    {
      title: "First Post",
      author: "BB",
      comments: {"Good post", "5 stars"}             
    }, 
    { 
      title: "Post number 2",
      author: "Dr. Dude"
    }
];

posts[0].author
////"BB"
posts[1].author
////"Dr. Dude"
posts[0].comments[1]
////"5 stars"