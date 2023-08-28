const burger = document.querySelector(".burger");
const navLists = document.querySelector("nav");

// Toggle and Responsive Navigation
const navSlide = () => {
    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
}

navSlide();

// Klik di luar burger
window.addEventListener("click", (e) => {
    if (e.target != burger && e.target != navLists) {
        navLists.classList.remove("nav-active");
        burger.classList.remove("toggle-burger");
    }
})

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}

// Get current year
document.getElementById("currentYear").textContent = new Date().getFullYear();