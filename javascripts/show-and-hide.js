define(function(require) {
	var $ = require("jquery");

  // THIS WILL SHOW AND HIDE CARDS

  
    // SHOW SPLASH, HIDE EVERYTHING ELSE
    $(document).ready(function() {
      $("#splashPage").show();
      $("#allMovies").hide();
      $("#unwatchedMovies").hide();
      $("#watchedMovies").hide();
      $("#favoriteMovies").hide();
      $("#pageLinks").hide();
      $("#navBar").hide();
    });


    // SHOW ALL MOVIES PAGE
    // SHOW NAV BAR
    // SHOW LINKS FOR OTHER PAGES
    $("body").on("click", "#allLink", function() {
        $("#allMovies").show();
        $("#navBar").show();
        $("#pageLinks").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
      });


    // SHOW UNWATCHED MOVIES PAGE
    // SHOW NAV BAR
    // SHOW LINKS FOR OTHER PAGES
  $("body").on("click", "#unwatchedLink", function() {
        $("#unwatchedMovies").show();
        $("#navBar").show();
        $("#pageLinks").show();
        $("#allMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
      });

    
    // SHOW WATCHED MOVIES PAGE
    // SHOW NAV BAR
    // SHOW LINKS FOR OTHER PAGES
    $("body").on("click", "#watchedLink", function() {
        $("#watchedMovies").show();
        $("#navBar").show();
        $("#pageLinks").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#allMovies").hide();
        $("#favoriteMovies").hide();
      });

   
    // SHOW FAVORITED MOVIES PAGE
    // SHOW NAV BAR
    // SHOW LINKS FOR OTHER PAGES
   $("body").on("click", "#favoriteLink", function() {
        $("#favoriteMovies").show();
        $("#navBar").show();
        $("#pageLinks").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#allMovies").hide();
      });


}); //END OF REQUIRE