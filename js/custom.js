$('.navbar .navbar-toggler').on('click', function () {
  $(this).toggleClass('active');
});

// ------------------------------------------------------- //
    // Testimonials Slider
    // ------------------------------------------------------ //
    $('.testimonials-slider').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      smartSpeed: 700,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: false,
              dots: true
          },
          600: {
              items: 1,
              nav: true
          },
          1000: {
              items: 2,
              nav: true,
              loop: false
          }
      }
  });

   // Hide navbar when modals trigger
$('.facility-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.facility-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  });