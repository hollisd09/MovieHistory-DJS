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
 ["dependencies", "auth", "ajax", "find", "populate-dom"], 
  function(_$_, auth, ajax, find, populateDom) {
  var updatedUserInfo;
  // updatedUserInfo = auth.toUpdateUserInfo();
  // console.log("updatedUserInfo", updatedUserInfo);

//When you click signup
 	$("#signup").on("click", function(){
//Pull the information from the inputs
 		var newEmail = $("#emailInput").val();
 		var newPassword= $("#passwordInput").val();
//Use auth.js createNewUser passing in newEmail and newPassword as parameters
 		auth.createNewUser(newEmail, newPassword);
//Show and hide relevant IDs
    $("#allMovies").show();
    $("#pageLinks").show();
    $("#navBar").show();
    $("#splashPage").hide();
 	});

//When you click login
 	$("#login").on("click", function(){
//Pull the information from the inputs
 		var userEmail = $("#emailInput").val();
 		var userPassword= $("#passwordInput").val();
//Use auth.js createNewUser passing in userEmail and userPassword as parameters
 		auth.loginUser(userEmail, userPassword);
//Show and hide relevant IDs
    $("#allMovies").show();
    $("#pageLinks").show();
    $("#navBar").show();
    $("#splashPage").hide();

    console.log(" auth ", auth);
 		console.log(" Email ", userEmail);
 		console.log(" Password ", userPassword);


 	});

  // THIS WILL SHOW AND HIDE CARDS ON READY
    $(document).ready(function() {

      $("#splashPage").show();
      $("#allMovies").hide();
      $("#unwatchedMovies").hide();
      $("#watchedMovies").hide();
      $("#favoriteMovies").hide();
      $("#pageLinks").hide();
      $("#navBar").hide();
    });

//Show and hide cards when the all page is clicked
    $("body").on("click", "#allLink", function() {
        $("#allMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
        // populateDom.postToFindMovies(updatedUserInfo.unwatched)
      });

//Show and hide cards when the unwatched page is clicked
  $("body").on("click", "#unwatchedLink", function() {
        $("#unwatchedMovies").show();
        $("#allMovies").hide();
        $("#splashPage").hide();
        $("#watchedMovies").hide();
        $("#favoriteMovies").hide();
      });

//Show and hide cards when the watched page is clicked
  $("body").on("click", "#watchedLink", function() {
        $("#watchedMovies").show();
        $("#unwatchedMovies").hide();
        $("#splashPage").hide();
        $("#allMovies").hide();
        $("#favoriteMovies").hide();
      });

//Show and hide cards when the favorites is clicked
   $("body").on("click", "#favoriteLink", function() {
        $("#favoriteMovies").show();
        $("#watchedMovies").hide();
        $("#splashPage").hide();
        $("#unwatchedMovies").hide();
        $("#allMovies").hide();
      });

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
      auth.movieAddedtoAll(title, image);
      auth.movieAddedUnwatched(title, image);
   });

//Watched button
   $("body").on("click", ".watched", function() {
      var title = $(this).attr("title");
      var image = $(this).attr("image");
      auth.movieAdded(title, image);
      
   });


});












