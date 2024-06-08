const path = require('path')

console.log(path.sep)

const absolute = path.resolve(__dirname, 'contentclea', 'subfolder', 'text.txt')
console.log(absolute)