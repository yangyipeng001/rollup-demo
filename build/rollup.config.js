const path = require('path')
const buble = require('@rollup/plugin-buble')
const { babel } = require('@rollup/plugin-babel');
const server = require('rollup-plugin-serve');
const resolveFile = require('./resolveFile')

// babel 配置
const babelOptions = {
    'presets': ['@babel/preset-env'],
}

const plugins = [
    babel(babelOptions),
]


// nodejs api 模式热编译
module.exports = [
    {
        input: resolveFile('src/index.js'),
        output: {
            file: resolveFile('dist/index.js'),
            format: 'umd',
            name: 'Demo',
        }, 
        external: ['lib/hello', 'lib/world'],
        plugins,
    },
  
    {
        input: resolveFile('src/lib/hello.js'),
        output: {
            file: resolveFile('dist/lib/hello.js'),
            format: 'umd',
            name: 'Hello',
        }, 
        plugins,
    },
  
    {
        input: resolveFile('src/lib/world.js'),
        output: {
            file: resolveFile('dist/lib/world.js'),
            format: 'umd',
            name: 'World',
        }, 
        plugins,
    },
]



// 文件类型 - umd
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.umd.js'),
//             format: 'umd', 
//             name: 'Demo',
//             amd: {
//                 id: 'lib/demo'
//             },
//         }, 
//         plugins
//     },
// ]


// 文件类型 - IIFE
// module.exports = [ 
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'iife',
//             name: 'Demo',
//             amd: {
//                 id: 'lib/demo'
//             },
//         }, 
//         plugins
//     },
// ]


// 文件类型 - cjs
// module.exports = [
//     {
//       input: resolveFile('src/index.js'),
//       output: {
//         file: resolveFile('dist/index.js'),
//         format: 'cjs',
//       }, 
  
//       plugins
//     },
// ]
  
  
// 文件类型 - amd
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'amd'
//         },
//         // 两者任一 Function 需要一个 id 并返回 true（外部引用）或 false（不是外部的引用）， 或者 Array 应该保留在bundle的外部引用的模块ID。
//         external: [
//             'lib/hello',
//             'lib/world'
//         ], 
//         plugins,
//     },
//     {
//         input: resolveFile('src/lib/hello.js'),
//         output: {
//             file: resolveFile('dist/lib/hello.js'),
//             format: 'amd',
//             amd: {
//                 id: 'lib/hello'
//             }
//         },
//         plugins,
//     },
//     {
//         input: resolveFile('src/lib/world.js'),
//         output: {
//             file: resolveFile('dist/lib/world.js'),
//             format: 'amd',
//             amd: {
//                 id: 'lib/world'
//             },
//         }, 
//         plugins,
//     },
// ]


// 多文件输出
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'umd'
//         },
//         plugin: [
//             babel(babelOptions)
//         ]
//     },
//     {
//         input: resolveFile('src/lib/index.js'),
//         output: {
//             file: resolveFile('dist/lib.js'),
//             format: 'cjs'
//         },
//         plugin: [
//             babel(babelOptions)
//         ]
//     }
// ]

// 单文件输出
// module.exports = {
//     input: resolveFile('src/index.js'),

//     output: {
//         file: resolveFile('dist/index.js'),
//         format: 'umd',
//         // sourcemap: true,
//     },

//     plugins: [
//         // buble(),
//         babel({
//             presets: ['@babel/preset-env']
//         }),

//         // server({
//         //     port: 3001,
//         //     contentBase: [
//         //         resolveFile('example'),
//         //         resolveFile('dist')
//         //     ]
//         // })
//     ],
// }