'use strict'

new Swiper('.mySwiper' , {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 10000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

    speed: 1000,

});
