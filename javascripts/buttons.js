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
	      auth.movieAddedtoAll(title, image);
	      auth.movieAddedUnwatched(title,image);
	   });


//Watched button
   $("body").on("click", ".watched", function() {
      var title = $(this).attr("title");
      var image = $(this).attr("image");
      auth.movieAddedtoWatched(title, image);
      auth.movieIsWatched(title);
   });

//delete button
  	$("body").on("click", ".deleteBtn", function() {
	    var title = $(this).attr("title");
	    auth.deleteMovie(title);
  	});

 });