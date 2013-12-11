/*
 *	Rand Movie App 0.0.1
 *	github.com/weslleyaraujo
 *	Note: Collection for movies
 */

RandMovieApp.Collections.Movies = Backbone.Collection.extend({
	url: '/api/movie',
	model: RandMovieApp.Models.Movie
});
