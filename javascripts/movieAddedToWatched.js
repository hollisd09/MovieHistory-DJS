define(function(require) {
	var ajax = require("ajax");
	var q = require("q");
	var uid = null;
	var find = require("find");
	var populateDom = require("populate-dom");
	var auth = require("auth");

    return {
	    movieAddedtoWatched: function(title, image) {
			var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/watched/' + title);
		        userClickedAdd.set({
				  	title: title,
				  	poster: image
			    });
	    }
    };
});
      