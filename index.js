var bars = document.getElementById("bars");
var menu = document.getElementById("menu2");
var menu2_ul = document.getElementById("menu2_ul");

bars.addEventListener("click", function () {
    if (menu.className === "motion") {
        menu.classList.remove("motion")
        menu2_ul.classList.remove("blur");
    } else {
        //comments
        menu.classList.add("motion")
        menu2_ul.classList.add("blur");
    }
})
