module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		watch: {
			options:{
				livereload: true,
			},
			css: {
				files: ['app/static/css/index.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true,
					spawn: false
				}
			},
			html: {
				files: [
                    'app/index.jade', 
                    'app/views/products.jade',
                    'app/views/review.jade',
                    'app/views/success.jade'

                ],
				tasks: ['jade'],
				options: {
					livereload: true,
					spawn: false
				}
			}
		},

		stylus: {
			options: {
				compress: true
			},
			compile: {
				files: {
					'public/dist/css/project.min.css' : 'app/static/css/*.styl'
				}
			}
		},

		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
                    'index.html' : 'app/index.jade',
                    'products.html' : 'app/views/products.jade',
                    'review.html' : 'app/views/review.jade',
                    'success.html' : 'app/views/success.jade'
				}
			}
		},

		connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 8800
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect', 'stylus', 'jade', 'watch']);

};
