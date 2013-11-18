/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: View for one movie
 */

RandMovieApp.Views.Movie = Backbone.View.extend({
	template: RandMovieApp.Helpers.template("movie"),

	className: 'movie-description',

	initialize: function () {
		this.render();
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});
