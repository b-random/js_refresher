//.text()

$('li').text();
//  "DogCatPig"

$('ul').text();
//"
//  Dog
//  Cat
//  Pig
//"

$('li').text("abcdefg");
//changes li tags to new text


// .html()
$('li:first-of-type').html("<a href='google.com'>Google!</a>");



//.attr() method for changing attributes

//console.log($("img").css("width")); //find width

$("img").css("width", "300px")
$("img").css("height", "175px")

$("img").attr("src", "https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/3/40/153128077.jpg");

console.log($("input").attr("type"));

$("input").attr("type", "checkbox");