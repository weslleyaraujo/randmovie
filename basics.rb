require 'sinatra'
require 'shotgun'
require 'mongo'
require 'json/ext'
require 'sinatra/base'
require 'sinatra/assetpack'

include Mongo

set :root, File.dirname(__FILE__)

register Sinatra::AssetPack

assets {
  serve '/js',	from: 'public/js'
  serve '/css',	from: 'public/css'
  serve '/img',	from: 'public/img'

  js :app, [
    '/js/app/app.js',
    '/js/app/*/*.js',
    '/js/main.js'
  ]

  js :vendor, [
  	'js/vendor/jquery-1.10.2.min.js',
  	'js/plugins.js'
  ]

  css :application, [
    '/css/base/*.css',
    '/css/main.css'
  ]

  js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
  css_compression :simple   # :simple | :sass | :yui | :sqwish
}

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