var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

///////////////////////////////////////

//~JavaScript Code:-
const btn = document.querySelector('#navToggler');
const tog = document.querySelector('.toggle');
btn.addEventListener('click', function () {
    tog.classList.toggle('toggler');
    tog.style.display = "block";
});
///GSAP
gsap.set('.follower', { xPercent: -50, yPercent: -50 });
gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

var follow = document.querySelector('.follower');
var cur = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
    gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
    gsap.to(follow, 0.6, { x: e.clientX, y: e.clientY });
});
