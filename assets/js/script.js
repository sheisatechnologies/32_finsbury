
$(document).ready(function() {
    $(".menuToggle").click(function() {
        $(this).toggleClass("close");
        $(".menuWrapper").toggleClass("open");
    });



    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });



    $('.heroSlider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $('.middleSlider').slick({
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });

    $('.feelGoodSliderWrapper').slick({
        arrows: true,
        prevArrow: $('.prevButton'),
        nextArrow: $('.nextButton'),
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]
    });



    $('.feelGoodSliderWrapper2').slick({
        arrows: true,
        prevArrow: $('.prevButton2'),
        nextArrow: $('.nextButton2'),
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]
    });




});


// Awl carausal
