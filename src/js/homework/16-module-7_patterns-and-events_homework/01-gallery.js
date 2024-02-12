// import * as basicLightbox from 'basiclightbox';

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const containerGallery = document.querySelector('.gallery');

// const createGallery = galleryItems.reduce((acum, item) => {
//   return (acum += `<li><img src="${item.preview}" title="${item.description}"></li>`);
// }, '');

// containerGallery.insertAdjacentHTML('beforeend', createGallery);

// //Библиотека модальных окон:
// //https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
// //https://basiclightbox.electerious.com/

// const createModalWindow = (original, description) => {
//   return basicLightbox.create(
//     `<img src="${original}" alt="${description}" width="800" height="600">`
//   );
// };

// // createModalWindow.show();

// // containerGallery.addEventListener('click', createModalWindow);

// containerGallery.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   const imageSrc = event.target.getAttribute('src');
//   const imageDescription = event.target.getAttribute('title');

//   const modal = createModalWindow(imageSrc, imageDescription);
//   modal.show();
// });

//*-------------------------------
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

// Функція створення модального вікна
function onGalleryContainerClick(event) {
  event.preventDefault();

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

function showBigImg(link) {
  const instance = basicLightbox.create(`
  <img src="${link}">
  `);

  instance.show();
}

galleryСontainer.addEventListener('click', onGalleryContainerClick);
