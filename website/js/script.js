/*
Theme Name:     ITHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "itheme".
	For demo 1 to demo 8, it uses "itheme".
	For demo 9, it uses "ithemeD9". 
	For demo 10, it uses "ithemeD10".
	For index page, it uses "ithemeIndex".
	For documentation page, it uses "ithemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 .itheme-owl-1
		1.2 .itheme-owl-2
		1.3 .itheme-owl-3
	2. wow
	3. navigation
		3.1 for demo 1 to demo 8
			3.1.1 #itheme-navbar
		3.2 for demo 9
			3.2.1 #ithemeD9-navbar
		3.3 for demo 10
			3.3.1 #ithemeD10-navbar
		3.4 for index
			3.4.1 #ithemeIndex-navbar
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".itheme-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 1,
				nav: true
			},
			1200: {
				items: 1,
				nav: true
			}
		}
	});
	$(".itheme-owl-2").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
	$(".itheme-owl-3").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#itheme-navbar, #ithemeD9-navbar, #ithemeD10-navbar, #ithemeIndex-navbar').addClass('solid');
	    } else {
	        $('#itheme-navbar, #ithemeD9-navbar, #ithemeD10-navbar, #ithemeIndex-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#itheme-navbar, #ithemeD9-navbar, #ithemeD10-navbar, #ithemeIndex-navbar').hide();
	    }
	    else{
	    	$('#itheme-navbar, #ithemeD9-navbar, #ithemeD10-navbar, #ithemeIndex-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* END OF CUSTOM JS */
