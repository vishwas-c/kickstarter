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


//Arrays of Objects

const todos = [
	{
		id: 1,
		text: 'Study',
		isdone :true
	},
	{
		id: 2,
		text: 'Clean Tank',
		isdone :false
	},
	{
		id: 3,
		text: 'Call Volunteers',
		isdone :false
	},
];

console.log(Array.isArray(todos));
console.log(todos.length);
console.log(todos[2].text);

//Convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);