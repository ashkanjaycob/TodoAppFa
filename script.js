const TodoInput = document.getElementById("inputTodo");
const AddBtn = document.getElementById("addTodo");

AddBtn.addEventListener("click", () => {
  alert(TodoInput.value.trim());
  console.log("test input");
});
