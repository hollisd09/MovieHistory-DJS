require.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min', 
    'stars': '../lib/bower_components/bootstrap-star-rating/js/star-rating.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'stars': ['bootstrap'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
 ["dependencies", "auth", "ajax", "find", "populate-dom", "stars", "show-and-hide", "click-events", "buttons"], 
 function(_$_, auth, ajax, find, populateDom, stars, showAndHide, clickEvents, buttons) {
 	
});












