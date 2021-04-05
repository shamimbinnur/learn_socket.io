const express = require('express');
const app = express();
const socket = require('socket.io');

//PORT
const PORT = 5000;

// Static files
app.use(express.static('public'))


const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

//socket setup
const io = socket(server);

// listening client connection
io.on('connection', (socket)=>{
    console.log("Made socket connection", socket.id);

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)

    })

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    })
})

