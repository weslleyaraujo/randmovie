/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: View for all movies
 */

RandMovieApp.Views.Movies = Backbone.View.extend({
	el: '#movie-item',

	initialize: function () {
		var self = this;
		this.bind();
		this.collection.fetch();
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
		randMovie.show();
	},

	success: function () {
		this.render();
	},

	error: function (response) {
		// dont forget to deal with errors :)
		console.log('error', response);
	},

	bind: function () {
		this.collection.on('sync', this.syncHandler, this);
	},

	syncHandler: function () {
		this.render();
	}
});
