'use strict';
let addTaskBtn = document.querySelector('.icon');
let showOptionsBtn = document.querySelectorAll('.show-options-btn');
// let options = document.querySelectorAll('.options');
let closeModalBtn = document.querySelector('.close-modal');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let taskName = document.querySelector('.task-name');
let taskDescription = document.querySelector('.task-description');
let addTaskForm = document.querySelector('.add-task-btn');
let content = document.querySelector('.content');

let closeModal = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
let viewModal = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
addTaskBtn.addEventListener('click', () => {
  viewModal();
});
document.getElementById('content').addEventListener('click', event => {
  let className = event.target.classList[3];
  document.querySelectorAll('.options').forEach(opt => {
    if (opt.classList.contains(className)) {
      opt.classList.remove('hidden');
    }
  });
});

document.addEventListener('click', event => {
  if (event.target.nodeName !== 'I') {
    document
      .querySelectorAll('.options')
      .forEach(opt => opt.classList.add('hidden'));
  }
});
let cardCounter = 1;
let addNewTask = function (taskCardTitle, taskCardDescription) {
  let taskCard = `<div class="task">
      <div class="upper">
        <h1 class="title">${taskCardTitle}</h1>
        <h2 class="description">${taskCardDescription}</h2>
      </div>
      <div class="down">
        <div class="date">
          <p>December 21,2003</p>
          <i class="fa-solid fa-ellipsis show-options-btn options-${cardCounter}"></i>
        </div>
        <button class="is-done-btn">Done</button>
        <div class="options hidden options-${cardCounter}">
          <div class="btn update-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            Update
          </div>
          <div class="btn delete-btn">
            <i class="fa-solid fa-trash"></i>
            Delete
          </div>
          <div class="btn not-done-btn">
            <i class="fa-solid fa-xmark"></i>
            unDone
          </div>
        </div>
      </div>
    </div>`;
  cardCounter++;
  if (taskCardTitle !== '' && taskCardDescription !== '') {
    content.insertAdjacentHTML('beforeEnd', taskCard);
    taskDescription.value = '';
    taskName.value = '';
    closeModal();
  }
};
addTaskForm.addEventListener('click', event => {
  event.preventDefault();
  if (addTaskForm.classList.contains('add-new-task')) {
    addNewTask(taskName.value, taskDescription.value);
  } else {
    updateCurTask(taskName.value, taskDescription.value);
  }
});
let updateTheCurrentElement;
let updateCurTask = function (newTaskCardTitle, newTaskCardDescription) {
  let curTaskTitle = updateTheCurrentElement.querySelector('.title');
  let curTaskDescription =
    updateTheCurrentElement.querySelector('.description');
  if (newTaskCardTitle !== '' && newTaskCardDescription !== '') {
    curTaskTitle.textContent = newTaskCardTitle;
    curTaskDescription.textContent = newTaskCardDescription;
    taskDescription.value = '';
    taskName.value = '';
    closeModal();
  }
};
document.getElementById('content').addEventListener('click', event => {
  if (event.target.classList.contains('update-btn')) {
    addTaskForm.classList.remove('add-new-task');
    let curTask = event.target.parentNode.parentNode.parentNode;
    updateTheCurrentElement = curTask;

    viewModal();
    updateCurTask(taskName.value, taskDescription.value, curTask);
  }
});
document.getElementById('content').addEventListener('click', event => {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.parentNode.parentNode.classList.add('hidden');
  }
});
document.getElementById('content').addEventListener('click', event => {
  if (event.target.classList.contains('not-done-btn')) {
    console.log('hello from not done btn btn');
  }
});
