var randMovie = (function () {
	'use-strict';
	var _app,
		_private,
		levels = {};

	_private = {
		initialize: function () {
			this.setLevels();
			this.setApp();
		},

		setLevels: function () {
			levels.collections = {};
			levels.models = {};
			levels.views = {};
		},

		setApp: function () {
			levels.collections.movies = new RandMovieApp.Collections.Movies();
			levels.views.movies = new RandMovieApp.Views.Movies({
				collection: levels.collections.movies
			});
		},

		nextMovie: function (event) {
			event.preventDefault();
			levels.collections.movies.fetch();
		}

	};

	_app = {
		init: function (){
			// make sure window is on top
			window.scrollTo(0);

			this.dom();
			this.bind();
			return this;
		},

		dom: function (){
			this.$logo = $('.logo');
			this.$movieIcon = $('.logo-movie-icon');
			this.$content = $('.fade-in-content');
			this.$body = $(document.body);
			this.$next = $('#next-movie');
		},

		bind: function (){
			_private.initialize();
			this.$next.on('click', _private.nextMovie);
		},

		show: function () {
			this.$body.removeClass('is-overflowed');
			this.$logo.addClass('is-positioned');
			this.$movieIcon.addClass('is-visible');
			this.$content.addClass('is-visible');
		},

		debug: function () {
			return _private;
		}
	};

	return _app;

}());

randMovie.init();