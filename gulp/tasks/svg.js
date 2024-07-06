export const svg = () => {
    return app.gulp.src(app.path.src.svgicons, { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(app.path.build.svgicons))
        .pipe(app.plugins.browsersync.stream());
}
