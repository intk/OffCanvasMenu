
$('body').on('touchstart', function(e) {
	if ($('body').hasClass('canvas-slid')) {
		e.preventDefault();
	}
});

$('body').on('touchmove', function(e) {
	if ($('body').hasClass('canvas-slid')) {
		e.preventDefault();
	}
});

