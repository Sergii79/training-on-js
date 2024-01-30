/*
    1. Створити об"єкт та записати в нього id з html
    2. Створити функцію, яка виконує умову   
*/

const box = {
  inputEl: document.querySelector('#name-input'),
  spanEl: document.querySelector('#name-output'),
};

//* 1-й варіант:

// box.inputEl.addEventListener(`input`, event => {
//   if (event.currentTarget.value === '') {
//     return (box.spanEl.textContent = `Anonymous`);
//   }
//   if (event) {
//     return (box.spanEl.textContent = event.currentTarget.value);
//   }
// });

//* 2-й варіант:

const inputElChange = event =>
  box.inputEl.value != ''
    ? (box.spanEl.textContent = box.inputEl.value)
    : (box.spanEl.textContent = 'Anonymous');

box.inputEl.addEventListener('input', inputElChange);

//* 3-й варіант:

// const containerInput = document.querySelector('#name-input');
// const containerSpan = document.querySelector('#name-output');

// const textInput = event => {
//   containerSpan.textContent = event.currentTarget.value;
// };

// containerInput.addEventListener('input', textInput);
