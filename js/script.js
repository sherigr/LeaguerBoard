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

  
  // Countdown Clock to Opening Day '16
  $(function(){
      var openingDay = setInterval(function(){
        openDayStart = new Date("April 3, 2016 20:00:00");
        today = new Date();

          seconds = Math.floor((openDayStart - (today))/1000);
          minutes = Math.floor(seconds/60);
          hours = Math.floor(minutes/60);
          days = Math.floor(hours/24);
          
          hours = hours-(days*24);
          minutes = minutes-(days*24*60)-(hours*60);
          seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

          if(openDayStart - today <= 0) {
            openingDay = clearInterval(openingDay);
            days = 0;
            minutes = 0;
            hours = 0;
            seconds = 0;
          }

      $('#days').html(days);
      $('#hours').html(hours);
      $('#mins').html(minutes);
      $('#secs').html(seconds);
    }, 1000);
  });

// Footer
var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Leaguer Board &sol; Long Season Mets &copy' + year + '</p>');



});

