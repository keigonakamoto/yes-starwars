$(function() {

  $(window).on('scroll', function() {

    let s1 = $('#s1').offset().top;
    let wh = $(window).height();

    if (s1 <= $(window).scrollTop() + wh){
        $('.vader').removeClass('hide2');
      }else {
        $('.vader').addClass('hide2');
    }
      
  })

  $.ajax({
    url: 'https://yesno.wtf/api', //アクセスするURL
    type: 'get',　　 //post or get
    cache: false,        //cacheを使うか使わないかを設定
    dataType:'json',     //data type script・xmlDocument・jsonなど
  })

  .done(function(response) { 
    answer = response.answer;
  })
  .fail(function(xhr) {  
    console.log(xhr);
  })
  .always(function(xhr, msg) { 
 });   

  $('.cp_iptxt').on("click",function(){
    $("label").fadeOut();
  })
  $('.js-btn').on("click",function(){
    $(".result").text(answer);
    
  });
    
})
