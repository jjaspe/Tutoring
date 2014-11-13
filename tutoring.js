var main=function(){
	$('.next-arrow').click(function(){
		var currentSlide=$('.active-slide'),
		    nextSlide=$('.active-slide').next();
		
		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');
	});
}
	
$(document).ready(main);
	
