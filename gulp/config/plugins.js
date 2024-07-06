 import replace from "gulp-replace" // Поиск и замена
 import plumber from "gulp-plumber" // Обработка ошибок
 import notify from "gulp-notify" // Подсказки
 import browsersync from "browser-sync" // Синхронизация браузера
 import newer from "gulp-newer" // Проверка обновления
 import ifPlugin from "gulp-if" // Условие для задачи

 export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer,
    if: ifPlugin,
    browsersync: browsersync
 }