define(function(require) {
	var $ = require("jquery");
	
		$('.stars').hover(
		
	    // Handles the mouseover
	    function() {
	        $(this).prevAll().andSelf().addClass('stars-over');
	        $(this).nextAll().removeClass('stars-vote'); 
	    },
	    
	    // Handles the mouseout
	    function() {
	        $(this).prevAll().andSelf().removeClass('stars-over');
	        set_votes($(this).parent());
	    }
	);

});

