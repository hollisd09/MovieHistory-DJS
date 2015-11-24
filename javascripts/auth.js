define(function(require) {
	var ajax = require("ajax");
	var uid = null;
	var find = require("find");


 return {
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
		  // ajax.postToFirebase(authData, newEmail, uid);
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
		  } 
		});
	},

	toUpdateUserInfo: function(updatedUserInfo){
		var myFirebaseRef = new Firebase("https://movie-history-djs.firebaseio.com/users/" + uid + "/");
	    // Listen for when anything changes on the "songs" key
	  	myFirebaseRef.on("value", function(snapshot) {
	    // Store the entire songs key in a local variable
	  	var updatedUserInfo = snapshot.val();

	  	console.log("updatedUserUnwatched!!", updatedUserInfo.unwatched);
	  	});
	  },
	  
	movieAdded: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/unwatched/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image
	        					   });
		    // We've appended a new message to the message_list location.
	    	// var path = userAddedPoster.toString();
	       // path will be something like
           // 'https://movie-history-djs.firebaseio.com/users-favorites'
    },

    movieAddedUnwatched: function(title, image) {
		var userClickedAdd = new Firebase('https://movie-history-djs.firebaseio.com/users/' + uid + '/favorites/' + title);
      
	        userClickedAdd.set({
	        					  	title: title,
	        					  	poster: image
	        					   });
    }  
  };
});
