// ``` javascript
const list = document.querySelector('#todosList');

// 1. On page load, get todos from storage and render them
function loadTodos() {
  // TODO: get 'todos' from localStorage
  const todos = localStorage.getItem('todos');
  if (!todos) {
    return;
  }
  // TODO: parse it into an array
  let parsedData = [];
  parsedData = JSON.parse(todos);  
  // TODO: loop through array and render each one
  parsedData.forEach(element => {
    renderTodo(element);
  });
}

// 2. When user clicks "Add", add to array AND storage AND DOM
function addTodo(text) {
  // TODO: create a new todo object
  // TODO: push it into the array
  // TODO: save array to localStorage
  // TODO: render the new todo to the DOM
}

// 3. Render a single todo to the DOM
function renderTodo(todo) {
  // TODO: create an <li> element
  // TODO: set its text content
  // TODO: append it to the list
}

// Call loadTodos when page loads
loadTodos();
