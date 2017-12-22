function widthController(){
    if ($(window).width() < 1050) {
        mobileInit()
    }
    else {
        desktopGate2();
    }
};
$('#indexSlider').slick({
    fade: true,
    arrows: false,
    infnite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

var winHeight;


function desktopGate2(){
    $(window).ready(function(){
        winHeight = $('.gate-init').height();
    });
    var lastScrollTop = 0;
    var height = (($( window ).height())-55);
    $('.gate').css({
        marginBottom: winHeight+'px'
    });
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
           if (st >= height) {
                //stop
                $('.gate').css({
                    marginBottom: 0+'px'
                });
                $('.gate-init').removeClass('gate-div');
           }
           else {
           }
       } else {
           if (st >= height) {
                //stop
           }
           else {
               $('.gate').css({
                   marginBottom: winHeight+'px'
               });
               $('.gate-init').addClass('gate-div');
          }
       }
       lastScrollTop = st;
    });
}



$('.mobile-slick').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrow-box next"><div class="arrow"></div></div>',
    prevArrow: '<div class="arrow-box prev"><div class="arrow"></div></div>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
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
    ]
});

$('.news-flex').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrow-box next"><div class="arrow"></div></div>',
    prevArrow: '<div class="arrow-box prev"><div class="arrow"></div></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          arrows: false,
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
    ]
});

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
    $(".prodi-nav").mCustomScrollbar({
        axis:"x",
        advanced:{
            autoExpandHorizontalScroll:true
        }
    });
};

$(window).ready(function(){
    widthController();
});


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
});
