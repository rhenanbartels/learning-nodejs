const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require("./routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 page not found middleware
app.use((request, response, next) => {
    response.status(404).send("<h1>Page not found</h1>");
})

const server = http.createServer(app);

server.listen(3000);
