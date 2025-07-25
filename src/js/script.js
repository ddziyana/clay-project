import "/node_modules/purecss/build/grids-min.css";
import "/node_modules/purecss/build/grids-responsive-min.css";


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
    },

    modules: [Navigation, Pagination],
});