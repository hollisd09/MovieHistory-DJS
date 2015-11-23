define(function(require){
  var q = require("q");

return{
  postToFirebase: function(userInfo, newEmail, uid) {
    userInfo.newEmail = newEmail;
    var deferred = q.defer();
    $.ajax({
      url: "https://movie-history-djs.firebaseio.com/users.json",
      method: "POST",
      data:JSON.stringify(userInfo)
    })
    .done(function(userInfo){ 
      console.log("Post done!");
      deferred.resolve(userInfo);
    })
    .fail(function(xhr, status, error){
      console.log("FLAIL!");
      deferred.reject(error);
    }); 
    
    } // Closes postToFirebase

//Finish getLogin function
  
// var userID = userInfo.id;

  //Closes out login
  };
});
