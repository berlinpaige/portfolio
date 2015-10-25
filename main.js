$(document).ready(function(){
  var $hotAir = $('#hotAirBalloon');
  var $balloons = $('#balloons');
  var $spaceship = $('#spaceship');
  var $fishRider = $('#fishRider');
  $(document).scroll(function() {
    $spaceship.css({display: $(this).scrollTop()>1400 ? "none":"block"});
  });
  $(document).scroll(function() {
    $hotAir.css({display: $(this).scrollTop()>2300 ? "none":"block"});
  });
  $(document).scroll(function() {
    $balloons.css({display: $(this).scrollTop()>3200 ? "none":"block"});
  });
  $(document).scroll(function() {
    $fishRider.css({display: $(this).scrollTop()>4100 ? "none":"block"});
  });
  $(document).scroll(function(){
    $('#navigation').css({display: 'none'}).fadeIn('slow');
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 500) {
        $(".scroll").addClass("navigationDisplay");
        $(".thanks").removeClass("navigationDisplay");
    }else{
        $(".thanks").addClass("navigationDisplay");
        $(".scroll").removeClass("navigationDisplay");
    }
  });
})