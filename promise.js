// Promises

// const myPromise = new Promise((resolve, reject)=>{
//     const success = true

//     if(success){
//         resolve('Operation successful!')
//     }else{
//         reject('Opps! Operation is not successful!')
//     }
// })

// myPromise
// .then((data) =>{
//     console.log('Result: ', data)
// }).catch((err)=>{
//     console.log('Error: ', err)
// })

const fs = require('fs').promises

fs.readFile('firstFile.txt', 'utf8')
.then((result)=>{
    console.log('Result: ', result)
}).catch((err)=>{
    console.log('Error: ', err)
})