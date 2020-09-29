const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require("./routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000);
