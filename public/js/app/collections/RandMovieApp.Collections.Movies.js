/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: Collection for movies
 */

RandMovieApp.Collections.Movies = Backbone.Collection.extend({
	url: 'http://mymovieapi.com/?type=json&q=a&limit=10&offset=0',

	initialize: function(attribute){
		this.fetchHandler();
	},

	fetchHandler: function () {
		this.fetch();
	}
});