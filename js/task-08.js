const formEl = document.querySelector(".login-form");

const submitBtn = document.querySelector("button");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value.trim() === false || password.value.trim() === false) {
   return alert("всі поля повинні бути заповнені.");
  }

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(data);

  formEl.reset();
}
