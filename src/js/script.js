
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

  // グローバルナビメニューのリンクをクリックしたらページを閉じる
  $(function () {
    $(".js-sp-nav ul li a").on("click", function () {
      $(".js-hamburger").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
    });
  });

  // ヘッダーの高さ分下に下げてスクロール
  $('a[href^="#"]').click(function() {
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $('#' == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
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

  //要素の取得とスピードの設定
  var box = $('.js-colorbox'),
  speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function(){
  $(this).append('<div class="is-color"></div>')
  var color = $(this).find($('.is-color')),
  image = $(this).find('img');
  var counter = 0;

  image.css('opacity','0');
  color.css('width','0%');
  //inviewを使って背景色が画面に現れたら処理をする
  color.on('inview', function(){
     if(counter == 0){
       $(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
    });

  });

});
