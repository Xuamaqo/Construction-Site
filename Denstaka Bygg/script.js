
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
      navbarLinks.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    // Close the navbar when a link is clicked
    const navbarLinksList = document.querySelectorAll('.navbar-links a');
    navbarLinksList.forEach(function (link) {
      link.addEventListener('click', function () {
        navbarLinks.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  });




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

