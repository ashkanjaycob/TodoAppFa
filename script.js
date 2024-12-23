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
    todoList.appendChild(li);
    TodoInput.value = "";
  } else {
    alert(".لطفا مقدار متن را وارد کنید ");
  }
});

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
