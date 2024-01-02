export function swiperSlide() {
  const swiperElm = document.querySelector(".swiperCard");
  let mySwiper; 
  const elem = document.querySelector(
    ".st-KvContainer .st-KvContainer__lpBlock"
  );
  
  if (elem !== null) {
    const swiperThumbnail = new Swiper(".slider-thumbnail", {
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true
    });

    const swiperMain = new Swiper(".slider", {
      effect: "fade",
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 5000 // ４秒後に次の画像へ
      },
      thumbs: {
        swiper: swiperThumbnail
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  if (swiperElm !== null) {
    let swiperbool = false;
    const breakpoint = 1184; // ブレイクポイントを1000pxに設定

    const initializeSwiper = () => {
      mySwiper = new Swiper(".swiperCard .swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        loopAdditionalSlides: 1,
        speed: 1000,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiperCard .swiper-button-next",
          prevEl: ".swiperCard .swiper-button-prev"
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1328: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        }
      });
      swiperbool = true;
    };

    const destroySwiper = () => {
      if (mySwiper !== undefined) {
        mySwiper.destroy(true, true);
        mySwiper = undefined;
      }
      swiperbool = false;
    };
      
    const resizeHandler = () => {
      if (window.innerWidth >= breakpoint && swiperbool) {
        destroySwiper();
      } else if (window.innerWidth < breakpoint && !swiperbool) {
        initializeSwiper();
      }
    };

    window.addEventListener('load', resizeHandler, false);
    window.addEventListener('resize', resizeHandler, false);
  }
}
