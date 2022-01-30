const list = document.querySelectorAll(".list");
let menu = querySelector(".menu-abre-fecha");
let navigation = querySelector(".navigation");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));
