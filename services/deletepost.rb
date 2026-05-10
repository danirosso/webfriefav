require 'bcrypt'
require 'pg'
require_relative 'database.rb'

def deletePost(passwordobj)

  fatherid = passwordobj['id'].to_i
  password = passwordobj['password']
  checkhash = db.exec_params("SELECT hash FROM posts WHERE id=#{fatherid}")
  posthash = ""

  checkhash.each do |hash|
    posthash = hash['hash']
  end

  posthash = BCrypt::Password.new(posthash)

  if posthash == password
    puts "correct!"
    idarray = [fatherid]
    childnum = 1

    loop do
      break if childnum == 0
      idarray.each do |father|
        father = db.exec_params("SELECT id FROM posts WHERE tag=#{father}")
        childnum = father.ntuples
        father.each do |child|
          idarray << child['id'].to_i
        end
      end 

      idarray.each do |id|
        id = db.exec_params("DELETE FROM posts WHERE id=#{id}")
      end

    end

    return {"allGood" => false}
  else
    return{"allGood" =>  false}
  end
end
