/*
 * grunt-filerev-apply
 *
 *
 * Copyright (c) 2013 Ian W. Remmel
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function (grunt) {

  grunt.registerMultiTask('filerev_apply', 'Applies the filename changes in grunt.filerev.summary', function () {
  // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      prefix: '',
      unixfy: false,
    });

    var summary = {};
    _.each(grunt.filerev.summary, function (value, key) {
      summary[applyPathOptions(key)] = applyPathOptions(value);
    });

    function applyPathOptions(value) {
      var result = options.unixfy ? value.replace(/\\/g, '/') : value; // change backslash to single slash (unixfy)
        if (options.prefix)
          if (options.prefix instanceof Array) {
            options.prefix.forEach(function (element) {
              result = result.replace(pathPattern(element), ''); // remove slashes at beginning
            });
          }
          else {
            result = result.replace(pathPattern(options.prefix), '');
          }
        return result;
      }

    function pathPattern(content) { return new RegExp('^\/?' + content + '\/?'); };

    var pattern = new RegExp('(' + _.keys(summary).join(')|(') + ')', 'gi');

    var replacer = function (match, offset) {
      // If no replacement is defined for the match, simply return the match
      return summary[match] || match;
    };

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      var contents = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        return grunt.file.read(filepath);
      }).join('');

      var revved = contents.replace(pattern, replacer);
      grunt.file.write(file.dest, revved);
    });
  });
};
