const path = require('path');
const fs = require('fs')
const serve = require('rollup-plugin-serve');
// const config = require('./rollup.config');
const configList = require('./rollup.config');
const resolveFile = require('./resolveFile')
const emptyDir = require('./clearDir')

const distPath = resolveFile('dist')
// 删除文件夹下的文件
if (fs.existsSync(distPath)) {
  emptyDir(distPath)
}

const PORT = 3001;

// 输出文件类型
const devSite = `http://127.0.0.1:${PORT}`
const devPath = path.join('example', 'index.html')
const devUrl = `${devSite}/${devPath}`;

setTimeout(()=>{
    console.log(`[dev]: ${devUrl}`)
}, 1000);


// nodejs 模块引用 / json文件引用
configList.map((config, index) => {
  config.output.sourcemap = true;

  if( index === 0 ) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: PORT,
          contentBase: [resolveFile('')]
        })
      ]
    ]
  }

  return config;
})
module.exports = configList;


// nodejs api 模式热编译
// configList.map((config, index) => {
//     config.output.sourcemap = true;
//     return config;
// }) 
// module.exports = configList;


// 文件类型 - IIFE/umd
// configList.map((config, index) => {
//     config.output.sourcemap = true;
  
//     if( index === 0 ) {
//         config.plugins = [
//             ...config.plugins,
//             ...[
//                 serve({
//                     port: PORT,
//                     contentBase: [resolveFile('')]
//                 })
//             ]
//         ]
//     }
  
//     return config;
// })
// module.exports = configList;


// 文件类型 - cjs
// configList.map((config, index) => {
//     config.output.sourcemap = true;
  
//     return config;
// })
// module.exports = configList;
  

// 文件类型 - amd
// configList.map((config, index) => {
//     config.output.sourcemap = true;
  
//     if( index === 0 ) {
//         config.plugins = [
//             ...config.plugins,
//             ...[
//                 serve({
//                     port: PORT,
//                     contentBase: [resolveFile('')]
//                 })
//             ]
//         ]
//     }
  
//     return config;
// })
// module.exports = configList;
  



// 多文件输出
// configList.map((config, index) => {
//     config.output.sourcemap = true

//     if (index === 0) {
//         config.plugin =[
//             ...config.plugin,
//             ...[
//                 serve({
//                     port: PORT,
//                     contentBase: [
//                         resolveFile('example'),
//                         resolveFile('dist')
//                     ]
//                 })
//             ]
//         ]
//     }

//     return config
// })
// module.exports = configList


// 单文件
// config.output.sourcemap = true;
// config.plugins = [
//     ...config.plugins,
//     ...[
//         serve({
//             port: PORT,
//             contentBase: [
//                 resolveFile('example'),
//                 resolveFile('dist')
//             ]
//         })
//     ]
// ]
// module.exports = config;