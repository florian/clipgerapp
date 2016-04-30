module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'dist/styles.css': 'styl/styles.styl'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/styles.css': ['styl/magnific-popup.css', 'dist/styles.css']
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/script.js': ['js/magnific-popup.js', 'js/script.js']
        }
      }
    },

    watch: {
      files: ['js/*', 'styl/*'],
      tasks: 'dev'
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7
        },

        files: [{
          expand: true,
          cwd: '.',
          src: ['img/**/*.png'],
          dest: 'dist/'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-imagemin')

  grunt.registerTask('default', 'dev')
  grunt.registerTask('release', 'default')
  grunt.registerTask('dev', ['stylus', 'cssmin', 'uglify'])
  grunt.registerTask('img', 'imagemin')
}
