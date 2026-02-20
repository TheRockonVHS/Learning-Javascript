``` javascript ```

// Object Drill
const product = {
  name: "",
  price: 0
};

function applyDiscount(product, percent) {
  let discount = percent * 100;
  const newProduct = (product.price * discount);
  return product;
}

// DOM Micro-Drill
const button = document.querySelector('#save-btn');
const para = document.querySelector('.status');
button.addEventListener('click', () => {
  para.textContent = ('Saving...');
})


// **Concept Check:** In 1 sentence, what is the difference between passing a string to a function vs. passing an object?
// A string is one value while a object can have multiple values and different types included in it.

// Create an array of 3 user objects
const user = {};
const array = [user{}, user{}, user{} ];

// Explain the difference between Reference and Value types
// Value is data from a variable that is a string or integer. Reference is a pointer to another Array or Object that pass that same data to the other one

// Access a nested property in an object (e.g., user.address.city)
let name = user.name;

// Use .map() to extract names from objects
const obj = {
  names = ""
};

let names = obj.map(names);

// Use .find() to get object by property
const newObj = {
  name = "",
  age = 0
};

let newNames = newObj.find(name);