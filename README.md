## Welcome to the rails template
This project is a bower package, which can be included into any rails app, in order to copy standard files across when starting a new project.

Before we start, we need to install some development dependencies, if your already setup for this, skip past this next section.

## Dependencies
### Node.js (npm)
```
brew install node
```
### Initialize Node
```
npm init
* Press enter until the end *
```
### Grunt CLI
```
npm install -g grunt-cli
```
### Bower
```
npm install -g bower
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

## Install this bower package in your app
```
bower install https://github.com/neilwilliams/rails-template.git#master --save
```

## Run the package, to create the standard files
This assumes that your default bower directory is at the root of your application.
```
grunt --gruntfile bower_components/rails-template/Gruntfile.js --base ./
```

Your all set! Run your app and you should see it has been setup for you. You will also have your own Gruntfile.js, setup to work with how this has been setup.