const icons = document.querySelectorAll(".section-1-icons i");
let counter = 1;
setInterval(() => {
    const icon = document.querySelector(".section-1-icons i.change");
    icon.classList.remove("change");
    counter++;
    if (counter > icons.length) {
        counter = 1;
        icons[0].classList.add("change");
    } else {
        icon.nextElementSibling.classList.add("change");
    }
}, 4000);