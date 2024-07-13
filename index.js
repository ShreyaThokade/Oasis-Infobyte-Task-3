const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false,
            createdAt: new Date()
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.text}`;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completed';
        completeBtn.addEventListener('click', () => {
            task.completed = true;
            task.completedAt = new Date();
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task);
            renderTasks();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}
