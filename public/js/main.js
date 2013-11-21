var randMovie = (function () {
	'use-strict';
	var _app, _private;

	_private = {
		initialize: function () {
			this.setLevels();
			this.setApp();
		},

		setLevels: function () {
			this.collections = {};
			this.models = {};
			this.views = {};
		},

		setApp: function () {
			this.collections.movies = new RandMovieApp.Collections.Movies();
			this.views.movies = new RandMovieApp.Views.Movies({
				collection: this.collections.movies
			});
		},

	};

	_app = {
		init: function (){
			console.log('init');
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
		},

		bind: function (){
			_private.initialize();
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