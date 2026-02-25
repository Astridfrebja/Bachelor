document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");

    hamburger.addEventListener("click", function () {
        sideMenu.classList.toggle("active");
    });

});