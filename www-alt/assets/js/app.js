$(document).ready(function() {
    
      "use strict";

	//vibration api for mobile devices when menu is used
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
	if(navigator.vibrate) {
		$('.navbar-toggle[data-target=".navbar-collapse"], footer a, .navbar-brand, #toTop').click(function () {
			navigator.vibrate(40);
		})
	}

	addEventListener("load", function () {
		setTimeout(hideURLbar, 0);
	}, false);

	function hideURLbar() {
		window.scrollTo(0, 1);
	}
    
    $(function () {
		$("#slider").responsiveSlides({
			auto: true,
			pager: true,
			nav: true,
			speed: 3000,
			timeout: 10000,
			namespace: "callbacks",
			before: function () {
				$('.events').append("<li>before event fired.</li>");
			},
			after: function () {
				$('.events').append("<li>after event fired.</li>");
			}
		});
	});

    $(window).scroll(function () {
		if ($(window).scrollTop() >= 670) {
			$('nav').addClass('fixed-header');
			$('.navbar-collapse.collapse').removeClass('in');
		} else {
			$('nav').removeClass('fixed-header');
		}
	});
	/* scrollTop() >= 770
	   Should be equal the the height of the header
	 */

	$(function () {
		var gallery = $('.agileinfo-gallery-row a').simpleLightbox({
			navText: ['&lsaquo;', '&rsaquo;']
		});
	});

	$(".scroll").click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);

	});


	$().UItoTop({
		easingType: 'easeOutQuart'
	});

	$("#owl-demo").owlCarousel({
		items: 4,
		lazyLoad: true,
		autoPlay: true,
		pagination: true,
	});
});
