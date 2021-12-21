const colorArr = ["red", "green", "pink"];
const colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexClr = "#";
  for (let i = 0; i < 6; i++) {
    let randNum = generateRandomNum();
    hexClr += colorHex[randNum];
  }

  document.body.style.backgroundColor = hexClr;
  color.textContent = hexClr;
});

function generateRandomNum() {
  return Math.floor(Math.random() * colorHex.length);
}
