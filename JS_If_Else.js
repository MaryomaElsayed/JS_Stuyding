// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.


// *** IMPORTANT NOTE :
// Date() returns a string of the current date/time
// new Date() creates a Date OBJECT with methods like getHours(), getMinutes(), etc.

let hour = new Date().getHours();
console.log(hour);

if(hour < 18){
	console.log("Good Day!");
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

let age = 15
if(age > 18){
	console.log("Welcome adult!");
} else {
	console.log("Sorry , kido!");
}

// The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

let age2 = 70;
if (age2 > 18 && age2 < 59) {
	console.log("Welcome adult!")
} else if (age2 > 60){
	console.log("Bro , go die!")
} else {
	console.log("Go play else were kido!")
}