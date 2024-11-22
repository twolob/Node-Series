// Importing dependencies

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send(`<h1>This is the home page.</h1>`)
})

app.listen(port, ()=>{
    console.log('Server is listening on port: ', port)
})