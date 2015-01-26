

$(document).ready(function() {

	$("#page-container").bind("touchmove", function(e) {
		alert("touchmove");
		e.stopPropagation();
	});
})


