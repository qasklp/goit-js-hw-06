function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button");
const text = document.querySelector(".color")
btn.addEventListener("click", setColor);

function setColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}