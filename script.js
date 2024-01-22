const currentNum = document.getElementById("number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let newNum;

decreaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) - 1;
  currentNum.innerHTML = newNum;
  console.log(newNum);

  if (newNum <= -1) {
    currentNum.style.color = "red";
  } else if (newNum === 0) {
    currentNum.style.color = "white";
  }
});

increaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) + 1;
  currentNum.innerHTML = newNum;
  console.log(newNum);

  if (newNum >= 1) {
    currentNum.style.color = "green";
  } else if (newNum === 0) {
    currentNum.style.color = "white";
  }
});

resetBtn.addEventListener("click", function () {
  currentNum.innerHTML = 0;
  currentNum.style.color = "white";
});
