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
 ["dependencies", "auth", "ajax", "find", "populate-dom", "stars"], 
 function(_$_, auth, ajax, find, populateDom, stars) {
 	
//When you click signup
 	$("#signup").on("click", function(){
//Pull the information from the inputs
 		var newEmail = $("#emailInput").val();
 		var newPassword= $("#passwordInput").val();
//Use auth.js createNewUser passing in newEmail and newPassword as parameters
 		auth.createNewUser(newEmail, newPassword);

//Show and hide relevant IDs
    $("#navBar").show();
    $("#allMovies").show();
    $("#unwatchedMovies").hide();
    $("#splashPage").hide();
    $("#watchedMovies").hide();
    $("#favoriteMovies").hide();
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

    $("#navBar").show();
    $("#allMovies").show();
    $("#pageLinks").show();
    $("#unwatchedMovies").hide();
    $("#splashPage").hide();
    $("#watchedMovies").hide();
    $("#favoriteMovies").hide();
      

 	});


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
});












