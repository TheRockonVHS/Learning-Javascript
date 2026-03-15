// ``` javascript
const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#todosList');
const todos = [];

function loadTodos() {
  // code here
}

function addTodos(text) {
  if (!text) {
    console.log('no text');
  } else {
    const newTodo = { todo: text };
    todos.push(newTodo);
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos', todosString);
    renderTodo(newTodo);
  }
}

function renderTodo(newTodo) {
  const newList = document.createElement('li');
  newList.textContent = newTodo.todo;
  list.appendChild(newList);
}

btn.addEventListener('click', () => {
  addTodos(input.value);
  input.value = '';
});

loadTodos();
