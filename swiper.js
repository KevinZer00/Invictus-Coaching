$(document).ready(function() {
  var $gridContainer = $('.grid-container');

  // Initialize Slick Carousel only when the width is less than 450px
  function initSlick() {
    if ($(window).width() < 450 && !$gridContainer.hasClass('slick-initialized')) {
      $gridContainer.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        adaptiveHeight: true,
        dots: true, 
        arrows: false,
        draggable: true,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 450,
            settings: {
              centerMode: true,
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }

  // Destroy Slick Carousel when the width is greater than 450px
  function destroySlick() {
    if ($(window).width() >= 450 && $gridContainer.hasClass('slick-initialized')) {
      $gridContainer.slick('unslick');
    }
  }

  // Initial check
  initSlick();

  $(window).on('load', function() {
    $('.grid-container').slick('setPosition');
  });
  
});
