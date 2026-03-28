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
  const newBtn = document.createElement('button');
  newBtn.textContent = 'Delete';
  newBtn.id = newTodo.todo;
  newBtn.addEventListener('click', () => {
    todos = todos.filter((item) => item.todo !== newBtn.id);
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos', todosString);
    redoTodos();
  });
  newList.textContent = newTodo.todo;
  list.appendChild(newList);
  newList.appendChild(newBtn);
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
  // Step 1: Get the ID from the button click
  // (already done—it's the parameter)
  // Step 2: Get new text from prompt
  // (already done—it's the parameter)
  // Step 3: Use map() to update the item
  // todos = todos.map((item) => {
  //   if (item.todo === idToEdit) {
  //     return { todo: newText };
  //   } else {
  //     return item;
  //   }
  // });
  // Step 4: Reassign todos
  // (done in step 3)
  // Step 5: Save to localStorage
  // const todosString = JSON.stringify(todos);
  // localStorage.setItem('todos', todosString);
  // Step 6: Clear DOM
  // list.innerHTML = '';
  // Step 7: Re-render
  // todos.forEach((e) => {
  //   renderTodo(e);
  // });
}

loadTodos();
