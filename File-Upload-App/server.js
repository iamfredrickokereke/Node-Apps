const http = require('http');

const server = http.createServer();

const port = 8000;

// when server is on request
server.on('request', (request, response) => {
    console.log(" this is an incoming request...");

    console.table(request.method, request.url);
    
    
})


server.listen(port);