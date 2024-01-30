console.log('Hello!');

//* 1-й варіант:

// const containerDecrement = document.querySelector('[data-action="decrement"]');
// console.log(containerDecrement);

// const containerIncrement = document.querySelector('[data-action="increment"]');

// const counterValueElement = document.querySelector('#value');

// let counterValue = 0;

// const decrementСhange = () => {
//   counterValue -= 1;
//   counterValueElement.textContent = counterValue;
// };

// const incrementСhange = () => {
//   counterValue += 1;
//   counterValueElement.textContent = counterValue;
// };

// containerDecrement.addEventListener('click', decrementСhange);

// containerIncrement.addEventListener('click', incrementСhange);

//* 2-й варіант:

const decrementButton = document.querySelector(
  'button[data-action = "decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action = "increment"]'
);

const counterValue = document.querySelector('#value');

const counter = {
  value: 0,

  decrement() {
    console.log(this);
    this.value -= 1;
  },

  increment() {
    console.log(this);
    this.value += 1;
  },
};

decrementButton.addEventListener('click', () => {
  console.log('click on decrementButton');
  counter.decrement();
  console.log(counter);

  counterValue.textContent = counter.value;
});

incrementButton.addEventListener('click', () => {
  console.log('click on incrementButton');
  counter.increment();
  console.log(counter);

  counterValue.textContent = counter.value;
});
