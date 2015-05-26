module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		
		copy: {
      development: {
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
          // duplicate stuff from template grunt file, so it runs the first time the dev runs this
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
          'public/css/main.css': 'template/assets/stylesheets/main.less'
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
          'public/css/main.min.css': 'template/assets/stylesheets/main.less'
        }
      }
    }      
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy:development', 'less:development','less:production']);

};