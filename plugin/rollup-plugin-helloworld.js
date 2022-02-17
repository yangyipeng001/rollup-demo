const extname = require("path").extname;
const { createFilter } = require('@rollup/pluginutils');
const MagicString = require('magic-string');

const newStr = 'I am rollup.js!';

module.exports = function helloworld (options = {}) {
    const filter = createFilter(options.include, options.exclude);
    const sourcemap = options.sourcemap === true;

    return {
        name: 'helloworld',
        transform (code, id) {
            // code -> 文件内容
            // id -> 文件路径
            if (!filter(id) || extname(id) !== ".js") return;

            let codeStr = `${code}`;
            const magic = new MagicString(codeStr);

            if (sourcemap === true) {
                codeStr = codeStr.replace(/hello\sworld/ig, function(match, offset) {
                    const start = offset;
                    const end = offset + match.length;
                    magic.overwrite(start, end, newStr);
                    
                    return newStr;
                });

            }

            const resultCode = magic.toString();

            let resultMap = false;
            if (sourcemap === true) {
                resultMap = magic.generateMap({
                    hires: true,
                });
            }

            return {
                code: resultCode,
                map: resultMap,
            };
        }
    };
}