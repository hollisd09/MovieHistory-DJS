define(function(require) {
	var ajax = require("ajax");
	var uid = null;
	var find = require("find");

	return {

        postToFindMovies: function(oDataInfo){

            require(['hbs!../templates/all-movies'], function(findMoviesTemp) {
            	$("#allMoviesHere").append(findMoviesTemp(oDataInfo));

            });
        },

        postToSplashPage: function(oDataInfo){

            require(['hbs!../templates/splash-page'], function(findMoviesTemp) {
            	$("#splashPage").append(findMoviesTemp(oDataInfo));

            });
        },

        postToUnwatchedMovies: function(oDataInfo){

            require(['hbs!../templates/unwatched-movies'], function(findMoviesTemp) {
            	$("#unwatchedMovies").html(findMoviesTemp(oDataInfo));

            });
        },

        postToWatchedMovies: function(oDataInfo){

            require(['hbs!../templates/watched-movies'], function(findMoviesTemp) {
            	$("#watchedMovies").html(findMoviesTemp(oDataInfo));

            });
        },

        postToFavoriteMovies: function(oDataInfo){

            require(['hbs!../templates/favorites'], function(findMoviesTemp) {
                $("#favoriteMovies").html(findMoviesTemp(oDataInfo));
            });
        }
	}
});