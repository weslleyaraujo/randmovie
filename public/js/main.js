var randMovie = (function () {
	'use-strict';
	var _app,
		_private,
		levels = {},
		elements = {};

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
			elements.$blur.removeClass('is-visible');
			elements.$item.removeClass('blur-in').addClass('blur-out');
			levels.collections.movies.fetch();
		}

	};

	_app = {
		init: function (){
			this.dom();
			this.bind();
			return this;
		},

		dom: function (){
			elements.$logo = $('.logo');
			elements.$movieIcon = $('.logo-movie-icon');
			elements.$content = $('.fade-in-content');
			elements.$body = $(document.body);
			elements.$next = $('#next-movie');
			elements.$item = $('#movie-item');
			elements.$blur = $('.blur-effect');
		},

		bind: function (){
			_private.initialize();
			elements.$next.on('click', _private.nextMovie);
		},

		show: function () {
			elements.$body.removeClass('is-overflowed');
			elements.$logo.addClass('is-positioned');
			elements.$movieIcon.addClass('is-visible');
			elements.$content.addClass('is-visible');
		},

		debug: function () {
			return _private;
		},

		movieIn: function () {
			var timer = setTimeout(function () {
				elements.$item.removeClass('blur-out').addClass('blur-in');
				timer = clearTimeout(timer);
			}, 500);
		},

		setBlur: function (imdb_id) {
			var timer = setTimeout(function () {
				elements.$blur.css('backgroundImage', 'url(/static/cover/cover-'+ imdb_id +'.jpg)');
				elements.$blur.addClass('is-visible');
			}, 800);
		}
	};

	return _app;

}());

randMovie.init();