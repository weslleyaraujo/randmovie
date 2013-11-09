var randMovie = (function () {
	var _app, _private;

	_app = {
		show: function () {
			this.$logo.addClass('is-positioned');
			this.$movieIcon.addClass('is-visible');
			this.$content.removeClass('is-hidden').addClass('is-visible');
		},

		init: function (){
			this.dom();
			this.bind();
			return this;
		},

		dom: function (){
			this.$logo = $('.logo');
			this.$movieIcon = $('.logo-movie-icon');
			this.$content = $('.fade-in-content');
		},

		bind: function (){

		}
	};

	return _app;

}());

randMovie.init();
setInterval( function () {
	randMovie.show();
}, 3000 );