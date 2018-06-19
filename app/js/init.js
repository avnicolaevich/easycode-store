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
})(jQuery);