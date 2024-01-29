const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const container = document.querySelector('.gallery');

//* 1-й варіант:

images.forEach(imageItem => {
  const liElement = document.createElement('img');
  liElement.src = imageItem.url;
  liElement.alt = imageItem.alt;
  liElement.classList.add('item');
  container.append(liElement);
});

//* 2-й варіант:

const showImages = images
  .map(
    image =>
      `<li class="imgTaskThree"><img src="${image.url}" alt="${image.alt}" width="300" height="200"></img></li>`
  )
  .join('');

container.insertAdjacentHTML('beforeend', showImages);
