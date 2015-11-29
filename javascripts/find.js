require(

 ["dependencies", "auth", "ajax", "populate-dom", "q"], 
 function(_$_, auth, ajax, populateDom, q) {

     var i, j;
     var $Form = $('#navBar'), $Container = $('#allMoviesHere');
     $Container.hide();

     $Form.on("keypress", function(p_oEvent){
        if (event.which == 13 ) {
            var searchUrl, searchMovie, oData, mData, fullText;
            p_oEvent.preventDefault();
            //Pull the value from searchMovies ID and set it to searchMovie
            searchMovie = $Form.find('#searchMovies').val();
            //Set the value of search URL to the URL + whatever is in the searchMovies ID
            searchUrl = 'http://www.omdbapi.com/?s=' + searchMovie;
            //Set the value of the API key
            movieKey = '&apikey=7c212437';

            var firstXHR = function() {
                var deferred = q.defer();
            //Make the AJAX call of the particular movie
                $.ajax(searchUrl, {
                    complete: function(param1){
            //Parse the JSON into Objects and return the data as a string with responseText
                        oData = $.parseJSON(param1.responseText);
                        $Container.show();

            //Look through all the Objects
                        for (i = 0; i < oData.Search.length; i++) {
            //Set a variable for imdbID. The imdbID is used in locating the poster. 
                            var imdbID = oData.Search[i]["imdbID"];
                            var fullText = 'http://www.omdbapi.com/?i=' + imdbID + "&r=json";

                            if (oData.Search[i]["Poster"] === "N/A") {
                                console.log("Not Available");
                            } else {

                                oData.Search[i].actualImage = 'http://img.omdbapi.com/?i=' + imdbID + movieKey;
                                console.log("oData search i", oData.Search[i]);
                                populateDom.postToFindMovies(oData.Search[i])
                            } //End of Else

                        } //End of For/Loop
                    } //End of complete func
            }).then(function(secondXHR) {
                deferred.resolve(secondXHR);
                }).fail(function(xhr, status, error) {
                deferred.reject(error);
                });
            return deferred.promise;
        }; //End of firstXHR

        var secondXHR = function() {
            var deferred = q.defer();
  //Nested AJAX to grab the Actors list. Promises should be used if more information is requested.
            $.ajax(fullText, {
                complete: function(param2){
    //Parse the JSON into Objects and return the data as a string with responseText
                    mData = $.parseJSON(param2.responseText);
                    $Container.show();
                    populateDom.postToFindMovies(mData)
                    console.log("mData", mData);
                }
        }).done(function(data) {
        deferred.resolve(data);
        }).fail(function(xhr, status, error) {
        deferred.reject(error);
        });
    return deferred.promise;
};


firstXHR()
  .then(function (data1) {
    return secondXHR(data1);
  })

secondXHR()
  .then(function (data2) {
    return;
  })
  .done();


        } //End of If
    }) //End of Keypress
});

