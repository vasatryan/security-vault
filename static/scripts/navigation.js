const btn = document.getElementById("humburger");
const menu = document.getElementById("navmenu");
const menuIcon = document.querySelector(".hamburger");
btn.addEventListener("click", () => {
  if (menu.style.right === "0px") {
    menu.style.right = "-100%"; // Hiding the menu
  } else {
    menu.style.right = "0"; // Showing the menu
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target !== menu && event.target !== btn && event.target !== menuIcon) {
    menu.style.right = "-100%";
  }
});

