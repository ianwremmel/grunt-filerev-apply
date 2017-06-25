# grunt-filerev-apply

[![Greenkeeper badge](https://badges.greenkeeper.io/ianwremmel/grunt-filerev-apply.svg)](https://greenkeeper.io/)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

> Replaces paths to unrevved files with the output of grunt-filerev.

There are a large number of grunt plugins for either revving files or replacing the references to the those files with their revved paths, but, other than grunt-usemin (which has its own batch of complications), no plugin seemed to do an adequate job of either replacing such references, or explaining how to do so.

## Dependencies

This plugin can only replace references for files revved by grunt-filerev.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-filerev-apply --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-filerev-apply');
```

## The "filerev_apply" task

### Overview
In your project's Gruntfile, add a section named `filerev_apply` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  filerev_apply: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      files: [
        // The files to search for unrevved asset paths to replace with their revved counterparts. If the path is anything other than `.`, you'll need to specify `options.prefix` as explained below.
      ]
    },
  },
})
```

### Options

#### options.prefix
Type: `String`
Default value: `''`

The string to strip from the beginning of each found revved file before search for it in the specified files. `options.prefix` will likely be used in the majority of cases.

### Usage Examples

#### Default Options

In this example, the default options are used to replace asset references in `index.html` in the home directory.

In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  filerev_apply: {
    files: {
      'index.html': 'index.html'
    },
  },
})
```

#### Custom Options
In this example, all built assets have been placed in the `dist` directory and we want to search all files that might reference them.

```js
grunt.initConfig({
  filerev_apply: {
    options: {
      prefix: 'dist'
    },
    files: [
      {
        expand: true,
        cwd: 'dist',
        src: ['**/*.{html,js,css}'],
        dest: 'dist'
      }
    ]
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Ian W. Remmel. Licensed under the MIT license.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ianwremmel/grunt-filerev-apply/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
