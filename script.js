document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const dropdown = document.getElementById("dropdownMenu");

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    dropdown.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.addEventListener("click", function () {
        dropdown.classList.remove("active");
        hamburger.classList.remove("active");
    });

});