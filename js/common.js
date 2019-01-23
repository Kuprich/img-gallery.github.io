$(function() {
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	//nano-scroll
	//$(".nano").nanoScroller({
	//	flash: true
//	});

	$(".gallery img").lazyload({
		effect: "fadeIn",
		threshold: 500
	});
	//hamburder menu
	$(".nav-icon").click(function(){
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
	});

	//freewall

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterY: 5,
		gutterX: 5,
		onResize: function(){
			wall.fitWidth();
		}
	});
	wall.fitWidth();
	var images = wall.container.find("a");
	images.find("img").load(function(){
		wall.fitWidth();
	});

	$(".filters_wrap button").click(function() {
		$(".filters_wrap button").removeClass("active");
		var filter = $(this).addClass('active').data('filter');
		if (filter) {
			wall.filter(filter);
		} else {
			wall.unFilter();
		}
	});

	/*-----------------------*/
	$('.gallery').magnificPopup({
		delegate: 'a',
		type:'image',
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	$('.about_wrap').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});
//прелоадер
$(window).load(function(){
	$(".load_area").fadeOut("slow");
})


