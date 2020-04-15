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
    console.log(request.headers);
    
    const parsedUrl = url.parse(request.url, true); // for query string

    //console.log(parsedUrl.pathname);

    if (request.method === 'GET' && parsedUrl.pathname === '/metadata') {
        const { id } = parsedUrl.query;
        console.log(id);
        const metadata = services.fetchImageMetadata(id);
        console.log(metadata);        
    }else{

        // when sending a response to a user we must have 3 things
        response.statusCode = 404;
        response.setHeader('X-Powered-By', 'Fred');
        response.end("bye")  //close connection
    }

    // const body = [];
    // request.on('data', (chunk) => {
    //     body.push(chunk);
    // }).on('end', () => {
    //     const parsedJSON = JSON.parse(Buffer.concat(body));
    //     console.log(parsedJSON);
        
    // })

})

//assign and listen to port

server.listen(port);