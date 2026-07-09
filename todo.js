const taskinput = document.getElementById("taskinput")
const addbtn = document.getElementById("addbtn")
const tasklist = document.getElementById("tasklist")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function rendertasks() {

    tasklist.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">
            ${task.text}
        </span>

        <div>
            <button onclick="toggletask(${index})">
                Toggle
            </button>

            <button onclick="deletetask(${index})">
                Delete
            </button>
        </div>
        `;

        tasklist.appendChild(li);
    });
}

function addtask() {

    const text = taskinput.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    savetasks();
    rendertasks();

    taskinput.value = "";
}

function deletetask(index) {

    tasks.splice(index, 1);

    savetasks();
    rendertasks();
}

function toggletask(index) {

    tasks[index].completed = !tasks[index].completed;

    savetasks();
    rendertasks();
}

addbtn.addEventListener("click", addtask);

rendertasks();