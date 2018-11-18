//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all events listeners 

loadEventListeners();

//function to load event listeners

function loadEventListeners(){
    form.addEventListener('submit', addTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add Class
    link.className = 'delete-item secondary-content';
    //Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to the li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    e.preventDefault();

}