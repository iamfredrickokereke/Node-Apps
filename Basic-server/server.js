// require the http module required for server
const http = require('http');


// call the create server method
const server = http.createServer();

//listen on a port and send a message to console
server.listen(1234, () => { console.log(`Server is listening on port ${1234}`);
})