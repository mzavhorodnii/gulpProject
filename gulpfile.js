// Основной модуль
import gulp from "gulp"
// Импорт путей
import { path } from "./gulp/config/path.js"
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js"

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js" 
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { ttfToWoff, ttfToWoff2, fontsStyle } from "./gulp/tasks/fonts.js"
import { zip } from './gulp/tasks/zip.js';
import { svg } from "./gulp/tasks/svg.js"

function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.svgicons, svg)
}

const fonts = gulp.series( ttfToWoff, ttfToWoff2, fontsStyle)

const mainTasks = gulp.series(gulp.parallel(copy, html, scss, js, images, svg), fonts)

// Построение сценариев
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }

// Сценарий по умолчанию 
gulp.task('default', dev)