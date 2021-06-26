module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'https://cdn.jsdelivr.net/npm/vue',
      'dist/umd.js',
      { pattern: 'test/**/*spec.js', watched: false },
    ],
    exclude: [],
    preprocessors: {
      'test/**/*spec.js': ['rollup'],
    },
    rollupPreprocessor: {
      plugins: [require('@rollup/plugin-buble')()],
      output: {
        format: 'iife',
        name: 'FormatInput',
        sourcemap: 'inline',
      },
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
