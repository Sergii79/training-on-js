//* 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//* 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

/*
    1. Створити константу для категорій  - li.item
    2. Вивести кількість категорій
    3. Створити цикл для перебoру елементів категорій
    4. Знайти Заголовки <h2>
    5. Вивести контент Заголовків
    6. Знайти кількість елементів в категорії <li>
    7. Вивести знайдену кількість елементів   
*/

const categories = document.querySelectorAll('.item');

console.log(categories);
console.log('Number of categories:', categories.length);

//* 1-й варіант:

// for (const category of categories) {
//   const title = category.firstElementChild.textContent;
//   console.log('Category:', title);
//   const subtitle = category.lastElementChild.children.length;
//   console.log('Elements:', subtitle);
// }

//* 2-й варіант:

categories.forEach(item => {
  const title = item.firstElementChild.textContent;
  console.log('Category:', title);
  const subtitle = item.lastElementChild.children.length;
  console.log('Elements:', subtitle);
});
