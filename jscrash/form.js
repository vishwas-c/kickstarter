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
  document.querySelector('.items')
  .lastElementChild.innerHTML = '<h3>Byeee</h3>';
});

///////////////////////////////////////////////////////

//Comment Above for Below to work

//Add Input form Values to Screen
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
