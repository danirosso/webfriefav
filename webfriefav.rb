require 'sinatra'
require 'sinatra/json'
set :port, 3002
Dir["./services/*.rb"].each do |service|
  require service
end

get '/' do
  erb :index
end

get '/addpost' do
  erb :addpost
end

post '/api/addpost' do
  post = JSON.parse(request.body.read)
  returned = addPost(post)
  puts returned
  returned.to_json
end

get '/api/postlist' do
  returned = getPost(params)
  puts returned
  returned.to_json
end

delete '/api/deletepost' do
  passwordobj = JSON.parse(request.body.read)
  returned = deletePost(passwordobj)
  puts returned
  returned.to_json
end
