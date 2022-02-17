// 编译nodejs

const fs = require('fs')
const rollup = require('rollup');
const config = require('./rollup.config');
const emptyDir = require('./clearDir')
const resolveFile = require('./resolveFile')

// const inputOptions = config;
// const outputOptions = config.output;

// async function build() {
//     const distPath = resolveFile('dist')
//     // 删除文件夹下的文件
//     if (fs.existsSync(distPath)) {
//         emptyDir(distPath)
//     }

//     // create a bundle
//     const bundle = await rollup.rollup(inputOptions);

//     console.log(`[INFO] 开始编译 ${inputOptions.input}`);  

//     // generate code and a sourcemap
//     const { code, map } = await bundle.generate(outputOptions);

//     console.log(`[SUCCESS] 编译结束 ${outputOptions.file}`);  

//     // or write the bundle to disk
//     await bundle.write(outputOptions);
// }
// build();


const compileTask = require('./compile_task');
const configList = require('./rollup.config.prod');

const distPath = resolveFile('dist')
// 删除文件夹下的文件
if (fs.existsSync(distPath)) {
    emptyDir(distPath)
}

compileTask(configList)
