function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

//* 1-й варіант:

const box = {
  content: document.getElementById('boxes'),
  forma: document.getElementById('controls'),
  input: document.querySelector('[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
};

const createBoxes = amount => {
  const createElements = [];
  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * index}px`;
    div.style.width = `${30 + 10 * index}px`;
    div.style.backgroundColor = getRandomHexColor();
    createElements.push(div);
  }

  box.content.append(...createElements);
};

const destroyBox = () => {
  box.input.value = '';
  box.content.innerHTML = ''; // Очистити вміст контейнера перед додаванням нових елементів
};

box.buttonCreate.addEventListener('click', () => {
  const amount = box.input.value;
  createBoxes(amount);
});

box.buttonDestroy.addEventListener('click', destroyBox);

//* 2-й варіант:

// const input = document.querySelector('input[type="number"]');

// const buttonCreate = document.querySelector('button[data-create]');

// const buttonDestroy = document.querySelector('button[data-destroy]');

// const boxes = document.getElementById('boxes');

// function createBoxes(amount) {
//   const createElements = [];
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     div.style.height = `${25 + 5 * i}px`;
//     div.style.width = `${50 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     createElements.push(div);
//   }
//   return createElements;
// }

// const destroyBoxes = () => {
//   boxes.innerHTML = '';
//   input.value = '';
// };

// buttonCreate.addEventListener('click', () => {
//   const boxesToAdd = createBoxes(input.value);
//   boxes.append(...boxesToAdd);
// });

// buttonDestroy.addEventListener('click', () => {
//   destroyBoxes.call();
// });
