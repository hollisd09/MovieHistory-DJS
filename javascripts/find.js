require(

 ["dependencies", "auth", "ajax", "find"], 
 function(_$_, auth, ajax, find) {

    var $Form = $('#findMovies'), $Container = $('#putMoviesHere');
    $Container.hide();

     $Form.on("click", ".submit", function(p_oEvent){
        var sUrl, sMovie, oData;
        p_oEvent.preventDefault();
        sMovie = $Form.find('.searchByTitle').val();
        sUrl = 'http://www.omdbapi.com/?s=' + sMovie
        
        $.ajax(sUrl, {
            complete: function(p_oXHR, p_sStatus){
                oData = $.parseJSON(p_oXHR.responseText);
                console.log(oData);
                $Container.find('.title').text(oData.Title);
                // $Container.find('.plot').text(oData.Plot);
                $Container.find('.poster').html('<img src="' + oData.Poster + '7c212437"/>');
                // $Container.find('.year').text(oData.Year);
                $Container.show();
            }
        });    
    });
});