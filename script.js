const currentNum = document.getElementById("number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let newNum;

decreaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) - 1;
  currentNum.innerHTML = newNum;
});

increaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) + 1;
  currentNum.innerHTML = newNum;
});

resetBtn.addEventListener("click", function () {
  currentNum.innerHTML = 0;
});
