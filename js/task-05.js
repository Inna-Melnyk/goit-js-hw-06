const inputEl = document.querySelector("#name-input");

const titleEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);

function onInput(evt) {
  titleEl.textContent = evt.currentTarget.value;
}
