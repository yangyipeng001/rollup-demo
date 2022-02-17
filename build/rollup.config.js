const path = require('path')
const buble = require('@rollup/plugin-buble')
const { babel } = require('@rollup/plugin-babel');
const server = require('rollup-plugin-serve');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const sass = require('node-sass');
const less = require('less');


const commonjs = require('@rollup/plugin-commonjs');

// 解析json文件
const json = require('@rollup/plugin-json');


const resolveFile = require('./resolveFile')

// babel 配置
const babelOptions = {
    'presets': ['@babel/preset-env'],
}

const plugins = [
    babel(babelOptions),
]


// css 编译
const isProductionEnv = process.env.NODE_ENV === 'production'
// less 编译
const processLess = function(context, payload) {
    return new Promise(( resolve, reject ) => {
        less.render({
            file: context
        }, function(err, result) {
            if( !err ) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    
        // less.render(context, {})
        // .then(
        //     function(output) {
        //         // output.css = string of css
        //         // output.map = string of sourcemap
        //         // output.imports = array of string filenames of the imports referenced
        //         if( output && output.css ) {
        //             resolve(output.css);
        //         } else {
        //             reject({})
        //         }
        //     },
        //     function(err) {
        //         reject(err)
        //     }
        // );
    })
}

// sass 编译
const processSass = function(context, payload) {
    return new Promise(( resolve, reject ) => {
        sass.render({
            file: context
        }, function(err, result) {
            if ( !err ) {
                resolve(result);
            } 
            else {
                reject(err)
            }
        });
    })
}
  
module.exports = [
    {
        input: resolveFile('src/index.js'),
        output: {
            file: resolveFile('dist/index.js'),
            format: 'umd',
        }, 
        plugins: [
            postcss({
                extract: true,
                minimize: isProductionEnv,
                // scss
                // extensions:['css', 'scss'],
                // process: processSass,

                // less
                process: processLess,
            }),
            ...plugins
        ],
    },
]


// json文件引用
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'umd',
//         }, 
//         plugins: [
//             json(),
//             ...plugins
//         ],
//     },
// ]


// nodejs 模块引用
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'umd',
//         }, 
//         plugins: [
//             nodeResolve(),
//             commonjs(),
//             ...plugins
//         ],
//     },
// ]


// nodejs api 模式热编译
// module.exports = [
//     {
//         input: resolveFile('src/index.js'),
//         output: {
//             file: resolveFile('dist/index.js'),
//             format: 'umd',
//             name: 'Demo',
//         }, 
//         external: ['lib/hello', 'lib/world'],
//         plugins,
//     },
  
//     {
//         input: resolveFile('src/lib/hello.js'),
//         output: {
//             file: resolveFile('dist/lib/hello.js'),
//             format: 'umd',
//             name: 'Hello',
//         }, 
//         plugins,
//     },
  
//     {
//         input: resolveFile('src/lib/world.js'),
//         output: {
//             file: resolveFile('dist/lib/world.js'),
//             format: 'umd',
//             name: 'World',
//         }, 
//         plugins,
//     },
// ]



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