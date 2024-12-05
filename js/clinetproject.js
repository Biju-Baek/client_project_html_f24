function myFunction() {
    console.log("Hamburger Navigation has opened")
    let x = document.querySelector(".nav-menu");
    let y = document.querySelector(".hamburgerbar-container");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.classList.remove("change");
    } else {
      x.style.display = "block";
      y.classList.add("change");
    }
}
let currentIndex = 0;

function slide(direction) {
    let sliderWrapper = document.querySelector('.slider-wrapper');
    let cards = document.querySelectorAll('.card-item');
    let totalCards = cards.length;

    // Update current index
    currentIndex += direction;

    // Loop around if at the ends
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    // Calculate the translateX value
    let translateX = -currentIndex * 100;

    // Apply the transform
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
}

function openMap(libraryName) {
    console.log("Google Map Opened")
    let query = encodeURIComponent(libraryName + ' University of Michigan');
    let url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
}

document.querySelectorAll(".faq-item h3").forEach(item => {
    item.addEventListener("click", () => {
        console.log("Question Toggle Changed")
        const parent = item.parentElement;
        parent.classList.toggle("open");
        const icon = parent.querySelector(".icon");
        icon.textContent = parent.classList.contains("open") ? "-" : "+";
    });
});