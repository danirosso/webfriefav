require 'bcrypt'
require 'pg'
require_relative 'database.rb'

def addPost(post)
  post['password'] = BCrypt::Password.create(post['password'])
  db.exec_params("INSERT INTO posts (title, post, hash) VALUES ($1, $2, $3)", [post['title'], post['post'], post['password']])
  return {allGood: true}
end
