const refs = {
  controls: document.querySelector("#controls"),
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.createButton.addEventListener("click", () => {
  const amount = refs.controls.firstElementChild.value;
  createBoxes(amount);
});
refs.destroyButton.addEventListener("click", clearElements);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  clearElements();
  const box = document.createElement("div");

  const number = amount;
  if (number <= 100 && number >= 1) {
    for (let i = 0; i < number; i += 1) {
      const newElement = document.createElement("div");
      newElement.style.backgroundColor = getRandomHexColor();
      newElement.style.width = `${30 + i * 10}px`;
      newElement.style.height = `${30 + i * 10}px`;
      box.appendChild(newElement);
    }
    refs.container.appendChild(box);
    refs.controls.firstElementChild.value = "";
  }
}

function clearElements() {
  refs.container.innerHTML = "";
}
