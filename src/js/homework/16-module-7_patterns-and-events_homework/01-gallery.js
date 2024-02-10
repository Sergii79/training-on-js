import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const createGallery = galleryItems.reduce((acum, item) => {
  return (acum += `<li><img src="${item.preview}" title="${item.description}"></li>`);
}, '');

containerGallery.insertAdjacentHTML('beforeend', createGallery);

// containerGallery.addEventListener('click', createGallery);
