const mainQuestions = document.querySelectorAll(".mainQuestion");

mainQuestions.forEach(function (que) {
  const btnminusIc = que.querySelector(".minusIc");
  const btnplusIc = que.querySelector(".plusIc");

  btnplusIc.addEventListener("click", function () {
    mainQuestions.forEach(function (item) {
      if (item !== que) {
        item.classList.remove("showQ");
      }

      que.classList.add("showQ");
    });
  });

  btnminusIc.addEventListener("click", function () {
    que.classList.remove("showQ");
  });
});