// 清空文件夹
const fs = require('fs');

/**
 * 删除文件夹下所有文件夹以及文件下的所有文件
 * 
 * @param path
 */
function emptyDir(path) {
    // fs.readdirSync - 方法将返回一个包含“指定目录下所有文件名称”的数组对象。
    const files = fs.readdirSync(path)

    files.forEach((file) => {
        const filePath = `${path}/${file}`
        // 返回文件路径的信息
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
            emptyDir(filePath)
        }
        else {
            // fs.unlinkSync()方法用于从文件系统中同步刪除文件或符号链接
            fs.unlinkSync(filePath)
        }
    })
}

/**
 * 删除指定路径下的所有空文件夹
 * 
 * @param path
 */
// function rmEmptyDir(path, level = 0) {
//     const files = fs.readdirSync(path)

//     if (files.length > 0) {
//         let tempFile = 0

//         files.forEach(file => {
//             tempFile++
//             rmEmptyDir(`${path}/${file}`, 1)
//         })

//         if (tempFile === file && level !== 0) {
//             fs.rmDirSync(path)
//         }
//     }
//     else {
//         level !== 0 && fs.rmDirSync(path)
//     }
// }

module.exports = emptyDir

