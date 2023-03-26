function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
console.dir(bodyEl);
const changeBtn = document.querySelector(".change-color");
console.log(changeBtn);
const colorText = document.querySelector(".color");
console.log(colorText);


changeBtn.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt);
  bodyEl.style.backgroundColor = getRandomHexColor();
  
  colorText.textContent = bodyEl.style.backgroundColor;


console.log();

}