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


function mobileSlick(objClass, slidesToShow){
    $(objClass).slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: slidesToShow
    });
};

function mobileSlickNoDots(objClass, slidesToShow){
    $(objClass).slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: slidesToShow,
        variableWidth: true,
        focusOnSelect: true,
    });
};

function mobileInit(){
    $('.mobile-handle').on('click', function(){
        $(this).toggleClass('active');
        $('.nav-ul').toggleClass('active');
        $('.nav-ul > li').find('.submenu').slideUp(300);
    });
    $('.nav-ul > li').on('click', function(){
        $('.nav-ul > li').find('.submenu').slideUp(300);
        $(this).find('.submenu').slideToggle(300);
    });
}

function mobileUnSlick(){
};

function widthController(){
    if ($(window).width() < 600) {
        mobileInit()
        //mobile-slicks
        mobileSlick('.mobile-slick', 1);
        // mobileSlickNoDots('.prodi-nav', 2);

        $(".prodi-nav").mCustomScrollbar({
            axis:"x",
            advanced:{
                autoExpandHorizontalScroll:true
            }
        });

    }
    else {
        mobileUnSlick();
    }
}

widthController();

$( window ).resize(function() {
    widthController();
});

var id, numTgt;
$('.prodi-nav .choice-module').on('click', function(){
    $('.prodi-nav .choice-module').removeClass('active');
    $(this).addClass('active');
    id = $(this).attr('id');
    numTgt = id.charAt(id.length-1);

    $('.right-content .content-show').removeClass('active');
    $('#prodic'+numTgt).addClass('active');
})
