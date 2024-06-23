'use strict';
let addTaskBtn = document.querySelector('.icon');
let showOptionsBtn = document.querySelector('.show-options-btn');
let options = document.querySelector('.options');
let closeModalBtn = document.querySelector('.close-modal');
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');
let taskName = document.querySelector('.task-name');
let taskDescription = document.querySelector('.task-description');
let addTaskForm = document.querySelector('.add-task-btn');
let content = document.querySelector('.content');

showOptionsBtn.addEventListener('click', event => {
  if (options.classList.contains('hidden')) {
    options.classList.remove('hidden');
  }
});
document.addEventListener('click', event => {
  if (event.target !== showOptionsBtn) {
    options.classList.add('hidden');
  }
});
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
let cardCounter = 2;
addTaskForm.addEventListener('click', event => {
  event.preventDefault();
  let taskCardTitle = taskName.value;
  let taskCardDescription = taskDescription.value;

  let taskCard = `<div class="task">
          <div class="upper">
            <h1 class="title">${taskCardTitle}</h1>
            <h2 class="description">${taskCardDescription}</h2>
          </div>
          <div class="down">
            <div class="date">
              <p>December 21,2003</p>
              <i class="fa-solid fa-ellipsis show-options-btn"></i>
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
  if (taskCardTitle !== '' && taskCardDescription !== '') {
    content.insertAdjacentHTML('beforeEnd', taskCard);
    taskDescription.value = '';
    taskName.value = '';
    closeModal();
  }
});
