const TodoInput = document.getElementById("inputTodo");
const AddBtn = document.getElementById("addTodo");
let todoList = document.getElementById("showTodos");
const clearTodos = document.getElementById("clearTodos");

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
  } else {
    alert(".لطفا مقدار متن را وارد کنید ");
  }
});

// delete item from todos
function updateCloseButtons() {
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Adding Checked to A Todo
todoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (li) {
    li.classList.toggle("line-through");
  }
});

// Clear all
clearTodos.addEventListener("click", () => {
  todoList.innerHTML = "";
});
