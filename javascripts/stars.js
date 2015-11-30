define(function(require) {
	var $ = require("jquery");
	
		// initialize with defaults
		$("#input-id").rating();
		 
		// with plugin options
		$("#input-id").rating({min:1, max:5, step:1, size:'xs'});

});

