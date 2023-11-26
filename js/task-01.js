const listEl = document.querySelector("#categories");
console.log(`This list has ${listEl.children.length} categories`);

[...listEl.children].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

// ====== STYLES =====//
const smallListEl = document.querySelectorAll(".item ul");
smallListEl.forEach((list) => list.classList.add("small-list"));

const smallListItemEl = document.querySelectorAll(".small-list li");
smallListItemEl.forEach((item) => item.classList.add("small-list-item"));

// ======= FONTS ======= //;

const headEL = document.querySelector("head");
headEL.insertAdjacentHTML(
  "beforeend",
  `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet"></link>`
);
