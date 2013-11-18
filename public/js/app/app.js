/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 */
var RandMovieApp = {
	Views: {},
	Models: {},
	Collections: {},
	Helpers: {},
	Config: {}
};

/* Template helper */
RandMovieApp.Helpers.template = function (selector) {
	return _.template($('[data-template='+ selector +']').html());
};

// setting underscore delimiters
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};