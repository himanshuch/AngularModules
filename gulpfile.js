var gulp=require('gulp'),
    gulputil= require('gulp-util');
	gulpconcat=require('gulp-concat');

var jsSources=[
'js/controllers/Ctrl1.js',
'js/controllers/Ctrl2.js'
]	
gulp.task('default', function() {
  // place code for your default task here
});
gulputil.log("Gulp in progress~outside");
gulp.task('log',function(){
	gulputil.log("Gulp in progress~inside");
});

gulp.task('js',function(){
	gulp.src(jsSources)
	.pipe(gulpconcat('script.js'))
	.pipe(gulp.dest('builds/development/js'))
});
