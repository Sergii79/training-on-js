console.log('Lesson 4');
// # Модуль 2. Заняття 4. Функції

// ## Example 1 - Індекс маси тіла

// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// ```js

/**
 * 1. запитати користувача його зріст і вагу
 * 2. написати функцію, яка приймає два аругменти і повертає індекс маси тіла
 */

const calcBMI = function (w, h) {
  const weight = Number(w.replace(',', '.'));
  const height = Number(h.replace(',', '.'));

  const heightPow = Math.pow(height, 2);

  return (weight / heightPow).toFixed(1);
};

// const weight = prompt('введіть свою вагу в кілграмах');
// const height = prompt('введіть свій зріст в метрах');

// const bmi = calcBMI(weight, height);
// console.log(bmi); // 28.8
// ```

console.log('-----');

// ## Example 2 - Найменше з чисел

// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.

// ```js

const min = function (a, b) {
  //1
  return a > b ? b : a;

  //2
  if (a > b) {
    return b;
  }
  return a;
};

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
console.log(min(4, 4)); // 1
// ```

console.log('-----');

// ## Example 3 - Площа прямокутника

// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.

// ```js
console.log('square = ', getRectArea('8 11'));

function getRectArea(dimensions) {
  const sizesArr = dimensions.split(' ');

  return sizesArr[0] * sizesArr[1];
}

// ```

console.log('-----');

// ## Example 4 - Логування елементів

// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
// `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.

// Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.

// ```js
function logItems(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }

  for (let item of items) {
    const i = items.indexOf(item);
    console.log(`${i + 1} - ${item}`);
  }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['asdas', 'asdasd', 'dkjghk']);
// logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

console.log('-----');

// ## Example 5 - Логування контактів

// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.

// ```js
function printContactsInfo(names, phones) {
  const namesArray = names.split(',');
  const phonesArray = phones.split(',');

  const result = [];
  // 1
  for (let i = 0; i < namesArray.length; i += 1) {
    result.push(`${namesArray[i]} - ${phonesArray[i]}`);
  }

  // // 2
  // for (let item of namesArray) {
  //   const i = namesArray.indexOf(item);
  //   console.log(`${namesArray[i]} - ${phonesArray[i]}`)
  // }

  return result.sort();
}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// const array = printContactsInfo(
//   'Artem,Ivan,Petro,Semen',
//   '89001112233,890055566377,890055566300',
// );

// console.log(array.join(' || '))
// ```

console.log('-----');

// ## Example 6 - Пошук найбільшого елемента

// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// масиві.

// ```js
function findLargestNumber(numbers) {
  //1
  return Math.max(...numbers);

  //2
  // let max = numbers[0];
  // for (let element of numbers) {
  //   if (element > max) {
  //     max = element
  //   }
  // }

  // return max
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

console.log('-----');

// ## Example 7 - Середнє значення

// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// ```js
function calcAverage(...numbers) {
  console.log(numbers);

  console.log('Total arguments = ', arguments.length);

  let sum = 0;
  for (let arg of numbers) {
    sum += arg;
  }

  return sum / arguments.length;
}

// console.log(calcAverage(1, 2, 3, 4, 45, 12, 67)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

console.log('-----');

// ## Example 8 - Форматування часу

// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const formatedHours = String(hours).padStart(2, '0');
  const formatedMinutes = String(mins).padStart(2, '0');

  return `${formatedHours}:${formatedMinutes}`;
}

const a = formatTime(1440);
console.log(a); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

console.log('--Example 9--');

// ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

// Напишіть функції для роботи з колекцією навчальних курсів `courses`:

// - `addCourse(name)` - додає курс до кінця колекції
// - `removeCourse(name)` - видаляє курс із колекції
// - `updateCourse(oldName, newName)` - змінює ім'я на нове

// ```js
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const lastCourseIndex = courses.length - 1;
const lastCourse = courses[lastCourseIndex];
console.log(lastCourseIndex);
console.log(lastCourse);

function addCourse(name) {
  // if (courses.includes(name)) {
  //   return 'Ви вже маєте такий курс'
  // }

  if (courses.indexOf(name) > -1) {
    return 'Ви вже маєте такий курс';
  }

  courses.push(name);
  return 'Курс додано';
}

function deleteCourse(name = 'deafult value') {
  /**
   * 1. Знайти індекс елемента. indexOF
   * 2. Видаляємо елемент по індексу. splice
   */

  const index = courses.indexOf(name);
  if (index === -1) {
    return 'Такого курса нема';
  }

  const result = `Курс ${courses[index]} видалено`;
  courses.splice(index, 1);

  return result;
}

function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);
  if (index === -1) {
    return 'Такого курса нема';
  }

  const result = `Курс ${oldName} оновлено на курс ${newName}`;
  courses.splice(index, 1, newName);

  return result;
}

let res = addCourse('Express');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

res = addCourse('Express');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

res = deleteCourse();
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

res = updateCourse('Express', 'NestJS');
console.log(courses, res); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```

console.log('-----');

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let sumPrice;
  let wordArray = message.split(' ');
  console.log(wordArray);

  sumPrice = wordArray.length * pricePerWord;

  return sumPrice;
  // Change code above this line
}

message = 'JavaScript is in my blood';
pricePerWord = 2;

const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(`Total price: ${totalPrice}`);

// function findLongestWord(string) {
//   // Change code below this line

//   let array = string.split(' ');
//   let LongestWord;
//   let length = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > length) {
//       length = array[i].length;
//       LongestWord = array[i];
//     }
//   }
//   console.log(LongestWord);
//   return LongestWord;

//   // Change code above this line
// }

console.log('-----');

function findString(array) {
  let longestString = '';

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);

    if (element.length > longestString.length) {
      longestString = element;
    }
  }
  console.log(longestString);
  return longestString;
}

const wordsArray = [
  'sdsdf dsvs sdf',
  'sdf sdsdf',
  'sdgs s sf sfsdggs sssf',
  'dsv xs f',
];
console.log(wordsArray);

findString(wordsArray);

console.log('-----');

function findLongerWord(array) {
  let longestWord = '';

  for (let index = 0; index < array.length; index++) {
    const wordsArray = array[index].split(' ');
    console.log(wordsArray);
    // if (element.length > longestString.length) {
    //   longestString = element;
    // }
    for (let index = 0; index < wordsArray.length; index++) {
      const word = wordsArray[index];
      console.log(word);
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  }

  console.log(longestWord);
  return longestWord;
}

const wordArray = [
  'sdsdf dsvs sdf',
  'sdf sdsdf',
  'sdgs s sf sfsdggs sssf',
  'dsv xs f',
];
console.log(wordArray);

findLongerWord(wordArray);

console.log('-----');

const minNumber = 1;
const maxNumber = 16;

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let index = min; index <= max; index += 2) {
    numbers.push(index);
  }
  // Change code above this line
  console.log(numbers);
  return numbers;
}

createArrayOfNumbers(minNumber, maxNumber);

console.log('-----');

const numberArray = [1, 2, 3, 4, 5, 6];
const valueNumber = 3;

function filterNumberArray(numbers, value) {
  // Change code below this line
  let newArrey = [];

  for (let index = 0; index <= numbers.length; index++) {
    if (numbers[index] > value) {
      newArrey.push(numbers[index]);
    }
  }
  console.log(newArrey);
  return newArrey;
  // Change code above this line
}

filterNumberArray(numberArray, valueNumber);

console.log('-----');

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

const newFruit = 'apple';

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  if (fruits.includes(fruit)) {
    console.log(`${fruit} is in the array.`);
    return true;
  } else {
    console.log(`${fruit} is not in the array.`);
    return false;
  }
  // Change this line
}

checkFruit(newFruit);

console.log('-----');

function getCommonElements(array1, array2) {
  // Change code below this line
  let checkArrey = [];

  for (let index = 0; index < array1.length; index++) {
    if (array2.includes(array1[index])) {
      checkArrey.push(array1[index]);
    }
  }
  console.log(checkArrey);
  return checkArrey;
  // Change code above this line
}

const numberArray1 = [1, 3, 5];
const numberArray2 = [0, 8, 5, 3];

getCommonElements(numberArray1, numberArray2);

console.log('-----');

function getEvenNumbers(start, end) {
  // Change code below this line
  let array = [];

  for (let index = start; index <= end; index++) {
    console.log(index);
    if (index % 2 === 0) {
      array.push(index);
    }
  }

  console.log(array);
  return array;
  // Change code above this line
}

const numberStart = 1;
const numberEnd = 10;

getEvenNumbers(numberStart, numberEnd);

console.log('-----');

// function includes(array, value) {
//   // Change code below this line
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === value) {
//       console.log(array[index]);
//       // return index;
//       console.log('true');
//       return true;
//     }
//   }
//   console.log('false');
//   return false;
//   // Change code above this line
// }

// const allArray = [1, 2, 3, 4, 5];
// const findValue = 2;

// includes(allArray, findValue);

function includes(array, value) {
  // Change code below this line
  for (let number of array) {
    if (number === value) {
      console.log('true');
      return true;
    }
  }
  console.log('false');
  return false;
}

const allArray = [1, 2, 3, 4, 5];
const findValue = 5;

includes(allArray, findValue);
