// ``` javascript
const list = document.querySelector('#todosList');
const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
let array = [];

// 1. On page load, get todos from storage and render them
function loadTodos() {
  // TODO: get 'todos' from localStorage
  const todos = localStorage.getItem('todos');
  if (!todos) {
    return;
  }
  // TODO: parse it into an array
  array = JSON.parse(todos);  
  // TODO: loop through array and render each one
  array.forEach(element => {
    renderTodo(element);
  });
}

// 2. When user clicks "Add", add to array AND storage AND DOM
function addTodo(text) {
  // TODO: create a new todo object
  const newObj = {
    text: text,
  }
  // TODO: push it into the array
  array.push(newObj);
  // TODO: save array to localStorage
  const stringArray = JSON.stringify(array);
  localStorage.setItem('todos', stringArray);
  // TODO: render the new todo to the DOM
  renderTodo(newObj);
}

// 3. Render a single todo to the DOM
function renderTodo(todo) {
  // TODO: create an <li> element
  const newItem = document.createElement('li');
  // TODO: set its text content
  newItem.textContent = todo.text;
  // TODO: append it to the list
  list.appendChild(newItem);
}

// Call loadTodos when page loads
loadTodos();

btn.addEventListener('click', () => {
  addTodo(input.value);
  input.value = '';
})