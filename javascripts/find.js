// require(

//  ["dependencies", "auth", "ajax", "populate-dom", "q"], 
//  function(_$_, auth, ajax, populateDom, q) {

//      var i, j;
//      var $Form = $('#navBar'), $Container = $('#allMoviesHere');
//      $Container.hide();

//      $Form.on("keypress", function(p_oEvent){
//         if (event.which == 13 ) {
//             var searchUrl, searchMovie, oData, mData, fullText;
//             //Pull the value from searchMovies ID and set it to searchMovie
//             searchMovie = $Form.find('#searchMovies').val();
//             //Set the value of search URL to the URL + whatever is in the searchMovies ID
//             searchUrl = 'http://www.omdbapi.com/?s=' + searchMovie;
//             //Set the value of the API key
//             movieKey = '&apikey=7c212437';

//             var firstXHR = function(param1) {
//                 var deferred = q.defer();
//             //Make the AJAX call of the particular movie
//                 $.ajax(searchUrl, {
//                     dataType : 'json',
//                     complete: function(param1){
//             //Parse the JSON into Objects and return the data as a string with responseText
//                         oData = $.parseJSON(param1.responseText);
//                         $Container.show();

//             //Look through all the Objects
//                         for (i = 0; i < oData.Search.length; i++) {
//             //Set a variable for imdbID. The imdbID is used in locating the poster. 
//                             var imdbID = oData.Search[i]["imdbID"];
//                             var fullText = 'http://www.omdbapi.com/?i=' + imdbID + "&r=json";

//                             if (oData.Search[i]["Poster"] === "N/A") {
//                                 console.log("Not Available");
//                             } else {

//                                 oData.Search[i].actualImage = 'http://img.omdbapi.com/?i=' + imdbID + movieKey;
//                                 populateDom.postToFindMovies(oData.Search[i])
//                             } //End of Else

//                         } //End of For/Loop
//                     } //End of complete func
//             }).then(function(secondXHR) {
//                 deferred.resolve(secondXHR);
//                 }).fail(function(xhr, status, error) {
//                 deferred.reject(error);
//                 });
//             return deferred.promise;
//         }; //End of firstXHR

//         var secondXHR = function(param2) {
//             var deferred = q.defer();
//             $.ajax(fullText, {
//                 complete: function(param2){
//     //Parse the JSON into Objects and return the data as a string with responseText
//                     mData = $.parseJSON(param2.responseText);
//                     $Container.show();
//                     populateDom.postToFindMovies(mData)
//                     console.log("mData", mData);
//                 }
//         }).done(function(data) {
//         deferred.resolve(data);
//         }).fail(function(xhr, status, error) {
//         deferred.reject(error);
//         });
//     return deferred.promise;
// };


// $.when(firstXHR, secondXHR).done(function() {
//     firstXHR();
//     secondXHR();
//     console.log("firstXHR", firstXHR);
// });



//         } //End of If
//     }) //End of Keypress
// });


require(

 ["dependencies", "auth", "ajax", "populate-dom", "q"], 
 function(_$_, auth, ajax, populateDom, Q) {

     // var $Form = $('#navBar'), $Container = $('#allMoviesHere');
      $('allMoviesHere').hide();
        $('#navBar').on("keypress", function(){
            if (event.which == 13 ) {
                var searchUrl, searchMovie, oData, mData, fullText, movieKey;
                var moviesFromApi = [];
                var searchMovie = $('#navBar').find('#searchMovies').val()
                var searchUrl = 'http://www.omdbapi.com/?s=' + searchMovie;
                var movieKey = '&apikey=7c212437';


                var omdbAPICall = function(){
                    var deferred = Q.defer();

                    $.ajax({
                        url: searchUrl
                    }).done(function(data){
                        deferred.resolve(data);
                    }).fail(function(xhr, status, error){
                        deferred.reject(error);
                    });

                    return deferred.promise;
                };


                omdbAPICall().then(function(movies){
                    movies.Search.forEach(function(movie) {
                        movie.fullOmdbUrl = 'http://www.omdbapi.com/?i=' + movie.imdbID + "&r=json";
                        movie.actualImage = 'http://img.omdbapi.com/?i=' + movie.imdbID + movieKey;
                        moviesFromApi.push(movie);

                        $.ajax({
                            url: movie.fullOmdbUrl
                        }).done(function(data) {
                            movie.Details = data;
                            console.log(data);
                        })

                        console.log(movie);
                        populateDom.postToFindMovies(movie);

                    });
                });

        };
    })
});

