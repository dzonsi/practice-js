$(document).ready(function(){
	// hide and show
	$("#btn1").click(function(){
		$(".first").hide("slow", function(){
			alert("The element is hiden!"); // callback function
		});
	});
	$("#btn2").click(function(){
		$(".first").show("fast");
	});
	$("#btn3").click(function(){
		$(".first").toggle(2000);
	});
	// fading
	$("#btn4").click(function(){
		$("#div1").fadeIn("slow");
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn("slow");
	});
	$("#btn5").click(function(){
		$("#div1").fadeOut("fast");
		$("#div2").fadeOut("fast");
		$("#div3").fadeOut("fast");
	});
	$("#btn6").click(function(){
		$("#div1").fadeToggle(2000);
		$("#div2").fadeToggle(2000);
		$("#div3").fadeToggle(2000);
	});
	$("#btn7").click(function(){
		$("#div1").fadeTo(2000, 0.7);
		$("#div2").fadeTo(2000, 0.7);
		$("#div3").fadeTo(2000, 0.7);
	});
	$("#btn8").click(function(){
		$("#div1").fadeTo(2000, 0.25, function(){
			alert("Opacity is set to 0.25"); // callback function
		});
		$("#div2").fadeTo(2000, 0.25);
		$("#div3").fadeTo(2000, 0.25);
	});
	// sliding
	$("#btn9").click(function(){
		$(".article").slideDown("slow");
	});
	$("#btn10").click(function(){
		$(".article").slideUp("fast");
	});
	$("#btn11").click(function(){
		$(".article").slideToggle(1500);
	});
	// animation
	$("#btn12").click(function(){
		$("#anm1").animate({left: "250px"});
	});
 	$("#btn13").click(function(){
   	$("#anm1").animate({
      left: '+=250px',
      height: '+=150px',
      width: '+=150px'
    });
 	});
 	$("#btn14").click(function(){
  $("#anm1").animate({
    height: "toggle"
  	});
	});
	$("#btn15").click(function(){
    var div = $("#anm2");
    div.animate({height: '300px', opacity: '0.4'}, 3000);
    div.animate({width: '300px', opacity: '0.8'}, 3000);
    div.animate({height: '100px', opacity: '0.4'}, 3000);
    div.animate({width: '100px', opacity: '0.8'}, 3000);

    $("#span1").text(div.queue().length);
  });
  $("#btn22").click(function(){
  	$("#anm2").clearQueue(); // clearQueue()
  });
  $("#btn16").click(function(){
    var div = $("#anm3");
    div.animate({left: '100px'}, "slow");
    div.animate({width: "120px"}, "fast");
    div.animate({fontSize: '3em'}, "slow", function(){
    	alert("End of animation!"); // callback function
    });
  });
  // stop
  $("#btn17").click(function(){
    $("#anm4").animate({left: '100px'}, 4000);
    $("#anm4").animate({fontSize: '3em'}, 4000);
  });
  $("#btn18").click(function(){
  	$("#anm4").stop();
  });
  $("#btn19").click(function(){
  	$("#anm4").stop(true);
  });
  $("#btn20").click(function(){
  	$("#anm4").stop(true, true);
  });
  // chaining
  $("#btn21").click(function(){
  	$("#p1").css("color", "red").css("font-size", "22px")
  	.slideUp(2000).slideDown(2000);
  });

  // queue

  $("#btn23").click(function(){
  	var div = $("#anm5");
  	startAnimation();
  	showQueue();

  	function startAnimation() {
  		div.animate({height: "300px"}, "slow");
  		div.animate({width: "300px"}, "slow");
  		div.animate({height: "100px"}, "slow");
  		div.animate({width: "100px"}, "slow", startAnimation);
  	}

  	function showQueue(){
  		var q = div.queue();
  		$("#span2").text(q.length);
  		setTimeout(showQueue);
  	}
  });
  // hide and show with blind
  $("#btn24").click(function(){
    $(".first").hide("blind", {direction: "horizontal"}, 1500);
  });
  $("#btn25").click(function(){
    $(".first").show("blind", {direction: "horizontal"}, 1500);
  });
  // hide and show with explode
  $("#btn26").click(function(){
    $(".first").hide("explode", {pieces: 16}, 1500);
  });
  $("#btn27").click(function(){
    $(".first").show("explode", {pieces: 25}, 1500);
  });
  // pulsate
  $("#btn28").click(function(){
    $("#anm1").effect( "pulsate", {times:5}, 3000 );
  });
});