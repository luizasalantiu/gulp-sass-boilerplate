Boilerplate for creating projects that require js bundling and minification and sass/scss compilation to css. Does the following:

* Lints `src/scripts/*.js`
* Compiles a `*.js` and `*.min.js` version of the `src/scripts/*.js` files
* Compiles a `*.css` and `*.min.css` version of the `src/styles/*.scss` files
* Cleans the `dist` directory each time the files are compiled
* Includes css reset
* Runs autoprefixer

##### How to run
* `npm install`
* `gulp` to compile assets
* `gulp watch` to detect changes and recompile assets

##### Dependencies

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `npm install -g gulp`