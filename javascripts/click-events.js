define(function(require) {
	var $ = require("jquery");
    var auth = require("auth");


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
    $("#pageLinks").show();
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



});

