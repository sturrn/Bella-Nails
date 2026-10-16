AOS.init({
    duration: 1800,
    once: true
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".letreiro", {
    xPercent: -50,
    duration: 15,
    ease: "none",
    repeat: -1
});

//MENU 
const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');
 
menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});
 