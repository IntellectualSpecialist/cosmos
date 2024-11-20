import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const SlidesPerViewCount = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 3,
};

const SpaceBetweenValue = {
  TABLET: 18,
  DESKTOP: 20,
};

const sliderElement = document.querySelector('.slider');
let sliderNavigationPrevElement;
let sliderNavigationNextElement;
let swiperElement;
let sliderPaginatonElement;

if (sliderElement) {
  swiperElement = sliderElement.querySelector('.slider__swiper');
  sliderNavigationPrevElement = sliderElement.querySelector('.swiper-button-prev');
  sliderNavigationNextElement = sliderElement.querySelector('.swiper-button-next');
  sliderPaginatonElement = sliderElement.querySelector('.slider__pagination');
}

const slider = new Swiper(swiperElement, {
  modules: [Navigation, Pagination],
  slidesPerView: SlidesPerViewCount.MOBILE,
  loop: false,
  init: false,
  allowTouchMove: true,
  autoHeight: true,
  navigation: {
    nextEl: sliderNavigationNextElement,
    prevEl: sliderNavigationPrevElement,
  },
  pagination: {
    el: sliderPaginatonElement,
    clickable: true,
    bulletClass: 'slider__pagination-button',
    bulletActiveClass: 'slider__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="${className}" type="button">
                <span class="visually-hidden">Cлайд ${index + 1}</span>
              </button>`;
    },
  },
  breakpoints: {
    768: {
      slidesPerView: SlidesPerViewCount.TABLET,
      spaceBetween: SpaceBetweenValue.TABLET,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: SlidesPerViewCount.DESKTOP,
      spaceBetween: SpaceBetweenValue.DESKTOP,
      allowTouchMove: false,
    },
  },
});

const initSlider = () => {
  if (sliderElement) {
    sliderElement.classList.remove('slider--no-js');
    slider.init();
  }
};

export { initSlider };
