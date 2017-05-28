'use strict';

const gulp = require('gulp');
const path = require('path');
const paths = require('../paths');
const $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('clean', [
    'clean:build'
]);

gulp.task('clean:build', [
    'clean:src:src',
    'clean:src:map',
    'clean:test:src',
    'clean:test:map'
]);

gulp.task('clean:src:src', () => cleaner(paths.src, 'js'));
gulp.task('clean:src:map', () => cleaner(paths.src, 'map'));
gulp.task('clean:test:src', () => cleaner(paths.test, 'js'));
gulp.task('clean:test:map', () => cleaner(paths.test, 'map'));

function cleaner(filePath, ext) {
    let source = '';
    if (ext) {
        source = path.join(filePath, '/**/*.' + ext);
    } else {
        source = path.join(filePath);
    }
    return gulp
        .src(source, {
            read: false
        })
        .pipe($.clean());
}
