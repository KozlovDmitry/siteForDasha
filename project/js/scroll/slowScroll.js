$(function(){
  $('.about').on('click', function(){
    var $dest = $('#about').offset().top;
    $('html').animate({
      scrollTop: $dest
    }, 800);
  });
});