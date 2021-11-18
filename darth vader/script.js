

$(function() {

    $(window).on('scroll', function() {
      // idがq-11の要素の画面最上部からの距離を取得
      let s1 = $('#s1').offset().top;
  
      // 画面の高さ
      let wh = $(window).height();
  
      // $(window).scrollTop()は現在のスクロール位置
      if (s1 <= $(window).scrollTop() + wh) {
        $('.vader').removeClass('hide2');
      } else {
        $('.vader').addClass('hide2');
      }
      
    })
    
})
