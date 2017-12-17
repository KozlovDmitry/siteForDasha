/* 
 * Карусель в header-e
 */

$(function () {
  var numberPhoto = 1;
  var imgArr = [];

  function createSlideHeader(numberPhoto) {
    if (!numberPhoto) {
      numberPhoto = 1;
    }
      var $photo = $('<div / >').addClass('sliderHeader')
        .css({
          background: 'url(\'img/header/' + numberPhoto + '.jpg\') no-repeat center',
          backgroundSize: 'cover',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
          opacity: '0',
          width: '100%',
          height: '100%'
        });
    
    $('header').append($photo);

    $photo.animate({
      opacity: '1'
    }, 1000, function () {
      setTimeout(function () {
        $photo.animate({
          opacity: '0'
        }, 1000, function () {
          $photo.remove();
        })
      }, 7000);
    });
  }

  createSlideHeader();
  
  for (var j = 1; j < 4; j++){
    var img = new Image();
    img.src = 'img/header/' + j + '.jpg';
    imgArr.push(img);
  }
  

  var newPhoto = setTimeout(function show() {
    if (numberPhoto === 3) {
      numberPhoto = 1;
    } else {
      numberPhoto++
    }

    //Если хоть одно фото закрузилось - показывать его
    //Если нет - показывать самое первое
    if (imgArr.length) {
      createSlideHeader(numberPhoto);
    } else {
      createSlideHeader();
    }
    newPhoto = setTimeout(show, 8200);
  }, 8200)
});
