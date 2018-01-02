$(function () {
  var isGalleryBarOpen = false;

  //дописать правильный рутинг
  var whatPageNow = '';

  function colapseGalleryBar() {
    $('.galleryBar').animate({
      height: '0'
    }, 350, function () {
      $('.galleryBar').remove();
      isGalleryBarOpen = false;
    });
    
    $('.wrapMenu').animate({
      opacity: '.65'
    }, 350);
  }

  $('.galleryButton').on('mouseenter', function (e) {

    var path = window.location.pathname.match(/\//gi);

    switch (path.length) {
      case 1:
        whatPageNow = 'pages/';
        break;
      case 2:
        whatPageNow = '';
        break;
      case 3:
        whatPageNow = '../';
        break;
    }

    if (isGalleryBarOpen == true) return

    isGalleryBarOpen = true;

    var $galleryBar = $('<div />').addClass('galleryBar')
      .append($('<a />').addClass('wedding').attr('href', whatPageNow + 'weddingGallery.html').text('Свадебная'))
      .append($('<a />').addClass('loveStory').attr('href', whatPageNow + 'weddingGallery.html').text('Love Story'))
      .append($('<a />').addClass('girls').attr('href', whatPageNow + 'weddingGallery.html').text('Girls'));

    
    if($(window).width() > 992){
      $galleryBar.css({
        width: $('.galleryButton').width(),
        height: '0',
        background: 'rgb(255, 255, 255)',
        opacity: '.65'
      });
    }else{
      $galleryBar.css({
        width: '0',
        background: 'rgb(255, 255, 255)',
        opacity: '.65',
        boxShadow: '11px 0px 15px 1px black'
      });
    }

    $('.galleryButton').append($galleryBar);
    
    if($(window).width() > 992){
      $galleryBar.animate({
        height: '117px',
        opacity: '1',
      }, 350);
    }else{
      $galleryBar.animate({
        width: '160px',
        opacity: '1',
      }, 350);
    }
    
    $('.wrapMenu').animate({
      opacity: '1'
    }, 350);
  });
  

  $('.galleryButton').on('mouseleave', function () {
    colapseGalleryBar();
  });
});
