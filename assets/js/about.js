let serviceSlider = new Swiper("#service-slider", {
    speed: 900,

    navigation: {
      nextEl: ".services__next",
      prevEl: ".services__prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },

    autoplay: {
      delay: 1000
    }
});

let aboutSlider = new Swiper("#about-slider", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 1,
  },
  autoplay: {
    delay: 1200,
  },
});