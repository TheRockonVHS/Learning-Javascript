// The question:
// When a user clicks the "Add" button on a simple calculator, what needs to happen?
// Write it out as pseudocode — 3 to 6 steps, plain English is fine.
// Think through it like you're explaining it to the computer step by step. What does the program need to do and know in order to add two numbers?

// Answer:
// click on the '=' button to add the numbers
// get numbers from text box
// get the two numbers into a function
// add the two numbers
// return the result
// display the result on the DOM

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const para = document.querySelector('#result');
const button = document.querySelector('#addBtn');

button.addEventListener('click', () => {
  const num1Input = num1.value;
  const num2Input = num2.value;
  const number1 = Number(num1Input);
  const number2 = Number(num2Input);
  const result = number1 + number2;
  para.textContent = result;
})