define(function(require) {
	var ajax = require("ajax");
	var q = require("q");
	var uid = null;
	var find = require("find");
	var populateDom = require("populate-dom"); 
	var auth = require("auth");  

    return {
	    movieIsWatched: function(title) {
	    	var removeMovieRefU = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
	    	var onComplete = function(error) {
				if (error) {
				    console.log('Synchronization failed');
				} else {
				    console.log('Deleted from watched!');
				}
			};
			removeMovieRefU.remove(onComplete);
	    }
    };
});
		