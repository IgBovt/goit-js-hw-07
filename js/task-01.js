const list = document.querySelector("#categories");
console.log(`This list has ${list.children.length} categories`);

[...list.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
