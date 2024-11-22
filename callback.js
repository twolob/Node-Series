// Callback -> are functions passed as arguments to other function. 
// It is executed after the completion of asynchronous tasks.


// let answer

// console.log('The first line')
// function sum(callback, num1, num2){
//     setTimeout(()=>{
//         answer = num1 + num2
//         callback(answer)
//     }, 4000)
// }

// function result(answer){
//     console.log('Answer: ', answer)
// }

// sum(result, 3, 5)
// console.log('The last line')

const fs = require('fs')

fs.readFile('firstFile.txt', 'utf8', (err, data1)=>{
    if(err){
        return console.log('Error: ', err)
    }
    fs.readFile('secondFile.txt', 'utf8', (err, data2)=>{
        if(err){
            return console.log('Error: ', err)
        }

        fs.writeFile('newFile.txt', data1 + data2, (err)=>{
            if(err){
                return console.log('Error: ', err)
            }
            console.log('Successfully!')
        })
    })
})