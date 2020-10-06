const path = require('path');
const express = require("express");


const router = express.Router();

router.get('/', (request, response, next) => {
    // Return the response and stops the middleware stack
    response.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
})

module.exports = router;
