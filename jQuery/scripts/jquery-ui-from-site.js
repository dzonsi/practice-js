$(document).ready(function() {
	$("#date").datepicker();
	$('head').append('<style type="text/css">.almost-done {border: 1px solid red;}</style>');
	$("#elem")
		.progressbar({value: 30})
		.addClass("almost-done");
});