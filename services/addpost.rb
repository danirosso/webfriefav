require 'bcrypt'
require 'pg'
require_relative 'database.rb'

def addPost(post)
  post['password'] = BCrypt::Password.create(post['password'])
  if post['tag'] == nil
    post['tag'] = 0
  end
  puts "posted on tag :  #{post['tag']}"
  id = 0
  db.exec_params("INSERT INTO posts (title, post, hash, tag) VALUES ($1, $2, $3, $4)", [post['title'], post['post'], post['password'], post['tag']])
  db.exec_params("SELECT id FROM posts ORDER BY id DESC LIMIT 1").each  do |row|
    id = row['id'].to_i
  end
  puts "created id: #{id}"
  return {
    allGood: true,
    id: id}
end
