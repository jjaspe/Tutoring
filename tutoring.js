
main = function () {
    $('.arrow-next').click(function () {
        var currentSlide = $('.active-slide'),
            nextSlide = $('.active-slide').next();

        if (nextSlide.length == 0)
            nextSlide = $('.slide').first();

        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
    });

    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide'),
            nextSlide = $('.active-slide').prev();

        currentSlide.fadeOut(600).removeClass('active-slide');

        if (nextSlide.length == 0)
            nextSlide = $('.slide').last();

        nextSlide.fadeIn(600).addClass('active-slide');
    });
};
	
$(document).ready(main);
	
