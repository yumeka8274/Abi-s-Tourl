const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const DELAY = 100;
const $target1 = $(".toptittle");
const $target2 = $(".about__educate");
const $target3 = $("#about__active");

setInterval(() => {
  $target1.addClass(toptittle);
  setTimeout(() => {
    
    
    $target2.addClass(about__educate);
  }, DELAY);

  setTimeout(() => {
    $target1.removeClass(about__active);
    setTimeout(() => {
      $target2.removeClass(CLASSNAME);
    }, DELAY);
  }, TIMEOUT);
}, TIMEOUT * 2);


// rollAnimeにrollというクラス名を付ける定義
function slider() {
  $('.rollAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();  //rollAnimeの子要素を取得
    if (scroll >= elemPos - windowHeight) {
      $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
        if (i < 10) {         //10未満の場合
        $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delayを追加
        }else {             //10以上の場合
          var n = i / 10;       //ミリ秒指定なので10で割る
          $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
        }
      });

      $(this).addClass("roll"); //rollというアニメーションクラスを付与

    } else {
      $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
        $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
      });
      $(this).removeClass("roll");//rollというアニメーションクラスを除去
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".rollAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = [];
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述