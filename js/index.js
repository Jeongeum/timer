const HRS = document.querySelector("#HRS");
const MIN = document.querySelector("#MIN");
const SEC = document.querySelector("#SEC");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");

function countDown() {
  const HourValue = HRS.value;
  const MinValue = MIN.value;
  const SecValue = SEC.value;
}
// start
startBtn.addEventListener("click", setInterval(countDown, 1000));
