import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

// Обробка галереї в html
const galleryCreate = galleryItems.reduce(
  (acum, { preview, original, description }) => {
    return (acum += `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`);
  },
  ''
);

galleryContainer.insertAdjacentHTML('afterbegin', galleryCreate);
// galleryContainer.addEventListener('click', openGallery);
