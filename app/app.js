const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
    res.end('Hello World')
})

module.exports = app