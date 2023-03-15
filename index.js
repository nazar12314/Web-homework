burger_btn = document.getElementById("burger-btn");
navbar = document.querySelector(".navbar");

burger_btn.addEventListener("click", () => {
  navbar.classList.toggle("responsive");
});
