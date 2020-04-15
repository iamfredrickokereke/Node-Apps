const http = require('http');

const server = http.createServer();

const port = 8080;

// when server is on request
server.on('request', (request, response) => {
    console.log(" this is an incoming request...");
    
})


server.listen(port);