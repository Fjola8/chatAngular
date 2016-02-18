var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   jshint = require('gulp-jshint');

gulp.task('minify', function () {
   return gulp.src('src/**/*.js')
    //  .pipe(uglify())
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('jshint', function() {
	return gulp.src(['src/**/*.js'])
	    .pipe(jshint({
	    	"curly":  true,
		    "immed":  true,
		    "newcap": true,
		    "noarg":  true,
		    "sub":    true,
		    "boss":   true,
		    "eqnull": true,
		    "node":   true,
		    "undef":  true,
		    "globals": {
			    "_":       false,
			    "jQuery":  false,
			    "angular": false,
			    "moment":  false,
			    "console": false,
			    "$":       false,
			    "io":      false
		  	}
	    }))
});