define(function(require) {
	var ajax = require("ajax");
	var uid = null;


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
		  var uid = authData.uid;
		  console.log("authData", authData);
		  ajax.postToFirebase(authData, newEmail, uid);
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

		 var fbRef = new Firebase("https://movie-history-djs.firebaseio.com/users/" + authData.uid);
     	   console.log("returning", uid);
		   console.log("Authenticated successfully with payload:", authData);
		  } 
		});
		}
	}
});
