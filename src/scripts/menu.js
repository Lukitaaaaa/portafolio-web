document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.getElementById("hamburger-button");
    const navbar = document.getElementById("navbar-sticky");

    hamburgerButton.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
        navbar.classList.toggle("block");
    });
});

