require_relative 'database.rb'
require_relative 'getnumcomments.rb'

def getPost(params)
  page = params['page'].to_i
  id = params['id'].to_i
  commentnum = 0;
  postArray = []
  offset = page * 10
  offsetchild = page * 6

  if id == 0 
    postBunch = db.exec_params("SELECT id, title, post FROM posts WHERE tag=#{id} ORDER BY id DESC LIMIT 10 OFFSET #{offset}")
  else
  postBunch = db.exec_params("SELECT id, title, post FROM posts WHERE id=#{id} OR tag=#{id} LIMIT 6 OFFSET #{offsetchild}")
  end

  postBunch.each do |post|
    #puts "post each: #{post}"
    post ['commentnum'] = getNumComments(post['id'])
    #puts "post each after the commentnum #{post}\n" 
  postArray << post
  end

  #puts "number of comments: #{getNumComments(id)}"
  #puts "id : #{id}"
  #puts "page : #{page}"
  #puts "params: #{params}"
  return postArray
end
