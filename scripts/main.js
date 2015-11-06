$( document ).ready(function(){
			
	$('.button-collapse').sideNav({closeOnClick: true});
	$('.side-nav .close').sideNav('hide');
	$('.scrollspy').scrollSpy();
		      
	$('.parallax').parallax();
	
	$(".dropdown-button").dropdown({hover: true,belowOrigin: true});       
	
	$('.team article').click(function() {
		var target = $(this).data("target");
		$('#teamContent #' + target).toggleClass('hidden');
		$('#teamContent').children().not( '#' + target).addClass('hidden');
	});
	
});

// Changing the header menu on scroll

var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 )
        $("#header, #lang").addClass("scrolled");
    else
        $("#header, #lang").removeClass("scrolled");
}

jQuery(document).ready(function($){

    // ON SCROLL EVENTS
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
        });
    };

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });
});


// Smotthing the scroll on Anchors
$(function() {
  $('#header a[href*=#]:not([href=#]), .showcase a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-60
        }, 1000);
        return false;
      }
    }
  });
});
