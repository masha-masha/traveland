$(function () {
    $(".sliders").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      
      prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='images/sliders-btn/prev.png' alt='prev'></button>",
      nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='images/sliders-btn/next.png' alt='next'></button>"
    }
    );
});