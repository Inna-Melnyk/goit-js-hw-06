const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput(evt) {
 
  if (evt.target.value.trim().length == evt.target.dataset.length) {
    evt.target.classList.contains("invalid")
      ? evt.target.classList.replace("invalid", "valid")
      : evt.target.classList.add("valid");
  } else {
    evt.target.classList.contains("valid")
      ? evt.target.classList.replace("valid", "invalid")
      : evt.target.classList.add("invalid");
  }
}
