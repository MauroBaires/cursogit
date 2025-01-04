const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bienvenidos a nuestro primer Servidor con Express')
})

app.get('/navidad', function (req, res) {
  res.send('Feliz Navidad')
})

app.get('/otranavidad', function (req, res) {
  res.send('Feliz navidad y prospero año nuevo')
})

app.listen(3000)