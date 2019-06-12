$(document).ready(function(){
	$("#hide").click(function(){
		$("span").hide();
	});
	$("#hide1").click(function(){
		$("#special").hide();
	});
	$("#hide2").click(function(){
		$(".one").css("color", "dodgerblue");
	});
	$("#hide3").click(function(){
		$("*").css("color", "red");
	});
	$("#img").click(function(){
		$(this).hide();
	});
	$("ul li:first").click(function(){
		$("ul li:first").css("color", "mediumseagreen");
	});
	$("ul li:last-child").click(function(){
		$("ul li:last-child").css("font-size", "25px");
	});
	$("#hide4").click(function(){
		$("ul li:nth-child(3)").css("background-color", "lightyellow").css("color", "blue");
	});
	$("#hide5").click(function(){
		$("[href]").css("text-decoration", "none");
	});
	$("#hide6").click(function(){
		$("[target=_blank]").css("font-size", "25px").css("color", "navy");
	});
	$("#hide7").click(function(){
		$(".tbl th").css("background-color", "lightyellow");
		$(".tbl tr:odd").css("background-color", "lightgrey");
	});
	$("#img2").dblclick(function(){
		$(this).css("border", "1px solid red");
	});
	$("#img3").mouseenter(function(){
		$(this).css("border", "1px solid red");
	});
	$("input[type='text']").focus(function(){
		$(this).css("background-color", "linen");
	});
	$("input[type='text']").blur(function(){
		$(this).css("background-color", "transparent");
	});
	$("h1").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
	});
	$("#img4").on({
		mouseenter: function(){
			$(this).css("border", "1px solid dodgerblue");
		},
		mouseleave: function(){
			$(this).css("border", "1px solid transparent");
		}
	});
});