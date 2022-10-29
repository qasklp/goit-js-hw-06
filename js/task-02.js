const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let items = [];
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item")
  item.textContent = ingredient;
  items.push(item);
}
const list = document.querySelector("ul");
list.append(...items);