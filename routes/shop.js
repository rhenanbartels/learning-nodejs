const express = require("express");


const router = express.Router();

router.get('/', (request, response, next) => {
    // Return the response and stops the middleware stack
    response.send("<h1>Hello from express</h1>");
})

module.exports = router;
