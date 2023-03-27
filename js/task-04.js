const buttonEl = document.querySelectorAll("button");

const valueEl = document.querySelector("#value");

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

