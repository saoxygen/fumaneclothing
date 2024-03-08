var bars = document.getElementById("bars");
var menu = document.getElementById("menu2");

bars.addEventListener("click", function () {
    if (menu.className === "motion") {
        menu.classList.remove("motion")
    } else {
        menu.classList.add("motion")
    }
})