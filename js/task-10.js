function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainerEl = document.getElementById("boxes");

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const boxesElement = document.getElementById("boxes");

createBtn.addEventListener("click", createElement);

function createElement() {
  boxesElement.innerHTML = "";
  const inputEl = document.querySelector('input[type="number"]');
  const numberOfElement = parseInt(inputEl.value);

  let step = 20;

  for (let i = 1; i <= numberOfElement; i += 1) {
    if (numberOfElement > inputEl.attributes.max.value) {
      return alert("insert nubmer till 100");
    }

    let textElement = document.createElement("div");
    step += 10;
    textElement.style.width = `${step}px`;
    textElement.style.height = `${step}px`;
    textElement.style.backgroundColor = getRandomHexColor();
    boxesElement.append(textElement);
  }
}
destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesElement.innerHTML = "";
}
