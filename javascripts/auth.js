define(function(require) {
	var post = require("post");
	var uid = null;
 return {
   getUid: function() {
     console.log("returning", uid);
     return uid;
   },
   setUid: function(newId) {
     console.log("setting user id to ", newId);
     uid = newId;
   },

	 	createNewUser : function(newEmail) {
			var ref = new Firebase("https://movie-history-djs.firebaseio.com/");
			ref.createUser({
			  email    : newEmail, 
			  password : newPassword
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {

			    console.log("Authenticated successfully with payload:", authData);
			   post.postToFirebase(authData, newEmail);

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
			   console.log("Authenticated successfully with payload:", authData);
			   post.postToFirebase(authData, newEmail);
			  } 
			});

		}
	}
});
