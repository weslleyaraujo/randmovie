/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: Model for one movie
 */

RandMovieApp.Models.Movie = Backbone.Model.extend({
	defaults: {
		'plot_simple' : 'No description :('
	},

	initialize: function () {
	}
});
