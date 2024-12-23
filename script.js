const TodoInput = document.getElementById("inputTodo");
const AddBtn = document.getElementById("addTodo");
const todoList = document.getElementById("showTodos");

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
