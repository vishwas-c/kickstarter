const person = {
	firstName: 'Vishwas',
	lastName: 'Doe',
	age: 23,
	hobbies: ['Art', 'Music','Movies'],
	address: {
		street:	'290 Main',
		city: 'Bangalore',
		state: 'Karnataka'
	}
}

//Adding Properties to Obj
person.email = 'vishwasblaze@gmail.com'

console.log(typeof(person),person);
//Accessing object values
console.log(person.firstName, person.age,person.hobbies[2],person.address.city);

//Destructuring Objects
const {
	firstname,
	lastName,
	address:{city,state,billy},
	hobbies
} = person;

//firstname not found in person object so undefined
console.log(firstname+"-------------");

//Looping Arrays
hobbies.forEach(element => {
	console.log(element);
});;

//Object Destructuring
console.log(state,city,billy);

//Spread holds rest of values in Array
const [Art,...music] = person.hobbies;
// To find if array as typeof shows array as object
console.log(Array.isArray(music));
console.log(typeof(music),music);

