require(

 ["dependencies", "auth", "ajax", "populate-dom", "q"], 
 function(_$_, auth, ajax, populateDom, Q) {

      $('allMoviesHere').hide();
        $('#navBar').on("keypress", function(){
            if (event.which == 13 ) {
                var searchUrl, searchMovie, oData, mData, fullText, movieKey;
                var moviesFromApi = [];
                var searchMovie = $('#navBar').find('#searchMovies').val()
                var searchUrl = 'http://www.omdbapi.com/?s=' + searchMovie;
                var movieKey = '&apikey=7c212437';

                function FBsearch(fbData, apiData) {
                    var fdbMov;
                    console.log("fbData",fbData)

                    for (key in fbData.all){
                        if(key.toLowerCase() === searchMovie.toLowerCase()){
                            fdbMov = fbData.all[key]
                            break;
                        }
                    } //Loop ends

                    if (fdbMov === undefined) {
                        populateDom.postToFindMovies(apiData);
                    
                        return "Finished";
                    }

                    compare(fdbMov);

                    function compare(mvi){
                        console.log("CompareRUNS", mvi);
                        var end;
                        var count = 1;
                       if (mvi.title.toLowerCase()!== apiData.Title.toLowerCase()){
                            end = apiData;
                        } else {
                            end = mvi;
                        }//End If
                        
                        console.log("end", end);
                        populateDom.postToWatchedMovies(end);                   
                    }
                };

                var omdbAPICall = function(){
                    var deferred = Q.defer();

                    $.ajax({
                        url: searchUrl
                    }).done(function(data){ 
                        console.log("Done happens");
                        deferred.resolve(data);
                    }).fail(function(xhr, status, error){
                        console.log("Fail happens");
                        deferred.reject(error);
                    });

                    return deferred.promise;
                };


                omdbAPICall()
                .then(function (data){
                    var defer = Q.defer();
                    var result = {Search:[]};
                    var count = 0;
                    var length = data.Search.length;

                    data.Search.forEach(function(item) {
                        $.ajax({
                            url: 'http://www.omdbapi.com/?i=' + item.imdbID
                        }).done(function(fullItem){
                            result.Search.push(fullItem);
                            count++;

                            if (count === length){
                                defer.resolve(result)
                            }
                        })
                    });
                    return defer.promise;
                })
                .then(function(movies){ 
                    console.log("movies", movies);
                    movies.Search.forEach(function(movie) {

                      // Record results
                        var title = movie.Title;
                        var year = movie.Year;
                        var actors = movie.Actors;
                        var imdbID = movie.imdbID;
                        var actorsArray = actors.split(", ");

                      //Flash results to FB
                        // build object to push to FB from data 
                        var objectforFB = {
                          'Title': title,
                          'Year': year,
                          'imdbID': imdbID,
                          'actors': actorsArray,
                          'watched': false,
                          'rating': 0
                        };



                        objectforFB.fullOmdbUrl = 'http://www.omdbapi.com/?i=' + movie.imdbID + "&r=json";
                        objectforFB.poster = 'http://img.omdbapi.com/?i=' + movie.imdbID + movieKey;

                        moviesFromApi.push(objectforFB);



                        auth.getFirebaseMovies(FBsearch, objectforFB);


                    })
                    
                })
                .fail(function (err) {
                    var error = new Error(err);
                    console.log('error', error);
                    // throw new UserException(err);
                });

        };
    })
});

