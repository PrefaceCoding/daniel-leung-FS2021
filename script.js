
//variable declaration in JavaScript, quite flexible 
//no explicit data type needed 
//python version 
// index = 0 
var index = 0;

//example for var 
function varTest (){
	var index2 = 1;
	console.log("Test 1 -> Variable 2 is equals to: " + index);
}

function varTest2 (){
	console.log("Test 2 -> Variable 2 is equals to:");
	//var is function scope
	console.log(index2);
}

function letTest () {
	let number = 5;
	console.log(number); 

	//start from i=0,
	//end at i<5,
	//increment by one every loop
	for (let i=0; i<5; i++){
		console.log(i);
	}

	//block scope - let does not exist outside of the closest pair of curly braces
	console.log(i);
}

function constTest(){
	const age = 30;
	console.log(age);
	age++;
}

//function call in JavaScript
varTest();
//varTest2();
//letTest();
//constTest();

//JavaScript callback, calling functions when a specific event happens  
document.addEventListener("click", varTest);

//anonymous functions 
document.addEventListener("click", function (){
	console.log("This is coming from a nameless function");
});

//arrow functions 
document.addEventListener("click", () => {
	console.log("This is coming from an arrow function");
});


let addition = function (a, b){
	return a+b;
};

//events in JavaScript 
//click 
//DOMContentLoaded
//mousedown - left mouse click 
//keydown 
//mouseover











