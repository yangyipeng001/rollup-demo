# rollup
https://chenshenhai.github.io/rollupjs-note/note/chapter00/01.html

## rollup.rollup()主要分为以下几步：
- 配置收集、标准化
- 文件分析
- 源码编译，生成ast
- 模块生成
- 依赖解析
- 过滤净化
- 产出chunks

## 目录
```bash
├── build # 编译脚本目录
│   ├── build.js # 执行编译的Node.js脚本
│   ├── rollup.config.dev.js # 开发模式配置
│   ├── rollup.config.js # 基本 rollup.js编译配置
│   └── rollup.config.prod.js # 生产模式配置
├── dist
│   ├── index.js
│   └── index.js.map
├── example
│   └── index.html
├── package.json
└── src
    ├── index.js
    └── lib
        └── demo.js
```

## 脚本命令
```js
"scripts": {
    "dev": "node_modules/.bin/rollup -w -c ./build/rollup.config.dev.js",
    "build": "node_modules/.bin/rollup -c ./build/rollup.config.prod.js",
    "build:node": "node ./build/build.js",
    "example": "node ./example/index"
},

"scripts": {
    "dev": "node ./build/dev.js",
    "build": "node ./build/build.js"
}
```

## 安装对应编译的npm模块
```bash
npm i --save-dev rollup 
npm i --save-dev @rollup/plugin-buble
```
- rollup 模块是rollup编译的核心模块
- @rollup/plugin-buble 模块是rollup的ES6编译插件
功能和babel类似，是简化版的babel
由于是简化版，编译速度比babel快一些
对于其他复杂的ES6+的语法使用，后续再讲讲其他扩展插件



## 模式
### 开发模式
- 1.本地开发的HTTP服务
- 2.生成开发调试的sourceMap文件
- 3.不能混淆，保证编译后代码的可读性

#### 实现例子
- 编译ES6+代码
- 编译成umd格式(通用模块定义)
- 编译生成 sourceMap 文件
- 启动HTTP服务

#### 实现
```bash
## 安装 rollup.js 基础模块
npm i --save-dev rollup 

## 安装 rollup.js 编译ES6+的 babel 模块
npm i --save-dev@rollup/plugin-babel @babel/core @babel/preset-env 

## 安装 rollup.js 编译本地开发服务插件
npm i --save-dev rollup-plugin-serve
```



### 生产模式


## 文件类型编译
一般项目中的js文件都有IIFE, AMD, CommonJS，UMD，四种模块化格式，具体的解释如下
- IIFE Imdiately Invoked Function Expression 立即执行函数
- AMD Asynchronous Module Definition 异步模块规范
- CommonJS CommonJS规范，是Node.js的官方模块化规范
- UMD， Universal Module Definition 通用模块规范
    - UMD，是通用定义模块 (Universal Module Definition)，是JavaScript前后端跨平台的模块化方案。
        - 如果是有全局 define 方法，就封装成 AMD 模块
        - 如果是有全局 exports 方法，就封装成 CommonJS 模块
        - 如果都不是以上模块环境，就封装成 IIFE 模块

