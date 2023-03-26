const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientListEl = document.querySelector("ul#ingredients");

const markup = [];

ingredients.forEach((item) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item");
  ingredientItemEl.textContent = item;
  markup.push(ingredientItemEl);
});

console.log(markup);

ingredientListEl.append(...markup);
