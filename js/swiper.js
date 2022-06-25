 const swiper = new Swiper('.swiper-hero', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});
const swiperGallery = new Swiper('.swiper-gallery', {
  
  slidesPerView: 3,
  allowTouchMove: true,
  // loop: true,
  // autoplay: true,
  swipe: true,

  // zoom: {
  //   maxRatio: 5,
  // },
  // effect: 'slide',
  slideToClickedSlide: true,
  // slidesPerGroup: 3,
  spaceBetween: 20,
  // speed: 10000,
  // autoplay: {
  //   delay: 10000
  // }
      // пагинация
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
        },
        // навигация
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
  breakpoints: {
    240: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      // spaceBetween: 40
    },
    1500: {
      slidesPerView: 3,
      // spaceBetween: 40
    }

  },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

});
const swiperEvents = new Swiper('.swiper-events', {
  slidesPerView: 3,
  allowTouchMove: true,
  loop: false,
  // autoplay: true,
  swipe: true,

  // effect: 'slide',
  slideToClickedSlide: true,
  // slidesPerGroup: 3,
  spaceBetween: 40,

  breakpoints: {
    240: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 40
    },
    1500: {
      slidesPerView: 3,
      // spaceBetween: 40
    }

  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  },

  pagination: {
    el: '.swiper-events-pagination',
    type: 'bullets',
    clickable: true,
    },

    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });

  const swiperProjects = new Swiper('.swiper-projects', {
  
    slidesPerView: 3,
    allowTouchMove: true,
    loop: true,
    autoplay: true,
    swipe: true,
  
    // effect: 'slide',
    slideToClickedSlide: true,
    // slidesPerGroup: 3,
    spaceBetween: 50,
    // speed: 10000,
    // autoplay: {
    //   delay: 10000
    // }
        // навигация
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            240: {
              slidesPerView: 1,
              // spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 30
            },
            1024: {
              slidesPerView: 2,
              // spaceBetween: 40
            },
            1400: {
              slidesPerView: 3,
              // spaceBetween: 40
            }
        
          },
        
      
  });
  