const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    return alert("All form fields must be filled in");
  } else {
    console.log({
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    });
  }

  event.currentTarget.reset();
}

// === STYLES === //
formRef.lastElementChild.classList.add("form-button");

const allInputsInForm = document.querySelectorAll(".login-form input");

const styleEL = document.querySelector("style");
styleEL.remove();
