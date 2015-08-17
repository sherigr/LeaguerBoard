$(function() {

//collapse navbar when link is clicked
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });


//this is working
$('.winner').hide();
  $('.winner-btn').click(function(e) {
  	e.preventDefault();
  	$(this).siblings('.winner').fadeIn(2000);
  	$(this).remove();
  });


	$('.scores-btn14').click(function(e) {
		e.preventDefault();
		$('#modal14').modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});

	$('.scores-btn13').click(function(e) {
		e.preventDefault();
		$('#modal13').modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});
		$('.scores-btn12').click(function(e) {
		e.preventDefault();
		$('#modal12').modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});

	$('.scores-btn11').click(function(e) {
		e.preventDefault();
		$('#modal11').modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});

	
});







