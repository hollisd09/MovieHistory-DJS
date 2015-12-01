define(function(require) {
	var ajax = require("ajax");
	var q = require("q");
	var uid = null;
	var find = require("find");
	var populateDom = require("populate-dom");
	var auth = require("auth");

    return {
	    deleteMovie: function(title) {
	    	var removeMovieRef = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/all/' + title);
			var removeMovieRefW = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/watched/' + title);
			var removeMovieRefU = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
			var removeMovieRefF = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/favorites/' + title);
			var onComplete = function(error) {
			    if (error) {
			    console.log('Synchronization failed');
			    } else {
			    console.log('Synchronization succeeded');
			    };
			};
			removeMovieRefU.remove(onComplete);
			removeMovieRefW.remove(onComplete);
			removeMovieRefF.remove(onComplete);
			removeMovieRef.remove(onComplete);
	    }
    };
});