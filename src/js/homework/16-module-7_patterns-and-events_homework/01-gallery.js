//Установка библиотеки через npm, script тогда не нужен, только стили
// import * as basicLightbox from 'basiclightbox';

import { galleryItems } from './gallery-items.js';

const galleryСontainer = document.querySelector('.gallery');

// Обробка галереї в html
// const galleryCreate = galleryItems
//   .map(({ preview, original, description }) => {
//     return `
//     <div class="gallery__item">
//     <a class="gallery__link"
//     href="${original}">
//     <img class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}">
//     </img>
//     </a>
//     </div>`;
//   })
//   .join('');

const galleryCreate = galleryItems.reduce(
  (acum, { preview, original, description }) => {
    return (acum += `<div class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}">
    </img>
    </a>
    </div>`);
  },
  ''
);

galleryСontainer.insertAdjacentHTML('afterbegin', galleryCreate);

// Функція відповідає за обробку події кліку на контейнері галереї
function onGalleryContainerClick(event) {
  event.preventDefault();

  // Перевіряється, чи клікнули на зображення в галереї. Це робиться за допомогою перевірки класу цільового елемента, який був клікнутий. Якщо цей елемент має клас gallery__image, це означає, що клік був на зображенні, тому код продовжує виконуватися.
  const isImg = event.target.classList.contains('gallery__image');
  if (!isImg) {
    return;
  }

  const originalLink = event.target.dataset.source;

  showBigImg(originalLink);
}

//Библиотека модальных окон:
//https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
//https://basiclightbox.electerious.com/
//https://github.com/electerious/basicLightbox#readme

// Функція створення модального вікна
function showBigImg(link) {
  // Спочатку створюється екземпляр модального вікна за допомогою функції basicLightbox.create()
  const instance = basicLightbox.create(`
  <img src="${link}">
  `);

  // Метод щоб відобразити модальне вікно на екрані.
  instance.show();

  // Далі додається обробник події keydown на весь документ. Це означає, що функція onKeyDown буде викликана кожен раз, коли буде натиснута будь-яка клавіша на клавіатурі.
  document.addEventListener('keydown', onKeyDown);

  // У функції onKeyDown перевіряється, чи були натиснуті клавіші ESC або Enter
  function onKeyDown(event) {
    // Перевірка чи натиснута клавіша ESC або Enter
    if (event.code === 'Escape' || event.code === 'Enter') {
      // Якщо так, то викликається метод instance.close(), щоб закрити модальне вікно
      instance.close(); // Закрити модальне вікно
      // Після закриття модального вікна, обробник події keydown видаляється з документа, щоб уникнути зайвих викликів функції onKeyDown.
      document.removeEventListener('keydown', onKeyDown); // Видалити обробник події
    }
  }
}

galleryСontainer.addEventListener('click', onGalleryContainerClick);
