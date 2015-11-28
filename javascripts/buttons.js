define(function(require) {
	var $ = require("jquery");
	
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
	      auth.movieAdded(title, image)
	      // populateDom.postToFindMovies(find.oData)
	   });
})