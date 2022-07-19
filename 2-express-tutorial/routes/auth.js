const express = require('express')
const router = express.Router()

// The path matches the action in the form tag in the index.html file within methods-public folder ('/login')
router.post('/', (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provide credentials')
})

module.exports = router