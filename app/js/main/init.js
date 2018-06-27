;(function(){
	//Init ion range slider
	if ($("#price-range").length) {
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
	}

	// Init jquery form styler
	if ($('.select-styler, .input-file-styler').length) {
		$('.select-styler, .input-file-styler').styler();
	}
	
	// Init trend products carousel
	if ($(".trend-products-carousel").length) {
		$(".trend-products-carousel").slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			responsive: [
				{
				  	breakpoint: 1200,
				  	settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
				  	}
				},
				{
				  	breakpoint: 991,
				  	settings: {
						slidesToShow: 2,
						slidesToScroll: 2
				 	}
				},
				{
				  	breakpoint: 767,
				  	settings: {
						slidesToShow: 1,
						slidesToScroll: 1
				  	}
				}
			]
		});
	}

	// init slicknav
	$('.header-nav').slicknav({
		appendTo: "#header .top-header .user-controls",
		label: "",
	});
	
})(jQuery);