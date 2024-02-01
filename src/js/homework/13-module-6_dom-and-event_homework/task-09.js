function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorElement = document.querySelector('body');
const buttonElem = document.querySelector('.change-color');
const colorNumber = document.querySelector('.color');

//* 1-й варіант:
const backgroundChange = () => {
  const changeColor = getRandomHexColor();
  colorElement.style.backgroundColor = changeColor;
  colorNumber.textContent = changeColor;
};

// function backgroundChange() {
//   //* 2-й варіант тіла функції:
//   colorElement.style.backgroundColor = getRandomHexColor();
//   colorNumber.textContent = getRandomHexColor();
//   //* 3-й варіант тіла функції:
//   // const color = getRandomHexColor();
//   // colorElement.style.backgroundColor = color;
//   // colorNumber.textContent = color;
// }

buttonElem.addEventListener('click', backgroundChange);
