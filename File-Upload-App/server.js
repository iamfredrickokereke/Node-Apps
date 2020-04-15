const http = require('http');

//getting the url params

const url = require('url');

const services = require('./services')

// create server
const server = http.createServer();

// create port
const port = 8000;

// when server is on request
server.on('request', (request, response) => {
    // console.log(" this is an incoming request...");
    // console.log(`The request method is: "${request.method}", and the url is "${request.url}"`);

    // checking the request.url method  using the url module
    console.log("hey");
    
    const parsedUrl = url.parse(request.url, true); // for query string

    //console.log(parsedUrl.pathname);

    if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        console.log(id);
        const metadata = services.fetchImageMetadata(id);
        console.log(metadata);
        
        
    }

    

    
    
})

//assign and listen to port

server.listen(port);