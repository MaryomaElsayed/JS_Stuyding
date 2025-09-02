// [1] The For Loop

for (let i = 0; i < 10; i++){
	console.log(i);
}

// [2] The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

let text = "";
let a = 0;

while (a < 10){
	text += "The number is " + a + "\n";
	a++;
}
console.log(text);


// [3] The Do While Loop
// The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// NOTE : The do while runs at least once, even if the condition is false from the start.
let text2 = "";
let b = 0;
do {
  text2 += "The NUMBER is " + b + "\n";
  b++;
}
while (b < 10);
console.log(text2)
