$(document).ready(function(){
	// parent
	$("#s1").parent().css({"color": "red", "border": "2px solid red"});
	$("#d1").parent().css({"color": "red", "border": "2px solid red"});
	// parents
	$("#s2").parents().css({"color": "dodgerblue", "border": "2px solid dodgerblue"});
	$("#s3").parents("div").css({"color": "mediumseagreen",
	 "border": "2px solid mediumseagreen"});
	// children
	$("#d2").children().css({"color": "purple", "border": "2px solid purple"});
	$("#d3").children("h3, span").css({"color": "navy", "border": "2px solid navy"});
	// find
	$("#d4").find("*").css({"color": "tomato", "border": "2px solid tomato"});
	$("#d5").find("span").css({"color": "orange", "border": "2px solid orange"});
	// siblings
	$("#h1").siblings().css({"color": "pink", "border": "2px solid pink"});
	$("#h2").siblings("p").css({"color": "gold", "border": "2px solid gold"});
	// next() and nexAll()
	$("#s4").next().css({"color": "green", "border": "2px solid green"});
	$("#h3").nextAll().css({"color": "black", "border": "2px solid black"});
	// nextUntil()
	$("#h4").nextUntil("h6").css({"color": "brown", "border": "2px solid brown"});
	// prev() and prevAll()
	$("#s5").prev().css({"color": "lightgreen", "border": "2px solid lightgreen"});
	$("#h5").prevAll().css({"color": "cyan", "border": "2px solid cyan"});
	// prevUntil()
	$("#h6").prevUntil("#h2").css({"color": "cadetblue", "border": "2px solid cadetblue"});
	// first(), last() and eq()
	$(".nice").first().css({"color": "hotpink", "border": "2px solid hotpink"});
	$(".nice").last().css({"color": "wheat", "border": "2px solid wheat"});
	$(".nice").eq(6).css({"color": "lavender", "border": "2px solid lavender"});
	// filter()
	$("div").filter(".container").css({"color": "darkkhaki", "border": "2px solid darkkhaki"});
	$("div").filter(".wraper").css({"color": "darkblue", "border": "2px solid darkblue"});
	// not()
	$(".main").not("h4").css({"color": "crimson", "border": "2px solid crimson"});
});