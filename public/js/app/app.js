/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 */
var RandMovieApp = {
	Views: {},
	Models: {},
	Collections: {},
	Helpers: {},
	Config: {},
	Routes: {
    initialized: false
  }
};

// Template helper
RandMovieApp.Helpers.template = function (selector) {
	return _.template($('[data-template='+ selector +']').html());
};

// Extend Backbone events using underscore as a helper for that :D
RandMovieApp.Helpers.events = _.extend({}, Backbone.Events);

// setting underscore delimiters
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};

// Defines App routes
RandMovieApp.Routes = Backbone.Router.extend({
  routes : {
    '' : 'index',
    'movie/:movie': 'movie'
  },

  index: function () {
    RandMovieApp.Helpers.events.trigger('index');
  },

  movie: function (movie) {
    console.log(movie);
    RandMovieApp.Helpers.events.trigger('movie');
  },

  default: function () {
    console.log('áeaeaeae');
    RandMovieApp.Helpers.events.trigger('index');
  }
});

