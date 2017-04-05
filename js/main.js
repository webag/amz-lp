/***********************
 отправка формы в php BEGIN
 ***********************/
$(document).ready(function(){

	$(".search-form").on("submit", function(event) {
		event.preventDefault();
		var search_block = $('.search-block');
		var result_block = $('.table-block');
		var loader = $('.search-block__loader');

		$.ajax({
			type: "POST",
			url: "/",
			success: (function() {
				loader.addClass('active');
				setTimeout(function() {
					search_block.addClass('hidden');
					loader.removeClass('active');
					result_block.addClass('opened');
				},4500);
			})
		});

	});
});
/***********************
 отправка формы в php END
 ***********************/


/***********************
 agmodal BEGIN
 ***********************/
$(document).ready(function(){
	$('.modal').agmodal({
		effect: 'fade',
		overlayColor: 'rgba(62, 78, 104, 1)'
	});

	$('.modal-close').on('click',function (e) {
		e.preventDefault();
		$(this).parents('.modal').agmodal('close');
	});
});
/***********************
 agmodal END
 ***********************/


/***********************
Reviews slider BEGIN
***********************/
$(document).ready(function() {
	var reviews_slider = $('.reviews-slider').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: true,
		wrapAround: true,
		imagesLoaded: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 45,
			x3: 20
		},
		selectedAttraction: 0.02,
		friction: 0.28
	});
});
/***********************
Reviews slider END
***********************/


/***********************
 Scroll BEGIN
 ***********************/
$(document).ready(function() {
	$('.sto').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html').animate( { scrollTop: destination }, 700 );
		$('body').animate( { scrollTop: destination }, 700 );
		return false;
	});
});
/***********************
 Scroll END
 ***********************/


/***********************
 fancybox BEGIN
 ***********************/
$(document).ready(function(){
	$('.fancy-video').fancybox({
		padding: 0,
		width: 1600,
		height: 900,
		aspectRatio: true,
		scrolling: 'no'
	});
});
/***********************
 fancybox END
 ***********************/