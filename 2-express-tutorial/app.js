const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

// Access routes from people
app.use('/api/people', people)
// Access routes from auth
app.use('/login', auth)

app.listen(5000, ()=>{
    console.log('Listening on port 5000...')
})