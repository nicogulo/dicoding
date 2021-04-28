const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");

// membuka toogle
hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

// menutup toogle
mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});
