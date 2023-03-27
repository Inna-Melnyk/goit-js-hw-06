const list = document.querySelector("ul#categories");

let sum = 0;
[...list.children].forEach((item) => (sum += 1));
console.log(`Number of categories: ${sum}`);


[...list.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${[...item.lastElementChild.children].length}`);
});
