$('.counter').counterUp({
  delay: 10,
  time: 2000
});

// testimonial ===========
// $('.testimonial-slider').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });

$('.testimonial-slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});