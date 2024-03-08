const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const submit = document.getElementById('taskSubmit') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLOListElement;
const inputSection = document.getElementById('taskInputSection') as HTMLDivElement;
let taskArray: string[] = [];

taskInput.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("taskSubmit")?.click();
    }
})

submit.addEventListener('click', ()=> {
    if (taskInput.value != " ") {
        taskArray.push(taskInput.value);
        taskInput.value = ' ';
        displayTask();
    }
});

const displayTask = () => {
    let listHTML: string = ' '
    for (let i = 0; i < taskArray.length; i++) {
        listHTML += `
        <li>${taskArray[i]}
            <div id="buttons">
                <button onclick='editTask(${i})'>Edit</button>
                <button onclick='deleteTask(${i})'>Done</button>
            </div>
        </li>`
    };

    taskList.innerHTML = listHTML
    console.log(taskArray);
}

const deleteTask = (index: number) => {
    taskArray.splice(index, 1);
    displayTask();
}

const editTask = (index: number) => {
    let newEdit: string  = window.prompt("Enter Todo: ")!
    if (newEdit != "") {
    taskArray.splice(index, 1, newEdit);
    displayTask();
        // taskArray.push(taskInput.value);
        // taskInput.value = ' ';
        // displayTask();
    }
}
