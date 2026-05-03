require 'pg'

def dbowner
owner = %x[echo $USER]
return owner.chomp
end

def db
  PG.connect(dbname: 'postfriefav', user: dbowner())
end
