const refs = {
  button: document.querySelector(".change-color"),
  output: document.querySelector(".color"),
  body: document.querySelector("body"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  refs.output.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}

refs.button.addEventListener("click", changeBodyColor);

// === STYLES === //
const styleEL = document.querySelector("style");
styleEL.remove();
