const express = require('express');
const path = require('path');

const rootDir = require('../utils/path.js');

const router = express.Router();

router.get('/add-product', (request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//this middleware will only respond to post method
router.post('/add-product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
})

module.exports = router;
