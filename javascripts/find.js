require(

 ["dependencies", "auth", "ajax", "populate-dom"], 
 function(_$_, auth, ajax, populateDom) {

    var allResults = {};
    var i, j;
    var $Form = $('#navBar'), $Container = $('#allMoviesHere');
    $Container.hide();

     $Form.on("keypress", function(p_oEvent){
        if (event.which == 13 ) {
            console.log("ENTERED");
            var sUrl, sMovie, oData;
            p_oEvent.preventDefault();
            sMovie = $Form.find('#searchMovies').val();
            sUrl = 'http://www.omdbapi.com/?s=' + sMovie
        
            $.ajax(sUrl, {
                complete: function(p_oXHR, p_sStatus){
                    oData = $.parseJSON(p_oXHR.responseText);
                    console.log(oData);
                    $Container.find('.title').text(oData.Title);
                    $Container.show();

                for (i = 0; i < oData.Search.length; i++) {
                    var something = oData.Search[i]["imdbID"];
                    if (oData.Search[i]["Poster"] === "N/A") {
                        console.log("Not Available");
                    } else {
                        oData.Search[i].actualImage = 'http://img.omdbapi.com/?i=' + something + '&apikey=7c212437';
                        populateDom.postToFindMovies(oData.Search[i])
                        // $Container.find('.poster').html();
                    }

                }
              }
            });
        }
    })
});
