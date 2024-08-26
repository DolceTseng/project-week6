import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
// import Swiper JS
import Swiper from 'swiper';


console.log("Hello world!");

const swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    slidesPerView: 2,
    spaceBetween: 48,
    loop:true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".swiper-pagination-custom",
      type: "fraction"
    }
  });