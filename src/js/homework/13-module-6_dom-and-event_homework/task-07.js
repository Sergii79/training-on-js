const box = {
  inputElem: document.querySelector('#font-size-control'),
  spanElem: document.querySelector('#text'),
};

//* 1-й варіант:
box.spanElem.style.fontSize = `${box.inputElem.value}px`; /* Початковий розмір тексту */

const changeInput = () => {
  const fontSize = box.inputElem.value + 'px';
  box.spanElem.style.fontSize = fontSize;
};

box.inputElem.addEventListener('input', changeInput);

//* 2-й варіант:

// box.spanElem.style.fontSize = `${box.inputElem.value}px`; /* Початковий розмір тексту */

// function spanChange(event) {
//   return (box.spanElem.style.fontSize = event.currentTarget.value + 'px');
// }

// box.inputElem.addEventListener(`input`, spanChange);
