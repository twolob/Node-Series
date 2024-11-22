const path = require('path')


// Combine parts of a path
// const fullPath = path.join(__dirname, 'folder', 'write.txt')

// console.log('Joined Path: ', fullPath)


const filePath = '/users/docs/file.txt'

const fileName = path.basename(filePath)
// Output:file.txt

const fileExt = path.extname(fileName)
// Output: txt

console.log('File name: ',fileName)
console.log('File Extension: ', fileExt)

