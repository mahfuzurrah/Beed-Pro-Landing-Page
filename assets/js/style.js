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
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
