$(document).ready(function(){
	// accordion
	$("#accordion").accordion();
	// autocomplete
	var availableTags = [
		"ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
	];
	$("#tags").autocomplete({
		source: availableTags
	});
	// datepicker
	$("#date").datepicker();
	// dialog
	$("#dialog").dialog();
	// menu
	$("#menu").menu();
	// progresbar
	$("#progressbar").progressbar({ value: 37});
});