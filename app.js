const http = require('http');


const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("Hello there!")
    response.end();
});

server.listen(3000);
