const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.projects-pagination',
    bulletClass:'projects-bullet',
    bulletActiveClass:'projects-bullet-active',
    clickable: true, },
  slidesPerView: 1,
  speed: 1200,
  autoplay: {
   delay: 4000,}

});
console.log('without problems(swiper)');