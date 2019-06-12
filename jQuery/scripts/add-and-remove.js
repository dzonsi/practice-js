$(document).ready(function(){
	// append and prepend
	$("#b1").click(function(){
		$("#p1").append(" <b>Appended text</b>");
	});
	$("#b2").click(function(){
		$("#l1").append(" <li><b>Appended item</b></li>");
	});
	$("#b3").click(function(){
		$("#p1").prepend(" <b>Prepend text</b>");
	});
	$("#b4").click(function(){
		$("#l1").prepend(" <li><b>Prepend item</b></li>");
	});
	$("#b5").click(function(){
		$("body").append("<b>Appended body text</b>");
	});
	$("#b6").click(function(){
		$("body").prepend("<b>Prepend body text</b>");
	});
	var x = "First text!";
	var y = " Second text!";
	$("#b7").click(function(){
		$("body").append(x, y);
	});
	$("#b8").click(function(){
		$("body").prepend(x, y);
	});
	// after and before
	$("#b9").click(function(){
		$("#s1").before("<b>Before </b>");
	});
	$("#b10").click(function(){
		$("#s1").after("<i>After </i>");
	});
	$("#b11").attr("onclick", "beforeText()");
	$("#b12").attr("onclick", "afterText()");
	// remove
	$("#b13").click(function(){
		$("#d1").remove();
	});
	$("#b14").click(function(){
		$("#d1").empty();
	});
	$("#b15").click(function(){
		$("p").remove(".nice");
	});
	$("#b16").click(function(){
		$("p").remove(".first");
	});
	$("#b17").click(function(){
		$("p").remove();
	});
});

function afterText() {
  var txt1 = "<b>I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("#s1").after(txt1, txt2, txt3);    // Insert new elements after img
}

function beforeText() {
  var txt1 = "<b>I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("#s1").before(txt1, txt2, txt3);    // Insert new elements after img
}

