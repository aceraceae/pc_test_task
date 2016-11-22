const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const source = require("vinyl-source-stream");
const buffer = require('vinyl-buffer');
const browserify = require("browserify");
//const watchify = require("watchify");
const babelify = require("babelify");
//const path = require("path");
//const fs = require("fs");

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

// TASKs
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

// function dev(file) {
// 	const bundler = createBundler(file);
// 	const filename = path.basename(file);
//         if(bundlers.hasOwnProperty(file)) { return; }
//         bundlers[file] = bundler;
//
//         const watcher = watchify(bundler);
//
//         watcher.on("update", () => {
//             console.log("Building...");
//             bundle();
//         });
//
//         watcher.on("time", (buildTime) => {
//             console.log(`Built in: ${buildTime}ms`);
//         });
//
//    	bundle();
//
//     function bundle() {
//         return bundler
//             .bundle()
//             .on("error", error => console.error(error))
//             .pipe(source(filename))
//             .pipe(buffer())
//             .pipe($.sourcemaps.init())
//             .pipe($.sourcemaps.write("."))
//             .pipe(gulp.dest(config.scripts.dest));
//     }
//
// }


function createBundler(file) {
    const bundler = browserify(file, {
        debug: true,
        cache: {}
   });

   bundler.transform(babelify, {presets: ["es2015", "react", "stage-0"], plugins: ["transform-decorators-legacy"]});
   return bundler;
}
