const formEl = document.querySelector(".login-form");

const submitBtn = document.querySelector("button");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value == false || password.value == false) {
    alert("всі поля повинні бути заповнені.");
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  formEl.reset();
}
