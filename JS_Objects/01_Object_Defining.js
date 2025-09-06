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

// [2] Using the new Keyword
const person2 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


const man = Object.create(person);
console.log(man);
man.firstName = "ahmed";
console.log(man);



