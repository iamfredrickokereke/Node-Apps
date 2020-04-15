const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    console.log("incoming request...");
    
})


server.listen(8000);