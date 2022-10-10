import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

if (document.querySelector('.news-swiper')) {
  new Swiper('.news-swiper', {
    modules: [ Navigation ],
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,

    navigation: {
      prevEl: '.news-swiper__prev',
      nextEl: '.news-swiper__next'
    }
  });
}
