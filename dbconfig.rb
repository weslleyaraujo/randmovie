# mongo settings
include Mongo

# mongo config
configure do
	conect = Mongo::Connection.new
	set :mongo_connection, conect
	set :mongo_db, conect.db('randmovie')
end

def get_movie(count)
  return settings.mongo_db['movies'].find({ type: 'M', has_image: 1 }).limit(-1).skip(rand(count)).next_document()
end
