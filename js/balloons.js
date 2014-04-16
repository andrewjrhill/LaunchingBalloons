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
  $('.content').animate({ marginTop: '155px'})
}

$mobilebutton.click(function(){
  if($mobilebutton.hasClass('close')){
    openHamburger();
  } else if($mobilebutton.hasClass('open')) {
    closeHamburger();
  }
});

  // $('.content').

// OLD SCRIPTS BELOW

// /* Get Started Button */

// $('.get-started-button').hover(function(){
//   $(this).toggleClass('get-started-button-hover');
// });


// /* Tooltip */

// var tooltipInfo = 'We have selected a small handful of charities which are dedicated to science education and the progression around the world. <strong>We hope you will consider giving to one of these charities by clicking on Help The Community. </strong>100% of your donations are given to the charity of your choice. ';
// var tooltipStyles = {
//   top: $('.last-navigation').offset().top + 35 + 'px',
//   left: Math.round($('.last-navigation').offset().left) + 'px'
// };

// var tooltip = document.createElement('div');
//     tooltip.innerHTML = tooltipInfo;
//     tooltip.className = 'help-tooltip';
//     tooltip.style.position = 'absolute';
//     tooltip.style.top = tooltipStyles.top;
//     tooltip.style.left = tooltipStyles.left;

// $('.last-navigation').mouseover(function(){
//   $(this).toggleClass('last-navigation-hover');
//   $(this).parent().after(tooltip);
// });
// $('.last-navigation').mouseout(function(){
//   $(this).toggleClass('last-navigation-hover');
//   $('.help-tooltip').remove();
// });


// /* Donation Functionality */

// $('.donate-criteria').hover(function(){
//   $(this).toggleClass('donate-criteria-hover');
// });
