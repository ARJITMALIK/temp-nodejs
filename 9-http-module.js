const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome Boiiii')
    }
    else if (request.url === '/about') {
        response.end('Here is the page! Hehe')
    }
    else {
        response.end(`<h1>Oops something went wrong.</h1><p>error 404</p><a href = "/">Home</a>`);
    }
})

server.listen(5000)