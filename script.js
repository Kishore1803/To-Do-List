alert("Hi User! Welcome to the To-Do List App!");
// add a todo list
function addTodo() {
    let todoInput = document.getElementById('todoInput'); // get input box
    let todoText = todoInput.value; // get input value
     if (todoText === "") {  // prevent adding empty tasks
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = todoText;
    document.getElementById('todoList').appendChild(li);
    todoInput.value = "";  // clear input box
}

// delete the todo list
function deleteTodo() {
    let todoList = document.getElementById('todoList');
    if (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
    else{
        alert("There is No tasks to Delete!");
    }
}
