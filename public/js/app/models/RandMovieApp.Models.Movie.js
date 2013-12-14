/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: Model for one movie
 */

RandMovieApp.Models.Movie = Backbone.Model.extend({
	defaults: {
		'plot_simple' : 'No description :(',
		'is_small': ''
	},

	initialize: function () {
		this.titleLenght();
    randMovie.setTitle(this);
	},

	titleLenght: function () {
		var title = this.get('title');
		if (title.length >= 40) {
			this.set('is_small', 'is-small');
		}
	}
})
