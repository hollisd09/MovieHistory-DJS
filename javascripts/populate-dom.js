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

        // postActors: function(mData){

        //     require(['hbs!../templates/all-movies'], function(MoviesTemp) {
        //     	$("#allMoviesHere").append(MoviesTemp(mData));

        //     });
        // },
	}
});