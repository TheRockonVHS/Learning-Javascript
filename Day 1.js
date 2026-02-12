// Function 1
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(5,8);

// Function 2
function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Kurt");

// Function 3
function getLength(array) {
  let length = array.length;
  console.log(length);
}

testArray = [1,2,3,4];
getLength(testArray);

// Function 4
function calculateTotal(price, taxRate) {
  let total = (price + (price * taxRate));
  console.log(total);
}

calculateTotal(100, 0.08);

// Function 5
function makeUpperCase(text) {
  String(text);
  console.log(text);
}

makeUpperCase('this is a test');
