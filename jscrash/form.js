//Window Object has alerts,fetch etc
console.log(window);

//Single Element Selector(Selects first element only)
console.log(document.getElementById('my-form'));

console.log(document.querySelector('.container'));


//Multiple Element Selector(Selects more than one element)
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//Loop through items
const items = document.querySelectorAll('.item');
items.forEach(item => {
  console.log(item);
});


// Manipulating DOM
const ul = document.querySelector('.items');

// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h2>Hey yo</h2>';


//Change Styles
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Events 
const btnevent = document.querySelector('.btn');
btnevent.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  document.querySelector('#my-form').style.background= '#ccc';
  document.querySelector('body').classList.add('bg-dark');
});