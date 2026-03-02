// The question:
// When a user clicks the "Add" button on a simple calculator, what needs to happen?
// Write it out as pseudocode — 3 to 6 steps, plain English is fine.
// Think through it like you're explaining it to the computer step by step. What does the program need to do and know in order to add two numbers?

const getNum1 = document.querySelector('#num1');
const getNum2 = document.querySelector('#num2');
const button = document.querySelector('#addBtn');
const para = document.querySelector('#result');

button.addEventListener('click', () => {
  const num1Value = getNum1.value;
  const num2Value = getNum2.value;
  const convertedNum1 = Number(num1Value);
  const convertedNum2 = Number(num2Value);

  if (num1Value === "" || num2Value === "") {
    para.textContent = "Please input a valid number";
  } else if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
    para.textContent = "Please input a valid number";
  } else {
    const result = convertedNum1 + convertedNum2;
    para.textContent = result;
  }
})