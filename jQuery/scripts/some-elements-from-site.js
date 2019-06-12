$(document).ready(function(){
	$('p:first').html('New <strong>first</strong> paragraph!');
	$('#test2').html('<p>Some random text!</p>');
	var newElement = $('<p>New element</p>');
	newElement.appendTo('#test3');
	$( "<a/>", {
    html: "This is a <strong>new</strong> link",
    "class": "new",
    href: "https://www.google.com/",
    target: "_blank",
    id: "link"
	}).appendTo('#test3');
	$('#link').clone().appendTo('#test2');
	$('#test li:first').appendTo('#test');
	$('#test').append($('#test li:first'));
	$('p:first').clone().appendTo('#test');
	var myItems = [];
	var list = $('#test4');
	for(var i = 0; i < 10; i++) {
		myItems.push("<li>item " + (i + 1) + "</li>");
	}
	list.append(myItems.join(''));
	var listItems = $('li');
	$('#test5').html('<p>There are ' + listItems.length + ' li elements!</p>');
	listItems.eq(7).css('color','red');
	$('#test6').on({
		mouseenter: function() {
			console.log('Hovered over a div');
		},
		mouseleave: function() {
			console.log('Mouse left a div');
		},
		click: function(event) {
			console.log('Cliked on a ' + event.target.tagName);
			console.log('event x cordinate: ' + event.pageX);
			console.log(event.which);
		}
	});
	$('#test4').on('click', 'li', function(event) {
		console.log( $(this).text() );
	});
	$('#test7').on('click', function() {
		$('#test8').animate({
			opacity: 0.5,
			left: "+=50",
			borderRadius: "10px",
			width: "+=20"
		}, 3000, function() {
			console.log('End of animation!');
		});
	});
	$('#test9').on('click', function() {
		$('#test10').animate({
			width: "+=20",
			height: "+=20"
		}, {
			step: function(now, fx) {
				var data = fx.elem.id + " " + fx.prop + ": " + now;
				$("body").append('<div>' + data + '</div>');
			}
		});
	});
	$("#test11").on("click", function() {
		$("#test12").animate({
			width: "+=20"
		}, "slow")
		.queue( function(next) {
			console.log("We're in the callback, baby!");
			next();
		});
	});
	// proba ajax
	$("#loading")
		.ajaxStart(function() {
			$(this).show();
		})
		.ajaxStop(function() {
			$(this).hide();
	});
	$.ajax({
		url: "practice.php",
		data: {
			name: "Nikola",
			id: 123
		},
		type: "GET",
		dataType: "JSON",
		timeout: 5000
	})
	.done(function(json) {
		$("<h1>").text( json.title ).appendTo("body");
		$("<div class=\"content\">").html( json.html ).appendTo("body");
	})
	.fail(function( xhr, status, errorThrown ) {
		alert("Sorry there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	})
	.always(function(xhr, status) {
		alert("The request is complete!");
	});
});