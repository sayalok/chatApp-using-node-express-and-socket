var express = require('express');
var socket  = require('socket.io');

// App setup
var app = express();

var server = app.listen(8080, () => {
    console.log('App started')
})

// Static file
app.use(express.static('public'))

// Socket SetUp
var io = socket(server);

io.on('connection', socket => {
    console.log('made the connection')

    socket.on('chat',data => {
        io.sockets.emit('chat',data)
    });

    socket.on('typing',data => {
        socket.broadcast.emit('typing',data);
    });
})