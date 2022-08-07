const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let maxLength = circles.length;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > maxLength) {
    currentActive = maxLength;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  let progressWidth = ((actives.length - 1) / (maxLength - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === maxLength) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
