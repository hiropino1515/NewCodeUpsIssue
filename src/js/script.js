
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
      $("body").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
      $(".header").css('background', 'rgba(13, 41, 54, 0.68)');
    } else {
      $(".js-hamburger").addClass('is-active');
      $("body").addClass('is-active');
      $(".js-sp-nav").fadeIn(300);
      $(".header").css('background', '#408F95');
    }
  });

  // グローバルナビメニューのリンクをクリックしたらページを閉じる
  $(function () {
    $(".js-sp-nav ul li a").on("click", function () {
      $(".js-hamburger").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
      $(".header").css('background', 'rgba(13, 41, 54, 0.68)');
    });
  });

  // ヘッダーの高さ分下に下げてスクロール
  $('a[href^="#"]').click(function() {
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = id === "#" ? "html" : $(id);
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
    loop: true,
    loopedSlides: 4,
    clickable: true,
    effect: 'fade', // フェードのエフェクト
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000, // ２秒かけながら次の画像へ移動
  });

  var swiper = new Swiper(".js-campaign-swiper", {
    // pagination: {
    //   el: ".js-works-paginations",
    // },
    loop: true,
    loopedSlides: 8,
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

  // モーダル
  var trigger = $('.js-modal-trigger'),
  wrapper = $('.modal__wrapper'),
  layer = $('.modal__layer'),
  container = $('.modal__container'),
  close = $('.modal__close'),
  content = $('.modal__content');

  // 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
  $(trigger).click(function () {
  // クリックされた画像のソースURLを取得
  var imageUrl = $(this).find('img').attr('src');

  // モーダルのコンテンツに画像を表示
  $(content).html('<img src="' + imageUrl + '" alt="拡大画像">');

  // スクロール位置を戻す
  $(container).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');

  // モーダルを表示
  $(wrapper).fadeIn(400);
  });

  // 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
  $(layer).add(close).click(function () {
  // モーダルを非表示
  $(wrapper).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
  });


  // informationタブメニュー
  $(function () {
    // 最初のコンテンツは表示
    $(".js-content:first-of-type").css("display", "block");
    // タブをクリックすると
    $(".js-tab").on("click", function () {
      // 現在選択されているタブからcurrentを外す
      $(".current").removeClass("current");
      // クリックされたタブにcurrentクラスを付与
      $(this).addClass("current");
      // クリックされた要素が何番目か取得（クリックしたタブのインデックス番号を取得）
      const index = $(this).index();
      // クリックしたタブのインデックス番号と同じコンテンツを表示
      $(".js-content").hide().eq(index).fadeIn(800);
    });
  });



  // アーカイブメニュー
  $(function(){
    $(".archive__menu dt").on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("is-active"); // クリックした箇所のactiveクラスを切り替える
    });
  });


  // アコーディオン
  $(function () {
    // 最初は開いた状態に
    $(".page-faq__accordion .js-accordion").addClass("open");
    // タイトルをクリックすると
    $(".js-accordion").on("click", function () {
      // クリックした次の要素を開閉
      $(this).next().slideToggle(300);
      // タイトルにopenクラスを付け外ししてプラスマイナスを変更
      $(this).toggleClass("close", 300);
    });
  });

  // ==========================================================================
// お問い合わせフォームエラーメッセージ
// ==========================================================================
  $(document).ready(function () {
    // ページ読み込み時に実行される関数

    $('.form__error').hide(); // 最初はエラーメッセージを非表示に

    $('form').validate({
      // フォームのバリデーションを設定

      rules: {
        name: {
          required: true, // 名前が必須
        },
        mail_address: {
          required: true, // メールアドレスが必須
          email: true, // メールアドレスの形式チェック
        },
        tel: {
          required: true, // 電話番号が必須
        },
        contents: {
          required: true, // お問い合わせ内容が必須
        },
        privacy: {
          required: true, // プライバシーポリシーに同意が必須
        }
      },
      messages: {
        name: {
          required: '※必須項目が入力されていません。<br class="u-mobile">入力してください。',
        },
        mail_address: {
          required: '※必須項目が入力されていません。<br class="u-mobile">入力してください。',
          email: '正しいメールアドレスの形式で入力してください.', // メールアドレスの形式エラーメッセージ
        },
        tel: {
          required: '※必須項目が入力されていません。<br class="u-mobile">入力してください。',
        },
        contents: {
          required: '※必須項目が入力されていません。<br class="u-mobile">入力してください。',
        },
        privacy: {
          required: '※プライバシーポリシーに同意する必要があります。',
        },
      },
      errorPlacement: function (err, elem) {
        // エラーメッセージの表示場所とスタイリングをカスタマイズ
        if (elem.attr('name') === 'privacy') {
            // プライバシーポリシーのチェックボックスの場合、エラーメッセージをその要素の隣に表示
            err.insertAfter(elem);
            // エラーがある場合、placeholderの色を白に変更
            elem.css('color', 'white');
        } else {
            // その他の要素は通常通り表示
            elem.addClass('js-invalid');
            $('.form__error').show(); // エラーメッセージを表示
            $('.js-error').html(err);
        }
      },
    });

    $('form').submit(function () {
      // フォームが送信されたときの処理
      if (!$('form').valid()) {
        // フォームがバリデーションを通過しない場合
        $('.js-error').show(); // エラーメッセージを表示
        return false; // フォーム送信を阻止
      } else if (!$('#form-privacy').is(':checked')) {
        // プライバシーポリシーに同意していない場合
        $('.js-error').show().html('※プライバシーポリシーに同意する必要があります。'); // エラーメッセージを表示
        return false; // フォーム送信を阻止
      } else {
        // フォームが正常にバリデーションを通過し、かつプライバシーポリシーに同意済みの場合
        window.location.href = "page-contact-thanks.html"; // 送信成功時にリダイレクト
        return false; // フォームの送信を阻止
      }
    });
  });


})
