import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

if (document.querySelector('.hits-swiper')) {
  new Swiper('.hits-swiper', {
    modules: [ Navigation ],
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,

    navigation: {
      prevEl: '.hits-swiper__prev',
      nextEl: '.hits-swiper__next'
    },

    breakpoints: {
      1024: {
        slidesPerView: 4
      },

      768: {
        slidesPerView: 3
      },

      576: {
        slidesPerView: 2
      },

      320: {
        slidesPerView: 1,
      }
    }
  });
}
