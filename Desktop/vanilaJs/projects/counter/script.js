let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const allClasses = e.currentTarget.classList;

    if (allClasses.contains("decrease")) {
      count--; //count = count  -1
    } else if (allClasses.contains("increase")) {
      count++; //count = count +1
    } else {
      count = 0;
    }
    value.textContent = count;

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "gray";
    }
  });
});