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

