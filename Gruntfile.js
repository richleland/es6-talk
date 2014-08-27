module.exports = function(grunt) {
  grunt.initConfig({
    traceur: {
      options: {
        experimental: true
      },
      custom: {
        files: [{
          expand: true,
          cwd: 'js',
          src: ['*.js'],
          dest: 'transpiled'
        }]
      }
    },

    concat: {
      custom: {
        files: {
          'build/app.js': ['transpiled/**/*.js']
        }
      }
    },

    watch: {
      source: {
        files: 'js/**/*.js',
        tasks: ['traceur', 'concat'],
      },
      compiled: {
        files: 'build/**/*.js',
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-traceur-latest');

  grunt.registerTask('default', ['traceur', 'concat', 'watch']);
};