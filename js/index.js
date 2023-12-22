var forgetBtn = document.getElementById("forget-btn");
var forgetModal = document.getElementById("forget-modal");

forgetBtn.addEventListener("click", () => {
  forgetModal.classList.add("open")
})

forgetModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    forgetModal.classList.remove("open")
  }
})