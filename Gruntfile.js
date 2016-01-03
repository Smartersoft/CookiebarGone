module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        compress: {
          drop_console: true
        },
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - https://smartersoft.github.io/CookiebarGone/ */',
      },
      safari: {
        files: {
          'src/CookiebarGone.safariextension/cookiebar-gone.min.js': ['src/scripts/main_data.js', 'src/scripts/main_logic.js']
        }
      }
    },

    fileExists: {
      safariextension: ['dist/CookiebarGone.safariextz', 'dist/CookiebarGone-updates.plist']
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/web/',
          src: '**',
          dest: 'dist/'
        }]

      },
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: '**/*'
    },

    multiresize: {
      Safari: {
        src: 'src/misc/logo-cookie.png',
        dest: [
          'src/CookiebarGone.safariextension/Icon.png',
          'src/CookiebarGone.safariextension/Icon-32.png',
          'src/CookiebarGone.safariextension/Icon-48.png',
          'src/CookiebarGone.safariextension/Icon-64.png',
          'src/CookiebarGone.safariextension/Icon-96.png',
          'src/CookiebarGone.safariextension/Icon-128.png',

        ],
        destSizes: ['32x32', '32x32', '48x48', '64x64', '96x96', '128x128']
      },
      SafariStore: {
        src: 'src/misc/logo-cookie.png',
        dest: ['src/misc/icon-256.png'],
        destSizes: ['256x256']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'package.json', 'src/scripts/*.js']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-file-exists');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-multiresize');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('deploy', ['copy', 'fileExists', 'gh-pages']);

};
