const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    document.body.style.overflow =
    mobileMenu.classList.contains("active")
        ? "hidden"
        : "auto";

});

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");

        document.body.style.overflow = "auto";

    });

});
document.addEventListener("click", (e) => {

    if(
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){

        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});