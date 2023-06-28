const body = document.getElementById("body");
const color = document.getElementById("color");
const color_generator_btn = document.getElementById("color-generator-btn");
color_generator_btn.addEventListener("click", turnHex);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function turnHex() {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  const hex_red = red.toString(16);
  const hex_green = green.toString(16);
  const hex_blue = blue.toString(16);
  const hexColor = "#" + hex_red + hex_green + hex_blue;
  color.innerHTML = "Background Color: " + hexColor;
  body.style.backgroundColor = hexColor;
}
