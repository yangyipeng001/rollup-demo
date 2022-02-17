const path = require('path')

// 解析路径
const resolveFile = function(filePath) {
    return path.join(__dirname, '..', filePath)
}

module.exports = resolveFile