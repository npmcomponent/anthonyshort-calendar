module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      jshintrc: '.jshintrc'
    },
    lint: {
      files: ['grunt.js', 'index.js']
    },
    watch: {
      files: ['grunt.js', 'index.js'],
      tasks: 'test'
    },
    mocha: {
      index: ['test/index.html']
    },
    component: {
      output: 'build/'
    }
  });

  grunt.registerTask('test', 'mocha');
  grunt.registerTask('build', 'component');
  grunt.registerTask('default', 'build');
  grunt.loadNpmTasks('grunt-mocha');
};
