document.addEventListener("DOMContentLoaded",(()=>{console.log("Filter function loaded");const e=document.querySelectorAll(".hoobFilter__sectionTop");for(let o=0;o<e.length;o++)e[o].addEventListener("click",(function(e){const o=this.parentElement.querySelector(".hoobFilter__sectionInner");e.preventDefault(),o.classList.toggle("hoobFilter__sectionInner--close"),this.classList.toggle("hoobFilter__sectionTop--close")}))})),document.addEventListener("DOMContentLoaded",(()=>{console.log("Hamburger function loaded"),document.querySelector(".hoobHamburger").addEventListener("click",(function(e){const o=this.closest(".hoobMobMenu");e.preventDefault(),o.classList.toggle("hoobMobMenu--open"),this.classList.toggle("hoobHamburger--open")}))}));