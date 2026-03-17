// ``` javascript
const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#todosList');
let todos = [];

function loadTodos() {
  const data = localStorage.getItem('todos');
  if (!data) {
  } else {
    todos = JSON.parse(data);
    todos.forEach((e) => {
      renderTodo(e);
    });
  }
}

function addTodos(text) {
  if (!text) {
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
