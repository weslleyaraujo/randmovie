require 'sinatra'
require 'shotgun'
require 'mongo'
require 'json/ext'

include Mongo

# mongo config
configure do
	conect = Mongo::Connection.new
	set :mongo_connection, conect
	set :mongo_db, conect.db('randmovie')
end

get '/api/get/*' do
	params['captures'].delete('')
	if params['captures'].empty?
		countdb = settings.mongo_db['movies'].count()
		movie = settings.mongo_db['movies'].find().limit(-1).skip(rand(countdb)).next_document()
		movie.to_json
	else
		'search for ' + params['captures'].first.to_s
	end
end

get '/' do
	erb :index
end