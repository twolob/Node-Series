// Async/Await

const fs = require('fs').promises

async function readFileContent(){
    try{
        const data = await fs.readFile('secondFile.txt', 'utf8')
        console.log('Result: ', data)
    }catch(e){
        console.log('Error: ', e)
    }
}

readFileContent()