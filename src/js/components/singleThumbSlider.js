import Swiper, { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';

const swiperBottom = new Swiper('.swiper-bottom', {
  spaceBetween: 15,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    576: {
      slidesPerView: 4
    },

    320: {
      slidesPerView: 3,
    }
  }
});

new Swiper('.swiper-top', {
  modules: [Thumbs],
  slidesPerView: 1,

  thumbs: {
    swiper: swiperBottom
  }
});
