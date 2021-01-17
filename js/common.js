$('.slider-main').slick({
  dots: true,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '20%',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.productdetail-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.productdetail-nav'
});
$('.productdetail-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.productdetail-for',
  dots: false,
  focusOnSelect: true
});




ScrollReveal().reveal('.slider-container',
  {
    easing: 'ease',
    duration: 4000,
    delay: 300,
  }
);

ScrollReveal().reveal('.reveal',
  {
    easing: 'ease',
    duration: 2000,
    distance: '40px',
  }
);

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});