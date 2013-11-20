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
		this.setTitle();
	},

	setTitle: function () {
		var title = $.trim(this.get('title'));
		if (title.indexOf('"') != -1) {
			title = title.split('"');
			console.log(title);
			this.set('title', title[1] || '');
		}
	}
});
