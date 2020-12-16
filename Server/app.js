const express = require('express')
const app = express()
const ejs = require ('ejs')
const port = 3000

app.set('view-engine', 'ejs')

const htmlDir = __dirname + `\\html\\`
const styleDir = __dirname + `\\style\\`
const clientDir = __dirname + `\\client\\`

// All the HTML files here
app.get('/', (req, res) => {
  res.sendFile(htmlDir + 'index.html')
})

app.get('/Utbildning', (req, res) => {
  res.sendFile(htmlDir + 'utbildning.html')
})
app.get('/Kontakt', (req, res) => {
  res.sendFile(htmlDir + 'kontakt.html')
})

app.get('/Support', (req, res) => {
  res.sendFile(htmlDir + 'support.html')
})

// Some style for the site aka bootstrap
app.get('/bootstrap', (req, res) => {
  res.sendFile(styleDir + 'bootstrap.min.css')
})

app.get('/css', (req, res) => {
  res.sendFile(styleDir + 'main.css')
})

// All the pictures
app.use(express.static(clientDir))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))