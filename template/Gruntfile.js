module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
    copy: {
      production: {   
        files: [           
          // fonts
		      {
						expand: true,
						flatten: true,
						src: [
              'bower_components/bootstrap/dist/fonts/*', // glyphicons
              'bower_components/font-awesome/fonts/*' // font awesome icons
            ],
						dest: 'public/fonts/'
					}
  	    ]
      }
		},
    
    concat: {
      options: {
        separator: ';\n',
      },
      production: {
        src: ['bower_components/jquery/dist/jquery.js', 
              'bower_components/jquery-ujs/src/rails.js',
              'bower_components/bootstrap/dist/js/bootstrap.js',
              'app/assets/javascripts/main.js'],
        dest: 'public/js/main.js'
      },
    },
    
    uglify: {
      production: {
        options: {
          mangle: true,
          beautify: false,
          compress: true
        },
        files: {
          'public/js/main.min.js': 'public/js/main.js'
        }        
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
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.registerTask('default', ['copy:production', 'less:development','less:production', 'concat:production', 'uglify:production']);
};