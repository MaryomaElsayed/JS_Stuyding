// DOM Mannipulation

// [1] getElementById()
// getElementById("idName")
// → Finds ONE element in the page with the given id.
// IDs are unique, so this returns only a single element (or null if not found).
//
// Examples:
// getElementById("title") → finds the element <h1 id="title">
// getElementById("para") → finds the element <p id="para">

const title = document.getElementById('main-heading');
console.log(title)



// [2] getElementsByClassName
// getElementsByClassName("className")
// → Finds ALL elements in the page that have the given class.
// It returns an HTMLCollection (a live list, updates if the DOM changes).
//
// Examples:
// getElementsByClassName("box") → finds all elements with class="box"
// getElementsByClassName("text") → finds all elements with class="text"
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

// [3] getElementsByTagName()
// getElementsByTagName("tagName")
// → Finds ALL elements in the page (or inside a chosen element)
// that match the tag you write (like "div", "h1", "li", etc.)
// It gives back a list of elements (called HTMLCollection).
//
// Examples:
// getElementsByTagName("h1") → finds all <h1> headings
// getElementsByTagName("div") → finds all <div> containers
// getElementsByTagName("li") → finds all <li> list items
const listItems2 = document.getElementsByTagName('li');
console.log(listItems2);


// [4] querySelector()
// querySelector("CSS selector")
// → Finds the FIRST element in the page that matches the CSS selector you write.
// A selector can be a tag ("h1"), a class (".item"), or an id ("#title").
// If there are many matches, it only returns the first one.
// If nothing matches, it returns null.
//
// Examples:
// querySelector("h1") → finds the first <h1> heading
// querySelector(".item") → finds the first element with class="item"
const container = document.querySelector('div');
console.log(container);



// [5] querySelectorAll
// querySelectorAll("CSS selector")
// → Finds ALL elements in the page that match the CSS selector you write.
// It returns a NodeList (a list that looks like an array).
// Unlike getElementsByTagName or getElementsByClassName,
// the NodeList is "static" → it does NOT auto-update if the DOM changes.
//
// Examples:
// querySelectorAll("div") → finds all <div> elements
// querySelectorAll(".item") → finds all elements with class="item"
// querySelectorAll("#title") → finds the element with id="title" (but only one anyway)
const container2 = document.querySelectorAll('div');
console.log(container2);



















