// karma-conf.js
module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'angular-rd-dnd.js',
      'test/*.js'
    ],
    frameworks: ['jasmine'],
    autoWatch: false,
    browsers: ['Chrome']
  });
};