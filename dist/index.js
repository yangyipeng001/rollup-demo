(function () {
  'use strict';

  // function demo() {
  //     return new Promise((resolve, reject) => {
  //         try {
  //             setTimeout(()=>{
  //                 const obj1 = {a: 1};
  //                 const obj2 = {b: 2};
  //                 const obj3 = {c:3};
  //                 const obj4 = {d:4};

  //                 const result = {...obj1, ...obj2, ...obj3, ...obj4};
                  
  //                 resolve(result);
  //             }, 1000)
  //         } catch (err) {
  //             reject(err);
  //         }
  //     })
  // }

  // export default demo;



  // 插件开发
  var demo = {
      init: function init() {
          console.log('[001]: I am rollup.js!!');
          console.log('[002]: I am rollup.js!!');
          console.log('[003]: I am rollup.js!!');
      }
  };

  // import demo from './lib/demo';

  var arr1 = [1,2,3];
  var arr2 = [4,5,6];
  console.log(arr1.concat( arr2));

  demo.init();

})();
//# sourceMappingURL=index.js.map
