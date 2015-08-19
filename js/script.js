$(function() {

//collapse navbar when link is clicked
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

// fix so it animates 1
// var img = $("#baseball"),
//         width = img.get(0).width,
//         screenWidth = $(window).width(),
//         duration = 5000;

//     function animateBaseball() {
//         img.css("left", -width).animate({
//             "left": screenWidth
//         }, duration, animateBaseball);
//     }

//     animateBaseball();



$('.winner').hide();
  $('.winner-btn').click(function(e) {
  	e.preventDefault();
  	$(this).siblings('.winner').fadeIn(2000);
  	$(this).remove();
  });

// refactored to cover all modal buttons
	$('.scores-btn').click(function(e) {
		var year = $(this).attr('data-year');
		e.preventDefault();
		$('#modal' + year).modal({
			show: true,
			backdrop: 'static',
			keyboard: true
		})
	});

	// $('.scores-btn13').click(function(e) {
	// 	e.preventDefault();
	// 	$('#modal13').modal({
	// 		show: true,
	// 		backdrop: 'static',
	// 		keyboard: true
	// 	})
	// });
	// 	$('.scores-btn12').click(function(e) {
	// 	e.preventDefault();
	// 	$('#modal12').modal({
	// 		show: true,
	// 		backdrop: 'static',
	// 		keyboard: true
	// 	})
	// });

	// $('.scores-btn11').click(function(e) {
	// 	e.preventDefault();
	// 	$('#modal11').modal({
	// 		show: true,
	// 		backdrop: 'static',
	// 		keyboard: true
	// 	})
	// });

	
});







