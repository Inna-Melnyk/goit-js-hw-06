const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesElement = document.getElementById("boxes");
const inputEl = document.querySelector('input[type="number"]');

createBtn.addEventListener("click", createElement);
destroyBtn.addEventListener("click", destroyBoxes);

function createElement() {
  boxesElement.innerHTML = "";
  const amountOfInnerBoxes = Number(inputEl.value);

 createBoxes(amountOfInnerBoxes);
}

function createBoxes(amount) {
   let step = 20;

  for (let i = 1; i <= amount; i += 1) {
    if (amount > 100) {
      return alert("insert nubmer till 100");
    }

    let textElement = document.createElement("div");
    step += 10;
    textElement.style.width = `${step}px`;
    textElement.style.height = `${step}px`;
    textElement.style.backgroundColor = getRandomHexColor();
    boxesElement.append(textElement);
  }
};

function destroyBoxes() {
  boxesElement.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
