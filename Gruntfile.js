/*
 * grunt-filerev-apply
 * https://github.com/ianwremmel/grunt-filerev-apply
 *
 * Copyright (c) 2013 Ian W. Remmel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);
};
