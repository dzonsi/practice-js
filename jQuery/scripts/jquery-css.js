$(document).ready(function(){
	$("#b1").click(function(){
		$("#p1").addClass("first");
	});
	$("#b2").click(function(){
		$("#p1").removeClass("first");
	});
	$("#b3").click(function(){
		$("#p1").toggleClass("first");
	});
	$("#b4").click(function(){
		$("#p2").toggleClass("second");
	});
	$("#b5").click(function(){
		alert("Background color of p1 is: " + $("#p1").css("background-color") + "!");
	});
	$("#b6").click(function(){
		alert("Background color of p2 is: " + $("#p2").css("background-color") + "!");
	});
	$("#b7").click(function(){
		alert("Font size of p1 is: " + $("#p1").css("font-size") + "!");
	});
	$("#b8").click(function(){
		alert("Font size of p2 is: " + $("#p2").css("font-size") + "!");
	});
	$("#b9").click(function(){
		$("#p3").css({"color": "red",
			"font-size": "20px",
			"padding": "10px",
			"border": "2px solid green",
			"border-radius": "5px"});
	});
	$("#b10").click(function(){
		$("#p4").css({"color": "white",
			"font-size": "20px",
			"text-align": "center",
			"padding": "10px",
			"background-color": "navy",
			"border-radius": "5px"});
	});
	$("#b11").click(function(){
		$("#p5").css({"text-shadow": "1px 1px red",
			"font-size": "24px"});
	});
	// width and height
	$("#b12").click(function(){
		var txt = "";
		txt += "Width: " + $("#d1").width() + "</br>";
  	txt += "Height: " + $("#d1").height();
		$("#d1").html(txt);
	});
	$("#b13").click(function(){
		var txt = "";
		txt += "innerWidth: " + $("#d1").innerWidth() + "</br>";
  	txt += "innerHeight: " + $("#d1").innerHeight();
		$("#d1").html(txt);
	});
	$("#b14").click(function(){
		var txt = "";
		txt += "outerWidth: " + $("#d1").outerWidth() + "</br>";
  	txt += "outerHeight: " + $("#d1").outerHeight();
		$("#d1").html(txt);
	});
	$("#b15").click(function(){
		var txt = "";
		txt += "outerWidth(true): " + $("#d1").outerWidth(true) + "</br>";
  	txt += "outerHeight(true): " + $("#d1").outerHeight(true);
		$("#d1").html(txt);
	});
	$("#b16").click(function(){
		var txt = "";
		txt += "Width: " + $("#d2").width() + "</br>";
  	txt += "Height: " + $("#d2").height();
		$("#d2").html(txt);
	});
	$("#b17").click(function(){
		var txt = "";
		txt += "innerWidth: " + $("#d2").innerWidth() + "</br>";
  	txt += "innerHeight: " + $("#d2").innerHeight();
		$("#d2").html(txt);
	});
	$("#b18").click(function(){
		var txt = "";
		txt += "outerWidth: " + $("#d2").outerWidth() + "</br>";
  	txt += "outerHeight: " + $("#d2").outerHeight();
		$("#d2").html(txt);
	});
	$("#b19").click(function(){
		var txt = "";
		txt += "outerWidth(true): " + $("#d2").outerWidth(true) + "</br>";
  	txt += "outerHeight(true): " + $("#d2").outerHeight(true);
		$("#d2").html(txt);
	});
});