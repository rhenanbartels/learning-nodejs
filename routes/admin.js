const express = require('express');

const router = express.Router();

router.get('/add-product', (request, response, next) => {
    response.send(
        "<form action='/product' method='POST'>"
        +"<input type='text' name='title'><input type='submit' value='Add'></form>"
    );
});

//this middleware will only respond to post method
router.post('/product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
})

module.exports = router;
