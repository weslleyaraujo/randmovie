require 'sinatra'
require 'shotgun'

set :public_folder, File.dirname(__FILE__) + '/static'

get '/' do
	'hello'
end