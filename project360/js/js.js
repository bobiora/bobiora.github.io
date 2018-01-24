$().ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.multiple-items').slick({
		infinite: true,
		dots: false,
		prevArrow:'<div class="slick-nav slick-prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow:'<div class="slick-nav slick-next"><i class="fas fa-chevron-right"></i></div>',
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
		  breakpoint: 1200,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3		    
		  }
		},
		{
		  breakpoint: 900,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 670,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});

	$('.nav-mob').click(function(){
		$(this).toggleClass('on');
		$('.nav-bar').slideToggle('fast');
	});

});