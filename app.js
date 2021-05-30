// The form at the top that contain field for New Task
const form = document.querySelector('#task-form');
// The input field for New Task
const taskInput = document.querySelector('#task');
// The input field to Filter Tasks
const filter = document.querySelector('#filter');
// The ul under Tasks
const taskList = document.querySelector('.collection');
// The CLEAR TASKS black button
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
}

function addTask(event) {
  if (taskInput.value === '')
    alert('An empty task is not a task!');

  // Create li element (task)
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // Create nested link for li
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link to the li
  li.appendChild(link);

  // Append li to the ul
  taskList.appendChild(li);

  // Clear text input
  taskInput.value = '';

  event.preventDefault();
}