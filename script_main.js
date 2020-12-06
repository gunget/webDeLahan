// slick 사용하기(jquery활용)

$(function () {
  $(".visual .slide").slick({
    arrows: false,
    dots: false, //인디케이트
    fade: true,
    autoplay: true,
    autoplayspeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});
