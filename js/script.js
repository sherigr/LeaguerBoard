$(function() {

// When "View Winner" Button in Season clicked
  // show winner and hide button
	$('.winner').hide();
	  $('button').click(function() {
	  	$(this).siblings('.winner').fadeIn(2000);
	  	$(this).remove();
	  });


// close modal
	$('#modal14').on('hidden.bs.modal', function (e) {

	});

});







