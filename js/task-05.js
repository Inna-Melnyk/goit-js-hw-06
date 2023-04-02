const inputEl = document.querySelector("#name-input");

const titleEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(evt) {
  if (!evt.currentTarget.value ) {
    titleEl.textContent = "Anonymous";
  } else {
    titleEl.textContent = evt.currentTarget.value.trim();
  }
  
}
