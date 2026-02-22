// ``` javascript ```

// // Object Drill
// const product = {
//   name: "",
//   price: 0
// };

// function applyDiscount(product, percent) {
//   let discount = percent / 100;
//   const newProduct = (product.price * discount);
//   return { name: product.name, price: discountedPrice };
// }

// // DOM Micro-Drill
// const button = document.querySelector('#save-btn');
// const para = document.querySelector('.status');
// button.addEventListener('click', () => {
//   para.textContent = ('Saving...');
// })


// // **Concept Check:** In 1 sentence, what is the difference between passing a string to a function vs. passing an object?
// // A string is one value while a object can have multiple values and different types included in it.

// // Create an array of 3 user objects
// const user = {
//   name: "",
// };
// const bob = {
//   name: "bob"
// };
// const frank = {
//   name: "frank"
// };
// const charles = {
//   name: "charles"
// };
// const array = [bob, frank, charles ];

// // Explain the difference between Reference and Value types
// // Value is data from a variable that is a string or integer. Reference is a pointer to another Array or Object that pass that same data to the other one
// let num = 5;
// let obj = { count: 5 };

// function change(a, b) {
//   a = 10;
//   b.count = 10;
// }

// change(num, obj);
// // What is num now? What is obj.count now?
// // num is 5 and obj.count is 10

// // Access a nested property in an object (e.g., user.address.city)
// let name = user.name;

// // Use .map() to extract names from objects
// let obj = {
//   name: "",
//   age: 0
// };

// const myArray = [obj]
// // .map() - transforms each element
// let names = myArray.map(item => item.name);

// // Use .find() to get object by property
// const newObj = {
//   name: "Alice",
//   age: 0
// };

// const newArray = [newObj];

// function findName(array, nameToFind) {
//   return array.find(item => item.name === nameToFind);
// }

// const result = findName(newArray, "Alice"); 

// Prompt 1: Save Array to localStorage
// Create your array of objects here
const myArray = [{name: "Frank"}, {name: "John"}, {name: "Jerry"}];
// Save to localStorage here
localStorage.setItem("users", JSON.stringify(myArray));

// 1. Load from localStorage here
const data = localStorage.getItem("users");
// 2. Convert back to array here
const parsedData = JSON.parse(data);
// 3. Render/display the data here
console.log(parsedData);

