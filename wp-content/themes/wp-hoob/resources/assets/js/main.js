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