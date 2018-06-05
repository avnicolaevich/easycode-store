const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const minifycss = require("gulp-cssmin");
const tinypng = require("gulp-tinypng");

gulp.task("css", function(){
	return gulp.src("src/css/**/*.css")
		.pipe(autoprefixer({
			browsers: ["cover 99.5%", "iOS 7"]
		}))
		.pipe(gulp.dest("app/css/"));
});

gulp.task("cssmin", function(){
	return gulp.src("app/css/style.css")
		.pipe(minifycss())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("app/css/"));
})

gulp.task("tinypng", function(){
	return gulp.src(["src/img/*.png", "src/img/*.jpg"])
		.pipe(tinypng("API KEY"))
		.pipe(gulp.dest("app/img/"));
})

gulp.task("watch", ["css", "cssmin"], function(){
	gulp.watch("src/css/**/*.css", ["css"]);
	gulp.watch("app/css/style.css", ["cssmin"]);
});

// Tiny png get api key!
// Dillinger.io online generator md files