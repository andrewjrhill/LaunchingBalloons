$('.get-started-button').hover(function(){
    $(this).toggleClass('get-started-button-hover');
});

// Tooltip
var tooltipInfo = 'We have selected a small handful of charities which are dedicated to science education and the progression around the world. <strong>We hope you will consider giving to one of these charities by clicking on Help The Community. </strong>100% of your donations are given to the charity of your choice. ';
var tooltipStyles = {
  top: $('.last-nav').offset().top + 35 + 'px',
  left: Math.round($('.last-nav').offset().left) + 'px'
};

var tooltip = document.createElement('div');
    tooltip.innerHTML = tooltipInfo;
    tooltip.className = 'help-tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.top = tooltipStyles.top;
    tooltip.style.left = tooltipStyles.left;

$('.last-nav').mouseover(function(){
  $(this).toggleClass('last-nav-hover');
  $(this).parent().after(tooltip);
});
$('.last-nav').mouseout(function(){
  $(this).toggleClass('last-nav-hover');
  $('.help-tooltip').remove();
});
