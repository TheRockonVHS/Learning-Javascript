// ```javascript // code here ```

// Day 2 DOM Basics
const myButton = document.querySelector('.myBtn');

myButton.addEventListener('click', () => {
  console.log('Clicked!');
})

// Day 2 DOM Basics v2
const myPara = document.querySelector('.output');

myPara.textContent('Goodbye');

// Day 1 Functions
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// a parameter is inside the () from the function and arguments are values passed into the function when you call the function

// Mini-App 1: Button Counter
const countDisplay = document.querySelector('#count');
const button = document.querySelector('#counterBtn');
let count = 0;

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = "Count: " + count;
})

// Mini-App 2: Live Text Display
const textInput = document.querySelector("#textInput");
const paragraph = document.querySelector("#display");

textInput.addEventListener("keydown", () => {
  // stuff here
  console.log('works')
})