
$('body').addEventListener('touchstart', function(e) {
	if ($('body').hasClass('canvas-slid')) {
		e.preventDefault();
	}
});

$('body').addEventListener('touchmove', function(e) {
	if ($('body').hasClass('canvas-slid')) {
		e.preventDefault();
	}
});

