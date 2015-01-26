

$(document).ready(function() {

	$(".navmenu").on("swipe", function(e){
		if ($('body').hasClass('canvas-slid')) {
			e.preventDefault();
		}
	});

	$('.container').on('touchstart', function(e) {
		if ($('body').hasClass('canvas-slid')) {
			e.preventDefault();
		}
	});

	$('.container').on('touchmove', function(e) {
		if ($('body').hasClass('canvas-slid')) {
			e.preventDefault();
		}
	});
})


