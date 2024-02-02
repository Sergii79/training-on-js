console.log('Hello!');

//* Вибір кольорів з одним обробником подій:

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  // Обов'язково перевіряємо мету кліка, щоб це точно була кнопка, тому що ми не хочемо обробляти кліки в елемент-контейнері. Для перевірки типу елемента використовуємо властивість nodeName.
  // Тут event.target є елементом, який викликав подію, і nodeName дозволяє вам отримати назву тегу цього елемента. Зауважте, що nodeName повертається у верхньому регістрі, наприклад, "BUTTON", "DIV", тощо.

  const selectedColor = event.target.dataset.color; // Цей рядок коду призначений для отримання значення атрибута data-color елемента, на якому виникла подія (в даному випадку, клік миші).
  // Давайте розглянемо його крок за кроком:
  // event - це об'єкт події, який передається у функцію-обробник, яка викликається при виникненні події.
  // event.target - це елемент, який викликав подію. Якщо, наприклад, подія виникла при кліку на кнопці, event.target буде посилатися саме на цю кнопку.
  // .dataset.color - це спосіб отримати значення атрибута data-color елемента. Властивість dataset надає доступ до всіх атрибутів data-* елемента у зручній формі. В нашому випадку, .dataset.color повертає значення атрибута data-color.
  // Отже, const selectedColor = event.target.dataset.color; зберігає в змінній selectedColor значення атрибута data-color елемента, на якому виникла подія.
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

//*

const result = _.add(2, 3);
console.log(result); // 5
