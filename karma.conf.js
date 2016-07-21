// Karma configuration
// Generated on Wed Jul 20 2016 11:28:18 GMT-0300 (ART)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-typescript-preprocessor')
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false },
      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'node_modules/@angular/**/*.js', included: false, served: true },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false, served: true },


      { pattern: 'dist/**/*.js', included: false, watched: true },
      { pattern: 'src/**/*.spec.ts', included: false, watched: true },

      { pattern: 'karma-test-shim.js', included: true, watched: true }
    ],
    // files: [


    //   // Distribution folder.
    //   { pattern: 'dist/**/*', included: false, watched: true }
    // ],
    // exclude: [
    //   // Vendor packages might include spec files. We don't want to use those.
    //   'dist/vendor/**/*.spec.js'
    // ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.spec.ts': ['typescript']
    },

    typescriptPreprocessor: {
       // options: require('./tsconfig.json').compilerOptions,
       options: {
         sourceMap: false, // (optional) Generates corresponding .map file.
         target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
         module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
         noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
         noResolve: true, // (optional) Skip resolution and preprocessing.
         removeComments: true, // (optional) Do not emit comments to output.
         concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
       },
       typings: [
           "typings/index.d.ts"
       ],
       transformPath: function(path) {
         return path.replace(/\.ts$/, '.js');
       }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
