;(function(){
	//Init ion range slider
	$('#price-range').ionRangeSlider({
		type: "double",
		grid: false,
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$",
		hide_min_max: true,
	});

	// Init jquery form styler
	$('.select-styler, .input-file-styler').styler();

	// Init trend products carousel
	$(".trend-products-carousel").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		// infinite: false,
  		speed: 300,
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
		responsive: [
			{
			  	breakpoint: 1024,
			  	settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
			  	}
			},
			{
			  	breakpoint: 600,
			  	settings: {
					slidesToShow: 2,
					slidesToScroll: 2
			 	}
			},
			{
			  	breakpoint: 480,
			  	settings: {
					slidesToShow: 1,
					slidesToScroll: 1
			  	}
			}
		]
	});
})(jQuery);