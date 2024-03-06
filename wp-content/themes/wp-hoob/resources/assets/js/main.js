document.addEventListener("DOMContentLoaded", () => {
    console.log("Filter function loaded");
    const filterSectionTop = document.querySelectorAll('.hoobFilter__sectionTop');

    for (let i = 0; i < filterSectionTop.length; i++) {
        filterSectionTop[i].addEventListener('click', function(event){
            const filterSectionInner = this.parentElement.querySelector('.hoobFilter__sectionInner');
            event.preventDefault();
            filterSectionInner.classList.toggle("hoobFilter__sectionInner--close");
            this.classList.toggle("hoobFilter__sectionTop--close");
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hamburger function loaded");
    const hamburger = document.querySelector('.hoobHamburger');

    hamburger.addEventListener('click', function (event) {
        const mobMenuBody = this.closest('.hoobMobMenu');
        event.preventDefault();
        mobMenuBody.classList.toggle("hoobMobMenu--open");
        this.classList.toggle("hoobHamburger--open");
    });

});