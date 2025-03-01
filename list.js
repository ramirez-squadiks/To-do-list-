document.getElementById('addTaskButton').addEventListener('click', addTask);

let editingTask = null;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Пожалуйста, введите задачу.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const completeButton = document.createElement('button');
    completeButton.textContent = '📌'; 
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed'); 
        if (li.classList.contains('completed')) {
            li.style.backgroundColor = '#d4edda'; 
        } else {
            li.style.backgroundColor = ''; 
        }
    });

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;
    taskLabel.classList.add('task-label');
    taskLabel.addEventListener('click', () => {
        taskInput.value = taskText;
        editingTask = li;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; 
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(taskLabel);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    editingTask = null;
}

document.getElementById('taskInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && editingTask) {
        const taskText = event.target.value.trim();
        if (taskText === '') {
            alert('Пожалуйста, введите задачу.');
            return;
        }
        editingTask.querySelector('.task-label').textContent = taskText;
        event.target.value = ''; 
        editingTask = null; 
    }
});