"use strict";
const taskInput = document.getElementById('taskInput');
const submit = document.getElementById('taskSubmit');
const taskList = document.getElementById('taskList');
const inputSection = document.getElementById('taskInputSection');
let taskArray = [];
taskInput.addEventListener("keypress", function (event) {
    var _a;
    if (event.key === "Enter") {
        event.preventDefault();
        (_a = document.getElementById("taskSubmit")) === null || _a === void 0 ? void 0 : _a.click();
    }
});
submit.addEventListener('click', () => {
    if (taskInput.value != " ") {
        taskArray.push(taskInput.value);
        taskInput.value = ' ';
        displayTask();
    }
});
const displayTask = () => {
    let listHTML = ' ';
    for (let i = 0; i < taskArray.length; i++) {
        listHTML += `
        <li>${taskArray[i]}
            <div id="buttons">
                <button onclick='editTask(${i})'>Edit</button>
                <button onclick='deleteTask(${i})'>Done</button>
            </div>
        </li>`;
    }
    ;
    taskList.innerHTML = listHTML;
};
const deleteTask = (index) => {
    taskArray.splice(index, 1);
    displayTask();
};
const editTask = (index) => {
    let newEdit = window.prompt("Enter Todo: ");
    taskArray.splice(index, 1, newEdit);
    displayTask();
};
