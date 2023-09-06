
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


});
// ドロワーメニュー
$(".js-hamburger").click(function () {
  if ($(".js-hamburger").hasClass("is-active")) {
    $(".js-hamburger").removeClass('is-active');

    $(".js-sp-nav").fadeOut(300);
  } else {
    $(".js-hamburger").addClass('is-active');
    $(".js-sp-nav").fadeIn(300);
  }
});

var swiper = new Swiper(".js-campaign-swiper", {
  // pagination: {
  //   el: ".js-works-paginations",
  // },
  loop: true,
  clickable: true,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 1.25,
  spaceBetween: 24,

  breakpoints: {
    // ウィンドウサイズが767px以下
    767: {
      slidesPerView: 1.25,
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 3.5,
      spaceBetween: 41,
    },
  },
});
