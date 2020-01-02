// JavaScript Document

$(document).ready(function(e) {
	
	/********** search open  **************/
    $('.change-location').click(function(e) {
        $('.collapse-search').slideDown(500);
    });
	
	/********** search collapse  **************/
    $('#close').click(function(e) {
        $(this).parents('.collapse-search').slideUp(500);
    });
	
	/********** filter collapse  **************/
    $('.filter-collapse').click(function(e) {
		$(this).toggleClass('open');
        $(this).parent('h4').next('ul').slideToggle('slow');
    });
	
	/********** star rating **************/
    $('.rating li a').click(function(e) {
		$(this).toggleClass('star');
    });
	
});


/*******  wow slides -****************/
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();