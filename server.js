global.__base = __dirname+"/views/"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__base+'index.html'))

app.listen(port, () => console.log(`App listening on port ${port}!`))