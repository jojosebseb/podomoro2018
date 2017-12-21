$.get("http://podomorouniversity.com/reminder");
$.get("http://podomorouniversity.com/reminder/send");
function show_submenu(what) {
	$("#header-submenu-"+what).addClass("active");
}
function hide_submenu(what) {
	$("#header-submenu-"+what).removeClass("active");
}

$('.header-menu-li-has-submenu').on('click', function(){
	$(this).toggleClass('opened');
})

$(function(){
	/* for submenu */
	/*function show_submenu(what) {
		$("#header-submenu-"+what).addClass("active");
	}
	function hide_submenu(what) {
		$("#header-submenu-"+what).removeClass("active");
	}
	/*$(".header-menu-li").hover(function(){
		//$(".header-submenu").show();
	});*/
	/* for banner in home */
	var $first = $('li:first', 'ul.home-banner-ul'),
		$last = $('li:last', 'ul.home-banner-ul'); //text
	var $firstBG = $('li:first', 'ul.home-banner-background-ul'),
		$lastBG = $('li:last', 'ul.home-banner-background-ul'); //background
	$(".home-banner-box-button-prev").click(function() {
		//text
		var $prev, $selected = $(".home-banner-li.active");
		$prev = $selected.prev('li').length ? $selected.prev('li') : $last;
		$selected.removeClass("active");
		$prev.addClass('active');
		//background
		var $prevBG, $selectedBG = $(".home-banner-background-li.active");
		$prevBG = $selectedBG.prev('li').length ? $selectedBG.prev('li') : $lastBG;
		$selectedBG.removeClass("active");
		$prevBG.addClass('active');
	});
	$(".home-banner-box-button-next").click(function() {
		//text
		var $next, $selected = $(".home-banner-li.active");
		$next = $selected.next('li').length ? $selected.next('li') : $first;
		$selected.removeClass("active");
		$next.addClass('active');
		//background
		var $nextBG, $selectedBG = $(".home-banner-background-li.active");
		$nextBG = $selectedBG.next('li').length ? $selectedBG.next('li') : $firstBG;
		$selectedBG.removeClass("active");
		$nextBG.addClass('active');
	});
	// auto slider every 5s
	window.rInterval=function(callback,delay){
		var dateNow=Date.now,
			requestAnimation=window.requestAnimationFrame,
			start=dateNow(),
			stop,
			intervalFunc=function(){
				dateNow()-start<delay||(start+=delay,callback());
				stop||requestAnimation(intervalFunc)
			}
		requestAnimation(intervalFunc);
		return{
			clear:function(){stop=1}
		}
	}
	var intervalIdAutoClick;
	intervalIdAutoClick = window.rInterval(function () {
		jQuery(".home-banner-box-button-next").trigger( "click" );
	}, 5000);
	/* for social media in footer */
	$(".footer-left-content-tab-title-li").click(function(){
		var currClicked = $(this).prop("id");
		var idActive = currClicked.substr(1);
		$(".footer-left-content-tab-title-li").removeClass("active");
		$(".footer-left-content-tab-title-li").addClass("notactive");
		$("#t"+idActive).removeClass("notactive");
		$("#t"+idActive).addClass("active");
		$(".footer-left-content-tab-content-li").removeClass("active");
		$(".footer-left-content-tab-content-li").addClass("notactive");
		$("#c"+idActive).removeClass("notactive");
		$("#c"+idActive).addClass("active");
	});
	/* slick */
	$(".home-component-content-slick").slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 120,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$(".home-testimonial-content").slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		variableWidth: true,
		nextArrow: '<div class="achievement-navigation-box achievement-navigation-next achievement-next"></div>',
		prevArrow: '<div class="achievement-navigation-box achievement-navigation-prev achievement-prev"></div>',
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: true
				}
			},
			{
				breakpoint: 120,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	/* fancybox */
	$(".various-fancybox").fancybox();
});
//2016.05.02
//mobile jquery-navbar
var mobilehandlediv = $(".mobile-handle-div");
var mobile1 = $(".mobile-line-1");
var mobile2 = $(".mobile-line-2");
var mobile3 = $(".mobile-line-3");
var navmobile = $(".nav-mainmenu");
var theme = $(".header-atas");
var navbar = $(".header-bawah");
var submenuP = $(".program-submenu-handle");
var menuP = $(".program-menus");
var pml = $(".program-submenu-li");
var submenuA = $(".about-submenu-handle");
var menuA = $(".about-menus");
var headerSearch = $('.header-search');
var headerLang = $('.header-lang');

var submenuAd = $('.admission-submenu-handle');
var menuAd = $('.admission-menus');

var slifeHandle = $('.slife-submenu-handle');
var slifeSub = $('.slife-menus');

mobilehandlediv.on("click", function(){
	mobilehandlediv.toggleClass("jquery-mobile-handle-div")
    navmobile.toggleClass("jquery-navbar-drop");
	mobile1.toggleClass("jquery-mobile-line-1");
	mobile2.toggleClass("jquery-mobile-line-2");
	mobile3.toggleClass("jquery-mobile-line-3");
	theme.toggleClass("jquery-theme-color");
	headerSearch.toggleClass('jquery-header-search');
	headerLang.toggleClass('jquery-header-lang');
	submenuA.removeClass('jquery-padding-bottom2');
	menuA.removeClass('jquery-show-about');
	submenuP.removeClass('jquery-padding-bottom');
	menuP.removeClass('jquery-show-program');
	headerLang.removeClass('jquery-lang-about');
	headerSearch.removeClass('jquery-header-about');
	headerSearch.removeClass('jquery-header-program');
	headerLang.removeClass('jquery-lang-program');

	submenuAd.removeClass('jquery-margin-bottom3');
	menuAd.removeClass('jquery-admission-menus');
	slifeHandle.removeClass('jquery-margin-bottom-4');
	slifeSub.removeClass('jquery-show-slife');
	headerSearch.removeClass('jquery-search-admisi');
	headerLang.removeClass('jquery-admisi-lang');

})

var win = $(window);
win.on('scroll', function(){
  if(win.scrollTop() > 250){
    navbar.addClass('jquery-header-bawah');
  }
  else {
    navbar.removeClass('jquery-header-bawah');
  }
});

slifeHandle.on('click', function(){

	submenuAd.removeClass('jquery-margin-bottom3');
	menuAd.removeClass('jquery-admission-menus');
	headerSearch.removeClass('jquery-search-admisi');
	headerLang.removeClass('jquery-admisi-lang');
	submenuA.removeClass('jquery-padding-bottom2');
	menuA.removeClass('jquery-show-about');
	headerLang.removeClass('jquery-lang-about');
	headerSearch.removeClass('jquery-header-about');
	submenuP.removeClass('jquery-padding-bottom');
	menuP.removeClass('jquery-show-program');

	slifeSub.toggleClass('jquery-show-slife');
	slifeHandle.toggleClass('jquery-margin-bottom-4');
	headerSearch.toggleClass('jquery-search-slife');


});

submenuP.on("click", function(){
	slifeSub.removeClass('jquery-show-slife');
	slifeHandle.removeClass('jquery-margin-bottom-4');
	headerSearch.removeClass('jquery-search-slife');

	submenuAd.removeClass('jquery-margin-bottom3');
	menuAd.removeClass('jquery-admission-menus');
	headerSearch.removeClass('jquery-search-admisi');
	headerLang.removeClass('jquery-admisi-lang');
	submenuA.removeClass('jquery-padding-bottom2');
	menuA.removeClass('jquery-show-about');
	headerLang.removeClass('jquery-lang-about');
	headerSearch.removeClass('jquery-header-about');
	headerLang.toggleClass('jquery-lang-program');
	headerSearch.toggleClass('jquery-header-program');
	submenuP.toggleClass('jquery-padding-bottom');
	menuP.toggleClass('jquery-show-program');
	$("#header-submenu-"+what).addClass("active");
});
submenuA.on("click", function(){
	slifeSub.removeClass('jquery-show-slife');
	slifeHandle.removeClass('jquery-margin-bottom-4');
	headerSearch.removeClass('jquery-search-slife');

	submenuAd.removeClass('jquery-margin-bottom3');
	menuAd.removeClass('jquery-admission-menus');
	headerSearch.removeClass('jquery-search-admisi');
	headerLang.removeClass('jquery-admisi-lang');

	submenuP.removeClass('jquery-padding-bottom');
	menuP.removeClass('jquery-show-program');
	headerSearch.removeClass('jquery-header-program');
	headerLang.removeClass('jquery-lang-program');
	headerLang.toggleClass('jquery-lang-about');
	headerSearch.toggleClass('jquery-header-about');
	submenuA.toggleClass('jquery-padding-bottom2');
	menuA.toggleClass('jquery-show-about');
	$("#header-submenu-"+what).addClass("active");
});

submenuAd.on("click", function(){
	slifeSub.removeClass('jquery-show-slife');
	slifeHandle.removeClass('jquery-margin-bottom-4');
	headerSearch.removeClass('jquery-search-slife');

	submenuA.removeClass('jquery-padding-bottom2');
	menuA.removeClass('jquery-show-about');
	headerLang.removeClass('jquery-lang-about');
	headerSearch.removeClass('jquery-header-about');
	submenuP.removeClass('jquery-padding-bottom');
	menuP.removeClass('jquery-show-program');
	headerSearch.removeClass('jquery-header-program');
	headerLang.removeClass('jquery-lang-program');
	submenuAd.toggleClass('jquery-margin-bottom3');
	menuAd.toggleClass('jquery-admission-menus');
	headerSearch.toggleClass('jquery-search-admisi');
	headerLang.toggleClass('jquery-admisi-lang');
});


var programSubmenuNav  = $(".program-submenu");
var programSubmenuNavContent = $('.page-title-right-menu');

if ($(window).width() < 850) {
   programSubmenuNavContent.hide();
}
else {
   programSubmenuNavContent.show();
}

programSubmenuNav.on('click', function(){
	programSubmenuNavContent.slideToggle();
});


var newsDetail = $('.news-detail-content-left');
var newsOl = $('.news-detail-content-left > ol');
var newsSpan = $('.news-detail-content-left > ol > li > span');

console.log("boggy3");
$( document ).ready(function() {
	var fontFam = newsSpan.css('font-family');
	var fontSz =  newsSpan.css('font-size');
	// var fontSz2 =  newsSpan.attr('font-size');
	// console.log(fontSz2);
	// console.log(fontSz);
	// console.log(fontFam);
	newsOl.css({
		'font-family' : fontFam,
		'font-size' : 14
	})

});




$('.parent-li.has-submenu').on('click', function(){
    $(this).find('.sub-menu').slideToggle('100');
    $(this).toggleClass('active');
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $('#navbar').addClass('scrolled');
   } else {
      // upscroll code
      $('#navbar').removeClass('scrolled');
   }
   lastScrollTop = st;
});
