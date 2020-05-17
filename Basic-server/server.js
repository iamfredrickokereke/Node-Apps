// require the http module required for server
const http = require('http');


// call the create server method and set headers via response call back
const server = http.createServer( (request, response) => {

    response.setHeader('Content-Type', 'application/json'); //object-type
    response.setHeader('Access-Control-Allow-Origin', '*'); //cors
    response.writeHead(200); //status code - OK

    let dataObject = {"id": 1234, "name":"kelly", "sex":"male"};

    let data = JSON.stringify(dataObject);


    response.end(data);
});

//listen on a port and send a message to console
server.listen(1234, () => { console.log(`Server is listening on port ${1234}`);
})