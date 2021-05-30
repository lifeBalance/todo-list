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
  // Event listener for the ADD TASK button
  form.addEventListener('submit', addTask);
  // Event listener for the remove task icon (Event delegation: ul)
  taskList.addEventListener('click', removeTask);
  // Event listener for the CLEAR TASKS button
  clearBtn.addEventListener('click', clearTasks);
  // Event listener for Filter Tasks
  filter.addEventListener('keyup', filterTasks);
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

function removeTask(event) {
  if (event.target.parentElement.classList.contains('delete-item'))
    if (confirm('Are you sure?'))
      event.target.parentElement.parentElement.remove();
}

function clearTasks(event) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // A simpler but slower option
  // taskList.innerHTML = '';
}

function filterTasks(event) {
  const text = event.target.value.toLowerCase();
  document.querySelectorAll('li.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1)
      task.style.display = 'block';
    else
      task.style.display = 'none';
  });
  console.log(event.target.value);
}