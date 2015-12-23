module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      my_target: {
        files: {
          'src/CookiebarGone.safariextension/cookiebar-gone.min.js': ['src/scripts/main_data.js', 'src/scripts/main_logic.js']
        }
      }
    },

    fileExists: {
      safariextension: ['dist/CookiebarGone.safariextz','dist/CookiebarGone-updates.plist']
    },

		copy: {
  		main: {
				files: [
					{expand: true,cwd: 'src/web/',src: '**',dest: 'dist/'}
				]

  		},
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: '**/*'
		},

	});

  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-file-exists');
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.registerTask('build',['uglify']);
  grunt.registerTask('deploy', ['copy','fileExists','gh-pages']);

};
