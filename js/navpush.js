

$(document).ready(function() {
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


