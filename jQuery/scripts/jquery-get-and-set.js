$(document).ready(function(){
	// get
	$("#b1").click(function(){
		alert( "Text of p1 is: " + $("#p1").text());
	});
	$("#b2").click(function(){
		alert( "HTML of p3 is: " + $("#p3").html());
	});
	$("#b3").click(function(){
		alert( "Input value is: " + $("#i1").val());
	});
	$("#b4").click(function(){
		alert( "Href of a link is: " + $("#l1").attr("href"));
	});
	$("#b5").click(function(){
		alert( "Target of a link is: " + $("#l1").attr("target"));
	});
	// set
	$("#b6").click(function(){
		$("#p1").text("New text !!!");
	});
	$("#b7").click(function(){
		$("#p1").html("<b>New text</b> <i>!!!!!!</i>");
	});
	$("#b8").click(function(){
		$("#i1").val("Donald Duck");
	});
	$("#b9").click(function(){
		$("#i1").val("Airplane");
	});
	$("#b10").click(function(){
		$("#p3").text(function(i, origText){
			return "Old text: " + origText + "New text: Hello World! (index: " + i + ")";
		});
	});
	$("#b11").click(function(){
    $("#p3").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
    });
  });
  $("#b12").click(function(){
  	$("#l1").attr("href", "https://www.gsmarena.com/");
  });
  $("#b13").click(function(){
  	$("#l1").attr("target", "_self");
  });
  $("#b14").click(function(){
  	$("#l1").text("GSM Arena");
  });
  $("#b15").click(function(){
  	$("#l1").attr({
  		"href" : "https://www.youtube.com",
  		"target" : "_blank",
  		"title" : "Youtube"
  	});
  });
  $("#b16").click(function(){
  	$("#l1").attr("href", function(i, origText){
  		return origText + "/watch?v=xzwL_6NuEls";
  	});
  });
});