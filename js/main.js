$(function() {

    $('.header__top a, .footer__logo').on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 200) {
          $('.header__wrapper').addClass("header__wrapper--sticky");
          $('.header__top').addClass("header__top--sticky");
        } else {
          $('.header__wrapper').removeClass("header__wrapper--sticky");
          $('.header__top').removeClass("header__top--sticky");
        }
      });

      
      $('.blog-slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'slick-dots blog-slider__link'
      });
      $('[data-fancybox="category-a"], [data-fancybox="category-c"]').fancybox({
        thumbs: {
          autoStart: true,
          axis: 'y'
        }
      })
      
      $('.burger, .menu__link').on('click', function() {
        $('.header__top').toggleClass('header__top--active')
        $('.menu').toggleClass('menu--active')
        $('.burger').toggleClass('burger--active')
      })
      
      $(window).scroll(function () {
        $('.menu').removeClass('menu--active')
        $('.burger').removeClass('burger--active')
      });
      
    var mixer = mixitup('.gallery__content');
});