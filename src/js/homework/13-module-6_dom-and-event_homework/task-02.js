//* 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//* 2. Додасть назву інгредієнта як його текстовий вміст.
//* 3. Додасть елементу клас item.
//* 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

/*
    1. Створити цикл для перебoру елементів категорій 
    2. Створити елемент <li>
    3. Додати назви в створені <li>
    4. Створит контейнер для подальшого запису в html
    5. Запушити елемент <li> в контейнер
    6. Додати елементу клас item.
    7. Вивести елемент <li> 
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.getElementById('ingredients');

//* 1-й варіант:

// for (const item of ingredients) {
//   const itemElement = document.createElement('li');
//   itemElement.textContent = item;
//   container.append(itemElement);
//   itemElement.classList.add('item');

//   console.log(itemElement);
// }

//* 2-й варіант:

// const list = ingredients.map(item => {
//   const itemElement = document.createElement('li');
//   itemElement.textContent = item;
//   itemElement.classList.add('item');
//   return itemElement;
// });
// container.append(...list);
// console.log(list);

//* 3-й варіант:

const ulElements = document.querySelector('#ingredients');

ingredients.forEach(ingredientItem => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredientItem;
  ulElements.append(liElement);
  liElement.classList.add('item');
});

console.log(ulElements);
