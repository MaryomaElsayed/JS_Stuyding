/*
  Topic: Assignment (=) vs Compound Assignment (+=, -=, etc.) in JavaScript

  1) Plain assignment (=)
     - Replaces the previous value with a new one.
     - Whatever was in the variable before is discarded.

     Example:
*/
let msg = "";
msg = "Hello";
msg = "World"; // The previous "Hello" is replaced
console.log(msg); // -> "World"

/*
  2) Compound assignment (+=, -=, *=, /=, %=, **=)
     - Reads the current value, applies the operation, then stores the result back.
     - With numbers, += adds; with strings, += concatenates (joins).

     Examples:
*/
let total = 10;
total += 5; // total = total + 5  -> 15
total *= 2; // total = total * 2  -> 30
console.log(total); // -> 30

let text = "Hello";
text += " ";
text += "World"; // text = text + "World"
console.log(text); // -> "Hello World"

/*
  3) Building strings in loops: why += is useful
     - Each iteration appends to the existing string instead of replacing it.
*/
let lines = "";
let i = 0;
while (i < 3) {
  lines += "Line " + i + "\n"; // append to the existing content
  i++;
}
console.log(lines);
/*
  Output:
  Line 0
  Line 1
  Line 2
*/

/*
  4) What happens if you use '=' inside the loop?
     - You overwrite the previous content every time, so you only keep the last line.
*/
let overwritten = "";
let j = 0;
while (j < 3) {
  overwritten = "Line " + j + "\n"; // replaces the whole string each time
  j++;
}
console.log(overwritten); 
// -> Only "Line 2" remains

/*
  5) Initialization matters
     - Using += on an uninitialized (undefined) variable with numbers produces NaN.
     - Always initialize before compound assignment.
*/
let sum;          // sum is undefined
// sum += 5;      // BAD: undefined + 5 -> NaN
sum = 0;          // Initialize first
sum += 5;         // Now it's safe -> 5
console.log(sum); // -> 5

/*
  6) Strings vs Arrays vs Objects
     - Strings are immutable; text += "x" creates a new string each time (fine for small/medium text).
     - Arrays/objects with '=' copy the REFERENCE, not a deep copy.
       Be careful: changing one reference can affect another variable pointing to the same array/object.
*/
let arrA = [1, 2];
let arrB = arrA;      // arrB references the same array as arrA
arrB.push(3);
console.log(arrA);    // -> [1, 2, 3]  (arrA changed too)
console.log(arrB);    // -> [1, 2, 3]

/*
  If you want a separate copy of an array:
*/
let original = [1, 2, 3];
let copy1 = original.slice();     // shallow copy
let copy2 = [...original];        // shallow copy (spread)
copy1.push(4);
console.log(original); // -> [1, 2, 3]
console.log(copy1);    // -> [1, 2, 3, 4]

/*
  7) Readability tip: template literals for cleaner concatenation
*/
let name = "Maryam";
let age = 20;
let info = `Name: ${name}, Age: ${age}`; // Easier to read than "Name: " + name + ", Age: " + age
console.log(info);

/*
  Key takeaways:
  - '=' overwrites.
  - '+=' appends (strings) or adds (numbers) to the existing value.
  - Initialize before compound ops to avoid NaN with numbers.
  - '=' on arrays/objects copies references; use spread/slice for copies.
*/
