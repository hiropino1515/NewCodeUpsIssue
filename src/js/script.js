
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  let topBtn = $('.to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
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

  var swiper = new Swiper(".js-mv-swiper", {
    // pagination: {
    //   el: ".js-works-paginations",
    // },
    loop: true,
    clickable: true,
    autoplay: {
      delay: 3000,
    },
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
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

});
