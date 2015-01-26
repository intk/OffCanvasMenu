

$(document).ready(function() {

	$('body').on('touchstart', function(e) {
		if ($('body').hasClass('canvas-slid')) {
			if ($(e.target).hasClass('container')) {
				e.preventDefault();
			}
		}
	});

	$('body').on('touchmove', function(e) {
		if ($('body').hasClass('canvas-slid')) {
			if ($(e.target).hasClass('container')) {
				e.preventDefault();
			}
		}
	});
})


