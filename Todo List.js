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
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  editBtn.textContent = 'Edit';
  deleteBtn.id = newTodo.todo;
  editBtn.id = newTodo.todo;
  deleteBtn.addEventListener('click', () => {
    todos = todos.filter((item) => item.todo !== deleteBtn.id);
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos', todosString);
    redoTodos();
  });

  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit todo:');
    if (newText) {
      editTodo(editBtn.id, newText);
    }
  });
  newList.textContent = newTodo.todo;
  list.appendChild(newList);
  newList.appendChild(deleteBtn);
  newList.appendChild(editBtn);
}

function redoTodos() {
  list.innerHTML = '';
  todos.forEach((e) => {
    renderTodo(e);
  });
}

btn.addEventListener('click', () => {
  addTodos(input.value);
  input.value = '';
});

function editTodo(idToEdit, newText) {
  todos = todos.map((item) => {
    if (item.todo === idToEdit) {
      return { todo: newText };
    }
    return item;
  });

  const todosString = JSON.stringify(todos);
  localStorage.setItem('todos', todosString);

  list.innerHTML = '';
  todos.forEach((e) => {
    renderTodo(e);
  });
}

loadTodos();
