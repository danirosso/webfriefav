require_relative 'database.rb'

def getPost(params)
  page = params['page'].to_i
  id = params['id'].to_i
  postArray = []
  offset = page * 10

  if id == 0 
    postBunch = db.exec_params("SELECT id, title, post FROM posts ORDER BY id DESC LIMIT 10 OFFSET #{offset}")
  else
    postBunch = db.exec_params("SELECT id, title, post FROM posts WHERE id=#{id}")
  end

  postBunch.each do |post|
  postArray << post
  end 
  puts id
  puts page
  puts params

  return postArray
end
