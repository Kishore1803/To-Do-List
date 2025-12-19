alert("Hi User 👋 ! Welcome to the To-Do List!");

// add a todo list
function addTodo() {
  let todoInput = document.getElementById("todoInput"); // get input box
  let todoText = todoInput.value; // get input value
  if (todoText === "") {
    // prevent adding empty tasks
    alert("Please enter a task!"); // alert user if input is empty
    return;
  }
  let li = document.createElement("li"); // create list item
  li.textContent = todoText; // set list item text
  document.getElementById("todoList").appendChild(li); // add list item to todo list
  todoInput.value = ""; // clear input box
}

// delete the todo list
function deleteTodo() {
  let todoList = document.getElementById("todoList");
  if (todoList.lastChild) {
    todoList.removeChild(todoList.lastChild);
  } else {
    alert("There is No tasks to Delete!");
  }
}
