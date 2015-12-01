define(function(require){
  return {
    allMovies: require("hbs!../templates/all-movies"),
    favorites: require("hbs!../templates/favorites"),
    splashPage: require("hbs!../templates/splash-page"),
    unwatchedMovies: require("hbs!../templates/unwatched-movies"), 
    watchedMovies: require("hbs!../templates/watched-movies")
  };
});