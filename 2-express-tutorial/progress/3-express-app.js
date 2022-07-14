const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
// A static asset is a file that the server doesn't need to change
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     SSR (server side rendering)
// })

app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})