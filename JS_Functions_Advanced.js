// [1] Function Declarations
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
// SYNTAX :
function functionName(parameters) {
  // code to be executed
}

// [2] Function Hoisting --> Because of this, JavaScript functions can be called before they are declared:

// [3] Self-Invoking Functions
// A self-invoking expression is invoked (started) automatically, without being called.
(function Greeting(){
	console.log("Hello World!")
})();

