var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value === ''){
        alert("Please enter a task.");
        return;
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    taskInput.value = '';
    saveData();
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function shoewTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
}
shoewTasks();

// task added by enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});