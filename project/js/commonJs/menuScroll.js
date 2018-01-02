$(function () {
  var oldPosition = 0;
  var currentPosition = 0;
  var showMiniMenu = true;
  var menuVisible = false;

  function toggleMenu() {
    if (!menuVisible) {
      $('body').append($('<div />').addClass('menuBackground').css({
        zIndex: '2',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(0, 0, 0)',
        opacity: '0'
      }).on('click', function(){
        toggleMenu();
      }));

      $('.menuBackground').css({
        opacity: '.65'
      })
      
      if(!showMiniMenu){
        $('.wrapMenu').css({
          width: '160px',
          opacity: '.65',
          boxShadow: '11px 0px 15px 1px black'
        });
      }else{
        $('.wrapMenu').css({
          width: '160px',
          opacity: '.65'
        });
      }
      
      if(!showMiniMenu){
        $('.menuButton').css({
          left: '160px',
          boxShadow: '14px 0 15px 1px black'
        });
      }else{
        $('.menuButton').css({
          left: '160px'
        });
      }

      $('.mobileInvis').css({
        display: 'flex',
        opacity: '1'
      });

      if($(window).width() > $(window).height()){
        $('.menu').css({
          flex: '.8'
        });
      }else{
        $('.menu').css({
          flex: '.3'
        });
      }
      
      menuVisible = true;
      $('.menuButton').removeClass('fa-angle-right').addClass('fa-angle-left');

    } else {
      $('.menuBackground').animate({
        opacity: '0'
      }, 600, function () {
        $('.menuBackground').remove();
      });

      $('.wrapMenu').css({
        width: '12px',
        opacity: '.65',
        boxShadow: '11px 0px 15px 1px black'
      });

      $('.menuButton').css({
        left: '12px'
      });

      $('.mobileInvis').css({
        display: 'none',
        opacity: '0'
      });

      menuVisible = false;
      $('.menuButton').removeClass('fa-angle-left').addClass('fa-angle-right');
    }
  };



  $(window).on('scroll', function (e) {
    var newPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (((newPosition - oldPosition) > 250) && showMiniMenu && (!menuVisible)) {
      $('.wrapMenu').css({
        width: '0',
        boxShadow: 'none'
      });

      $('.menuButton').css({
        color: 'black',
        boxShadow: '2px 0 15px 1px black',
        left: '0',
      });


      showMiniMenu = false;
      oldPosition = newPosition;
    }

    if (currentPosition > newPosition && (!menuVisible)) {
      $('.wrapMenu').css({
        width: '12px',
        boxShadow: '11px 0 15px 1px black'
      });

      $('.menuButton').css({
        color: '#706d6b',
        boxShadow: '14px 0 15px 1px black',
        left: '12px'
      });

      showMiniMenu = true;
      oldPosition = newPosition;
    };

    currentPosition = newPosition;

  });


  $('.menuButton').on('click', function () {
    toggleMenu();
  });
  
  
});
