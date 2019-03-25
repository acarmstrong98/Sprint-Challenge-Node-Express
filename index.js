// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

const express = require('express')
const ProjectRouter = require('./data/routers/project-router.js')
const ActionRouter = require('./data/routers/actions-router.js')

const server = express()

server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/actions', ActionRouter)

const PORT = 5000

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the API</h2>`)
  })
  
  server.listen(PORT, _ =>
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
  )