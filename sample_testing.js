// Printing statement

console.log('Hi there')

// os

const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log('--------------------------')

// path

const path = require('path')

console.log(__dirname)
console.log(__filename)
console.log('-----------')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log('------------------------')





