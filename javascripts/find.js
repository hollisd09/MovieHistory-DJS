var $Form = $('form'), $Container = $('#container');
$Container.hide();
$Form.on('submit', function(p_oEvent){
    var sUrl, sMovie, oData;
    p_oEvent.preventDefault();
sMovie = $Form.find('input').val();
    sUrl = 'http://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus){
            oData = $.parseJSON(p_oXHR.responseText);
            console.log(oData);
            $Container.find('.title').text(oData.Title);
            $Container.find('.plot').text(oData.Plot);
            $Container.find('.poster').html('<img src="' + oData.Poster + '"/>');
            $Container.find('.year').text(oData.Year);
            $Container.show();
        }
    });    
});
