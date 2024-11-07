let img = document.getElementById("img");
let settings = document.getElementById("theader");
let item = document.getElementsByClassName("item");
let item1 = document.getElementsByClassName("menu_a");
let dItem = document.getElementsByClassName("darkItem");
let togleBack = document.getElementById('backToggle');
let content = document.getElementById("cont");

img.addEventListener("click", () => {
    if ( settings.style.display === "none" || settings.style.display === "" ) {
        settings.style.display = "block";
    } else {
        settings.style.display = "none";
    }
});


 