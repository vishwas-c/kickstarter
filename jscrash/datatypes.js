console.log("Console log displaying");
//console.clear();
// console.error("Oops This is an error");
// console.warn("Oops This is a warning");

//Primitive Datatypes
// String, Numbers, Boolean , null, undefined

const name = 'Vishwas C';
const age = 23;
const rating = 4.5;
const isawesome = true;
const x = null;
const y = undefined;
let z;

console.log(typeof(name),typeof(age), typeof(rating),typeof(isawesome),typeof(x),typeof(y),typeof(z));

//Concatenation
console.log('My name is '+name+ ' and my age is '+age);
//Template Strings
console.log(`My name is ${name} and my age is ${age}`);

//String Methods
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,2)); //Vi
console.log(name.split(' ')); // Converts to array

//Arrays
const numbers = new Array(1,2,3,4,5,6,7);
console.log(numbers);

// [] brackets does same way
const arrays = [1,'apples','mango',true,null,6,7];
arrays[6] = 'Vish';
console.log(arrays);
console.log(arrays[1]);

arrays.push(true);
arrays.unshift('strawberry');
console.log(arrays);
arrays.pop();
console.log(arrays);
console.log(Array.isArray(arrays));
console.log(arrays.indexOf('Vish'));