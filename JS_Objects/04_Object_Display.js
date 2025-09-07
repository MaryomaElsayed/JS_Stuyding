// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;
console.log(text);


// [2] Using a For .. In Loop :
// Build a Text
let text2 = "";
for (let x in person) {
  text2 += person[x] + " ";
};
console.log(text2)