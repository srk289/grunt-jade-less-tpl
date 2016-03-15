module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
		  	server:{
		    	options: {
		      		livereload: true,
		      		open: {

		      		}
		    	}
		  	}
		},
		less: {
		  options: {
		    paths: 'assets/',
		    yuicompress: false,
		    ieCompat: true,
		    require: [
		        'css/main.less'
		    ]
		  },
		  src: {
		      expand: true,
		      cwd: 'assets/',
		      src: [
		          'css/*.less'
		      ],
		      ext: '.css',
		      dest: 'assets/'
		  }
		},
		copy: {
		  main: {
		    files: [
		        // includes files within path
		        {
		          expand: true, 
		          cwd: 'bower_components/font-awesome/css/',
		          src: 'font-awesome.min.css',
		          dest: 'assets/css/vendor/font-awesome/',
		          filter: 'isFile'
		        },
		        {
		        	expand: true,
		        	cwd: 'bower_components/font-awesome/',
		        	src: 'fonts/*',
		        	dest: 'assets/css/vendor/',
		        	filter: 'isFile'
		        },
		        {
		          expand: true, 
		          cwd: 'bower_components/bootstrap/dist/css/',
		          src: ['bootstrap.min.css'],
		          dest: 'assets/css/vendor/bootstrap/',
		          filter: 'isFile'
		        }
		      ]
		    }
		},
		wiredep: {
		  target: {
		    src: 'jade/partials/scripts.jade' // point to your HTML file.
		  }
		},
		watch: {
			options: {
			    livereload: true
	  		},
			css: {
	            files: ['assets/css/*.less', 'assets/css/**/*.less'],
	            tasks: 'less'
        	},
	        js: {
	          	files: ['assets/js/*.js', 'assets/js/**/*.js']
        	},
	        jade: {
	            files: ['**/*.jade'],
	        	tasks: ['jade']
        	},

	        views: {
	        	files: '**/*.html'
        	}
		},
		jade: {
		  	compile: {
		    	options: {
		    		pretty: true,
		      		data: {}
		    	},
		    files: [{
		      	expand: true,
		      	cwd: 'jade/',
		      	src: '*.jade',
		      	ext: '.html',
		      	dest: './'
		    }]
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.registerTask('dev', ['connect', 'copy', 'wiredep', 'jade', 'less', 'watch']);
	grunt.registerTask('prod', ['copy', 'wiredep', 'jade', 'less', 'watch']);

};