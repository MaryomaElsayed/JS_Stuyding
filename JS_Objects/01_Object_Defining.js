/*
Methods for Defining JavaScript Objects
Using an Object Literal
Using the new Keyword
Using an Object Constructor
Using Object.assign()
Using Object.create()
Using Object.fromEntries()
*/

// [1] Object Literal
const Human = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};



// [2] Using the new Keyword
const New_Human = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});


// [3] Object.create()

// The "base" object
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create a new object with prototype set to person
const man = Object.create(person);

console.log("Before changing anything:");
console.log("man.firstName:", man.firstName);   // → "John" (from prototype)
console.log("person.firstName:", person.firstName); // → "John"

// --- CASE 1: Shadowing (default behavior) ---
man.firstName = "Peter"; // adds a new property on "man"

console.log("\nAfter setting man.firstName = 'Peter':");
console.log("man.firstName:", man.firstName);   // → "Peter" (own property)
console.log("person.firstName:", person.firstName); // → "John" (unchanged)
console.log("man.__proto__.firstName:", man.__proto__.firstName); // → "John"

// --- CASE 2: Modifying the prototype property directly ---
man.__proto__.firstName = "Michael"; // changes "person.firstName"

console.log("\nAfter changing man.__proto__.firstName = 'Michael':");
console.log("man.firstName:", man.firstName);   // → "Peter" (still own property)
console.log("person.firstName:", person.firstName); // → "Michael"
console.log("man.__proto__.firstName:", man.__proto__.firstName); // → "Michael"



// [4] Object.fromEntries() => creates an object from iterable key / value pairs.
// Object.fromEntries():
// - Converts an array of [key, value] pairs (or a Map) into an object.
// - Each inner array's first item = property name (key).
// - Each inner array's second item = property value.
// Example:
//   [["name", "Ahmed"], ["age", 25]] → { name: "Ahmed", age: 25 }

const arr = [
  ["name", "Ahmed"],
  ["age", 25],
  ["city", "Cairo"]
];

const arrPerson = Object.fromEntries(arr);

console.log(arrPerson);
// output = { name: "Ahmed", age: 25, city: "Cairo" }
