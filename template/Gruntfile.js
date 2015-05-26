module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
    copy: {
      development: {
  	    files: [    
          // we're going to put in the public directory, as ideally, we want to avoid rails' built in asset management, and stick to using bower / grunt for all asset requirements.
          // css
		      {
						expand: true,
						flatten: true,
						src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css', // Bootstrap
              'bower_components/bootstrap/dist/css/bootstrap-theme.min.css', // Bootstrap Theme
              'bower_components/font-awesome/css/font-awesome.min.css' // font awesome
            ],
						dest: 'public/css/'
					},        
      
          // fonts
		      {
						expand: true,
						flatten: true,
						src: [
              'bower_components/bootstrap/dist/fonts/*', // glyphicons
              'bower_components/font-awesome/fonts/*' // font awesome icons
            ],
						dest: 'public/fonts/'
					},
      
          // js
		      {
						expand: true,
						flatten: true,
						src: [
              'bower_components/jquery/dist/jquery.min.js', // Jquery
              'bower_components/bootstrap/dist/js/bootstrap.min.js' // Bootstrap
            ],
						dest: 'public/js/'
					}
  	    ]
      }
		},
    
    less: {
      development: {
        options: {
          compress: false,
          paths: [
            "bower_components/bootstrap/less",
            "bower_components/font-awesome/less"
          ]
        },
        files: {
          'public/css/main.css': 'app/assets/stylesheets/main.less'
        }
      },
      production: {
        options: {
          compress: true,          
          paths: [
            "bower_components/bootstrap/less",
            "bower_components/font-awesome/less"
          ]
        },
        files: {
          'public/css/main.min.css': 'app/assets/stylesheets/main.less'
        }
      }
    }         
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy:development', 'less:development','less:production']);

};