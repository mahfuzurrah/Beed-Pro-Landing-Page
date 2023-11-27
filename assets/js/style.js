document.addEventListener("DOMContentLoaded", function () {





  /* ======================= Navbar ======================== */

  var navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  const toggleButton = document.getElementById("toggleButton");
  const toogle_menu = document.getElementById("toogle_menu");

  toggleButton.addEventListener("click", function () {
    this.classList.toggle("open");
    toogle_menu.classList.toggle("open", this.classList.contains("open"));
  });

  /* ======================= Swiper ======================== */

  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".Swiper_product_overview", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1, // Show only one slide at a time
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiperContainer = document.querySelector('.Swiper_product_overview');

  swiperContainer.addEventListener('wheel', function (event) {
    event.preventDefault();

    if (event.deltaY < 0) {
      // Scrolling up, go to the previous slide
      swiper.slidePrev();
    } else {
      // Scrolling down, go to the next slide
      swiper.slideNext();
    }
  });

});