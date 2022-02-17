const path = require('path');

// chokidar 是封装 Node.js 监控文件系统文件变化功能的库
const chokidar = require('chokidar');

const Koa = require('koa');

// koa-static 就是koa（node框架）中最常用的、较为成熟的 静态web托管服务中间件 ，在koa中常用于比如外链静态资源（如CSS文件）
const KoaStatic = require('koa-static');
const compileTask = require('./compile_task');
const configList = require('./rollup.config.dev');

const app = new Koa();
const projectPath = path.join(__dirname, '..');
const srcPath = path.join(projectPath, 'src')

function watchSrc () {
    chokidar.watch(srcPath, {
        ignored: /(^|[\/\\])\../
    }).on('all', (event, path) => {
        if ( event === 'change' ) {
            compileTask(configList);
        }
    });
}

app.use(KoaStatic(projectPath))
app.listen(3001, function(){
    console.log('[example] http://127.0.0.1:3001/example/index.html');
    console.log('[example] http://127.0.0.1:3001/example/hello.html');
    console.log('[example] http://127.0.0.1:3001/example/world.html');
    compileTask(configList);
    watchSrc()
})