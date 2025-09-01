/* 
Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/

// To Create An Array
const array1 = ["item1" , "item2" , "item3"];
console.log(array1)

//You can also create an empty array, and provide elements later:
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

console.log(cars);


// Accessing Array Elements
let first_car = cars[0];

// Changing an Array Element
cars[0] = "Opel";

// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Array Elements Can Be Objects
/*
Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
*/

function myFunction(){
	console.log("Hello from myFunction!");
}

const myArray2 = [];
myArray2[0] = Date.now();
myArray2[1] = myFunction;
myArray2[2] = cars;
console.log(myArray2);


// The length Property
// The length property of an array returns the length of an array (the number of array elements).
// NOTE : The length property is always one more than the highest array index.

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

// Accessing the Last Array Element
lastFruit = fruits2[fruits2.length - 1];

console.log(lastFruit);


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let flen = fruits3.length;

let text = "<ul>";
for (let i = 0 ; i < flen; i++){
	text += "<li>" + fruits3[i] + "</li>"
}

text += "</ul>";

document.getElementById("demo").innerHTML = text;



// Adding Array Elements : using the push() method
 const animals = ["elephant" , "lion" , "tiger"];
 console.log(animals);
 animals.push("fish");
 console.log(animals);


// How to Recognize an Array ??
//The problem is that the JavaScript operator typeof returns "object":
// Solution 1: """Array.isArray()"""

let answer = Array.isArray(animals);
console.log(answer);


























