const http = require('http').createServer();

const socketio = require('socket.io')(http,{
    cors: {origin : "*"}
});

socketio.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('message', (message) => {
        socket.emit('message', `${socket.id.substr(0,2)} a écrit : ${message}`);
    })

})

http.listen(8080, ()=>{
    console.log('listening on 8080');
});