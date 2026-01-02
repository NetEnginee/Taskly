const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const countSpan = document.getElementById("count");
const filterBtns = document.querySelectorAll(".filter-btn");

const modalOverlay = document.getElementById("custom-alert");
const closeModalBtn = document.getElementById("close-modal-btn");

document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo(e);
});
todoList.addEventListener("click", handleListClick);
filterBtns.forEach((btn) => {
  btn.addEventListener("click", filterTodos);
});
closeModalBtn.addEventListener("click", closeAlert);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeAlert();
});

function addTodo(event) {
  if (event) event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    showAlert();
    return;
  }

  const todoObj = {
    text: taskText,
    completed: false,
  };

  createTodoElement(todoObj);

  saveLocalTodos(todoObj);

  todoInput.value = "";
  updateCount();
}

function createTodoElement(todoObj) {
  const todoDiv = document.createElement("li");
  todoDiv.classList.add("todo-item");
  if (todoObj.completed) {
    todoDiv.classList.add("completed-item");
  }

  // Status Checkbox
  const completedClass = todoObj.completed ? "completed" : "";
  const textClass = todoObj.completed ? "completed-text" : "";

  todoDiv.innerHTML = `
        <div class="check-box ${completedClass}">
            <i class="fas fa-check"></i>
        </div>
        <span class="task-text ${textClass}">${escapeHtml(todoObj.text)}</span>
        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    `;

  todoList.appendChild(todoDiv);
}

function handleListClick(e) {
  const item = e.target;
  const todoItem = item.closest(".todo-item");

  if (!todoItem) return;

  if (item.classList.contains("delete-btn") || item.closest(".delete-btn")) {
    removeLocalTodos(todoItem);

    todoItem.style.animation = "fadeOut 0.3s ease forwards";
    todoItem.addEventListener("animationend", () => {
      todoItem.remove();
      updateCount();
    });
  }

  if (item.classList.contains("check-box") || item.closest(".check-box")) {
    const checkBox = todoItem.querySelector(".check-box");
    const taskText = todoItem.querySelector(".task-text");

    checkBox.classList.toggle("completed");
    taskText.classList.toggle("completed-text");
    todoItem.classList.toggle("completed-item");

    updateLocalStatus(todoItem);

    updateCount();
  }
}

function saveLocalTodos(todoObj) {
  let todos = checkLocalStorage();
  todos.push(todoObj);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
  let todos = checkLocalStorage();

  todos.forEach(function (todo) {
    createTodoElement(todo);
  });
  updateCount();
}

function removeLocalTodos(todoItem) {
  let todos = checkLocalStorage();
  const todoText = todoItem.querySelector(".task-text").innerText;

  const filteredTodos = todos.filter((t) => t.text !== todoText);

  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

function updateLocalStatus(todoItem) {
  let todos = checkLocalStorage();
  const todoText = todoItem.querySelector(".task-text").innerText;

  const todoIndex = todos.findIndex((t) => t.text === todoText);

  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function checkLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function showAlert() {
  modalOverlay.classList.add("active");
}

function closeAlert() {
  modalOverlay.classList.remove("active");
}

function filterTodos(e) {
  const clickedBtn = e.target;
  filterBtns.forEach((btn) => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
  const filterValue = clickedBtn.getAttribute("data-filter");
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    if (todo.nodeType === 1 && todo.classList.contains("todo-item")) {
      const isCompleted = todo.classList.contains("completed-item");
      if (filterValue === "all") {
        todo.style.display = "flex";
      } else if (filterValue === "completed") {
        todo.style.display = isCompleted ? "flex" : "none";
      }
    }
  });
}

function updateCount() {
  const allTodos = document.querySelectorAll(".todo-item");
  let activeCount = 0;
  allTodos.forEach((todo) => {
    if (
      !todo.querySelector(".task-text").classList.contains("completed-text")
    ) {
      activeCount++;
    }
  });
  countSpan.innerText = activeCount;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
