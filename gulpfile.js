const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const source = require("vinyl-source-stream");
const buffer = require('vinyl-buffer');
const browserify = require("browserify");
const babelify = require("babelify");

// CONFIG
const config = {
    scripts: {
        src: "./src/**/*.js",
        entry: "src/app.js",
        source: "app.js",
        dest: "./public/scripts",
        bundle: ["app.js"]
    }
}

// TASKS
gulp.task("dev:scripts", scripts);

function scripts() {
   return createBundler(config.scripts.entry)
          .bundle()
          .on("error", error => console.error(error))
          .pipe(source(config.scripts.source))
          .pipe(buffer())
          .pipe(gulp.dest(config.scripts.dest));
}

// HELPER FUNCTIONS
const bundlers = {};


function createBundler(file) {
    const bundler = browserify(file, {
        debug: true,
        cache: {}
   });

   bundler.transform(babelify, {presets: ["es2015", "react", "stage-0"], plugins: ["transform-decorators-legacy"]});
   return bundler;
}
