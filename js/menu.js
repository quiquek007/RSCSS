$(function () {
	var flag = false;
	var push = $('#menu-button');
	menu = $('.navigation-list');
	menuHeight = menu.height();

	$(push).on('click', function (e) {
		menu.slideToggle();
		push.toggleClass("-rotate");
		flag = false;
	});

	if (!menu.is(':hidden') && $(window).width() < 768) {
		menu.slideToggle();
	}

	$(window).resize(function () {
		var w = $(window).width();
		if (w > 768 && menu.is(':hidden')) {
			menu.slideToggle();
			flag = true;
			console.log("true");
		} else if (w < 768 && flag) {
			menu.slideToggle();
			flag = false;
		}
	});

	$('#button_send').hide();
	$(".checkbox").on('click', function (e) {
		if ($(".checkbox").prop("checked")) {
			$("#button_send").animate({
				opacity: 'toggle'
			})
		} else {
			$("#button_send").animate({
				opacity: 'toggle'
			})
		}
	});

});
