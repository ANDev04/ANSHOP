const swiperHeader = {
  init: function() {
    new Swiper("#classicSwiper", {
      pagination: {
        el: "#classicSwiperPagination",
        dynamicBullets: true,
        clickable: true
      }
    })
  }
}

const centeredSwiper = {
  init: function() {
    let centeredSlider = new Swiper("#centeredSwiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: "#centeredSwiperPagination",
        clickable: true
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      },
      on: {
        init: function() {
          let selector = $("#centeredSwiper .swiper-wrapper").children()
          selector.each(res => {
            if (res === this.activeIndex + 1) {
              $(selector[this.activeIndex + 1]).addClass("scale-up-center")
              setTimeout(() => {
                // console.log(selector[this.activeIndex + 1])
              }, 300)
            } else {
              $(selector[res]).removeClass("scale-up-center ")
            }
          })
        }
      }
    })
    centeredSlider.on("slideChange", function() {
      let selector = $("#centeredSwiper .swiper-wrapper").children()
      selector.each(res => {
        if (res === this.activeIndex + 1) {
          $(selector[this.activeIndex + 1]).addClass("scale-up-center")
          setTimeout(() => {
            // console.log(selector[this.activeIndex + 1])
          }, 300)
        } else {
          $(selector[res]).removeClass("scale-up-center ")
        }
      })
    })
  }
}
