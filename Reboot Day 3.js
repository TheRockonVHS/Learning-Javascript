// Exercise 1
const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Exercise 2
for (let index = 0; index < fruits.length; index++) {
  let output = fruits[index];
  console.log(output);
}

fruits.forEach(item => {
  console.log(item);
});

// Exercise 3
fruits.push('kiwi');
console.log(fruits);

// Exercise 4
fruits.pop();
console.log(fruits);

// Exercise 5
// // 1. Select the parent container
// const list = document.querySelector('#fruitList');

// // 2. Loop through fruits
// fruits.forEach(fruit => {
//   // 3. Create a NEW element (not on list, on document)
//   const li = document.createElement('li');
  
//   // 4. Add content to it
//   li.textContent = fruit;
  
//   // 5. Append it to the parent
//   list.appendChild(li);  // or list.append(li)
// });

``` javascript
const list = document.querySelector('#fruitList');

for (let index = 0; index < fruits.length; index++) {
  const output = fruits[index];
  const li = document.createElement('li');
  li.textContent = output;
  list.append(li);  
}
```