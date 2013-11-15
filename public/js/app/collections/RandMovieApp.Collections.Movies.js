/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: Collection for movies
 */

RandMovieApp.Collections.Movies = Backbone.Collection.extend({
	url: '/api/get',
	model: RandMovieApp.Models.Movie,
	initialize: function(){
		this.fetch();
	}
});