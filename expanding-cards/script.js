const panels = document.querySelectorAll(".panel");
let currentActive = document.querySelector(".active");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel !== currentActive) {
      currentActive.classList.remove("active");
      currentActive = panel;
      currentActive.classList.add("active");
    }
  });
});
