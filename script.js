const TodoInput = document.getElementById("inputTodo");
const AddBtn = document.getElementById("addTodo");
let todoList = document.getElementById("showTodos");
const clearTodos = document.getElementById("clearTodos");
const searchBox = document.getElementById("searchTodo");

AddBtn.addEventListener("click", () => {
  const Text = TodoInput.value.trim();
  if (Text) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${Text}</span>
    `;

    // Create close button and append
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    todoList.appendChild(li);
    TodoInput.value = "";

    updateCloseButtons();
    saveTodos();
  } else {
    alert(".لطفا مقدار متن را وارد کنید ");
  }
});

// Delete item from todos
function updateCloseButtons() {
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const li = this.parentElement;
      li.remove(); // Remove element for Save in Local Storage
      saveTodos();
    };
  }
}

// Adding Checked to A Todo
todoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li) {
    li.classList.toggle("line-through");
    saveTodos();
  }
});

// Clear all
clearTodos.addEventListener("click", () => {
  todoList.innerHTML = "";
  saveTodos();
});

searchBox.addEventListener("input", () => {
  const filter = searchBox.value.toLowerCase();
  const items = todoList.getElementsByTagName("li");

  // Loop on Todos
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].textContent || items[i].innerText;
    if (itemText.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});

function saveTodos() {
  const todos = [];
  const items = todoList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const todoText = items[i].querySelector("span").textContent;
    const isChecked = items[i].classList.contains("line-through");
    todos.push({ text: todoText, checked: isChecked });
  }

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Load todos Based on Add todo
function loadTodos() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos && Array.isArray(storedTodos)) {
    storedTodos.forEach((todo) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${todo.text}</span>
          `;
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      if (todo.checked) {
        li.classList.add("line-through");
      }
      todoList.appendChild(li);
    });

    updateCloseButtons();
  }
}

// For First Render
loadTodos();
