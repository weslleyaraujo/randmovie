/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: View for all movies
 */

RandMovieApp.Views.Movies = Backbone.View.extend({
	el: '#movie-item',

	initialize: function () {
		var self = this;
		this.collection.fetch().done(function (){
			self.render();
		});
	},

	render: function(){
		this.collection.each(function (model) {
			this.addMovie(model);
		}, this);
	},

	addMovie: function (model) {
		var movie = new RandMovieApp.Views.Movie({
			model: model
		});
		this.$el.html(movie.el);
	},

	success: function () {
		this.render();
	},

	error: function (response) {
		console.log('error', response);
	}
});
