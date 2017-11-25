module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "../static/styles/css/style.css": "../static/styles/less/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['../static/styles/less/style.less', '../../index.html'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};