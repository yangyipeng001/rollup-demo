(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('lib/demo', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Demo = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function demo() {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(function () {
          var obj1 = {
            a: 1
          };
          var obj2 = {
            b: 2
          };
          var obj3 = {
            c: 3
          };
          var obj4 = {
            d: 4
          };

          var result = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, obj1), obj2), obj3), obj4);

          resolve(result);
        }, 1000);
      } catch (err) {
        reject(err);
      }
    });
  }

  var index = {
    init: function init() {
      var arr1 = [1, 2, 3];
      var arr2 = [4, 5, 6];
      console.log([].concat(arr1, arr2));

      function initDemo() {
        return _initDemo.apply(this, arguments);
      }

      function _initDemo() {
        _initDemo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return demo();

                case 2:
                  data = _context.sent;
                  console.log(data);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _initDemo.apply(this, arguments);
      }

      initDemo();
    }
  };

  return index;

}));
//# sourceMappingURL=index.umd.js.map
