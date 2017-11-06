$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		stagePadding: 0,
	    items: 1,
	    loop:true,
	    margin:0,
	    singleItem:true,
	    dots:true
	});

	 $('.c-select').selectmenu();

	 $('.mob-btn').click(function() {
	 	$('body').addClass('openNav');
	 	return false;
	 });
	 $('.mobile-nav .close').click(function() {
	 	$('body').removeClass('openNav');
	 	return false;
	 });
});