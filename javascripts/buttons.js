define(function(require) {
	var $ = require("jquery");
	var auth = require("auth");
	var movieAddedUnwatched = require("movieAddedUnwatched");
	var movieAddedToAll = require("movieAddedToAll");
	var movieAddedToWatched = require("movieAddedToWatched");
	var movieIsWatched = require("movieIsWatched");
	var deleteMovie = require("deleteMovie");
	
//Logout button
	    $("body").on("click", "#logoutLink", function(){
	      var ref = new Firebase("https://movie-history-djs.firebaseio.com/");
	      ref.unauth();
	      $("#splashPage").show();
	      $("#allMovies").hide();
	      $("#unwatchedMovies").hide();
	      $("#watchedMovies").hide();
	      $("#favoriteMovies").hide();
	      $("#pageLinks").hide();
	      $("#navBar").hide();

	    });


//Add button
	   $("body").on("click", ".add", function() {
	      console.log("find", find);
	      var title = $(this).attr("title");
	      var image = $(this).attr("image");
	      auth.movieAddedToAll;
	      auth.movieAddedUnwatched;
	   });


//Watched button
	   $("body").on("click", ".watched", function() {
	      var title = $(this).attr("title");
	      var image = $(this).attr("image");
	      auth.movieAddedToWatched;
	      auth.movieIsWatched;
	   });

//delete button
	  $("body").on("click", ".deleteBtn", function() {
	    var title = $(this).attr("title");
	    auth.deleteMovie;
	  });

});