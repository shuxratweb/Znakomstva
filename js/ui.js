var menuBtn = document.getElementById("menu-btn");
var mobileNav = document.getElementById("mobile-nav");


menuBtn.addEventListener("click", () => { 
  mobileNav.classList.toggle('active');
})

//chat modal 
var chatModal = document.getElementById("chat-modal");
var chatModalBtns = document.querySelectorAll(".chat-btn");

chatModalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    chatModal.classList.toggle('open')
  })
})
 
chatModal.addEventListener("click", e => {
	if (e.target.classList.contains("chat-modal")) {
		chatModal.classList.remove("open");
	}
});
