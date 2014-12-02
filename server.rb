require 'sinatra'

get '/' do
	response['Access-Control-Allow-Origin'] = '*'
	Time.now.to_s
end