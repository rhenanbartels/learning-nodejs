const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const rootDir = require('./utils/path.js');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require("./routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 page not found middleware
app.use((request, response, next) => {
    response.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const server = http.createServer(app);

server.listen(3000);
