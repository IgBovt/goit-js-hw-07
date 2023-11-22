const listEl = document.querySelector("#categories");
console.log(`This list has ${listEl.children.length} categories`);

[...listEl.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
