var gulp = require('gulp'),
  browserSync = require('browser-sync').create();


function serve() {
	browserSync.init({
		server: {
			baseDir: './src'
		},
    browser: 'firefox',
    open: false
	})
}

gulp.watch([
	'./src/*.html',
	'./src/*.css',
	'./src/*.js'
]).on('change', browserSync.reload);

exports.default = serve;