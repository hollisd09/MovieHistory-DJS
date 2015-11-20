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
 ["dependencies", "auth", "post"], 
 function(_$_, auth, post) {
 	
 	$("#signup").on("click", function(){
 		var newEmail = $("#emailInput").val();
 		var newPassword= $("#passwordInput").val();
 		auth.createNewUser(newEmail, newPassword);
 	});

 	$("#login").on("click", function(){
 		var userEmail = $("#emailInput").val();
 		var userPassword= $("#passwordInput").val();
 		
 		auth.loginUser(userEmail, userPassword);

 		console.log(" Email ", userEmail);
 		console.log(" Password ", userPassword);

 	});

 	var newUser;

})










