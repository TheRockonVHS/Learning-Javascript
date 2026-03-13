const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#todosList');

// get text input from input field
// save it to an object
// stringify the object
// save it to localstorage
// save it to the DOM

function reloadStorage(text) {
  // code here
}

function renderTodo(text) {
  if (!text) {
    return;
  }

  const newObj = { text };
  newObj.text = text.value;
  console.log(newObj.text);
}

btn.addEventListener('click', () => {
  renderTodo(input);
  input.value = '';
});
