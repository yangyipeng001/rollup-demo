(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var name = "rollup-test";
  var version = "1.0.0";
  var description = "";
  var main = "index.js";
  var directories = {
  	example: "example"
  };
  var scripts = {
  	build: "node_modules/.bin/rollup -c ./build/rollup.config.prod.js",
  	dev: "node_modules/.bin/rollup -w -c ./build/rollup.config.dev.js"
  };
  var keywords = [
  ];
  var author = "";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.17.4",
  	"@babel/polyfill": "^7.12.1",
  	"@babel/preset-env": "^7.16.11",
  	"@rollup/plugin-babel": "^5.3.0",
  	"@rollup/plugin-buble": "^0.21.3",
  	"@rollup/plugin-commonjs": "^21.0.1",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^11.2.1",
  	chalk: "^4.0.0",
  	chokidar: "^3.5.3",
  	koa: "^2.13.4",
  	"koa-compose": "^4.1.0",
  	"koa-static": "^5.0.0",
  	rollup: "^2.67.2",
  	"rollup-plugin-serve": "^1.1.0",
  	"rollup-plugin-uglify": "^6.0.4"
  };
  var dependencies = {
  	jquery: "^3.6.0"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	directories: directories,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  // import demo from './lib/demo';
  var dom = document.getElementById('J_Code');
  var pkgText = JSON.stringify(pkg);
  var showCode = "<code>".concat(pkgText, "</code>");
  dom.innerHTML = showCode;

}));
//# sourceMappingURL=index.js.map
