const fs = require('fs');


const requestHandler = (request, response) => {
    const method = request.method;
    const url = request.url;
    if(method === "GET" && url === "/"){
        response.write("<html>");
        response.write("<body>");
        response.write(
            "<form method='POST' action='/message'>"
            + "<input type='text' name='message'>"
            + "<button type='submit'>Send</button></form>"
    );
        return response.end();

    } else if(method === "POST" && url === "/message"){
        const body = [];
        request.on("data", chunk => {
            body.push(chunk);
        });
        request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, err =>{
                response.statusCode = 302;
                response.setHeader("Location", "/");

                return response.end();
            })
        })
    }
}

exports.handler = requestHandler;
