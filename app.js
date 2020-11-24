const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('.navbar_logo')
const body = document.querySelector('body')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// animation

gsap.registerPlugin(ScrollTrigger)

gsap.from('.hero-animation', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.services-animation', {
    scrollTrigger: '.services-animation',
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: 0.12
});

gsap.from('.img-animation', {
    scrollTrigger: '.services-animation',
    duration: 1.2,
    opacity: 0,
    x: -200
});

gsap.from('.associate-animation', {
    scrollTrigger: '.associate-animation',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.card-animation', {
    scrollTrigger: '.card-animation',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from('.team-animation', {
    scrollTrigger: '.team-animation',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.newsletter-animation', {
    scrollTrigger: '.newsletter-animation',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.6
});