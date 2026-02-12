// Function 1
function addNumbers(num1, num2) {
  return num1 + num2;
}

let total = addNumbers(10,5);
console.log(total);

// Function 2
function greetUser(name) {
  return "hello, " + name;
}

const greeting = greetUser("Kurt");
console.log(greeting);

// function 3
const names = ["kurt", "bob"];
function getLength(array) {
  return array.length;
}

console.log(getLength(names));

// function 4
function calculateTotal(price, taxRate) {
  const total = price + (price * taxRate);
  return total;
}

console.log(calculateTotal(100, 0.07));

// function 5
function makeUpperCase(text) {
  return text.toUpperCase();
}

const UpperCase = makeUpperCase("tom");
console.log(UpperCase);

// DOM
const myButton = document.querySelector('#magic-btn');
const para = document.querySelector('.message');

myButton.addEventListener('click', () => { 
  para.textContent = "Abracadabra";
});

// DOM 2
const myButton2 = document.querySelector('#toggle-btn');
const box = document.querySelector('#box');

myButton2.addEventListener('click', () => {
  box.style.backgroundColor = "blue";
})