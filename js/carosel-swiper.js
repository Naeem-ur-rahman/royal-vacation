var swiper = new Swiper("#best-destination", {
     spaceBetween: 30,
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          color: '#ac863b'
     }, breakpoints: {
          600: {
               slidesPerView: 2,
          },
          991: {
               slidesPerView: 3,
          },
          1024: {
               slidesPerView: 3,
          }
     }, autoplay: {
          delay: 2000,
          disableOnInteraction: true,
     },
});

var swiper = new Swiper("#featured", {
     spaceBetween: 30,
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          color: '#ac863b'
     }, breakpoints: {
          600: {
               slidesPerView: 2,
          },
          991: {
               slidesPerView: 3,
          },
          1024: {
               slidesPerView: 3,
          }
     }, autoplay: {
          delay: 2500,
          disableOnInteraction: false,
     },
});

var swiper = new Swiper("#featured-2", {
     spaceBetween: 30,
     initialSlide: 20,
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          color: '#ac863b'
     }, breakpoints: {
          600: {
               slidesPerView: 2,
          },
          991: {
               slidesPerView: 3,
          },
          1024: {
               slidesPerView: 3,
          }
     }, autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
     },
});

var swiper = new Swiper("#supplier", {
     initialSlide: 1,
     pagination: {
          el: ".swiper-pagination",
     },
     breakpoints: {
          320: {
               slidesPerView: 2,
          },
          480: {
               slidesPerView: 3,
          },
          600: {
               slidesPerView: 4,
          },
          991: {
               slidesPerView: 5,
          },
          1024: {
               slidesPerView: 6,
          }
     },
     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
     },
});