$('#indexSlider').slick({
    fade: true,
    arrows: false,
    infnite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})


function mobileSlick(){
    $('.mobile-slick').slick({
        dots: true,
        arrows: false,
        infnite: false,
    });
};

function mobileUnSlick(){
};

function widthController(){
    if ($(window).width() < 600) {
        $('.mobile-handle').on('click', function(){
            $(this).toggleClass('active');
            $('.nav-ul').toggleClass('active');
            $('.nav-ul > li').find('.submenu').slideUp(300);
        });
        $('.nav-ul > li').on('click', function(){
            $('.nav-ul > li').find('.submenu').slideUp(300);
            $(this).find('.submenu').slideToggle(300);
        });
        mobileSlick();
    }
    else {
        mobileUnSlick();
    }
}

widthController();

$( window ).resize(function() {
    widthController();
    console.log('asd');
});
