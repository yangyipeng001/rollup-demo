// import demo from './lib/demo';

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = [...arr1, ...arr2];
// console.log(result);

// // es6
// async function initDemo () {
//     let data = await demo();
//     console.log(data);
// }

// initDemo();



// 文件类型-amd
// import hello from './lib/hello';
// import world from './lib/world';

// export default {
//   init() {
//     const arr1 = [1,2,3];
//     const arr2 = [4,5,6];
//     console.log([...arr1, ...arr2]);

//     hello.init();
//     world.init();
//   }
// }



// 文件类型 - cjs
// import demo from './lib/demo';
// async function initDemo () {
//     let data = await demo();
//     console.log(data);
// }

// export default { 
//     init() {
//         initDemo()
//     }
// }


// 文件类型-IIFT
// import demo from './lib/demo';
// export default {
//     init() {
//         const arr1 = [1,2,3];
//         const arr2 = [4,5,6];
//         console.log([...arr1, ...arr2]);

//         async function initDemo () {
//             let data = await demo();
//             console.log(data);
//         }

//         initDemo();
//     }
// }


// node模块引用
// import $ from 'jquery';

// const text = 'this is append dom';
// const dom = `<p>${text}</p>`;

// $('body').append(dom);

// console.log('render end!')



// json文件引用
// import pkg from '../package.json';
// const dom = document.getElementById('J_Code');
// const pkgText = JSON.stringify(pkg);
// const showCode = `<code>${pkgText}</code>`;
// dom.innerHTML = showCode;


// css 编译
// import './css/index.css';
// import './css/index.scss';
import './css/index.less'
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);



