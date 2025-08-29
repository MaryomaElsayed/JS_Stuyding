const car = {
	type:"BMW",
	model:500,
	color:"blue",
	start : function(){
		console.log("The car has started!");
	}
};

console.log(car);

//Add Properties
car.owner = "Maryam";
console.log(car);

// Access a proprety in object
console.log(car.color);

//Method
car.start();

//**** Create a new JavaScript object using new Object():

const person = new Object({
	firstname: "jhon",
	lastname: "doe",
	age:50,
});

console.log(person);

const object1 = {
	name : "dd",
	age : 19,
}

const object2 = new Object({
	name : "ee",
	age : 20,
});

// *** Object Constructor Functions :

function Person(first,last,age,eye){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.yeeColor = eye;
}

const brother = new Person("yassen","elsayed",20,"brown");
const myself = new Person("Maryam", "elsayed",21,"brown");

console.log(brother);
console.log(myself);


















