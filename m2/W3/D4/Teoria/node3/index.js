const express = require('express')
const path = require('path')

const app = express() 

app.get('/',(req, res) => {
    res.send(__dirame + '/index.html')
})

app.get('/contatti',(req, res) => {
    res.send('contatti')
})

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000')
})