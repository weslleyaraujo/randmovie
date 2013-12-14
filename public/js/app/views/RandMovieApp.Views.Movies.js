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
      Backbone.history.navigate('movie/' + model.get('slug'));
		}, this);
	},

	addMovie: function (model) {
		var movie = new RandMovieApp.Views.Movie({
			model: model
		});
		this.$el.html(movie.el);

		// set blur bg
		randMovie.setBlur(model.get('imdb_id'));

		// show movie
		randMovie.show();
	},

	bind: function () {
		this.collection.on('sync', this.syncHandler, this);
		this.collection.on('error', this.errorHandler, this);
	},

	syncHandler: function () {
		this.render();
		randMovie.movieIn();
	},

	errorHandler: function () {
		this.collection.fetch();
	}
});
