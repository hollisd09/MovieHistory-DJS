require.config({
 baseUrl: "./javascripts",
 paths: {
   "jquery": "../lib/bower_components/jquery/dist/jquery.min",
   "firebase": "../lib/bower_components/firebase/firebase",
   "lodash": "../lib/bower_components/lodash/lodash.min",
   "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
   "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
   "q": "../lib/bower_components/q/q"
 },
 shim: {
   "bootstrap": ["jquery"],
   "firebase": {
     exports: "Firebase"
   }
 }
});


require(
 ["dependencies", "auth"], 
 function(​dependencies, auth) {
 	
 	createNewUser : function(newEmail, newPassword) {
		var ref = new Firebase("https://movie-history-djs.firebaseio.com/");
		ref.authWithPassword({
		  email    : newEmail, 
		  password : newPassword
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	}
}


