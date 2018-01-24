//function test(x, y){
//	console.log(y-x);
//	return y - x;
//};
//
//test(10, 40);

//var isEven = function(n){
//	if(n % 2 === 0){
//		return true;
//	} else {
//		return false;
//	};
//};

//var fact = function(n){
//	if(n === 0 || n === 1){
//		return 1;
//	};
//	for(var i = n -1; i >= 1; i--){
//		n = n * i;
//	};
//  	return n;
//};

function SnakeToKebab(str) {
	var newStr = str.replace(/_/g, "-");
	return newStr;
};

