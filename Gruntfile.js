module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
		copy: {
      production: {
  	    files: [
          // rails files
  	      {
            cwd: 'bower_components/rails-template/template',        
  					src: 'layouts/**',
  					dest: 'app/views',
            flatten: false,
            expand: true
  				},
  	      {
            cwd: 'bower_components/rails-template/template/config',            
  					src: '**',
  					dest: 'config',
            flatten: false,
            expand: true
  				},
  	      {
            cwd: 'bower_components/rails-template/template',            
  					src: 'controllers/**',
  					dest: 'app',
            flatten: false,
            expand: true
  				},
  	      {
            cwd: 'bower_components/rails-template/template',     
  					src: 'views/**',
  					dest: 'app',
            flatten: false,
            expand: true
  				},
          // assets - copy these because we want to remind the developer to use bower / grunt for assets
          // it's also the best place to store custom sass files for rails
		      {
            cwd: 'bower_components/rails-template/template/assets',     
  					src: ['stylesheets/**', 'javascripts/**'],
  					dest: 'app/assets',
            flatten: false,
            expand: true
					},
          // copy the template grunt file, as this one is a one off
		      {
  					src: 'bower_components/rails-template/template/Gruntfile.js',
  					dest: './',
            flatten: true,
            expand: true,
            filter: 'isFile'
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
					}
        ]
      }
		},
    
    uglify: {
      development: {
        options: {
          mangle: false,
          beautify: true
        },
        files: {
          'public/js/main.js': ['bower_components/jquery/src/jquery.js', 
                                'bower_components/jquery-ujs/src/rails.js',
                                'bower_components/bootstrap/dist/js/bootstrap.js',
                                'app/assets/javascripts/main.js'
                               ]
        }
      },
      production: {
        options: {
          mangle: true,
          beautify: false
        },
        files: {
          'public/js/main.min.js': ['bower_components/jquery/src/jquery.js', 
                                    'bower_components/jquery-ujs/src/rails.js',
                                    'bower_components/bootstrap/dist/js/bootstrap.js',
                                    'app/assets/javascripts/main.js'
                                   ]
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
  grunt.registerTask('default', ['copy:production', 'less:development','less:production', 'uglify:development', 'uglify:production']);
};