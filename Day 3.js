```javascript // code here ```

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

