/*
Logical Operators
Logical operators are used to combine boolean expressions.

Logical operators can be used to modify the results of comparisons.

Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.
*/

let x = 6;
let y = 3;

// AND &&
let result1 = x < 10 && y > 1;
console.log(result1); // true
console.log(x < 10 && y > 1); // true

// OR ||
let result2 = x === 5 || y === 5;
console.log(result2); // false

// NOT !
// DO NOT FORGET " () "
// !(x === y) is different from !x === y 
let result3 = !(x === y);
console.log(result3); // true


// *** The Nullish Coalescing Operator (??)
/*
The ?? operator returns the first argument if it is not nullish (null or undefined).
Otherwise it returns the second argument.
*/

let name = null; // If it wasn't null it will be the one to be printed .
let text = "missing";
let result4 = name ?? text;
console.log(result4); // "missing"

























