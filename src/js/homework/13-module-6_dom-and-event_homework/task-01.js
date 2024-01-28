const liCategories = document.querySelectorAll('.item');
console.log(liCategories);

const arrayCategories = [];

liCategories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  arrayCategories.push(categoryName);
});

console.log(arrayCategories);
console.log('Number of categories:', arrayCategories.length);

const categoryTitle = arrayCategories.forEach(category =>
  console.log('Category:', category)
);

// const catecorySubtitle =
