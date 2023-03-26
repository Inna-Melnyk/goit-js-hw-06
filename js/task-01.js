const list = document.querySelector("ul#categories");
console.log(list);

// const calсulateSum = (...arr) => {
//     let total = 0;
//     arr.forEach(item => total += 1)

//     return total
// }

// console.log(`Number of categories: ${calсulateSum(...list.children)}`);

let sum = 0;
[...list.children].forEach((item) => (sum += 1));
console.log(`Number of categories: ${sum}`);

// console.log(`Number of categories: ${[...list.children].length}`);

[...list.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${[...item.lastElementChild.children].length}`);
});
