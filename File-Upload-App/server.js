const http = require('http');

const server = http.createServer();

const port = 8000;

// when server is on request
server.on('request', (request, response) => {
    console.log(" this is an incoming request...");

    console.log(`The request method is: "${request.method}", and the url is "${request.url}"`);
    
    
})


server.listen(port);