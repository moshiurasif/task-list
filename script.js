let taskForm = document.getElementById("task-form");
let taskInput = document.getElementById("new-task");
let taskList = document.getElementById("task-list");
let filterTask = document.getElementById("task-filter");
let clearTask = document.getElementById("clear-task-btn");

taskForm.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
clearTask.addEventListener("click", clearAllTask);
filterTask.addEventListener("keyup", taskFilter);
// adding a new task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " "));
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.innerHTML = "X";
    li.appendChild(a);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  e.preventDefault();
}

// remove a individual task
function deleteTask(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are you sure?")) {
      let element = e.target.parentElement;
      element.remove();
    }
  }
}

// clear all task
function clearAllTask(e) {
  //   taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// filter task function
function taskFilter(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll("li").forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
