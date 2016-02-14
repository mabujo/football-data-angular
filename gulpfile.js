// ## Globals
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var flatten      = require('gulp-flatten');
var gulp         = require('gulp');
var jshint       = require('gulp-jshint');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var ngAnnotate 	 = require('gulp-ng-annotate');
var sourcemaps   = require('gulp-sourcemaps');
var cssnano 	 = require('gulp-cssnano');

gulp.task('sass', function () {
  	return gulp.src('app/css/sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'nested', // libsass doesn't support expanded yet
        precision: 10,
        includePaths: ['.'],
        errLogToConsole: true
      }))
    .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
    .pipe(cssnano())
    .pipe(gulp.dest('app/dist/css/'));
});

gulp.task('angular', function () {
  gulp.src(['node_modules/angular/angular.js',
  			'node_modules/angular-aria/angular-aria.js',
  			'node_modules/angular-animate/angular-animate.js',
  			'node_modules/angular-material/angular-material.js',
  			'node_modules/angular-material-data-table/dist/md-data-table.js',
  			'node_modules/angular-resource/angular-resource.js',
  			'node_modules/angular-route/angular-route.js'
  			])
	    .pipe(concat('app/dist/js/angular.js'))
	    .pipe(ngAnnotate())
	    .pipe(uglify())
	.pipe(gulp.dest('.'))
})

gulp.task('js', function () {
  gulp.src(['app/js/**/module.js', 'app/js/**/*.js'])
	.pipe(sourcemaps.init())
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
	    .pipe(concat('app/dist/js/main.js'))
	    .pipe(ngAnnotate())
	    .pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('.'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/css/sass/**/*.scss', ['sass']);
})