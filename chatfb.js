$.noConflict();
jQuery( document ).ready(function( $ ) {
// Code that uses jQuery's $ can follow here.
 $('.online-support').hide();
  $('.support-icon-right h3').click(function(e){
    e.stopPropagation();
    $('.online-support').slideToggle();
  });
  $('.online-support').click(function(e){
    e.stopPropagation();
  });
  $(document).click(function(){
    $('.online-support').slideUp();
  });
});
