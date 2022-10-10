import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

if (document.querySelector('.banner-swiper')) {
  new Swiper('.banner-swiper', {
    modules: [ Navigation ],
    slidesPerView: 1,
    loop: true,

    navigation: {
      prevEl: '.banner-swiper__prev',
      nextEl: '.banner-swiper__next'
    }
  });
}

