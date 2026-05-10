webfriefav is a textboard.

It was made entirely with vanilla JS, with no libraries; It's hosted using Sinatra, uses bcrypt to manage passwords
and  psql to manage the database of posts.

It follows these principles:
0. Have fun!
* fun things are fun!

1. Every post must be treated the same.
* Theres no distinction between threads and comments, every comment can itself become a new thread inside a thread indefinely.

2. Everything must be generic.
* The individual scripts can be used on other projects with very few modifications.
* Said scripts are used either in the main page or inside threads, again, in friefav, there's no disctiction between the two.

3. Is it really necessary?
* There's no need to implement a library bigger than the whole project just to add some fancy, not important, cosmetic feature.
* Keep the site light, simple and fast.

4. Are images that great?
* As the main purpose of this project is learning, there will be a image support, but, it will be disabled by default.
* Colorful and funny memes will attract a certain kind of user, posting text anonimously, another.

To run it, you will need: `psql`, `ruby` and `bundler`.

1. Create a database with your user as the owner as with the name `posfriefav`.
* You can modify these defaults in the `/services/database.rb`

2. Create a table inside your database with the script provided in `/services/setuptable.sql`
`psql -U $USER -d postfriefav -f /services/setuptable.sql`

3. `bundle install` and then `bundle exec ruby webfriefav`.

There you go! you have your own friefav running on localhost:3002, these parameters are also modifiable, in the main file `/webfriefav.rb`.
