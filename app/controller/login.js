const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.json({
        "token": ""
    })
})
router.get('/test', (req, res) => {
    res.end('test')
})

module.exports = router
