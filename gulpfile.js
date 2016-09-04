/**
 * Fichier gulpfile.js
 * @file gulpfile.js : Tâches Gulp du projet (demo).
 * @namespace gulpfile
 * @author Alexandre HARDOUIN
 */

var gulp = require('gulp');
var connect = require('gulp-connect');
var exec = require('child_process').exec;

/**
 * Tâche default : sert l'application en local sur le port 8080
 * @function Tâche gulp default
 * @memberof gulpfile
 */
gulp.task('default', ['connect'], function() {

});


/**
 * Tâche connect : sert l'application à l'adresse localhost:8080
 * @function Tâche gulp connect
 * @memberof gulpfile
 */
gulp.task('connect', function() {
  connect.server({
    livereload: false
  });
});

/**
 * Tâche connect:watch : sert l'application à l'adresse localhost:8080
 * et reload l'application si modification des fichiers html, css et js
 * @function Tâche gulp connect:watch
 * @memberof gulpfile
 */
gulp.task('connect:watch', ['watch'], function() {
  connect.server({
    livereload: true
  });
});

/**
 * Tâche watch : ecoute les modifications des fichiers html, css et js
 * @function Tâche gulp watch
 * @memberof gulpfile
 */
gulp.task('watch', function () {
  gulp.watch(['./demo/**/*.html', 'index.html'], ['html']);
  gulp.watch(['./demo/style/*.css'], ['css']);
  gulp.watch(['./demo/*.js', 'angular-rd-dnd.js'], ['js']);
});

/**
 * Tâche html : reload des fichiers html
 * @function Tâche gulp html
 * @memberof gulpfile
 */
gulp.task('html', function () {
  gulp.src(['./demo/**/*.html', 'index.html'])
    .pipe(connect.reload());
});

/**
 * Tâche js : reload des fichiers js
 * @function Tâche gulp js
 * @memberof gulpfile
 */
gulp.task('js', function () {
  gulp.src(['./demo/*.js', 'angular-rd-dnd.js'])
    .pipe(connect.reload());
});

/**
 * Tâche css : reload des fichiers css
 * @function Tâche gulp css
 * @memberof gulpfile
 */
gulp.task('css', function () {
  gulp.src('./demo/style/*.css')
    .pipe(connect.reload());
});

/**
 * Tâches test : run test with karma
 */
gulp.task("test", function () {
	exec('karma start karma-conf.js --single-run', function(error, stdout, stderr) {
		if (error) {
		    console.error(error);
		    return;
		  }
		  console.log(stdout);
		  console.log(stderr);
	});
});

