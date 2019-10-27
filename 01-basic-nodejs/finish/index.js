const http = require('http')

/**
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
const requestHandler = (request, response) => {
  switch (request.url) {
    case '/':
      return response.end('Ini homepage')
    case '/profile':
      return response.end('Ini Halaman Profile!!')
    case '/about':
      return response.end('Ini Halaman About')
    default:
      return response.end('404 Page Not Found')
  }
}

const server = http.createServer(requestHandler)

server.listen(1234)
