$(function () {
	var push = $('#menu-button');
	menu = $('.navigation-list');
	menuHeight = menu.height();

	$(push).on('click', function (e) {
		menu.slideToggle();
		push.toggleClass("-rotate");
	});

	$(window).resize(function () {
		var w = $(window).width();
		if (w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
			push.toggleClass("-rotate");
		} else if (w < 768 ) {
			menu.css("display" , "none")

		}
	});
});
