$(function() {

//Seasons/Winner event listener
$('.winner').hide();
  $('button').click(function() {
  	// $(this).siblings('.winner').show();
  	$(this).siblings('.winner').fadeIn(2000);
  	$(this).remove();
  });


});







