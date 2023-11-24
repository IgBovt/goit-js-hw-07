const pageInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const getUserName = (input, output) => {
  input.addEventListener("input", (event) => {
    event.currentTarget.value === ""
      ? (output.textContent = "Anonymous")
      : (output.textContent = event.currentTarget.value);
  });
};

getUserName(pageInputEl, outputEl);
