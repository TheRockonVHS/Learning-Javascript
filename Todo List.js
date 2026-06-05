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

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodos(text) {
  if (!text) {
  } else {
    const newTodo = { todo: text, id: createId(1, 10000) };
    todos.push(newTodo);
    saveTodos();
    renderTodo(newTodo);
  }
}

function renderTodo(newTodo) {
  const newList = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  editBtn.textContent = 'Edit';

  deleteBtn.dataset.id = newTodo.id;
  editBtn.dataset.id = newTodo.id;

  deleteBtn.addEventListener('click', () => {
    const id = Number(deleteBtn.dataset.id);
    todos = todos.filter((item) => item.id !== id);
    saveTodos();
    redoTodos();
  });

  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit todo:');
    if (newText) {
      const id = Number(editBtn.dataset.id);
      editTodo(id, newText);
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

function editTodo(idToEdit, newText) {
  todos = todos.map((item) => {
    if (item.id === idToEdit) {
      item.todo = newText;
      return item;
    }
    return item;
  });

  saveTodos();
  redoTodos();
}

btn.addEventListener('click', () => {
  addTodos(input.value);
  input.value = '';
});

function createId(min, max) {
  const newId = Math.floor(Math.random() * (max - min + 1) + min);
  return newId;
}

loadTodos();
