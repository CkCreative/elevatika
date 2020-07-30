// var mySwiper = new Swiper ('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   speed: 2020,
//   effect: 'fade',
//   autoplay: {
//     delay: 5000,
//   },
//   fadeEffect: {
//     crossFade: true
//   },
// })

var swiper2 = new Swiper('.swiper2-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  speed: 1020,
  autoplay: {
    delay: 3000,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});