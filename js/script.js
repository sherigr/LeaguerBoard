$(function() {

//collapse navbar when link is clicked
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

// Animate baseball on page load
$('#baseball').animate({
    marginLeft: $(document).width()
  }, 3000, 'easeInOutElastic', function() {
    $('#baseball').fadeOut(1000);
  });

// when view winner clicked, show winner hide button
$('.winner').hide();
  $('.winner-btn').click(function(e) {
  	e.preventDefault();
  	$(this).siblings('.winner').fadeIn(2000);
  	$(this).remove();
  });

// scores button clicked, reveal modal for that year
	$('.scores-btn').click(function(e) {
		var year = $(this).attr('data-year');
		e.preventDefault();
		$('#modal' + year).modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});


});







