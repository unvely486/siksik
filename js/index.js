var swiper = new Swiper(".swiper", {
  cssMode: true,
  slidesPerview: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
