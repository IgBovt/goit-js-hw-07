const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  event.target.elements.email.value === "" ||
  event.target.elements.password.value === ""
    ? alert("All form fields must be filled in")
    : console.log({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      });

  event.currentTarget.reset();
}
