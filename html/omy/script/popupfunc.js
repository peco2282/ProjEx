function popUpFunc() {
  const time = 0.2;//遅延時間を増やす秒数の値
  let value = time;

  $('.popup').each(function () {
    const parent = this;          //親要素を取得
    const elemPos = $(this).offset().top;//要素の位置まで来たら
    const scroll = $(window).scrollTop();//スクロール値を取得
    const windowHeight = $(window).height();//画面の高さを取得
    const childs = $(this).children();  //子要素を取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {

        if (!$(this).hasClass("popup")) {//アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("popup");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる

          //全ての処理を終わったらplayを外す
          const index = $(childs).index(this);
          if((childs.length-1) === index){
            $(parent).removeClass("play");console.log("funcPop")
          }
        }
      })
    }else {
      $(childs).removeClass("popUpFunc");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
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