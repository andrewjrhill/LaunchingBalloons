/* ===================================================== */
/* Component:                       Global Functionality */
/* Project Name:                      Launching Balloons */
/* Project URL:                www.launchingballoons.com */
/* Author(s):       Andrew Hill - andrewjrhill@gmail.com */
/*                    Cole Gentry - peapod2007@gmail.com */
/* ===================================================== */

var launchingBalloons = {

  init: function(){
    launchingBalloons.hamburgerMenu($('.mobile .button'));
  },

  hamburgerMenu: function(toggleButton){

    function openHamburger(){
      toggleButton.next('ul').slideDown();
      toggleButton.closest('div.navigation').css('background-color', 'rgba(40, 62, 86, 1)');
      toggleButton.addClass('open').removeClass('close');
      $('.content').animate({
        marginTop: '305px'
      });
    };

    function closeHamburger(){
      toggleButton.next('ul').slideUp();
      toggleButton.addClass('close').removeClass('open');
      $('.content').animate({
        marginTop: '155px'
      }, {
        complete: function(){
          $(this).removeAttr('style');
          toggleButton.closest('div.navigation').removeAttr('style');
        }
      });
    }

    toggleButton.on('click', function(){
      if (toggleButton.hasClass('close')){
        openHamburger(toggleButton);
      } else if(toggleButton.hasClass('open')) {
        closeHamburger(toggleButton);
      }
    });
  },
}

launchingBalloons.init();
