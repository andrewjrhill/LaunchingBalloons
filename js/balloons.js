// =============================================================================
// Description: Global functionality and scripts.
// =============================================================================

var $mobilebutton = $('.mobile .button');

function openHamburger(){
  $mobilebutton.next('ul').slideDown();
  $mobilebutton.addClass('open');
  $mobilebutton.removeClass('close');
  $('.content').animate({ marginTop: '399px'})
};

function closeHamburger(){
  $mobilebutton.next('ul').slideUp();
  $mobilebutton.addClass('close');
  $mobilebutton.removeClass('open');
  $('.content').animate(
    {
      marginTop: '155px'
    }, {
      complete: function(){
        $(this).attr('style', '');
    }
  });
}

$mobilebutton.click(function(){
  if($mobilebutton.hasClass('close')){
    openHamburger();
  } else if($mobilebutton.hasClass('open')) {
    closeHamburger();
  }
});
