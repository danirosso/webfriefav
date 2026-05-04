def getNumComments(id)
 comments = 0 
 postBunch = db.exec_params("SELECT id FROM posts WHERE tag=#{id}")
 postBunch.each do
   comments += 1
 end
 return comments
end
