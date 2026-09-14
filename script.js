let taskInput = document.querySelector("#taskInput");
let addTask = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");

addTask.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.className =
        "list-group-item d-flex justify-content-between align-items-center";

    let span = document.createElement("span");

    span.textContent = task;

    span.addEventListener("click", function () {
        span.classList.toggle("text-decoration-line-through");
    });

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();
});
