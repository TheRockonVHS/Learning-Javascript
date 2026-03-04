// Write code that does this:

// -   There's a button with the id `toggleBtn`
// -   There's a paragraph with the id `message`
// -   When the button is clicked, the paragraph's text changes to `"Hello!"`

// That's it. Just write it from memory and paste what you get here — right or wrong.

/*https://t3.chat/chat/8646bc61-7c6b-48d2-8171-62670a3508d6
const button = document.querySelector('#toggleBtn');
const para = document.querySelector('#message');

button.addEventListener('click', () => {
  if (para.hidden === false) {
    para.hidden = true;
  } else {
    para.hidden = false;
  }
})
*/

const list = document.querySelector('#shopping-list');
const items = ['Apples', 'Milk', 'Bread'];

items.forEach((item) => {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  list.appendChild(newItem);
})