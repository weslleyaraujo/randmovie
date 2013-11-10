var randMovie = (function () {
	var _app, _private;

	_private = {
		initialize: function () {
			this.collections = {};
		},

		setCollections: function () {
			this.collections.movies = new RandMovieApp.Collections.Movies();
		},

		randLetter: function () {
			var chars = "abcdefghijklmnopqurstuvwxyz",
			notOk = true,
			actual = "";
			while(notOk) {
				actual = chars.substr( Math.floor(Math.random() * 62), 1);
				if (!_.isEmpty(actual)) {
					notOk = false;
					return actual;
				}
			}
		},

		randNumb: function () {
			return Math.floor(Math.random()*11);
		},

		apiSearch: function () {
			return [RandMovieApp.Config.apiUrl, '?',
				RandMovieApp.Config.apiQuery,
				this.randLetter(), '&',
				RandMovieApp.Config.apiType, '&',
				RandMovieApp.Config.apitLimit,
				this.randNumb(), '&',
				RandMovieApp.Config.apiOffset,
				this.randNumb()
			].join('');
		},

		getMovie: function () {
			var that = this;
			$.ajax({
				url: that.apiSearch()
			}).done(function (response) {
				that.responseMovie(response);
			}).fail(function (response) {
				console.log('errorHandler', response);
			});
		},

		responseMovie: function (response) {
			console.log(response);
		}
	};

	_app = {
		init: function (){
			_private.initialize();
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
			_private.setCollections();
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
setInterval( function () {
	randMovie.show();
}, 3000 );