requirejs.config({
    baseUrl: '/', 
    paths: {
      'lib/demo': '/dist/index.umd',
    }
});

// requirejs(['../../example/amd/index']);
  
define(function (require) {
    var demo = require('lib/demo');
    demo.init()
});