$(document).ready(function(){
	$("#t1").attr({"border": function(index) {
    return "4px";
  }, "title": "I am table"});
  $("#l1").removeAttr("href");
  $("#d1 ul li").filter(".middle").eq(1).css("color", "red");
  $("#d1 ul li").filter(function(index) {
  	return index == 4 || $(this).attr("class") == "top";
  }).css("color", "dodgerblue");
  // is()
  $("#d1 ul li").click(function(){
  	if ($(this).is(":first-child")) {
  		$("#p1").text("This is list item 1.");
  	} else if ($(this).is(".middle")) {
  		$("#p1").text("This is middle class list");
  	} else if ($(this).is(":contains('item 5')")) {
  		$("#p1").text("This is fifth element in list.");
  	}
  });
  // map(callback)
  var mappedItems = $("#d1 ul li").map(function(index) {
  	var replacement = $("<li>").text($(this).text()).get(0);

  	if (index == 0) {
  		// make the first item all caps
  		$(replacement).text($(replacement).text().toUpperCase());
  	} else if ( index == 1 || index == 3) {
  		// delete second and fourth items
  		replacement = null;
  	} else if ( index == 2) {
  		// make two of the third item and add some text
  		replacement = [replacement,$("<li>").get(0)];
  		$(replacement[0]).append("<b> - A</b>");
  		$(replacement[1]).append("Extra <b> - B</b>");
  	}

  	return replacement;
  });
  $("#l2").append(mappedItems);
  // slice()
  $("#l3 li").slice(2, 5).css("color", "mediumseagreen");
  // add()
  $(".nice").add(".pretty").css("color", "tomato");
  // andSelf() deprecated use addBack()
  $("#d2").find("p").addBack().css({"border": "2px solid red", "padding": "5px"});
  // closest()
  $(document).on("click", function(e) {
  	$(e.target).closest("li").css("font-size", "25px");
  });
  // contents
  $("li").contents().filter("p").css("color", "purple");
 	// end()
 	$("#l4")
 		.find(".test")
 			.css("background-color", "linen")
 		.end()
 		.find(".practice")
 			.css("background-color", "lightblue");
 	// offsetParent()
 	$("#p2").offsetParent().css("background-color", "lightgrey");
 	// offset()
 	$(".alfa").width("100px");
 	$(".alfa").height("100px");
 	$(".alfa").css("border", "2px solid red").css("margin", "5px");
 	$(".alfa").click(function(){
 		var offset = $(this).offset();
 		$("#result").text("Left offset: " + offset.left + ", top offset: " + offset.top);
 	});
 	// position()
 	$("#p2").click(function(){
 		var position = $(this).position();
 		$("#result2").text("Left position: " + position.left + ", top position: " + position.top);
 	});
 	// trigger()
 	$(".alfa").click(function(){
 		$("#l3 li").trigger("click");
 	});
 	// interactions
 	// draggable()
 	$("#d4").draggable();
 	// droppable()
 	$("#d5").draggable();
 	$("#d6").droppable({
 		drop: function(event, ui) {
 			$(this).addClass( "ui-state-highlight").find("p").html("Dropped!");
 		}
 	});
 	// resizable()
 	$( "#resizable-14" ).resizable({
    create: function( event, ui ) {
      $("#resizable-15").text ("I'm Created!!");
    },

    resize: function (event, ui) {
      $("#resizable-16").text ("top = " + ui.position.top +
        ", left = " + ui.position.left +
        ", width = " + ui.size.width +
        ", height = " + ui.size.height);
    }
  });
  // sortable()
  $("#l3").sortable();
  $("#l3").disableSelection();
});