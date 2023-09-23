
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ページトップボタン
  $(function () {
    const pageTop = $("#to-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    // フッター手前でストップ
    $("#to-top").hide();
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      var footHeight = $(".footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".to-top").css({
          position: "absolute",
          bottom: footHeight + 20,
        });
      } else {
        $(".to-top").css({
          position: "fixed",
          bottom: "0",
        });
      }
    });
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
    loopedSlides: 4,
    clickable: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".js-campaign-swiper", {
    // pagination: {
    //   el: ".js-works-paginations",
    // },
    loop: true,
    loopedSlides: 8,
    clickable: true,
    width: 280,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
      768: {
        width: 333,
        spaceBetween: 40,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
  // ローディングアニメーション
  // クッキー登録
//   function setCookie(name, value, days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
//   }
//   // クッキーを取得
//   function getCookie(name) {
//     const value = "; " + document.cookie;
//     const parts = value.split("; " + name + "=");
//     if (parts.length === 2){
//         return parts.pop().split(";").shift();
//     }else{
//         return "";
//     }
//   }
//   // アニメーション再生
//   const loadingAnime = document.querySelector('.js-loading');
//   const body = document.body;
//   const scrollPosition = window.scrollY;
//   function playAnimation() {
//     if (loadingAnime) {
//       body.style.overflow = 'hidden'; // スクロールを禁止
//       const openingTL = gsap.timeline();
//       openingTL
//       .fromTo('.js-loading-title',
//         {clipPath:'inset(100% 0 0 0)',scale:1.1,autoAlpha:0},
//         {clipPath:'inset(0% 0 0 0)',scale:1,autoAlpha:1,duration:2,ease:'power4.out',delay:1})
//       .fromTo('.js-loading-img',
//         {y:'100%'},
//         {y:'0%',duration:2,ease:'power4.out',stagger:.1},'-=0.5')
//       .to('.js-loading-title',{autoAlpha:0,duration:.8},'<')
//       .fromTo('.js-loading-title',
//         {autoAlpha:0,scale:0.9},
//         {autoAlpha:1,scale:1,duration:1,ease:'power4.in',color:'#fff'},'-=.5')
//       .fromTo('.js-loading',{autoAlpha:1},{autoAlpha:0,duration:1,ease:'power4.in'},'+=2')
//       .call(enableScroll); // アニメーション終了時にスクロールを有効にする
//     }
//   }
//   function enableScroll() {
//     // スクロールを有効にする
//     body.style.overflow = 'auto';
//     // スクロール位置を元に戻す（任意の位置にスクロールさせない場合はこの行を削除できます）
//     window.scrollTo(0, scrollPosition);
//   }
//   // オープニングアニメーションに関わる要素を非表示
//   function hideAnimation() {
//     if (loadingAnime) {
//       gsap.set('.js-loading',{autoAlpha:0})
//     }
//   }
//   // まず最初に読み込まれる所
//   document.addEventListener("DOMContentLoaded", function() {
//   const animationPlayed = getCookie("animationPlayed");
//     if (animationPlayed) {
//       hideAnimation();
//     } else {
//       playAnimation();
//       setCookie("animationPlayed", "true", 1);
//     }
//   });
// });
