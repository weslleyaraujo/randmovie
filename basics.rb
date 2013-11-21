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
  serve '/images',  from: 'public/images'
  serve '/static/cover',	from: 'static/cover'


  js :app, [
    '/js/app/app.js',
    '/js/app/models/*.js',
    '/js/app/collections/*.js',
    '/js/app/views/*.js',
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

def get_movie(count)
  return settings.mongo_db['movies'].find({ type: 'M' }).limit(-1).skip(rand(count)).next_document()
end

get '/api/get' do
  content_type 'text/json'
  countdb = settings.mongo_db['movies'].count()
  while (movie = get_movie(countdb)) do
    return movie.to_json
  end
end

get '/' do
	erb :index
end