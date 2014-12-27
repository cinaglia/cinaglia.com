module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      'src': 'src',
      'dist': 'dist',
    },

    watch: {
      styles: {
        files: ['<%= config.src %>/css/**/*.css'],
        tasks: ['default']
      }
    },

    cssmin: {
      target: {
        files: {
          '<%= config.dist %>/css/app.min.css': '<%= config.src %>/**/*.css'
        }
      }
    },

    copy: {
      files: {
        cwd: '<%= config.src %>',
        src: ['**/*', '!**/css/**'],
        dest: '<%= config.dist %>',
        expand: true
      }
    },

    rsync: {
      options: {
        args: ['--verbose'],
        recursive: true
      },
      production: {
        options: {
          src: '<%= config.dist %>/*',
          dest: '/var/www/cinaglia.com/public_html/',
          host: 'victor@cinaglia.com',
          delete: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('default', ['copy', 'cssmin']);
  grunt.registerTask('deploy', ['default', 'rsync']);

};

