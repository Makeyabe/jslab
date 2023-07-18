let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    updateTaskList();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    updateTaskList();
  }
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});