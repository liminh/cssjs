jQuery( document ).ready(function(jQuery  ) {
// Code that uses jQuery's $ can follow here.
 jQuery ('.online-support').hide();
  jQuery ('.support-icon-right h3').click(function(e){
    e.stopPropagation();
    jQuery ('.online-support').slideToggle();
  });
  jQuery ('.online-support').click(function(e){
    e.stopPropagation();
  });
  jQuery (document).click(function(){
    $('.online-support').slideUp();
  });
});