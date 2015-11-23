define(function(require) {
  var q = require("q");
  var templates = require("templates");

  // This is the code for hiding and showing the "cards"

  $("body").on("click", ".watched", function() {
        $("#watchedMovies").removeClass("hidden")
        $("#watchedMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#searchMovies").hide();
        $("#findMovies").hide();
      });

  $("body").on("click", ".unwatched", function() {
        $("#unwatchedMovies").removeClass("hidden")
        $("#unwatchedMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#searchMovies").hide();
        $("#findMovies").hide();
      });

  $("body").on("click", "#searchMoviesButton", function() {
        $("#searchMovies").removeClass("hidden");
        $("#searchMovies").show();hidden
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#findMovies").hide();
        console.log("button works?");
      });

});	
