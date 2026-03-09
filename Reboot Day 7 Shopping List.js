// Build from memory. You may look up syntax for specific methods, but not copy-paste solutions.
// Task: Build a mini shopping list. The user types an item into an `<input>`, clicks an "Add" button, and the item appears as a new `<li>` in a `<ul>`. No frameworks — vanilla JS only.

/*
const itemInput = document.querySelector('#item-input');
const button = document.querySelector('#add-btn');
const list = document.querySelector('#shopping-list');

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const input = itemInput.value;
  newItem.textContent = input;
  list.appendChild(newItem);
  itemInput = "";
})*/



// Toggle with State
// Build a button that toggles a `<div>` between open and closed states. The button text should change accordingly ("Hide" when open, "Show" when closed). **Use the `hidden` property to control visibility—not CSS classes.**

// Your task: Write the JavaScript from scratch. Remember: check the **actual state** of the div (the `hidden` property), not the button text.
const button = document.querySelector('#toggle-btn');
const content = document.querySelector('#content');

button.addEventListener('click', () => {
  if (content.hidden === true) {
    button.textContent = 'Hide';
    content.hidden = false;
  } else if (content.hidden === false) {
    button.textContent = 'Show';
    content.hidden = true;
  }
})