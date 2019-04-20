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
		isdone :true
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

//For Loop
for (let i = 0; i < todos.length; i++) {
	const element = todos[i];
	console.log(element);
	
}

//For Of loop better than above
for (const todo of todos) {
	console.log(todo.id);
}

//For Each Loop
todos.forEach(todo => {
	console.log(todo.isdone);
});

//Map returns an Array
const todoText = todos.map(todo => {
	return todo.text;
});
console.log(todoText);

//Filter to return only if condition satisfied and map to return only text
const todoCompleted = todos.filter(todo => {
	return todo.isdone === false;
}).map(todo => {
	return todo.text;
});
console.log(Array.isArray(todoCompleted),todoCompleted);


//Functions
function addNums(num1 = 1,num2 = 3) {
	return num1 + num2;
}
console.log(addNums(5));

//Arrow Functions
const addNumsarrow = (num1 = 1,num2 = 3) => {
	return num1 + num2;
}
console.log(addNumsarrow(5,1));
/////////////// O R  /////////////////
const addNumsarrow1 = (num1 = 1,num2 = 3) => num1 + num2; 
console.log(addNumsarrow1(5,10));
