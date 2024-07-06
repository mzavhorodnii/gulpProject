import webp from 'gulp-webp';

export const images = () => {
    return app.gulp.src(app.path.src.images, { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(
            app.plugins.if(
                app.isBuild,
            webp({
            quality: 70
        })))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream())
}
