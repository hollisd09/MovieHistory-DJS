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
	      console.log("find", find);
	      var title = $(this).attr("title");
	      var image = $(this).attr("image");
	      var imdbID = $(this).attr("imdbid");
	      var actors = $(this.Actors);
	      console.log(actors);
	      auth.movieAddedtoAll(title, image, imdbID, actors);
	      auth.movieAddedUnwatched(title,image, imdbID, actors);
	   });


//Watched button
   $("body").on("click", ".watched", function() {
      var title = $(this).attr("title");
      var image = $(this).attr("image");
      var imdbID = $(this).attr("imdbid");
      console.log(imdbID);
      auth.movieAddedtoWatched(title, image, imdbID);
      auth.movieIsWatched(title);
   });

//delete button
  $("body").on("click", ".deleteBtn", function() {
    var title = $(this).attr("title");
    auth.deleteMovie(title);
  });

 });