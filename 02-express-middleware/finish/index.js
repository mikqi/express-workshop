const express = require('express')
const http = require('http')
const app = express()

// Logging Middleware
app.use((request, response, next) => {
  console.log(`incoming ${request.method} to ${request.url}`)
  next()
})

app.use((request, response, next) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('hello world')
})

http.createServer(app).listen(1234, () => console.log('app listen on port 1234'))
