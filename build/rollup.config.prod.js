const fs = require('fs');
const { uglify } = require('rollup-plugin-uglify');
// const config = require('./rollup.config');
const configList = require('./rollup.config');
const emptyDir = require('./clearDir')
const resolveFile = require('./resolveFile')

const distPath = resolveFile('dist')
// 删除文件夹下的文件
if (fs.existsSync(distPath)) {
  emptyDir(distPath)
}

// 文件类型 - cjs/IIFT/umd, nodejs api 模式热编译
configList.map((config, index) => {
  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ]

  return config;
})

module.exports = configList;


// 文件类型 - amd
// configList.map((config, index) => {
//   config.output.sourcemap = false;
//   config.plugins = [
//     ...config.plugins,
//     ...[
//       uglify()
//     ]
//   ]

//   return config;
// })

// module.exports = configList;


// 多文件
// configList.map((config, index) => {
//   config.output.sourcemap = false;
//   config.plugin = [
//     ...config.plugin,
//     ...[
//       uglify()
//     ]
//   ]

//   return config
// })

// module.exports = configList


// 单文件
// config.output.sourcemap = false;
// config.plugins = [
//   ...config.plugins,
//   ...[
//     uglify()
//   ]
// ]

// module.exports = config;