const express = require('express')
const app = express()
const ejs = require ('ejs')
const port = 3000

const clientDir = __dirname + `\\client\\`
const htmlDir = __dirname + `\\HTML\\`
const styleDir = __dirname + `\\SCSS\\`
app.use(express.static(styleDir))
app.use(express.static(clientDir))

app.set('view-engine', 'ejs')

// All the HTML files here
app.get('/', (req, res) => {
  res.sendFile(htmlDir + 'index.html')
})

// All the Style files here
app.get('/bs', (req, res) => {
  res.sendFile('../bootstrap/bootstrap.min.css')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))