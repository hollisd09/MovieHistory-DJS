define(function(require) {
	var ajax = require("ajax");
	var q = require("q");
	var uid = null;
	var find = require("find");
	var populateDom = require("populate-dom");


	var toUpdateUserInfo = function(){
		var myFirebaseRef = new Firebase("https://movie-history-djs.firebaseio.com/users/" + uid);
	    // Listen for when anything changes on the "users" key
	  	myFirebaseRef.on("value", function(snapshot) {
	  	console.log("snapshot", snapshot);
	    // Store the entire user-uid key in a local variable
	  	var updatedUserInfo = snapshot.val();
	  	console.log("updatedUserInfo", updatedUserInfo);

	  	//This is populating watched, unwatched, and favorites form hbs
	  	populateDom.postToUnwatchedMovies(updatedUserInfo.unwatched);
	  	populateDom.postToWatchedMovies(updatedUserInfo.watched);
	  	populateDom.postToFavoriteMovies(updatedUserInfo.favorites);
	  	
	  	return updatedUserInfo;

	  	});
	}

 return {
 	newUserInfo: toUpdateUserInfo,

 	createNewUser : function(newEmail, newPassword) {
		var ref = new Firebase("https://movie-history-djs.firebaseio.com/");
		ref.createUser({
		  email    : newEmail, 
		  password : newPassword
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		  uid = authData.uid;
		  authData.email = newEmail;
		  var url = "https://movie-history-djs.firebaseio.com/users/" + uid
		  var ref2 = new Firebase(url)
		  console.log("authData", authData);
		  ref2.set(authData);
		  
		  } 
		});
	},

	loginUser: function(userEmail, userPassword) {
		var ref = new Firebase("https://movie-history-djs.firebaseio.com/");
		ref.authWithPassword({
			email   : userEmail,
			password: userPassword
		}, function(error, authData) {

		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		  	uid = authData.uid;

			var fbRef = new Firebase("https://movie-history-djs.firebaseio.com/users/" + authData.uid);
	     	console.log("returning", uid);
			console.log("Authenticated successfully with payload:", authData);
			
			updatedUserInfo = toUpdateUserInfo();
  			console.log("updatedUserInfo", updatedUserInfo);
		  } 
		});
	},


	movieAddedUnwatched: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image
	        					   });
    },

    movieAddedFavorites: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/favorites/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image,
	        					   });
    },

    movieAddedtoAll: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/all/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image
	        					   });
    },    

    movieAddedtoWatched: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/watched/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image
	        					   });
    },    

    deleteMovie: function(title) {
    	var removeMovieRef = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/all/' + title);
		var removeMovieRefW = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/watched/' + title);
		var removeMovieRefU = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
		var removeMovieRefF = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/favorites/' + title);
			var onComplete = function(error) {
			  if (error) {
			    console.log('Synchronization failed');
			  } else {
			    console.log('Synchronization succeeded');
			  }
			};
			removeMovieRefU.remove(onComplete);
			removeMovieRefW.remove(onComplete);
			removeMovieRefF.remove(onComplete);
			removeMovieRef.remove(onComplete);
    },

    movieIsWatched : function (title) {
    	var removeMovieRefU = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
    	var onComplete = function(error) {
			  if (error) {
			    console.log('Synchronization failed');
			  } else {
			    console.log('Deleted from watched!');
			  }
			};
			removeMovieRefU.remove(onComplete);
		
    }
  };
});
