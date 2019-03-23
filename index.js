// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

const express = require('express')
const ProjectsRouter = require('./data/routers/projectsRouter.js')
const ActionsRouter = require('./data/routers/actionsRouter.js')
const server = express()
server.use(express.json())
// server.use('/api/posts', ProjectRouter)
// server.use('/api/users', ActionRouter)
const PORT = 5000

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the API</h2>`)
  })
  
  server.listen(PORT, _ =>
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
  )