const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync', function(){

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.html', 'css/*.css', 'js/*.js']).on('change',browserSync.reload);

})