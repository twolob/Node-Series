const fs = require('fs')

const writeContent = 'This is our writing file. Done!'

fs.writeFile('write.txt', writeContent, {flag: 'a'}, (err)=>{
    if(err){
        console.log('Error while writing to the file.')
        return
    }
    console.log('Successfully!')
})