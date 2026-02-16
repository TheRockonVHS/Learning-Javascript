// Exercise 1
const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Exercise 2
for (let index = 0; index < fruits.length; index++) {
  let output = fruits[index];
  console.log(output);
}

fruits.forEach(element => {
  let output = fruits[element];
  console.log(output);
});

// Exercise 3
fruits.push('kiwi');
console.log(fruits);

// Exercise 4
fruits.pop();
console.log(fruits);