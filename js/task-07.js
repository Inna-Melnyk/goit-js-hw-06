// const inputEl = document.querySelector("#font-size-control");
// console.log(inputEl);

// const textEl = document.querySelector('#text')

// inputEl.addEventListener('input', onInput);

// function onInput(evt) {
//     console.log(evt);
//     // textEl.style.fontSize = "96px";
//     // const valueOfRangeElement = 16;

//     // const NewFontSize = valueOfRangeElement.toString() + "px";
//     const size = 16;
//     textEl.style.fontSize = size + 'px';
// }

// var slider = document.getElementById("font-size");

// slider.addEventListener("input", function () {
//   var size = slider.value;
//   // this sets the body's font size property, but you can set whatever you need to
//   document.body.style.fontSize = size + "px";
// });

const rangeElement = document.getElementById("font-size-control");

const textElement = document.getElementById("text");

rangeElement.addEventListener("input", updateFontSize);

function updateFontSize() {
  const valueOfRangeElement = this.value;
  const newFontSize = valueOfRangeElement.toString() + "px";
  textElement.style.fontSize = newFontSize;
}