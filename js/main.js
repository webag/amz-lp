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