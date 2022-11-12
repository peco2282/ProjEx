function popUpFunc() {
  const time = 0.2;
  let value = time;

  $('.popup').each(function () {
    const parent = this;
    const elemPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    const childs = $(this).children();

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {

        if (!$(this).hasClass("popup")) {

          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("popup");
          value = value + time;

          const index = $(childs).index(this);
          if((childs.length-1) === index){
            $(parent).removeClass("play");console.log("funcPop")
          }
        }
      })
    }else {
      $(childs).removeClass("popUpFunc");
      value = time;
    }
  })
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  popUpFunc();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  popUpFunc();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述