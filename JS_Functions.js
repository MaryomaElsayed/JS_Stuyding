let a = 10;
let b = 20;

function addition(x,y){
	let z = x+y;
	console.log(z);
}
addition(a,b);

function addition2 (x,y){
	return x * y;
}

let v = addition2(a,b);
console.log(v);

// Arrow Function
myfunc = (x,y) => x-y;

let result = myfunc(b,a);
console.log(result);


function two(){
	document.getElementById('h1').innerHTML="Hello H1";
}

two();

document.getElementById('p1').innerHTML="hello";






















