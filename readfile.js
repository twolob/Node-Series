const fs = require('fs')

fs.readFile('write.txt', 'utf8', (err, result)=>{
    if(err){
        console.log('Error while reading the file.')
        return
    }
    console.log('Result: ', result)
})