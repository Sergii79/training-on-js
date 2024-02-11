import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('.gallery');

// Обробка галереї в html
const showGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" 
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}">
    </img>
    </a>
    </div>`;
  })
  .join('');

galleryBox.insertAdjacentHTML('afterbegin', showGalleryItems);

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

galleryBox.addEventListener('click', onGalleryContainerClick);

// Посилання на відкриття модального вікна https://basiclightbox.electerious.com
function showBigImg(link) {
  const instance = basicLightbox.create(`
    <img src="${link}">
`);

  instance.show();
}
