const list = document.querySelector("#categories");
console.log(`This list has ${list.children.length} categories`);

[...list.children].forEach((element) =>
  console.log(
    `${element.firstElementChild.textContent} has ${element.lastElementChild.children.length} elements`
  )
);
