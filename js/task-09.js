function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

changeBtn.addEventListener("click", onClick);

function onClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();

  colorText.textContent = bodyEl.style.backgroundColor;

  console.log();
}
