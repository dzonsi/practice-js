var gulp = require("gulp");

gulp.task("hello", function(done) {// gulp automatically passes a callback function
	console.log("Hello Nikola");
	done();// calling callback function when we are done to awoid error
});
// gulp install gulp-imagemin --save-dev
var imagemin = require("gulp-imagemin");

gulp.task("imagemin", function(done) {
	var img_src = "src/images/**/*", img_dest = "build/images";

	gulp.src(img_src)
	.pipe(imagemin())
	.pipe(gulp.dest(img_dest));

	done();
});
// npm install gulp-minify-css --save-dev
// npm install gulp-autoprefixer --save-dev
// npm install gulp-concat --save-dev
var autoprefix = require("gulp-autoprefixer");
var minifyCSS = require("gulp-minify-css");
var concat = require("gulp-concat");

gulp.task("styles", function(done) {

	gulp.src(["src/styles/*.css"])
	.pipe(concat("style.css"))
	.pipe(autoprefix("last 2 versions"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("build/styles/"));

	done();
});
// runing multiple tasks
// skroz je promenjen nacin definisanja zadataka
function first(cb) {
	var img_src = "src/images/**/*", img_dest = "build/images";

	gulp.src(img_src)
	.pipe(imagemin())
	.pipe(gulp.dest(img_dest));

	cb();
}
exports.first = first;// napravljen task

function second(cb) {
	gulp.src(["src/styles/*.css"])
	.pipe(concat("style.css"))
	.pipe(autoprefix("last 2 versions"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("build/styles/"));

	cb();
}
exports.second = second;

const { series } = require("gulp");
exports.buildAll = series(first, second);// buildAll naziv zadatka
// watch
const { watch } = require("gulp");
watch(["src/styles/*.css"], function(cb) {

	gulp.src(["src/styles/*.css"])
	.pipe(concat("style.css"))
	.pipe(autoprefix("last 2 versions"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("build/styles/"));

	cb();
});
