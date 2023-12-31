// # Модуль 1. Заняття 2. Розгалуження. Цикли
console.log('Lesson 2');

// ## Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
// `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`

// const answer = prompt('Яка офіційна назва JavaScript?');

// if (answer === 'ECMAScript') {
//   alert('Правильно');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

console.log('-----');

// ## Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.

// ```js
const hours = 14;
const minutes = 0;

1;
let result = `${hours} г.`;

if (minutes !== 0) {
  result += ` ${minutes} хв.`;
}

//2
// let result;

// if (minutes === 0) {
//   result = `${hours} г.`
// } else {
//   result = `${hours} г. ${minutes} хв.`
// }

console.log(result);
// ```

console.log('-----');

// ## Example 3 - Розгалуження

// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.

// ```js
// const userInput = Number(prompt('Введіть число'));

// if (userInput === 0) {
//   alert('Це нуль');
// } else if (userInput > 0) {
//   alert('Це позитивне число');
// } else if (userInput < 0) {
//   alert('Це негативне число');
// } else {
//   alert('ви щось не те ввели');
// }

// ```

console.log('-----');

// ## Example 4 - Вкладені розгалуження

// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.

// ```js
const a = 120;
const b = 10;

if (a > 100 && b > 100) {
  if (a >= b) {
    console.log(a);
  } else {
    console.log(b);
  }
} else {
  console.log(b + 512);
}

// ```

console.log('-----');

// ## Example 5 - Форматування посилання (endsWith)

// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.

// ```js
let link = 'https://my-site.com/about';

if (!link.endsWith('/')) {
  link += '/';
}
console.log(link);

// if (link.endsWith('/')) {
//   console.log(link);
// } else {
//   link += '/';
//   console.log(link);
// }

// ```

console.log('-----');

// ## Example 6 - Форматування посилання (includes та логічне «І»)

// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
// `if...else`.

// ```js
let linkAnother = 'https://my-site.com/about';

if (!linkAnother.endsWith('/') && linkAnother.includes('my-site')) {
  linkAnother += '/';
}

console.log(linkAnother);

// ```

console.log('-----');

// ## Example 7 - Форматування посилання (тернарний оператор)

// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// ```js
let linkNext = 'https://mys-site.com/about';
linkNext.includes('my-site') && !linkNext.endsWith('/')
  ? (linkNext += '/')
  : (linkNext += '?');
console.log(linkNext);
// ```

console.log('-----');

// ## Example 8 - if...else та логічні оператори

// Напиши скрипт який виводитиме в консоль браузера рядок залежно від
// значення змінної `hours`.

// Якщо значення змінної `hours`:

// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`

// ```js
const totalHours = 25;

if (totalHours < 17) {
  console.log('Pending');
} else if (totalHours >= 17 && totalHours <= 24) {
  console.log('Expires');
} else {
  console.log('Overdue');
}
// ```

console.log('-----');

// ## Example 9 - Дедлайн здачі проекту (if...else)

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// конструкцію `if...else`.

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

// ```js
const daysUntilDeadlineAnother = 10;

if (daysUntilDeadlineAnother === 0) {
  console.log('Сьогодні');
} else if (daysUntilDeadlineAnother === 1) {
  console.log('Завтра');
} else if (daysUntilDeadlineAnother === 2) {
  console.log('Післязавтра');
} else {
  console.log('Дата у майбутньому');
}
// ```

console.log('-----');

// ## Example 10 - Дедлайн здачі проекту (switch)

// Виконай рефакторинг коду задачі номер 5 використовуючи `switch`.

// ```js
const daysUntilDeadline = 1;

switch (daysUntilDeadline) {
  case 0: {
    console.log('Сьогодні');
    break;
  }

  case 1: {
    console.log('Завтра');
    break;
  }

  case 2: {
    console.log('Післязавтра');
    break;
  }

  default: {
    console.log('Дата у майбутньому');
  }
}

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }
// ```

console.log('-----');

// ## Example 11 - Цикл for

// Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
// до `max`, але тільки якщо число кратне `5`.

// ```js
const max = 89;
const min = 13;

for (let i = min; i <= max; i += 1) {
  if (i % 5 === 0) console.log(i);
}

// for (let i = min; i <= max; i += 1) {
//   !(i % 5) ? console.log(i) : null;
// }

// ```

console.log('-----');

// ## Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.

// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`

// Пароль перевіряти так:

// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// - Інакше виводити рядок `"Невірний пароль"`

// const loginName = prompt('Введіть логін');
// console.log(loginName, typeof loginName);

// if (loginName === 'Адмін') {
//   const password = prompt('Введіть пароль');
//   if (password === 'qwerty') {
//     alert('Вітаю Адмін!');
//   } else {
//     alert('Невірний пароль');
//   }
// } else if (!loginName) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }

// const loginName = prompt('ваш логін');

// console.log(loginName, typeof loginName);

// if (loginName === "Адмін") {
//   const password = prompt('тепер введи пароль');

//   if (password === 'Я адмін') {
//     console.log('Здрастуйте')
//   } else {
//     console.log("Невірний пароль")
//   }

// } else if (!loginName) {
//   console.log('Скасовано')
// } else {
//   console.log('Я вас не знаю')
// }

// const loginName = null;
// const loginName = undefined;
// const loginName = 0;
// const loginName = '';
// const loginName = false;

// if (!loginName) {
//   console.log('Скасовано');
// }

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

console.log('-----');
// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

console.log('-----');
function multiplyFirst(...args) {
  console.log(args); // масив усіх аргументів
}

multiplyFirst(1, 2);
multiplyFirst(1, 2, 3);
multiplyFirst(1, 2, 3, 4);

console.log('-----');
function multiplySecond(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiplySecond(1, 2);
multiplySecond(1, 2, 3);
multiplySecond(1, 2, 3, 4);

// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   result = message.includes('spam') || message.includes('sale') ? true : false;
//   // if(message = "spam" || message = "sale") {
//   //   result = message.includes();
//   // }
//   // else {
//   //   result = message;
//   // }
//   // Change code below this line

//   // Change code above this line
//   return result;
// }
