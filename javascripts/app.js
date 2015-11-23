require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(

 ["dependencies", "auth", "ajax", "find"], 
 function(_$_, auth, ajax, find) {
 	
 	$("#signup").on("click", function(){
 		var newEmail = $("#emailInput").val();
 		var newPassword= $("#passwordInput").val();
 		auth.createNewUser(newEmail, newPassword);
 	});

 	$("#login").on("click", function(){
 		var userEmail = $("#emailInput").val();
 		var userPassword= $("#passwordInput").val();
 		
 		auth.loginUser(userEmail, userPassword);

    console.log(" auth ", auth);
 		console.log(" Email ", userEmail);
 		console.log(" Password ", userPassword);

 	});

  // THIS WILL SHOW AND HIDE CARDS
    $(document).ready(function() {
      $("#splashPage").removeClass("hidden");
      $("#splashPage").show();
      $("#watchedMovies").hide();
      $("#unwatchedMovies").hide();
      $("#searchMovies").hide();
      $("#findMovies").hide();
    })


    $("body").on("click", ".watched", function() {
        $("#watchedMovies").removeClass("hidden");
        $("#watchedMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#searchMovies").hide();
        $("#findMovies").hide();
      });

  $("body").on("click", ".unwatched", function() {
        $("#unwatchedMovies").removeClass("hidden");
        $("#unwatchedMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#searchMovies").hide();
        $("#findMovies").hide();
      });

  $("body").on("click", "#searchMoviesButton", function() {
        $("#searchMovies").removeClass("hidden");
        $("#searchMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#findMovies").hide();
        console.log("button works?");
      });

   $("body").on("click", "#findMoviesButton", function() {
        $("#findMovies").removeClass("hidden");
        $("#findMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#searchMovies").hide();
        console.log("button works?");
      });

})










