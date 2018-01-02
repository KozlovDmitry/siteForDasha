$(function () {
  var $wrapAllSmallPhoto = $('.wrapAllSmallPhoto');
  var countPhoto = $wrapAllSmallPhoto.attr('data-countPhoto');

  function calculateSizeSmallPhoto() {
    var width = $(window).width();
    var sizeSmallPhoto = {};

    if (width >= 1440) {
      sizeSmallPhoto = {
        width: width * 0.23,
        height: (width * 0.23 / 1.5).toFixed(1)
      };
    } else if ((width >= 992) && (width < 1440)) {
      sizeSmallPhoto = {
        width: width * 0.32,
        height: (width * 0.32 / 1.5).toFixed(1)
      };
    } else if ((width >= 660) && (width < 992)) {
      sizeSmallPhoto = {
        width: width * 0.48,
        height: (width * 0.48 / 1.5).toFixed(1)
      };
    } else if (width < 660) {
      sizeSmallPhoto = {
        width: width * 0.98,
        height: (width * 0.98 / 1.5).toFixed(1)
      };
    }
    
    return sizeSmallPhoto
  }

  for (var i = 1; i < countPhoto; i++) {
    var $smallPhoto = $('<div />').addClass('wrapSmallPhoto')
      .css(calculateSizeSmallPhoto())
      .append($('<a />').addClass('smallPhoto')
        .css({
          width: '100%',
          height: '100%',
          background: 'url(\'../../img/weddingTemplate/shrekFiona/small/small' + i + '.jpg\') no-repeat center',
          backgroundSize: 'cover',
          data: i + ''
        }));

    $wrapAllSmallPhoto.append($smallPhoto);

  }

  $wrapAllSmallPhoto.on('click', function (e) {
    var indexPhoto = e.target.style.background.split('/')[6].match(/\d/g).join('');

    var $wrapBigPhoto = $('<div />').addClass('wrapBigPhoto')
      .append($('<div />').addClass('spinner fa fa-spinner fa-pulse fa-3x fa-fw'));


    //Заготовка для preloader-a фото
    //    var image = new Image();
    //    image.src = '../../img/weddingTemplate/shrekFiona/big/big' + indexPhoto + '.jpg';
    //    image.onload = function(){
    //      console.log(image);
    //    }

    $wrapBigPhoto
      .append($('<div />').addClass('wrapArrow')
        .css({
          background: 'url(\'../../img/weddingTemplate/shrekFiona/big/big' + indexPhoto + '.jpg\') no-repeat center',
          backgroundSize: 'cover'
        })
        .append($('<div />').addClass('arrowLeft fa fa-chevron-left')
          .on('click', function () {
            if (indexPhoto == 1) return
            indexPhoto--;
            $('.wrapArrow').css({
              background: 'url(\'../../img/weddingTemplate/shrekFiona/big/big' + indexPhoto + '.jpg\') no-repeat center',
              backgroundSize: 'cover'
            })
          }))
        .append($('<div />').addClass('arrowRight fa fa-chevron-right')
          .on('click', function () {
            if (indexPhoto == (countPhoto - 1)) return
            indexPhoto++;

            $('.wrapArrow').css({
              background: 'url(\'../../img/weddingTemplate/shrekFiona/big/big' + indexPhoto + '.jpg\') no-repeat center',
              backgroundSize: 'cover'
            })
          }))
        .append($('<div />').addClass('cross fa fa-times')
          .on('click', function () {
            $wrapBigPhoto.remove();
          }))
      )


    $('body').append($wrapBigPhoto);
  });

});
