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

//Библиотека модальных окон:
// https://cdnjs.com/libraries/simplelightbox
// https://simplelightbox.com/
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
  animationSpeed: 350,
  navText: ['⤌', '⤍'],
  closeText: '×',
  scrollZoomFactor: 1,
  scrollZoom: true,
});
