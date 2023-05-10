const bgAnimation = document.getElementById("bgAnimation");

const numberOfBoxes = 1400;

for (let i = 0; i < numberOfBoxes; i++) {
  const colorBox = document.createElement("div");

  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}
