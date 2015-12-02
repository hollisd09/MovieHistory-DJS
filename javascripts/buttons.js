define(function(require) {
	var $ = require("jquery");
	var auth = require("auth");
	
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

	      var title = $(this).attr("title");
	      var image = $(this).attr("image");
	      var imdbID = $(this).attr("imdbid");
	      var actors = $(this).attr("actors");
	      var year = $(this).attr("year");


	      auth.movieAddedtoAll(title, image, imdbID, actors, year);
	      auth.movieAddedUnwatched(title, image, imdbID, actors, year);
	   });


//Watched button
   $("body").on("click", ".watched", function() {
      var title = $(this).attr("title");
      var image = $(this).attr("image");
      var imdbID = $(this).attr("imdbid");
      var actors = $(this).attr("actors");
	  var year = $(this).attr("year");
      console.log(imdbID);
      auth.movieAddedtoWatched(title, image, imdbID, actors, year);
      auth.movieIsWatched(title);
   });

//delete button
  $("body").on("click", ".deleteBtn", function() {
    var title = $(this).attr("title");
    auth.deleteMovie(title);
  });

 });