const buttonEl = document.querySelectorAll("button");
console.log(buttonEl);

const valueEl = document.querySelector("#value");
console.log(valueEl);

let counterValue = 0;

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "increment") {
      counterValue += 1;
    } else if (button.dataset.action === "decrement") {
      counterValue -= 1;
    }
    valueEl.textContent = counterValue;
  });
});

// function onClick(evt) {
//     if (this.dataset.action === "increment") {
//       counterValue += 1;
//     } else if (this.dataset.action === "decrement") {
//         counterValue -= 1;
//     }
//     valueEl.textContent = counterValue;
// }
