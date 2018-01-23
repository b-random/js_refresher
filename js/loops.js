//var num = 1;

//while(num <= 10){
//	console.log(num);
//	num++;
//};

//var str = "howdy";
//var count = 0;
//
//while(count < str.length) {
//	console.log(str[count]);
//	count++;
//}

//var num = 1;
//
//while(num <= 10) {
//	console.log(num);
//	num += 2;//
//}

//var num = 1;

//while(num <= 20) {
//	if(num % 4 === 0) {
//    console.log(num);
//};
//	num++;
//};


//Infinite loop!!!!
//var num = 100;
//
//while(num < 150) {
//	console.log(num + 1);
//	num--;
//};

var q = prompt("Are we there yet?");


while(q !== 'yes' && q !== 'yeah') {
	if(q.includes("yes") == true || q.includes("yeah") == true) {
		break;
	} else {
	var q = prompt("Are we there yet?");
    };
};

console.log("Yay!  We are there!");
