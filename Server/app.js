const express = require('express')
const app = express()
const ejs = require ('ejs')
const port = 3000

app.set('view-engine', 'ejs')

const htmlDir = __dirname + `\\html\\`
const styleDir = __dirname + `\\style\\`

// All the HTML files here
app.get('/', (req, res) => {
  res.sendFile(htmlDir + 'index.html')
})

// Some style for the site aka bootstrap
app.get('/bootstrap', (req, res) => {
  res.sendFile(styleDir + 'bootstrap.min.css')
})

app.get('/css', (req, res) => {
  res.sendFile(styleDir + 'main.css')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))