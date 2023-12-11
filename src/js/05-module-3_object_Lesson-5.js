console.log('Hello');

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(`This ${book[key]}`);
}
