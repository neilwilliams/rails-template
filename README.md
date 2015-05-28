## Welcome to the rails template
This project is a bower package, which can be included into any rails app, in order to copy standard files across when starting a new project. The idea is that the project will grow to include templates for other types of applications too.

## Step 1 - Create a new rails app
If your not familiar with Ruby on Rails, check out the [install rails](http://installrails.com/) site to get setup.

Once your setup, create yor new app. The following command creates a new app called 'myApp', but turns off the asset pipeline, and removes turbolinks.

```
rails new myApp --skip-sprockets --skip-turbolinks
```

## Step 2 - Dependencies
This section can be skipped if you're already setup with NodeJs, Grunt and Bower.
### Node.js (npm)
```
brew install node
```
### Grunt CLI
```
npm install -g grunt-cli
```
### Bower
```
npm install -g bower
```

## Step 3 - Initialise and Install project dependencies
### Initialize Node
```
npm init
* Press enter until the end *
```
### Grunt
```
npm install grunt --save
```

### Grunt-contrib-less
```
npm install grunt-contrib-less --save
```

### Grunt-contrib-uglify
```
npm install grunt-contrib-uglify --save
```

### Grunt-contrib-copy
```
npm install grunt-contrib-copy --save
```

## Step 4 - Install this bower package in your app
```
bower install https://github.com/neilwilliams/rails-template.git#master --save
```

## Step 5 - Run the package, to create the standard files
This assumes that your default bower directory is at the root of your application.
```
grunt --gruntfile bower_components/rails-template/Gruntfile.js --base ./
```

## Step 6 - Tweak rails config
### Setup locales
* Remove the en.yml file from config/locales
* Add the following to you application.rb config file:  
```
config.i18n.load_path += Dir[Rails.root.join('config', 'locales', 'english', '*.{rb,yml}').to_s]
```
There maybe something similar in there already, commented out. You can overwrite the existing line if it exists.

### Gems
You'll need to add the sass-rails gem, in order to use the built in rails js stuff (application.js), without using the pipeline.
Open your Gemfile and add the following:
```
gem 'sass-rails'
```
The correct version based on your version of rails should install. However, once it has installed, sure to lock it down tpo the version installed afterwards:
```
gem 'sass-rails', '~> x.x.x'
```

Your all set! Run your app and you should see it has been setup for you. You will also have your own Gruntfile.js so you can run 'Grunt' to generate any modifications you make to your assets.
