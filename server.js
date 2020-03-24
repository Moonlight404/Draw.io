const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
var porta = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
})

let users = []

io.on('connection', socket => {
    console.log(`Socket conectado ${socket.id}`);
})

server.listen(porta);