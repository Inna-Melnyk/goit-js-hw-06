const rangeElement = document.getElementById("font-size-control");

const textElement = document.getElementById("text");

rangeElement.addEventListener("input", updateFontSize);

function updateFontSize() {
  const valueOfRangeElement = this.value;
  const newFontSize = valueOfRangeElement.toString() + "px";
  textElement.style.fontSize = newFontSize;
}
