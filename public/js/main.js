var randMovie = (function () {
	'use-strict';
	var _app,
		_private,
		levels = {},
		elements = {};

	_private = {
		initialize: function () {
			_private.setLevels();
      _private.bindRoutes();
      _private.setRoutes();
		},

		setLevels: function () {
			levels.collections = {};
			levels.models = {};
			levels.views = {};
		},

    setRoutes: function() {
      new RandMovieApp.Routes();
      Backbone.history.start({
        pushstate: true
      });
    },

		setApp: function () {
			levels.collections.movies = new RandMovieApp.Collections.Movies();
			levels.views.movies = new RandMovieApp.Views.Movies({
				collection: levels.collections.movies,
        slug: RandMovieApp.Routes.slug
			});
		},

		nextMovie: function (event) {
			event.preventDefault();
			elements.$blur.removeClass('is-visible');
			elements.$item.removeClass('blur-in').addClass('blur-out');
      setTimeout(function () {
        levels.collections.movies.fetch();
      }, 300);
		},

    bindRoutes: function() {
     RandMovieApp.Helpers.events.on('index', _private.indexHandler);
     RandMovieApp.Helpers.events.on('movie', _private.movieHandler);
    },

    indexHandler: function () {
      // reload the page if index is called again from displayed movie
      if (RandMovieApp.Routes.initialized) {
        window.location.reload();
      }
			_private.setApp();
    },

    movieHandler: function () {
      if (!RandMovieApp.Routes.initialized) {
        _private.setApp();
      }
      else {
        levels.collections.movies.fetch({
          data: {
            slug: RandMovieApp.Routes.slug
          },
          type: 'POST'
        });
      }
      _app.show();
    },

    setInitialized: function () {
      RandMovieApp.Routes.initialized = true;
    }
	};

	_app = {
		init: function (){
			_app.dom();
			_app.bind();
			return _app;
		},

		dom: function (){
			elements.$logo = $('.logo');
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
      elements.$content.removeClass('is-hidden');
      elements.$logo.fadeIn(function () {
        elements.$logo.addClass('is-positioned');
        elements.$content.addClass('is-visible');
        _private.setInitialized();
      });
		},


		movieIn: function () {
			var timer = setTimeout(function () {
				elements.$item.removeClass('blur-out').addClass('blur-in');
				timer = clearTimeout(timer);
			}, 500);
		},

		setBlur: function (imdb_id) {
			var timer = setTimeout(function () {
				elements.image = new Image();
				elements.image.src = '/static/cover/cover-blur-'+ imdb_id +'.jpg';
				elements.image.onload = function () {
					elements.$blur.css('backgroundImage', 'url('+ elements.image.src +')');
					elements.$blur.addClass('is-visible');
				};
			}, 800);
		}
	};

	return _app;

}());

$(window).load(function() {
  randMovie.init();
});
