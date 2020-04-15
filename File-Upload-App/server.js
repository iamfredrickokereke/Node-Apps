const http = require('http');

//getting the url params

const url = require('url');

// create server
const server = http.createServer();

// create port
const port = 8000;

// when server is on request
server.on('request', (request, response) => {
    console.log(" this is an incoming request...");

    console.log(`The request method is: "${request.method}", and the url is "${request.url}"`);
    
    
})

//assign and listen to port

server.listen(port);