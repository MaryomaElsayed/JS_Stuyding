// String TOOOOO Number

// [1] Number() → converts the whole string.
let str = "42";
let num = Number(str);
console.log(num); // 42

// [2] parseInt() → converts to integer, stops at first non-digit.
let str2 = "5jss2px";
let num2 = parseInt(str2);
console.log(num2); // result is 5 onlyyyyy - j ❌ (not a digit), so it stops there.

// [3] parseFloat() → converts to floating-point (decimal).
// let str3 = "3.1n4" the result will be 3.1 - it will stop when "n" (not a digit)
let str3 = "3.14 meters";
let num3 = parseFloat(str3);
console.log(num3); // 3.14

// 🔹 Operators (shortcuts)
// [4] Unary plus (+)
let str4 = "123";
let num4 = +str4;
console.log(num4); // 123

// [5] Multiplying by 1
let str5 = "50";
let num5 = str5 * 1;
console.log(num5); // 50


// ----------------------------------------------------------------------------------
// *******             Number Toooooo String           ************

// [1] String() function
let num6 = 123;
let str6 = String(num6);
console.log(str6);       // "123"
console.log(typeof str6); // "string"


// [2] .toString() method
let num7 = 123;
let str7 = num7.toString();
console.log(str7);       // "123"
console.log(typeof str7); // "string"


// [3] Concatenate with an empty string
let num8 = 123;
let str8 = num8 + "";
console.log(str8);       // "123"
console.log(typeof str8); // "string"


// [4] Template literals
let num9 = 123;
let str9 = `${num9}`;
console.log(str9);       // "123"
console.log(typeof str9); // "string"

