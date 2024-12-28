const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bienvanidos a nuestro primer servidor con Express')
})

app.get('/navidad', function (req, res) {
    res.send('Feliz navidad')
  })

app.listen(3000)